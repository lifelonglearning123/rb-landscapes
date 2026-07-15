import { NextResponse } from "next/server";

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

  const webhook = process.env.GHL_WEBHOOK_URL;
  if (!webhook) {
    console.error("GHL_WEBHOOK_URL is not set");
    return NextResponse.json({ error: "Form is not configured yet." }, { status: 500 });
  }

  const payload = {
    first_name: String(data.name).split(" ")[0],
    full_name: data.name,
    phone: data.phone,
    email: data.email,
    postcode: data.postcode ?? "",
    service: data.service,
    message: data.message,
    source: "Website quote form",
    submitted_at: new Date().toISOString(),
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`GHL webhook responded ${res.status}`);
  } catch (err) {
    console.error("Failed to forward lead to GHL:", err);
    return NextResponse.json({ error: "Could not submit your request." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
