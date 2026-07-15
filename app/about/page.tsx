import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "R&B Landscapes and Driveways is a Trowbridge-based team of builders and installers with a reputation across Wiltshire for exceptional customer support and perfect finishes.",
};

const VALUES = [
  {
    title: "Groundwork first",
    text: "Every driveway, patio and wall we build starts below the surface — correct excavation depths, compacted sub-bases and drainage designed in. It's why our tagline isn't marketing; it's method.",
  },
  {
    title: "One team, in-house",
    text: "Groundworks, paving, brickwork, fencing, decking and turfing handled by our own seasoned builders and installers — not a chain of subcontractors.",
  },
  {
    title: "Straight talking",
    text: "Fixed written quotes, honest advice on materials (including the cheaper option when it's the right one), and clear communication at every phase of the job.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bond border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="eyebrow mb-4">About</p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl tracking-tight max-w-3xl">
            A Trowbridge team with a Wiltshire-wide reputation.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft leading-relaxed">
            R&amp;B Landscapes and Driveways grew from a simple idea: do the unglamorous parts of
            the job properly and the finished work looks after itself. Whether it&apos;s an
            improvement to your garden or a full revamp, our team turns your vision into something
            solid — and our reputation comes from exceptional customer support, perfect finishes
            and top-quality supplies.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="eyebrow mb-3">How we work</p>
        <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl tracking-tight">
          Three things we won&apos;t compromise on.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="border-t-4 border-turf pt-5">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl">{v.title}</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 font-[family-name:var(--font-mono)] text-xs tracking-[0.16em] uppercase text-ink-soft">
          You can also find us on Bark, Facebook &amp; MyBuilder
        </p>
      </section>

      <CTA title="See what we can do for your garden." />
    </>
  );
}
