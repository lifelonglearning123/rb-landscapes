import type { Metadata } from "next";
import { BUSINESS } from "@/lib/services";

export const metadata: Metadata = {
  title: "Book a Free Site Visit",
  description:
    "Book a free, no-obligation site visit and quote with R&B Landscapes and Driveways in Trowbridge, Wiltshire.",
};

export default function BookPage() {
  const calendarUrl = process.env.NEXT_PUBLIC_GHL_CALENDAR_URL;

  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <p className="eyebrow mb-4">Book online</p>
      <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl tracking-tight max-w-3xl">
        Book your free site visit.
      </h1>
      <p className="mt-5 max-w-2xl text-ink-soft leading-relaxed">
        Pick a time that suits you and we&apos;ll visit, measure up and talk through your options.
        You&apos;ll get a confirmation by text and email, plus a reminder before we arrive.
      </p>

      <div className="mt-10 border-2 border-tarmac bg-white">
        {calendarUrl ? (
          <iframe
            src={calendarUrl}
            title="Book a free site visit"
            className="w-full min-h-[720px]"
            loading="lazy"
          />
        ) : (
          <div className="p-10 text-center">
            <p className="font-[family-name:var(--font-display)] font-bold text-xl">
              Online booking is nearly ready.
            </p>
            <p className="mt-2 text-ink-soft text-sm max-w-md mx-auto">
              In the meantime, call us on{" "}
              <a className="underline decoration-turf font-semibold" href={`tel:${BUSINESS.phoneHref}`}>
                {BUSINESS.phone}
              </a>{" "}
              and we&apos;ll book your visit over the phone.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
