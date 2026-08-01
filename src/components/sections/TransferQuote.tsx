"use client";

import { useState } from "react";
import { MessageCircle, Plane, Ship } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/LocaleProvider";
import { formatUi } from "@/i18n/index";
import { formatWhatsAppLink } from "@/lib/utils";

export function TransferQuote() {
  const { siteConfig, ui } = useI18n();
  const form = ui.transferForm;
  const section = ui.sections.transferQuote;

  const [tripType, setTripType] = useState(form.tripTypes[0].value);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState("");
  const [luggage, setLuggage] = useState("");
  const [roundTrip, setRoundTrip] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tripLabel = form.tripTypes.find((t) => t.value === tripType)?.label ?? tripType;
    const message = formatUi(form.whatsappTemplate, {
      business: siteConfig.business.name,
      tripType: tripLabel,
      pickup: pickup || "—",
      dropoff: dropoff || "—",
      date: date || "—",
      time: time || "—",
      passengers: passengers || "—",
      luggage: luggage || "—",
      roundTrip: roundTrip ? "Yes" : "No",
    });

    window.open(formatWhatsAppLink(siteConfig.business.whatsapp, message), "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full min-h-12 touch-manipulation rounded-lg border-2 border-jamaica-green/15 px-4 py-3 text-base outline-none transition-colors focus:border-jamaica-green focus:ring-2 focus:ring-jamaica-green/20 sm:text-sm";

  return (
    <section id="transfers" className="section-py bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-5 lg:gap-10">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-start gap-4 rounded-2xl border-2 border-jamaica-green/15 bg-jamaica-cream p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-jamaica-green text-white">
                <Plane className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-jamaica-black">Sangster Airport (MBJ)</h3>
                <p className="mt-1 text-sm text-jamaica-black-soft/80">
                  Pickup or drop-off between the airport and your Montego Bay hotel or Airbnb.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border-2 border-jamaica-green/15 bg-jamaica-cream p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rasta-red text-white">
                <Ship className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-jamaica-black">Falmouth Cruise Port</h3>
                <p className="mt-1 text-sm text-jamaica-black-soft/80">
                  Meet-and-greet transfers and day excursions for cruise ship passengers.
                </p>
              </div>
            </div>
            <p className="text-sm text-jamaica-black-soft/70">{section.whatsappNote}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border-2 border-jamaica-green/10 bg-jamaica-cream p-4 shadow-lg sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="tripType" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  {form.tripType}
                </label>
                <select
                  id="tripType"
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  className={inputClass}
                  required
                >
                  {form.tripTypes.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="pickup" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  {form.pickup}
                </label>
                <input
                  id="pickup"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className={inputClass}
                  placeholder={form.placeholders.pickup}
                  required
                />
              </div>
              <div>
                <label htmlFor="dropoff" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  {form.dropoff}
                </label>
                <input
                  id="dropoff"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className={inputClass}
                  placeholder={form.placeholders.dropoff}
                  required
                />
              </div>
              <div>
                <label htmlFor="transferDate" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  {form.date}
                </label>
                <input
                  id="transferDate"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="transferTime" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  {form.time}
                </label>
                <input
                  id="transferTime"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={inputClass}
                  placeholder={form.placeholders.time}
                />
              </div>
              <div>
                <label htmlFor="transferPassengers" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  {form.passengers}
                </label>
                <input
                  id="transferPassengers"
                  type="number"
                  min={1}
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className={inputClass}
                  placeholder={form.placeholders.passengers}
                  required
                />
              </div>
              <div>
                <label htmlFor="transferLuggage" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  {form.luggage}
                </label>
                <input
                  id="transferLuggage"
                  value={luggage}
                  onChange={(e) => setLuggage(e.target.value)}
                  className={inputClass}
                  placeholder={form.placeholders.luggage}
                />
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <input
                  id="roundTrip"
                  type="checkbox"
                  checked={roundTrip}
                  onChange={(e) => setRoundTrip(e.target.checked)}
                  className="h-5 w-5 rounded border-jamaica-green/30 text-jamaica-green focus:ring-jamaica-green"
                />
                <label htmlFor="roundTrip" className="text-sm font-semibold text-jamaica-black">
                  {form.roundTrip}
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full min-h-12 touch-manipulation items-center justify-center gap-2 rounded-full bg-jamaica-green px-6 py-4 text-base font-bold text-white shadow-lg transition-all active:scale-[0.98] hover:bg-jamaica-green-dark sm:w-auto sm:text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              {section.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
