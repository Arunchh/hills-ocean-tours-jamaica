"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AlertCircle, Calendar, CheckCircle, Loader2, MessageCircle, Shield } from "lucide-react";
import { useI18n } from "@/i18n/LocaleProvider";
import { formatUi } from "@/i18n/index";
import type { BookingDateStatus } from "@/lib/booking-types";
import {
  BookingDatePicker,
  TimeSlotPicker,
  formatBookingMonthRange,
} from "@/components/booking/BookingCalendar";
import {
  BookingSelectionSummary,
  BookingStepIndicator,
} from "@/components/booking/BookingProgress";
import { formatDisplayDate, formatDisplayTime } from "@/lib/booking-api";
import { formatWhatsAppLink } from "@/lib/utils";

type Props = {
  tourSlug: string;
  tourName: string;
  fallbackWhatsAppMessage: string;
};

export function BookingPanel({ tourSlug, tourName, fallbackWhatsAppMessage }: Props) {
  const { siteConfig, ui, locale } = useI18n();
  const b = ui.booking;
  const detailsRef = useRef<HTMLDivElement>(null);

  const now = new Date();
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth() + 1);

  const [enabled, setEnabled] = useState<boolean | null>(null);
  const [dateStatuses, setDateStatuses] = useState<Record<string, BookingDateStatus>>({});
  const [datesLoading, setDatesLoading] = useState(true);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [slots, setSlots] = useState<string[]>([]);
  const [displayDuration, setDisplayDuration] = useState<string | undefined>();
  const [slotsLoading, setSlotsLoading] = useState(false);

  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [resort, setResort] = useState("");
  const [guests, setGuests] = useState("2");
  const [notes, setNotes] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [savedBookingId, setSavedBookingId] = useState<string | null>(null);

  const currentStep = !selectedDate ? "date" : !selectedTime ? "time" : "details";

  const inputClass =
    "w-full min-h-12 touch-manipulation rounded-lg border-2 border-jamaica-green/15 px-4 py-3 text-base outline-none transition-colors focus:border-jamaica-green focus:ring-2 focus:ring-jamaica-green/20 sm:text-sm";

  const loadTourConfig = useCallback(async () => {
    try {
      const res = await fetch(`/api/booking/availability?action=tour&tour=${encodeURIComponent(tourSlug)}`);
      const data = await res.json();
      setEnabled(Boolean(data.ok && data.enabled));
    } catch {
      setEnabled(false);
    }
  }, [tourSlug]);

  const loadMonthDates = useCallback(async () => {
    setDatesLoading(true);
    const { from, to } = formatBookingMonthRange(viewYear, viewMonth);
    try {
      const res = await fetch(
        `/api/booking/availability?action=dates&tour=${encodeURIComponent(tourSlug)}&from=${from}&to=${to}`
      );
      const data = await res.json();
      if (data.ok && data.enabled) {
        setDateStatuses(data.dates ?? {});
      } else {
        setDateStatuses({});
      }
    } catch {
      setDateStatuses({});
    } finally {
      setDatesLoading(false);
    }
  }, [tourSlug, viewYear, viewMonth]);

  const loadSlots = useCallback(async (date: string) => {
    setSlotsLoading(true);
    setSelectedTime(null);
    try {
      const res = await fetch(
        `/api/booking/availability?tour=${encodeURIComponent(tourSlug)}&date=${date}`
      );
      const data = await res.json();
      if (data.ok) {
        setSlots(data.slots ?? []);
        setDisplayDuration(data.displayDuration);
      } else {
        setSlots([]);
      }
    } catch {
      setSlots([]);
    } finally {
      setSlotsLoading(false);
    }
  }, [tourSlug]);

  useEffect(() => {
    loadTourConfig();
  }, [loadTourConfig]);

  useEffect(() => {
    if (enabled) loadMonthDates();
  }, [enabled, loadMonthDates]);

  useEffect(() => {
    if (selectedDate && enabled) loadSlots(selectedDate);
  }, [selectedDate, enabled, loadSlots]);

  useEffect(() => {
    if (selectedTime && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [selectedTime]);

  const handleMonthChange = (year: number, month: number) => {
    setViewYear(year);
    setViewMonth(month);
    setSelectedDate(null);
    setSelectedTime(null);
    setSlots([]);
    setSubmitSuccess(false);
    setSavedBookingId(null);
  };

  const handleSelectDate = (iso: string) => {
    setSelectedDate(iso);
    setSubmitSuccess(false);
    setSubmitError("");
    setSavedBookingId(null);
  };

  const buildWhatsAppMessage = (bookingId?: string) =>
    formatUi(b.whatsappTemplate, {
      business: siteConfig.business.name,
      tour: tourName,
      date: selectedDate ? formatDisplayDate(selectedDate, locale) : "",
      time: selectedTime ? formatDisplayTime(selectedTime) : "",
      duration: displayDuration ?? "",
      resort: resort || "—",
      guests: guests || "—",
      name: name || "—",
      phone: phone || "—",
      reference: bookingId ?? savedBookingId ?? "—",
    });

  const openWhatsApp = (bookingId?: string) => {
    window.open(
      formatWhatsAppLink(siteConfig.business.whatsapp, buildWhatsAppMessage(bookingId)),
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    setSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const res = await fetch("/api/booking/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tourSlug,
          tourName,
          date: selectedDate,
          startTime: selectedTime,
          name,
          phone,
          email,
          resort,
          guests,
          notes,
        }),
      });
      const data = await res.json();

      if (!data.ok) {
        setSubmitError(data.error || b.error);
        return;
      }

      setSubmitSuccess(true);
      setSavedBookingId(data.bookingId ?? null);
      openWhatsApp(data.bookingId);
      loadMonthDates();
      if (selectedDate) loadSlots(selectedDate);
    } catch {
      setSubmitError(b.error);
    } finally {
      setSubmitting(false);
    }
  };

  if (enabled === null) {
    return (
      <div
        className="flex items-center justify-center gap-2 rounded-2xl border-2 border-jamaica-green/15 bg-jamaica-cream py-12 text-sm text-jamaica-black-soft/70"
        role="status"
      >
        <Loader2 className="h-5 w-5 animate-spin text-jamaica-green" />
        {b.loading}
      </div>
    );
  }

  if (!enabled) {
    return (
      <div className="rounded-2xl border-2 border-jamaica-green/15 bg-jamaica-cream p-6 text-center sm:p-8">
        <Calendar className="mx-auto h-10 w-10 text-jamaica-green/60" aria-hidden="true" />
        <p className="mt-4 font-display text-lg font-bold text-jamaica-black">{b.fallbackTitle}</p>
        <p className="mt-2 text-sm text-jamaica-black-soft/80">{b.fallbackDescription}</p>
        <a
          href={formatWhatsAppLink(siteConfig.business.whatsapp, fallbackWhatsAppMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-jamaica-green px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-jamaica-green-dark sm:w-auto"
        >
          <MessageCircle className="h-4 w-4" />
          {ui.common.whatsappUs}
        </a>
      </div>
    );
  }

  return (
    <section id="book" className="scroll-mt-28 rounded-2xl border-2 border-jamaica-green/20 bg-jamaica-cream p-5 sm:p-8">
      <div className="mb-2">
        <p className="text-xs font-bold uppercase tracking-wider text-jamaica-green">{b.eyebrow}</p>
        <h2 className="mt-1 font-display text-xl font-bold text-jamaica-black sm:text-2xl">{b.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-jamaica-black-soft/80">{b.description}</p>
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-xl border border-jamaica-gold/30 bg-white/80 p-3 text-xs text-jamaica-black-soft sm:text-sm">
        <Shield className="mt-0.5 h-4 w-4 shrink-0 text-jamaica-green" aria-hidden="true" />
        <p>{b.depositReminder}</p>
      </div>

      <BookingStepIndicator
        current={currentStep}
        labels={{ date: b.stepDate, time: b.stepTime, details: b.stepDetails }}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <BookingDatePicker
          year={viewYear}
          month={viewMonth}
          selectedDate={selectedDate}
          dateStatuses={dateStatuses}
          loading={datesLoading}
          onMonthChange={handleMonthChange}
          onSelectDate={handleSelectDate}
          weekdays={b.weekdays}
          labels={{
            prevMonth: b.prevMonth,
            nextMonth: b.nextMonth,
            closed: b.dateClosed,
            full: b.dateFull,
            loading: b.loading,
            legendTitle: b.legendTitle,
            legendOpen: b.legendOpen,
            legendClosed: b.legendClosed,
            legendFull: b.legendFull,
          }}
        />

        <div className="min-w-0">
          {!selectedDate ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-jamaica-green/20 bg-white/50 px-6 py-12 text-center">
              <Calendar className="h-10 w-10 text-jamaica-green/40" aria-hidden="true" />
              <p className="mt-4 text-sm text-jamaica-black-soft/70">{b.selectDateHint}</p>
            </div>
          ) : (
            <>
              {selectedTime && selectedDate && (
                <div className="mb-6">
                  <BookingSelectionSummary
                    tourName={tourName}
                    dateLabel={formatDisplayDate(selectedDate, locale)}
                    timeLabel={formatDisplayTime(selectedTime)}
                    duration={displayDuration}
                    labels={{ yourSelection: b.yourSelection, duration: b.duration }}
                  />
                </div>
              )}

              <TimeSlotPicker
                slots={slots}
                selectedTime={selectedTime}
                loading={slotsLoading}
                displayDuration={displayDuration}
                onSelectTime={(time) => {
                  setSelectedTime(time);
                  setSubmitSuccess(false);
                  setSubmitError("");
                }}
                labels={{
                  title: b.timeSlots,
                  duration: b.duration,
                  noSlots: b.noSlots,
                  loading: b.loading,
                  timezone: b.timezone,
                }}
              />

              {selectedDate && !selectedTime && !slotsLoading && slots.length > 0 && (
                <p className="mt-4 text-sm text-jamaica-black-soft/70">{b.selectTimeHint}</p>
              )}

              {selectedTime && (
                <div ref={detailsRef} className="mt-6">
                  <p className="mb-4 font-display text-sm font-bold text-jamaica-black">{b.stepDetails}</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="booking-name" className="mb-1 block text-sm font-bold text-jamaica-black">
                        {b.fullName} *
                      </label>
                      <input
                        id="booking-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputClass}
                        autoComplete="name"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="booking-phone" className="mb-1 block text-sm font-bold text-jamaica-black">
                          {b.phone} *
                        </label>
                        <input
                          id="booking-phone"
                          required
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={inputClass}
                          autoComplete="tel"
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-email" className="mb-1 block text-sm font-bold text-jamaica-black">
                          {b.email}
                        </label>
                        <input
                          id="booking-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={inputClass}
                          autoComplete="email"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="booking-resort" className="mb-1 block text-sm font-bold text-jamaica-black">
                        {b.resort} *
                      </label>
                      <input
                        id="booking-resort"
                        required
                        list="booking-resort-options"
                        value={resort}
                        onChange={(e) => setResort(e.target.value)}
                        placeholder={b.resortPlaceholder}
                        className={inputClass}
                      />
                      <datalist id="booking-resort-options">
                        {ui.contact.form.resortOptions.map((option) => (
                          <option key={option} value={option} />
                        ))}
                      </datalist>
                    </div>
                    <div>
                      <label htmlFor="booking-guests" className="mb-1 block text-sm font-bold text-jamaica-black">
                        {b.guests} *
                      </label>
                      <input
                        id="booking-guests"
                        required
                        type="number"
                        min={1}
                        max={99}
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-notes" className="mb-1 block text-sm font-bold text-jamaica-black">
                        {b.notes}
                      </label>
                      <textarea
                        id="booking-notes"
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className={inputClass}
                        placeholder={ui.contact.form.placeholders.details}
                      />
                    </div>

                    <div aria-live="polite">
                      {submitError && (
                        <p className="flex items-start gap-2 text-sm text-rasta-red">
                          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                          {submitError}
                        </p>
                      )}

                      {submitSuccess && (
                        <div className="space-y-3 rounded-xl border border-jamaica-green/25 bg-jamaica-green-light/50 p-4">
                          <p className="flex items-start gap-2 text-sm font-semibold text-jamaica-green">
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" />
                            {b.success}
                          </p>
                          {savedBookingId && (
                            <p className="text-xs font-bold text-jamaica-black-soft">
                              Ref: <span className="font-mono text-jamaica-black">{savedBookingId}</span>
                            </p>
                          )}
                          <button
                            type="button"
                            onClick={() => openWhatsApp()}
                            className="inline-flex min-h-11 touch-manipulation items-center gap-2 rounded-full border-2 border-jamaica-green bg-white px-4 py-2 text-sm font-bold text-jamaica-green transition-colors hover:bg-jamaica-green hover:text-white"
                          >
                            <MessageCircle className="h-4 w-4" />
                            {b.openWhatsAppAgain}
                          </button>
                        </div>
                      )}
                    </div>

                    {!submitSuccess && (
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-rasta-red px-6 py-3 text-base font-bold text-white shadow-lg transition-all hover:bg-rasta-red-dark disabled:opacity-60 sm:w-auto sm:text-sm"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            {b.submitting}
                          </>
                        ) : (
                          <>
                            <MessageCircle className="h-4 w-4" />
                            {b.submit}
                          </>
                        )}
                      </button>
                    )}
                    <p className="text-xs text-jamaica-black-soft/70">{b.disclaimer}</p>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
