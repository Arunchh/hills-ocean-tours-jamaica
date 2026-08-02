import type {
  BookingDatesResponse,
  BookingSlotsResponse,
  BookingSubmitPayload,
  BookingSubmitResponse,
  TourBookingConfig,
} from "@/lib/booking-types";

const SCRIPT_URL = process.env.BOOKING_SCRIPT_URL;
const SCRIPT_SECRET = process.env.BOOKING_SCRIPT_SECRET;

function configured(): boolean {
  return Boolean(SCRIPT_URL && SCRIPT_SECRET);
}

async function callScript<T>(
  query: Record<string, string>,
  body?: Record<string, unknown>
): Promise<T | null> {
  if (!configured()) return null;

  if (body) {
    const res = await fetch(SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...body, key: SCRIPT_SECRET }),
      cache: "no-store",
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  }

  const params = new URLSearchParams({ ...query, key: SCRIPT_SECRET! });
  const res = await fetch(`${SCRIPT_URL}?${params.toString()}`, { cache: "no-store" });
  if (!res.ok) return null;
  return (await res.json()) as T;
}

export async function fetchTourBookingConfig(tourSlug: string): Promise<TourBookingConfig | null> {
  return callScript<TourBookingConfig>({ action: "tour", tour: tourSlug });
}

export async function fetchBookingSlots(
  tourSlug: string,
  date: string
): Promise<BookingSlotsResponse | null> {
  return callScript<BookingSlotsResponse>({ action: "slots", tour: tourSlug, date });
}

export async function fetchBookingDates(
  tourSlug: string,
  from: string,
  to: string
): Promise<BookingDatesResponse | null> {
  return callScript<BookingDatesResponse>({ action: "dates", tour: tourSlug, from, to });
}

export async function submitBooking(
  payload: BookingSubmitPayload
): Promise<BookingSubmitResponse | null> {
  return callScript<BookingSubmitResponse>(
    {},
    {
      action: "book",
      ...payload,
    }
  );
}

export function formatBookingMonthRange(year: number, month: number): { from: string; to: string } {
  const from = `${year}-${String(month).padStart(2, "0")}-01`;
  const lastDay = new Date(year, month, 0).getDate();
  const to = `${year}-${String(month).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`;
  return { from, to };
}

export function formatDisplayDate(isoDate: string, locale: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDisplayTime(time24: string): string {
  const [h, min] = time24.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 || 12;
  return `${hour12}:${String(min).padStart(2, "0")} ${period}`;
}
