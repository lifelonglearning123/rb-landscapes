import { NextResponse } from "next/server";

const GHL_API = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without forwarding
  if (typeof data.company === "string" && data.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const required = ["name", "phone", "email", "service", "message"];
  for (const field of required) {
    if (!data[field] || typeof data[field] !== "string") {
      return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
    }
  }

  const token = process.env.GHL_PRIVATE_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) {
    console.error("GHL_PRIVATE_TOKEN or GHL_LOCATION_ID is not set");
    return NextResponse.json({ error: "Form is not configured yet." }, { status: 500 });
  }

  const fullName = String(data.name).trim();
  const [firstName, ...rest] = fullName.split(/\s+/);
  const lastName = rest.join(" ");
  const service = String(data.service);
  const email = String(data.email).trim();
  const phone = String(data.phone).trim();
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const postcode = str(data.postcode);
  const scale = str(data.scale);
  const timeframe = str(data.timeframe);

  const headers = {
    Authorization: `Bearer ${token}`,
    Version: GHL_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // 1) Upsert the contact into the GHL location (dedupes on email/phone)
  let contactId: string | undefined;
  try {
    const res = await fetch(`${GHL_API}/contacts/upsert`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        locationId,
        firstName,
        ...(lastName ? { lastName } : {}),
        name: fullName,
        email,
        phone,
        ...(postcode ? { postalCode: postcode } : {}),
        source: "Website quote form",
        tags: ["website-quote", service],
      }),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(`upsert ${res.status}: ${JSON.stringify(body)}`);
    }
    contactId = body?.contact?.id ?? body?.id;
  } catch (err) {
    console.error("Failed to upsert GHL contact:", err);
    return NextResponse.json({ error: "Could not submit your request." }, { status: 502 });
  }

  // 2) Attach the enquiry details as a note (best-effort — the contact is
  //    already saved, so a note failure must not fail the submission).
  if (contactId) {
    const submittedAt = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Every field the visitor gave us — this note is the full record of the enquiry.
    const note = [
      "NEW WEBSITE QUOTE REQUEST",
      `Submitted: ${submittedAt}`,
      "",
      "CONTACT",
      `Name: ${fullName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Postcode: ${postcode || "Not given"}`,
      "",
      "JOB",
      `Service: ${service}`,
      `Approx size: ${scale || "Not given"}`,
      `Timeframe: ${timeframe || "Not given"}`,
      "",
      "DETAILS",
      String(data.message).trim(),
    ].join("\n");
    try {
      const res = await fetch(`${GHL_API}/contacts/${contactId}/notes`, {
        method: "POST",
        headers,
        body: JSON.stringify({ body: note }),
      });
      if (!res.ok) {
        console.error(`GHL note failed ${res.status}: ${await res.text()}`);
      }
    } catch (err) {
      console.error("Failed to add GHL note (non-fatal):", err);
    }
  }

  return NextResponse.json({ ok: true });
}
