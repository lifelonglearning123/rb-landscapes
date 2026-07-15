import Image from "next/image";
import Link from "next/link";
import { SERVICES, AREAS, BUSINESS } from "@/lib/services";
import { FEATURED, PORTFOLIO_STATS } from "@/lib/portfolio";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";

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
  return (
    <>
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
            <p className="eyebrow mb-5 !text-turf-bright">
              Driveways · Patios · Landscaping — Trowbridge, Wiltshire
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-[2.25rem] font-extrabold leading-[0.98] tracking-tight sm:text-6xl sm:leading-[0.95] md:text-7xl">
              When we build,
              <br />
              we build <span className="text-turf-bright">to last.</span>
            </h1>
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

      {/* Areas */}
      <section className="border-t border-line bg-stone">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow mb-3">Where we work</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
                Based in Trowbridge. Building across Wiltshire and beyond.
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Our reputation in Wiltshire is built on exceptional customer support, perfect
                finishes and top-quality materials. If you&apos;re near one of these towns, you&apos;re
                in our patch — and if you&apos;re not sure, just ask.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {AREAS.map((a) => (
                <li
                  key={a}
                  className="border border-line bg-white px-4 py-3 font-[family-name:var(--font-mono)] text-sm"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
