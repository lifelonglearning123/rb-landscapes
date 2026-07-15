import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { BUSINESS } from "@/lib/services";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free, no-obligation quote for driveways, patios, landscaping and fencing in Trowbridge and Wiltshire. Call 07738 420527 or send the form.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20 grid gap-12 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <p className="eyebrow mb-4">Contact</p>
        <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl tracking-tight">
          Get your free quote.
        </h1>
        <p className="mt-5 text-ink-soft leading-relaxed">
          Send the form and we&apos;ll get back to you quickly to arrange a visit — or in many
          cases we can quote from a good description and photos alone. Prefer to talk? Our phone
          line is answered around the clock.
        </p>

        <dl className="mt-8 space-y-5 text-sm">
          <div>
            <dt className="eyebrow">Phone (24/7)</dt>
            <dd className="mt-1">
              <a className="text-lg font-bold underline decoration-turf" href={`tel:${BUSINESS.phoneHref}`}>
                {BUSINESS.phone}
              </a>
              {" · "}
              <a className="underline decoration-turf" href={`tel:${BUSINESS.landlineHref}`}>
                {BUSINESS.landline}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Email</dt>
            <dd className="mt-1 break-all">
              <a className="underline decoration-turf" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Based in</dt>
            <dd className="mt-1">
              {BUSINESS.address.locality}, {BUSINESS.address.region} {BUSINESS.address.postcode}
            </dd>
          </div>
        </dl>

        <div className="mt-8 border-2 border-turf bg-white p-5">
          <p className="font-[family-name:var(--font-display)] font-bold">
            Prefer to book a visit directly?
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            Pick a slot that suits you and we&apos;ll come to you.
          </p>
          <Link href="/book" className="btn-slab mt-4 text-sm">Book a free site visit</Link>
        </div>
      </div>

      <div className="lg:col-span-3">
        <div className="border-2 border-tarmac bg-stone p-6 md:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
