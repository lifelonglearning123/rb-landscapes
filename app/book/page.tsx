import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/services";

export const metadata: Metadata = {
  title: "Book a Free Site Visit",
  description:
    "Book a free, no-obligation site visit and quote with R&B Landscapes and Driveways in Trowbridge, Wiltshire.",
};

const VISIT = [
  {
    n: "01",
    t: "We measure up",
    d: "We take the site's dimensions, levels and access — the numbers a real quote is built on.",
  },
  {
    n: "02",
    t: "We talk options & materials",
    d: "Block, resin, tarmac, porcelain — the honest trade-offs, with samples and photos to hand.",
  },
  {
    n: "03",
    t: "You get a fixed written quote",
    d: "A clear scope and price follows the visit — no obligation, no pressure, no call-out fee.",
  },
];

const REASSURE = ["Free & no obligation", "About 30–45 minutes", "Confirmation by text & email", "Reminder before we arrive"];

export default function BookPage() {
  const calendarUrl = process.env.NEXT_PUBLIC_GHL_CALENDAR_URL;

  return (
    <>
      {/* Header band */}
      <section className="border-b border-line bg-stone">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="eyebrow mb-4">Book online</p>
          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight md:text-5xl">
            Book your free site visit.
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            Pick a time that suits you and we&apos;ll come to you, measure up, and talk through your
            options. You&apos;ll get a confirmation by text and email, plus a reminder before we
            arrive.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-28 pt-12 md:pb-20 md:pt-16 lg:grid-cols-5">
        {/* What happens at the visit */}
        <aside className="lg:col-span-2">
          <div className="lg:sticky lg:top-24">
            <p className="eyebrow mb-5">What happens at the visit</p>
            <ol className="space-y-6">
              {VISIT.map((s) => (
                <li key={s.n} className="border-t-4 border-turf pt-4">
                  <span className="font-[family-name:var(--font-mono)] text-sm text-turf">{s.n}</span>
                  <h2 className="mt-1 font-[family-name:var(--font-display)] text-lg font-bold">{s.t}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.d}</p>
                </li>
              ))}
            </ol>

            <ul className="mt-8 grid gap-2">
              {REASSURE.map((r) => (
                <li key={r} className="flex items-center gap-2.5 text-sm text-tarmac">
                  <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-turf text-paper">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M20 6 9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {r}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-ink-soft">
              Prefer to talk first?{" "}
              <a className="font-semibold text-turf underline decoration-turf" href={`tel:${BUSINESS.phoneHref}`}>
                Call {BUSINESS.phone}
              </a>{" "}
              — the line is answered around the clock.
            </p>
          </div>
        </aside>

        {/* Calendar */}
        <div className="lg:col-span-3">
          <div className="border border-line border-t-4 border-t-turf bg-white shadow-[0_18px_44px_-24px_rgba(24,28,34,0.5)]">
            {calendarUrl ? (
              <iframe
                src={calendarUrl}
                title="Book a free site visit"
                className="min-h-[720px] w-full"
                loading="lazy"
              />
            ) : (
              <div className="px-6 py-16 text-center sm:px-10">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-stone text-turf">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="4.5" width="18" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M3 9h18M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <p className="mt-5 font-[family-name:var(--font-display)] text-xl font-bold">
                  Online booking is nearly ready.
                </p>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                  In the meantime, call us and we&apos;ll book your visit over the phone in a couple
                  of minutes — or send the form and we&apos;ll come back with times.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a href={`tel:${BUSINESS.phoneHref}`} className="btn-slab text-sm">
                    Call {BUSINESS.phone}
                  </a>
                  <Link href="/contact" className="btn-ghost text-sm">
                    Send the form
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
