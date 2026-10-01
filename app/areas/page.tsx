import type { Metadata } from "next";
import Link from "next/link";
import { AREA_PAGES } from "@/lib/areas";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description:
    "R&B Landscapes and Driveways works from Trowbridge across west Wiltshire, Bath, Swindon and into Somerset. See what's involved in building where you live.",
};

export default function AreasPage() {
  return (
    <>
      <section className="bond border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="eyebrow mb-4">Areas</p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl tracking-tight max-w-3xl">
            Based in Trowbridge. Working from Wells to Swindon.
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft leading-relaxed">
            A hillside terrace in Bath and a new-build in Melksham are different jobs. Pick your
            area to see what building there involves — the ground, the access, the materials that
            suit it and which council looks after the kerb.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {AREA_PAGES.map((a) => (
          <Link
            key={a.slug}
            href={`/areas/${a.slug}`}
            className="group border-2 border-tarmac bg-white p-6 hover:bg-tarmac hover:text-paper transition-colors"
          >
            <h2 className="font-[family-name:var(--font-display)] font-bold text-xl">{a.name}</h2>
            <p className="mt-2 text-sm text-ink-soft group-hover:text-paper/75 leading-relaxed">
              {a.places.slice(0, 4).join(" · ")}
            </p>
            <span className="mt-4 inline-block font-[family-name:var(--font-mono)] text-xs tracking-[0.16em] uppercase text-turf group-hover:text-turf-bright">
              View area →
            </span>
          </Link>
        ))}
      </section>

      <CTA title="Not sure if we cover you?" text="If you're near any of these towns, you almost certainly are in our patch. Call or send the form and we'll tell you." />
    </>
  );
}
