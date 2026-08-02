"use client";

import { useMemo } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useI18n } from "@/i18n/LocaleProvider";
import type { BookingDateStatus } from "@/lib/booking-types";
import { formatBookingMonthRange, formatDisplayDate, formatDisplayTime } from "@/lib/booking-api";
import { BookingCalendarLegend } from "@/components/booking/BookingProgress";

type Props = {
  year: number;
  month: number;
  selectedDate: string | null;
  dateStatuses: Record<string, BookingDateStatus>;
  loading: boolean;
  onMonthChange: (year: number, month: number) => void;
  onSelectDate: (isoDate: string) => void;
  weekdays: string[];
  labels: {
    prevMonth: string;
    nextMonth: string;
    closed: string;
    full: string;
    loading: string;
    legendTitle: string;
    legendOpen: string;
    legendClosed: string;
    legendFull: string;
  };
};

export function BookingDatePicker({
  year,
  month,
  selectedDate,
  dateStatuses,
  loading,
  onMonthChange,
  onSelectDate,
  weekdays,
  labels,
}: Props) {
  const { locale } = useI18n();

  const today = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }, []);

  const monthLabel = useMemo(() => {
    return new Date(year, month - 1, 1).toLocaleDateString(locale, {
      month: "long",
      year: "numeric",
    });
  }, [year, month, locale]);

  const calendarDays = useMemo(() => {
    const first = new Date(year, month - 1, 1);
    const startPad = first.getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
    const cells: { iso: string | null; day: number | null }[] = [];

    for (let i = 0; i < startPad; i++) cells.push({ iso: null, day: null });
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      cells.push({ iso, day: d });
    }
    return cells;
  }, [year, month]);

  const goMonth = (delta: number) => {
    const d = new Date(year, month - 1 + delta, 1);
    onMonthChange(d.getFullYear(), d.getMonth() + 1);
  };

  return (
    <div className="rounded-2xl border-2 border-jamaica-green/15 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => goMonth(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-jamaica-green/20 text-jamaica-green transition-colors hover:bg-jamaica-green-light"
          aria-label={labels.prevMonth}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <p className="font-display text-sm font-bold text-jamaica-black sm:text-base">{monthLabel}</p>
        <button
          type="button"
          onClick={() => goMonth(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-jamaica-green/20 text-jamaica-green transition-colors hover:bg-jamaica-green-light"
          aria-label={labels.nextMonth}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-jamaica-black-soft/60">
        {weekdays.map((d) => (
          <span key={d} className="py-1">
            {d}
          </span>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center gap-2 py-10 text-sm text-jamaica-black-soft/70">
          <Loader2 className="h-4 w-4 animate-spin" />
          {labels.loading}
        </div>
      ) : (
        <div className="mt-1 grid grid-cols-7 gap-1">
          {calendarDays.map((cell, idx) => {
            if (!cell.iso || cell.day === null) {
              return <span key={`empty-${idx}`} />;
            }

            const status = dateStatuses[cell.iso];
            const isPast = cell.iso < today;
            const isSelected = selectedDate === cell.iso;
            const disabled = isPast || status === "closed" || status === "full" || !status;

            let statusHint = "";
            if (status === "closed") statusHint = labels.closed;
            if (status === "full") statusHint = labels.full;

            return (
              <button
                key={cell.iso}
                type="button"
                disabled={disabled}
                title={statusHint || undefined}
                onClick={() => onSelectDate(cell.iso!)}
                className={`flex h-11 min-h-11 touch-manipulation items-center justify-center rounded-lg text-sm font-semibold transition-colors sm:h-9 sm:min-h-9 ${
                  isSelected
                    ? "bg-jamaica-green text-white"
                    : disabled
                      ? "cursor-not-allowed text-jamaica-black-soft/30"
                      : status === "open"
                        ? "bg-jamaica-green-light text-jamaica-green hover:bg-jamaica-green/20"
                        : "text-jamaica-black-soft/40"
                }`}
              >
                {cell.day}
              </button>
            );
          })}
        </div>
      )}

      <BookingCalendarLegend
        labels={{
          title: labels.legendTitle,
          open: labels.legendOpen,
          closed: labels.legendClosed,
          full: labels.legendFull,
        }}
      />

      {selectedDate && (
        <p className="mt-3 text-center text-xs text-jamaica-black-soft/70">
          {formatDisplayDate(selectedDate, locale)}
        </p>
      )}
    </div>
  );
}

type TimeSlotPickerProps = {
  slots: string[];
  selectedTime: string | null;
  loading: boolean;
  displayDuration?: string;
  onSelectTime: (time: string) => void;
  labels: {
    title: string;
    duration: string;
    noSlots: string;
    loading: string;
    timezone: string;
  };
};

export function TimeSlotPicker({
  slots,
  selectedTime,
  loading,
  displayDuration,
  onSelectTime,
  labels,
}: TimeSlotPickerProps) {
  if (loading) {
    return (
      <div className="flex items-center gap-2 py-4 text-sm text-jamaica-black-soft/70">
        <Loader2 className="h-4 w-4 animate-spin" />
        {labels.loading}
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-display text-sm font-bold text-jamaica-black">{labels.title}</p>
        {displayDuration && (
          <p className="text-xs text-jamaica-black-soft/70">
            {labels.duration}: <span className="font-semibold">{displayDuration}</span>
          </p>
        )}
      </div>
      <p className="mt-1 text-xs text-jamaica-black-soft/60">{labels.timezone}</p>

      {slots.length === 0 ? (
        <p className="mt-3 text-sm text-jamaica-black-soft/70">{labels.noSlots}</p>
      ) : (
        <div className="mt-3 flex flex-wrap gap-2">
          {slots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => onSelectTime(slot)}
              className={`min-h-11 touch-manipulation rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                selectedTime === slot
                  ? "bg-rasta-red text-white shadow-md"
                  : "border-2 border-jamaica-green/25 bg-jamaica-cream text-jamaica-green hover:border-jamaica-green"
              }`}
            >
              {formatDisplayTime(slot)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export { formatBookingMonthRange };
