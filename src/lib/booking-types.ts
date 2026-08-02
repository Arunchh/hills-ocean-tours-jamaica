export type BookingDateStatus = "open" | "closed" | "full";

export type TourBookingConfig = {
  ok: boolean;
  enabled: boolean;
  tourSlug?: string;
  displayDuration?: string;
  durationMin?: number;
  maxPerSlot?: number;
  bufferMin?: number;
  error?: string;
};

export type BookingSlotsResponse = {
  ok: boolean;
  enabled: boolean;
  blackout?: boolean;
  slots: string[];
  displayDuration?: string;
  durationMin?: number;
  error?: string;
};

export type BookingDatesResponse = {
  ok: boolean;
  enabled: boolean;
  dates: Record<string, BookingDateStatus>;
  error?: string;
};

export type BookingSubmitPayload = {
  tourSlug: string;
  tourName: string;
  date: string;
  startTime: string;
  name: string;
  phone: string;
  email?: string;
  resort: string;
  guests: string;
  notes?: string;
};

export type BookingSubmitResponse = {
  ok: boolean;
  bookingId?: string;
  displayDuration?: string;
  durationMin?: number;
  error?: string;
};

export function isBookingConfigured(): boolean {
  return Boolean(process.env.BOOKING_SCRIPT_URL && process.env.BOOKING_SCRIPT_SECRET);
}
