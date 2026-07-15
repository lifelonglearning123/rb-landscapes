import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Block paving, resin and tarmac driveways, patios, landscaping, fencing, decking, artificial grass, brickwork and dropped kerbs across Trowbridge and Wiltshire.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bond border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="eyebrow mb-4">Services</p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl tracking-tight max-w-3xl">
            Everything from the kerb to the back fence.
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft leading-relaxed">
            One team covering driveways, gardens and everything between — so your whole project is
            planned, priced and built by the same people.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20 grid gap-4 sm:grid-cols-2">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group border-2 border-tarmac bg-white p-6 hover:bg-tarmac hover:text-paper transition-colors"
          >
            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl">{s.name}</h2>
            <p className="mt-2 text-sm text-ink-soft group-hover:text-paper/75 leading-relaxed">
              {s.short}
            </p>
            <span className="mt-4 inline-block font-[family-name:var(--font-mono)] text-xs tracking-[0.16em] uppercase text-turf group-hover:text-turf-bright">
              View service →
            </span>
          </Link>
        ))}
      </section>

      <CTA title="Not sure which service you need?" text="Describe the job and we'll tell you exactly what it involves — and what it'll cost." />
    </>
  );
}
