export type FormProvider = "web3forms" | "formspree" | "mailto";

export type FormFieldData = {
  name: string;
  email: string;
  phone: string;
  resort: string;
  service: string;
  date: string;
  guests: string;
  message: string;
};

export type SubmitResult =
  | { ok: true; message: string }
  | { ok: false; message: string };

type CommunicationsConfig = {
  formProvider: FormProvider;
  web3formsAccessKey: string;
  formspreeFormId: string;
  leadNotificationEmail: string;
  tawkPropertyId: string;
  tawkWidgetId: string;
};

export type FormMessages = {
  success: string;
  error: string;
  mailtoSuccess: string;
};

export async function submitLeadForm(
  config: CommunicationsConfig,
  businessName: string,
  data: FormFieldData,
  messages: FormMessages
): Promise<SubmitResult> {
  const summary = [
    `New lead for ${businessName}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Resort: ${data.resort}`,
    `Service: ${data.service}`,
    `Date: ${data.date}`,
    `Guests: ${data.guests}`,
    "",
    `Details: ${data.message}`,
  ].join("\n");

  if (config.formProvider === "web3forms" && config.web3formsAccessKey) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: config.web3formsAccessKey,
        subject: `New Website Lead — ${data.service} — ${data.resort}`,
        from_name: data.name,
        email: data.email,
        phone: data.phone,
        resort: data.resort,
        service: data.service,
        travel_date: data.date,
        guests: data.guests,
        message: data.message,
        botcheck: "",
      }),
    });
    const json = await res.json();
    if (json.success) {
      return { ok: true, message: messages.success };
    }
    return { ok: false, message: messages.error };
  }

  if (config.formProvider === "formspree" && config.formspreeFormId) {
    const res = await fetch(`https://formspree.io/f/${config.formspreeFormId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        resort: data.resort,
        service: data.service,
        date: data.date,
        guests: data.guests,
        message: data.message,
        _subject: `New Website Lead — ${data.service}`,
      }),
    });
    if (res.ok) {
      return { ok: true, message: messages.success };
    }
    return { ok: false, message: messages.error };
  }

  const mailto = `mailto:${config.leadNotificationEmail}?subject=${encodeURIComponent(
    `Website Lead — ${data.service} — ${data.resort}`
  )}&body=${encodeURIComponent(summary)}`;
  window.location.href = mailto;
  return { ok: true, message: messages.mailtoSuccess };
}
