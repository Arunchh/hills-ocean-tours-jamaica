import { NextRequest, NextResponse } from "next/server";
import { fetchBookingDates, fetchBookingSlots, fetchTourBookingConfig } from "@/lib/booking-api";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const tour = searchParams.get("tour");
  const action = searchParams.get("action") || "slots";

  if (!tour) {
    return NextResponse.json({ ok: false, error: "Missing tour" }, { status: 400 });
  }

  if (action === "tour") {
    const config = await fetchTourBookingConfig(tour);
    if (!config) {
      return NextResponse.json({ ok: false, enabled: false, error: "Booking not configured" });
    }
    return NextResponse.json(config);
  }

  if (action === "dates") {
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    if (!from || !to) {
      return NextResponse.json({ ok: false, error: "Missing from or to" }, { status: 400 });
    }
    const dates = await fetchBookingDates(tour, from, to);
    if (!dates) {
      return NextResponse.json({ ok: false, enabled: false, error: "Booking not configured" });
    }
    return NextResponse.json(dates);
  }

  const date = searchParams.get("date");
  if (!date) {
    return NextResponse.json({ ok: false, error: "Missing date" }, { status: 400 });
  }

  const slots = await fetchBookingSlots(tour, date);
  if (!slots) {
    return NextResponse.json({ ok: false, enabled: false, error: "Booking not configured" });
  }
  return NextResponse.json(slots);
}
