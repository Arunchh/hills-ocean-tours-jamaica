import { NextRequest, NextResponse } from "next/server";
import { submitBooking } from "@/lib/booking-api";
import type { BookingSubmitPayload } from "@/lib/booking-types";

export async function POST(request: NextRequest) {
  let body: Partial<BookingSubmitPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const required = ["tourSlug", "tourName", "date", "startTime", "name", "phone", "resort", "guests"] as const;
  for (const field of required) {
    if (!body[field]?.toString().trim()) {
      return NextResponse.json({ ok: false, error: `Missing ${field}` }, { status: 400 });
    }
  }

  const result = await submitBooking({
    tourSlug: body.tourSlug!.trim(),
    tourName: body.tourName!.trim(),
    date: body.date!.trim(),
    startTime: body.startTime!.trim(),
    name: body.name!.trim(),
    phone: body.phone!.trim(),
    email: body.email?.trim() || "",
    resort: body.resort!.trim(),
    guests: body.guests!.trim(),
    notes: body.notes?.trim() || "",
  });

  if (!result) {
    return NextResponse.json({ ok: false, error: "Booking service not configured" }, { status: 503 });
  }

  if (!result.ok) {
    return NextResponse.json(result, { status: 409 });
  }

  return NextResponse.json(result);
}
