"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/services";

type Status = "idle" | "sending" | "sent" | "error";

export default function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong sending your request. Please call us on 07738 420527 instead.");
    }
  }

  if (status === "sent") {
    return (
      <div className="border-2 border-turf bg-white p-8">
        <p className="font-[family-name:var(--font-display)] font-bold text-xl">
          Quote request received.
        </p>
        <p className="mt-2 text-ink-soft">
          Thanks — we&apos;ll be in touch shortly to arrange your free quote. If it&apos;s urgent,
          call us on <a className="underline decoration-turf" href="tel:+447738420527">07738 420527</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required autoComplete="name" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div>
        <label htmlFor="postcode">Postcode</label>
        <input id="postcode" name="postcode" required autoComplete="postal-code" placeholder="BA14…" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="service">What do you need?</label>
        <select id="service" name="service" defaultValue={defaultService ?? ""} required>
          <option value="" disabled>
            Choose a service…
          </option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message">Tell us about the job</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Rough size of the area, what's there now, and what you'd like…"
        />
      </div>
      {/* Honeypot for bots */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="sm:col-span-2 flex items-center gap-4 flex-wrap">
        <button type="submit" className="btn-slab" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request my free quote"}
        </button>
        {status === "error" && <p className="text-sm text-red-700">{error}</p>}
      </div>
    </form>
  );
}
