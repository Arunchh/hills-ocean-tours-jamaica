/**
 * Hills Ocean Tours — Booking API (Google Sheets + Apps Script)
 *
 * Setup: Extensions → Apps Script → paste this file → set Script Properties:
 *   BOOKING_SECRET     — random string (same as BOOKING_SCRIPT_SECRET on the website)
 *   OPERATOR_EMAIL     — hillsoceantoursja@gmail.com
 *
 * Deploy: Deploy → New deployment → Web app
 *   Execute as: Me
 *   Who has access: Anyone
 *
 * Sheet tabs required: TourSlots, Blackouts, Bookings (see docs/BOOKING-SHEET-SETUP.md)
 */

var TIMEZONE = "America/Jamaica";
var SHEETS = {
  TOUR_SLOTS: "TourSlots",
  BLACKOUTS: "Blackouts",
  BOOKINGS: "Bookings",
};

function getSecret_() {
  return PropertiesService.getScriptProperties().getProperty("BOOKING_SECRET") || "";
}

function getOperatorEmail_() {
  return (
    PropertiesService.getScriptProperties().getProperty("OPERATOR_EMAIL") ||
    "hillsoceantoursja@gmail.com"
  );
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function unauthorized_() {
  return json_({ ok: false, error: "Unauthorized" });
}

function checkSecret_(key) {
  var secret = getSecret_();
  if (!secret || key !== secret) return false;
  return true;
}

function doGet(e) {
  var params = e && e.parameter ? e.parameter : {};
  if (!checkSecret_(params.key || "")) return unauthorized_();

  var action = params.action || "";
  try {
    if (action === "slots") {
      return json_(getSlotsForDate_(params.tour, params.date));
    }
    if (action === "dates") {
      return json_(getDatesForRange_(params.tour, params.from, params.to));
    }
    if (action === "tour") {
      return json_(getTourConfig_(params.tour));
    }
    return json_({ ok: false, error: "Unknown action" });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doPost(e) {
  var body = {};
  try {
    body = JSON.parse(e.postData.contents);
  } catch (parseErr) {
    return json_({ ok: false, error: "Invalid JSON" });
  }

  if (!checkSecret_(body.key || "")) return unauthorized_();

  if (body.action !== "book") {
    return json_({ ok: false, error: "Unknown action" });
  }

  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
    var result = createBooking_(body);
    return json_(result);
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function getSheet_(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) throw new Error("Missing sheet tab: " + name);
  return sheet;
}

function readTable_(sheetName) {
  var sheet = getSheet_(sheetName);
  var values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];

  var headers = values[0].map(function (h) {
    return String(h).trim().toLowerCase();
  });

  var rows = [];
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    if (!row[0] && !row[1]) continue;
    var obj = {};
    for (var c = 0; c < headers.length; c++) {
      obj[headers[c]] = row[c] !== undefined && row[c] !== null ? String(row[c]).trim() : "";
    }
    rows.push(obj);
  }
  return rows;
}

function parseBool_(value) {
  var v = String(value).toLowerCase();
  return v === "true" || v === "yes" || v === "1";
}

function parseSlotTimes_(raw) {
  if (!raw) return [];
  return raw
    .split(",")
    .map(function (t) {
      return t.trim();
    })
    .filter(Boolean)
    .map(normalizeTime_);
}

function normalizeTime_(timeStr) {
  var parts = timeStr.split(":");
  var h = parseInt(parts[0], 10);
  var m = parts.length > 1 ? parseInt(parts[1], 10) : 0;
  if (isNaN(h) || isNaN(m)) return timeStr;
  return (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
}

function timeToMinutes_(timeStr) {
  var parts = normalizeTime_(timeStr).split(":");
  return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function minutesToTime_(mins) {
  var h = Math.floor(mins / 60);
  var m = mins % 60;
  return (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
}

function parseDateYmd_(ymd) {
  var parts = ymd.split("-");
  if (parts.length !== 3) return null;
  var y = parseInt(parts[0], 10);
  var mo = parseInt(parts[1], 10) - 1;
  var d = parseInt(parts[2], 10);
  var dt = new Date(y, mo, d);
  if (isNaN(dt.getTime())) return null;
  return dt;
}

function formatYmd_(date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  return y + "-" + (m < 10 ? "0" : "") + m + "-" + (d < 10 ? "0" : "") + d;
}

function getTourRow_(tourSlug) {
  var rows = readTable_(SHEETS.TOUR_SLOTS);
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].tour_slug === tourSlug) return rows[i];
  }
  return null;
}

function getTourConfig_(tourSlug) {
  var tour = getTourRow_(tourSlug);
  if (!tour) {
    return { ok: false, error: "Tour not configured", enabled: false };
  }
  var enabled = tour.enabled === "" || parseBool_(tour.enabled);
  return {
    ok: true,
    enabled: enabled,
    tourSlug: tour.tour_slug,
    displayDuration: tour.display_duration,
    durationMin: parseInt(tour.duration_min, 10) || 60,
    maxPerSlot: parseInt(tour.max_per_slot, 10) || 1,
    bufferMin: parseInt(tour.buffer_min, 10) || 0,
  };
}

function isBlackout_(tourSlug, ymd) {
  var rows = readTable_(SHEETS.BLACKOUTS);
  for (var i = 0; i < rows.length; i++) {
    var rowDate = rows[i].date;
    if (!rowDate) continue;
    var normalized = rowDate.substring(0, 10);
    if (normalized !== ymd) continue;
    var slug = rows[i].tour_slug || "*";
    if (slug === "*" || slug === tourSlug) return true;
  }
  return false;
}

function getActiveBookings_(tourSlug, ymd) {
  var rows = readTable_(SHEETS.BOOKINGS);
  var active = [];
  for (var i = 0; i < rows.length; i++) {
    var status = (rows[i].status || "pending").toLowerCase();
    if (status === "cancelled" || status === "canceled") continue;
    if (rows[i].tour_slug !== tourSlug) continue;
    if ((rows[i].date || "").substring(0, 10) !== ymd) continue;
    active.push({
      startTime: normalizeTime_(rows[i].start_time),
      durationMin: parseInt(rows[i].duration_min, 10) || 60,
      bufferMin: parseInt(rows[i].buffer_min, 10) || 0,
    });
  }
  return active;
}

function intervalsOverlap_(aStart, aEnd, bStart, bEnd) {
  return aStart < bEnd && bStart < aEnd;
}

function isSlotAvailable_(slotTime, tour, bookings) {
  var durationMin = parseInt(tour.duration_min, 10) || 60;
  var bufferMin = parseInt(tour.buffer_min, 10) || 0;
  var maxPerSlot = parseInt(tour.max_per_slot, 10) || 1;
  var slotStart = timeToMinutes_(slotTime);
  var slotEnd = slotStart + durationMin + bufferMin;

  var overlapCount = 0;
  for (var i = 0; i < bookings.length; i++) {
    var bStart = timeToMinutes_(bookings[i].startTime);
    var bEnd = bStart + bookings[i].durationMin + bookings[i].bufferMin;
    if (intervalsOverlap_(slotStart, slotEnd, bStart, bEnd)) {
      overlapCount++;
    }
  }
  return overlapCount < maxPerSlot;
}

function isPastSlot_(ymd, slotTime) {
  var now = new Date();
  var todayYmd = Utilities.formatDate(now, TIMEZONE, "yyyy-MM-dd");
  if (ymd > todayYmd) return false;
  if (ymd < todayYmd) return true;
  var nowMins =
    parseInt(Utilities.formatDate(now, TIMEZONE, "H"), 10) * 60 +
    parseInt(Utilities.formatDate(now, TIMEZONE, "m"), 10);
  return timeToMinutes_(slotTime) <= nowMins;
}

function getSlotsForDate_(tourSlug, ymd) {
  if (!tourSlug || !ymd) {
    return { ok: false, error: "Missing tour or date" };
  }

  var tour = getTourRow_(tourSlug);
  if (!tour) {
    return { ok: false, error: "Tour not configured", enabled: false };
  }

  var enabled = tour.enabled === "" || parseBool_(tour.enabled);
  if (!enabled) {
    return { ok: true, enabled: false, slots: [], displayDuration: tour.display_duration };
  }

  if (isBlackout_(tourSlug, ymd)) {
    return {
      ok: true,
      enabled: true,
      blackout: true,
      slots: [],
      displayDuration: tour.display_duration,
      durationMin: parseInt(tour.duration_min, 10) || 60,
    };
  }

  var slotTimes = parseSlotTimes_(tour.slot_times);
  var bookings = getActiveBookings_(tourSlug, ymd);
  var available = [];

  for (var i = 0; i < slotTimes.length; i++) {
    var t = slotTimes[i];
    if (isPastSlot_(ymd, t)) continue;
    if (isSlotAvailable_(t, tour, bookings)) {
      available.push(t);
    }
  }

  return {
    ok: true,
    enabled: true,
    blackout: false,
    slots: available,
    displayDuration: tour.display_duration,
    durationMin: parseInt(tour.duration_min, 10) || 60,
  };
}

function getDatesForRange_(tourSlug, fromYmd, toYmd) {
  if (!tourSlug || !fromYmd || !toYmd) {
    return { ok: false, error: "Missing parameters" };
  }

  var tour = getTourRow_(tourSlug);
  if (!tour) {
    return { ok: false, error: "Tour not configured", enabled: false };
  }

  var enabled = tour.enabled === "" || parseBool_(tour.enabled);
  if (!enabled) {
    return { ok: true, enabled: false, dates: {} };
  }

  var start = parseDateYmd_(fromYmd);
  var end = parseDateYmd_(toYmd);
  if (!start || !end) {
    return { ok: false, error: "Invalid date range" };
  }

  var dates = {};
  var cursor = new Date(start.getTime());
  while (cursor <= end) {
    var ymd = formatYmd_(cursor);
    var dayResult = getSlotsForDate_(tourSlug, ymd);
    if (dayResult.blackout) {
      dates[ymd] = "closed";
    } else if (dayResult.slots && dayResult.slots.length > 0) {
      dates[ymd] = "open";
    } else {
      dates[ymd] = "full";
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return { ok: true, enabled: true, dates: dates };
}

function generateBookingId_() {
  var now = new Date();
  var stamp = Utilities.formatDate(now, TIMEZONE, "yyyyMMdd-HHmmss");
  var rand = Math.floor(Math.random() * 9000 + 1000);
  return "HOT-" + stamp + "-" + rand;
}

function createBooking_(body) {
  var tourSlug = String(body.tourSlug || "").trim();
  var ymd = String(body.date || "").substring(0, 10);
  var startTime = normalizeTime_(String(body.startTime || ""));
  var name = String(body.name || "").trim();
  var phone = String(body.phone || "").trim();
  var resort = String(body.resort || "").trim();
  var guests = String(body.guests || "1").trim();
  var email = String(body.email || "").trim();
  var notes = String(body.notes || "").trim();
  var tourName = String(body.tourName || tourSlug).trim();

  if (!tourSlug || !ymd || !startTime || !name || !phone || !resort) {
    return { ok: false, error: "Missing required fields" };
  }

  var slotCheck = getSlotsForDate_(tourSlug, ymd);
  if (!slotCheck.enabled) {
    return { ok: false, error: "Online booking not available for this tour" };
  }
  if (slotCheck.blackout || !slotCheck.slots || slotCheck.slots.indexOf(startTime) === -1) {
    return { ok: false, error: "That time slot is no longer available" };
  }

  var tour = getTourRow_(tourSlug);
  var durationMin = parseInt(tour.duration_min, 10) || 60;
  var bufferMin = parseInt(tour.buffer_min, 10) || 0;
  var bookingId = generateBookingId_();
  var createdAt = Utilities.formatDate(new Date(), TIMEZONE, "yyyy-MM-dd HH:mm:ss");

  var sheet = getSheet_(SHEETS.BOOKINGS);
  sheet.appendRow([
    bookingId,
    tourSlug,
    tourName,
    ymd,
    startTime,
    durationMin,
    bufferMin,
    guests,
    name,
    phone,
    email,
    resort,
    notes,
    "pending",
    createdAt,
  ]);

  var displayDuration = tour.display_duration || durationMin + " min";
  var emailBody =
    "New booking request (pending WhatsApp confirmation)\n\n" +
    "Reference: " +
    bookingId +
    "\nTour: " +
    tourName +
    " (" +
    tourSlug +
    ")\nDate: " +
    ymd +
    "\nTime: " +
    startTime +
    " (" +
    TIMEZONE +
    ")\nDuration: " +
    displayDuration +
    "\nGuests: " +
    guests +
    "\nName: " +
    name +
    "\nPhone: " +
    phone +
    "\nEmail: " +
    (email || "—") +
    "\nHotel: " +
    resort +
    "\nNotes: " +
    (notes || "—") +
    "\n\nStatus: pending — confirm on WhatsApp and collect 50% deposit.";

  try {
    MailApp.sendEmail(getOperatorEmail_(), "New tour booking — " + tourName + " — " + ymd, emailBody);
  } catch (mailErr) {
    // Booking saved even if email fails
  }

  return {
    ok: true,
    bookingId: bookingId,
    displayDuration: displayDuration,
    durationMin: durationMin,
  };
}
