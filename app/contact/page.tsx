import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { BUSINESS } from "@/lib/services";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free, no-obligation quote for driveways, patios, landscaping and fencing in Trowbridge and Wiltshire. Call 01225 267063 or send the form.",
};

const TRUST = [
  "Free written quote",
  "No call-out fee",
  "Family-run, Trowbridge-based",
  "Usually reply the same day",
];

export default function ContactPage() {
  return (
    <>
      {/* Slim header band */}
      <section className="border-b border-line bg-stone">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="eyebrow mb-4">Contact · Free quote</p>
          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight md:text-5xl">
            Let&apos;s price your project.
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            Answer three quick questions and we&apos;ll get back to you to arrange a visit — or in
            many cases quote from a good description and photos alone. Prefer to talk? The phone line
            is answered around the clock.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {TRUST.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.12em] text-tarmac"
              >
                <span className="grid h-4 w-4 place-items-center rounded-full bg-turf text-paper">
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
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-28 pt-12 md:pb-20 md:pt-16 lg:grid-cols-5">
        {/* Site office */}
        <aside className="lg:col-span-2">
          <div className="lg:sticky lg:top-24">
            <div className="border-l-4 border-turf bg-white p-6 shadow-[0_18px_44px_-24px_rgba(24,28,34,0.35)]">
              <p className="eyebrow mb-5">The site office</p>

              <dl className="space-y-5">
                <div>
                  <dt className="font-[family-name:var(--font-mono)] text-[0.66rem] uppercase tracking-[0.16em] text-ink-soft">
                    Phone · answered 24/7
                  </dt>
                  <dd className="mt-1">
                    <a
                      className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight hover:text-turf"
                      href={`tel:${BUSINESS.phoneHref}`}
                    >
                      {BUSINESS.phone}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-line pt-4">
                  <dt className="font-[family-name:var(--font-mono)] text-[0.66rem] uppercase tracking-[0.16em] text-ink-soft">
                    Email
                  </dt>
                  <dd className="mt-1 break-all">
                    <a className="underline decoration-turf underline-offset-2" href={`mailto:${BUSINESS.email}`}>
                      {BUSINESS.email}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-line pt-4">
                  <dt className="font-[family-name:var(--font-mono)] text-[0.66rem] uppercase tracking-[0.16em] text-ink-soft">
                    Based in
                  </dt>
                  <dd className="mt-1 text-sm">
                    {BUSINESS.address.locality}, {BUSINESS.address.region} {BUSINESS.address.postcode}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 border border-line bg-tarmac p-5 text-paper bond-dark">
              <div>
                <p className="font-[family-name:var(--font-display)] font-bold">Rather pick a slot?</p>
                <p className="mt-0.5 text-sm text-paper/70">Book a visit that suits you.</p>
              </div>
              <Link
                href="/book"
                className="btn-slab btn-slab-light shrink-0 !px-4 !py-2.5 text-sm"
              >
                Book online
              </Link>
            </div>
          </div>
        </aside>

        {/* Wizard */}
        <div className="lg:col-span-3">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
