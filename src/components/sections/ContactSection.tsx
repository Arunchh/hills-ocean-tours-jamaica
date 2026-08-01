"use client";

import { useState } from "react";
import { Clock, Mail, MessageCircle, Phone, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JamaicaStripe } from "@/components/ui/JamaicaStripe";
import { submitLeadForm } from "@/lib/submit-form";
import { useI18n } from "@/i18n/LocaleProvider";
import { formatUi } from "@/i18n/index";
import { formatPhoneLink, formatWhatsAppLink } from "@/lib/utils";

export function ContactSection() {
  const { siteConfig, ui } = useI18n();
  const form = ui.contact.form;
  const whatsappMessage = formatUi(ui.contact.whatsappResort, {
    business: siteConfig.business.name,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const result = await submitLeadForm(
      siteConfig.communications,
      siteConfig.business.name,
      {
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        resort: String(formData.get("resort") ?? ""),
        service: String(formData.get("service") ?? ""),
        date: String(formData.get("date") ?? ""),
        guests: String(formData.get("guests") ?? ""),
        message: String(formData.get("message") ?? ""),
      },
      ui.form
    );

    if (result.ok) {
      setStatus("success");
      setStatusMessage(result.message);
      formEl.reset();
    } else {
      setStatus("error");
      setStatusMessage(result.message);
    }
  };

  const inputClass =
    "w-full min-h-12 touch-manipulation rounded-lg border-2 border-jamaica-green/15 px-4 py-3 text-base outline-none transition-colors focus:border-jamaica-green focus:ring-2 focus:ring-jamaica-green/20 sm:text-sm";

  return (
    <section id="contact" className="section-py relative bg-jamaica-black">
      <div className="absolute inset-0 pattern-lion opacity-30" />
      <JamaicaStripe variant="rasta" className="absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={ui.sections.contact.eyebrow}
          title={ui.sections.contact.title}
          description={formatUi(ui.sections.contact.description, {
            responseTime: siteConfig.business.responseTime,
          })}
          light
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {siteConfig.paymentMethods.map((method) => (
            <span
              key={method}
              className="rounded-full border border-jamaica-gold/30 bg-jamaica-black-soft px-3 py-1 text-xs font-bold text-jamaica-gold"
            >
              {method}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-5 lg:gap-10">
          <div className="space-y-6 lg:col-span-2">
            <a
              href={formatPhoneLink(siteConfig.business.phone)}
              className="flex min-h-[72px] touch-manipulation items-center gap-4 rounded-2xl border-2 border-jamaica-green/20 bg-jamaica-black-soft p-4 text-white transition-colors active:border-jamaica-green sm:p-5 sm:hover:border-jamaica-green"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rasta-red">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-jamaica-gold-light/70">{ui.contact.callDirect}</p>
                <p className="font-bold">{siteConfig.business.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={formatWhatsAppLink(siteConfig.business.whatsapp, whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[72px] touch-manipulation items-center gap-4 rounded-2xl border-2 border-jamaica-green/20 bg-jamaica-black-soft p-4 text-white transition-colors active:border-jamaica-green sm:p-5 sm:hover:border-jamaica-green"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-jamaica-green">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-jamaica-gold-light/70">{ui.contact.whatsappFastest}</p>
                <p className="font-bold">{ui.contact.messageUsNow}</p>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.business.email}`}
              className="flex min-h-[72px] touch-manipulation items-center gap-4 rounded-2xl border-2 border-jamaica-green/20 bg-jamaica-black-soft p-4 text-white transition-colors active:border-jamaica-green sm:p-5 sm:hover:border-jamaica-green"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-jamaica-gold text-jamaica-black">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-jamaica-gold-light/70">{ui.contact.emailLabel}</p>
                <p className="font-bold">{siteConfig.business.email}</p>
              </div>
            </a>

            <div className="rounded-2xl border-2 border-jamaica-green/20 bg-jamaica-black-soft p-4 text-white sm:p-5">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-jamaica-gold" />
                <div className="text-sm">
                  <p className="font-bold text-jamaica-gold">{ui.common.businessHours}</p>
                  <p className="mt-1 text-white/80">{siteConfig.business.businessHours}</p>
                  <p className="mt-3 font-bold text-jamaica-gold">{ui.common.responseTime}</p>
                  <p className="mt-1 text-white/80">{siteConfig.business.responseTime}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-jamaica-green/15 bg-jamaica-black-soft/80 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-jamaica-gold">
                {ui.common.credentials}
              </p>
              <ul className="mt-3 space-y-2">
                {siteConfig.business.credentials.map((cred) => (
                  <li key={cred.label} className="text-sm text-white/80">
                    <span className="font-semibold text-white">{cred.label}:</span> {cred.value}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-white/50">
              {siteConfig.business.address}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border-2 border-jamaica-green/10 bg-white p-4 shadow-2xl sm:p-8 lg:col-span-3"
          >
            {status === "success" && (
              <div className="mb-5 flex items-start gap-3 rounded-xl bg-jamaica-green-light p-4 text-jamaica-green-dark">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm font-semibold">{statusMessage}</p>
              </div>
            )}
            {status === "error" && (
              <div className="mb-5 flex items-start gap-3 rounded-xl bg-rasta-red-light p-4 text-rasta-red-dark">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm font-semibold">{statusMessage}</p>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  {form.fullName}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className={inputClass}
                  placeholder={form.placeholders.name}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  {form.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  className={inputClass}
                  placeholder={form.placeholders.email}
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  {form.phone}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className={inputClass}
                  placeholder={form.placeholders.phone}
                />
              </div>
              <div>
                <label htmlFor="resort" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  {form.resort}
                </label>
                <select id="resort" name="resort" required className={inputClass}>
                  <option value="">{form.placeholders.selectResort}</option>
                  {form.resortOptions.map((resort) => (
                    <option key={resort} value={resort}>
                      {resort}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  {form.service}
                </label>
                <select id="service" name="service" required className={inputClass}>
                  <option value="">{form.placeholders.selectService}</option>
                  {form.serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  {form.travelDate}
                </label>
                <input id="date" name="date" type="date" className={inputClass} />
              </div>
              <div>
                <label htmlFor="guests" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                  {form.guests}
                </label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  className={inputClass}
                  placeholder={form.placeholders.guests}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-jamaica-black">
                {form.details}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={inputClass}
                placeholder={form.placeholders.details}
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full min-h-12 touch-manipulation items-center justify-center gap-2 rounded-full bg-rasta-red px-6 py-4 text-base font-bold text-white shadow-lg shadow-rasta-red/30 transition-all active:scale-[0.98] hover:bg-rasta-red-dark disabled:opacity-60 sm:w-auto sm:text-sm"
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {status === "loading" ? form.submitting : form.submit}
            </button>
            <p className="mt-3 text-xs text-jamaica-black-soft/60">{form.disclaimer}</p>
          </form>
        </div>
      </div>

      <JamaicaStripe variant="flag" className="absolute inset-x-0 bottom-0" />
    </section>
  );
}
