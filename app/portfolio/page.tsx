import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS, PORTFOLIO_STATS, firstLast } from "@/lib/portfolio";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rblandscapesanddriveways.com";

export const metadata: Metadata = {
  title: "Portfolio — Before & After",
  description:
    "Real driveway and landscaping transformations across Trowbridge and Wiltshire — block paving, resin and tarmac driveways shown before, during and after. Drag to compare.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "R&B Landscapes and Driveways — Portfolio",
    url: `${SITE_URL}/portfolio`,
    hasPart: PROJECTS.map((p) => {
      const { after } = firstLast(p);
      return {
        "@type": "ImageObject",
        contentUrl: `${SITE_URL}${after.src}`,
        caption: `${p.serviceLabel} — ${p.title}`,
      };
    }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="bond border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="eyebrow mb-4">Our work</p>
          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight md:text-5xl">
            The proof is in the groundwork.
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">
            {PORTFOLIO_STATS.projects} recent projects across Trowbridge and Wiltshire, shown
            before, during and after. Drag the slider on any project to reveal the transformation —
            and the properly built base underneath it.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i < 2} />
          ))}
        </div>

        <p className="mt-14 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Like what you see? Every job starts with a free site visit and a fixed written quote.{" "}
          <Link href="/contact" className="text-turf underline underline-offset-4">
            Tell us about your project
          </Link>{" "}
          and we&apos;ll take it from there.
        </p>
      </section>

      <CTA title="Your driveway could be next." text="Send us a few details and we'll arrange a free, no-obligation quote." />
    </>
  );
}
