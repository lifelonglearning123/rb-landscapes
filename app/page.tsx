import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES, BUSINESS } from "@/lib/services";
import { AREAS } from "@/lib/areas";
import { FEATURED, PORTFOLIO_STATS } from "@/lib/portfolio";
import { SITE_URL, faqSchema } from "@/lib/schema";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";
import Faqs from "@/components/Faqs";

export const metadata: Metadata = {
  description:
    "Landscaper in Trowbridge: block paving, resin and tarmac driveways, patios, fencing, decking, walls and drainage across Wiltshire, Bath and Somerset. Free quotes.",
  alternates: { canonical: SITE_URL },
};

const WHY = [
  {
    title: "Groundwork first",
    text: "Correct excavation depths, compacted sub-bases and drainage designed in. It's the part you never see and the reason the surface stays put.",
  },
  {
    title: "One team, in-house",
    text: "Groundworks, paving, brickwork, fencing and decking done by our own team — not a chain of subcontractors.",
  },
  {
    title: "Fixed written quotes",
    text: "A free site visit, no call-out fee, and a clear written price before we start.",
  },
  {
    title: "A phone that gets answered",
    text: "Call any time — the line is answered around the clock, and we usually reply to enquiries the same working day.",
  },
];

const FAQS = [
  {
    q: "Do you cover Bath BA1?",
    a: "Yes. Bath BA1 — the city centre, Lansdown, Weston, Larkhall and out along the A4 to Batheaston and Bathford — is about 12 miles from our Trowbridge base. The site visit and quote are free there just as they are here.",
  },
  {
    q: "How quickly can you come out?",
    a: "We usually reply the same working day and arrange a site visit at a time that suits you. You can also book a visit slot online.",
  },
  {
    q: "Do you give free quotes?",
    a: "Yes. The site visit and written quote are free with no obligation, and there's no call-out fee.",
  },
  {
    q: "What areas do you cover around Trowbridge?",
    a: "Bradford-on-Avon, Westbury, Melksham, Frome, Warminster, Corsham, Bath, Radstock, Chippenham, Calne, Shepton Mallet, Malmesbury, Wells and Swindon, plus the villages around them.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Free site visit & quote",
    text: "Call, book online, or send the form. We visit, measure up, talk through options and materials, and send a fixed written quote — no surprises later.",
  },
  {
    step: "02",
    title: "The groundwork",
    text: "Excavation to the right depth, drainage designed in, and a properly compacted sub-base. It's the part you never see and the reason our work lasts.",
  },
  {
    step: "03",
    title: "The build",
    text: "Laid, jointed and finished by our own team — then swept up, cleared away, and walked through with you before we call it done.",
  },
];

const STATS = [
  { n: `${PORTFOLIO_STATS.projects}`, label: "Recent projects" },
  { n: `${SERVICES.length}`, label: "Services, one team" },
  { n: "Free", label: "Quotes · no call-out fee" },
  { n: "Wilts", label: "& surrounding counties" },
];

export default function Home() {
  const schema = { "@context": "https://schema.org", ...faqSchema(FAQS) };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Photographic hero */}
      <section className="relative isolate overflow-hidden bg-tarmac text-paper">
        <Image
          src="/portfolio/render-bay-resin/2-after.jpg"
          alt="A finished resin-bound driveway in the sun at a rendered detached house"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 hero-scrim" />
        <div className="absolute inset-0 grain" />
        <div className="absolute inset-0 bond-dark opacity-40" />

        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-6xl items-end px-5 pb-16 pt-28 md:min-h-[780px] md:items-center md:pb-24">
          <div className="max-w-3xl">
            <h1 className="eyebrow mb-5 !text-turf-bright">Landscaper in Trowbridge</h1>
            <p className="font-[family-name:var(--font-display)] text-[2.25rem] font-extrabold leading-[0.98] tracking-tight sm:text-6xl sm:leading-[0.95] md:text-7xl">
              When we build,
              <br />
              we build <span className="text-turf-bright">to last.</span>
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/85">
              Block paving, resin and tarmac driveways, patios, fencing and full garden
              transformations across Trowbridge and Wiltshire — built on proper groundwork by a team
              that answers the phone.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-slab btn-slab-light">
                Get a free quote
              </Link>
              <Link href="/portfolio" className="btn-ghost !border-paper !text-paper hover:!bg-paper hover:!text-tarmac">
                See our work
              </Link>
            </div>
            <p className="mt-10 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-paper/70">
              Free quotes, no call-out fees · Find us on Bark · Facebook · MyBuilder
            </p>
          </div>
        </div>
      </section>

      {/* Trust / stat band */}
      <section className="border-b border-paper/10 bg-tarmac-deep text-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-paper/10 md:grid-cols-4 md:divide-y-0">
          {STATS.map((s) => (
            <div key={s.label} className="px-5 py-6 md:py-7">
              <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-turf-bright md:text-4xl">
                {s.n}
              </p>
              <p className="mt-1 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-paper/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services in running bond */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">What we build</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
              Laid like our paving: one solid course at a time.
            </h2>
          </div>
          <Link
            href="/services"
            className="shrink-0 font-[family-name:var(--font-mono)] text-sm text-turf underline underline-offset-4"
          >
            All services →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-9">
          {SERVICES.map((s, i) => {
            const row = Math.floor(i / 2);
            const offsetRow = row % 2 === 1;
            const first = i % 2 === 0;
            const colStart = offsetRow
              ? first
                ? "md:col-start-2"
                : "md:col-start-6"
              : first
                ? "md:col-start-1"
                : "md:col-start-5";
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group md:col-span-4 ${colStart} border-2 border-tarmac bg-white p-6 transition-colors hover:bg-tarmac hover:text-paper`}
              >
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft group-hover:text-paper/75">
                  {s.short}
                </p>
                <span className="mt-4 inline-block font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.16em] text-turf group-hover:text-turf-bright">
                  View service →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Recent transformations — before / after */}
      <section className="border-y border-line bg-stone">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3">Recent work</p>
              <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
                Before, during, after. Drag to see the difference.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="shrink-0 font-[family-name:var(--font-mono)] text-sm text-turf underline underline-offset-4"
            >
              Full portfolio →
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((p, i) => (
              <ProjectCard key={p.slug} project={p} priority={i === 0} />
            ))}
          </div>

          <div className="mt-12">
            <Link href="/portfolio" className="btn-slab">
              See the full portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow mb-3">How a job runs</p>
        <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
          Three stages. The middle one is why it lasts.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PROCESS.map((p) => (
            <div key={p.step} className="border-t-4 border-turf pt-5">
              <span className="font-[family-name:var(--font-mono)] text-sm text-turf">{p.step}</span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow mb-3">Why us</p>
          <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
            What you get when you call us.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <div key={w.title} className="border-l-4 border-turf bg-white p-5">
                <h3 className="font-[family-name:var(--font-display)] font-bold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
            <p className="font-[family-name:var(--font-display)] font-bold">What customers say</p>
            <a
              href={BUSINESS.hasMap}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-mono)] text-sm text-turf underline underline-offset-4"
            >
              Read our reviews on Google →
            </a>
            <a
              href={BUSINESS.reviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-mono)] text-sm text-ink-soft underline underline-offset-4 hover:text-turf"
            >
              Leave a review
            </a>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="border-t border-line bg-stone">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow mb-3">Where we work</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
                Based in Trowbridge. Building across Wiltshire, Bath and Somerset.
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Our reputation in Wiltshire is built on exceptional customer support, perfect
                finishes and top-quality materials. If you&apos;re near one of these towns, you&apos;re
                in our patch — and if you&apos;re not sure, just ask.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {AREAS.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="block border border-line bg-white px-4 py-3 font-[family-name:var(--font-mono)] text-sm hover:border-tarmac hover:text-turf"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="eyebrow mb-3">Common questions</p>
        <h2 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
          Before you call.
        </h2>
        <Faqs faqs={FAQS} />
      </section>

      <CTA />
    </>
  );
}
