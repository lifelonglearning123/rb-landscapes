import Link from "next/link";
import { SERVICES, AREAS, BUSINESS } from "@/lib/services";
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bond border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-24 md:pb-28">
          <p className="eyebrow mb-5">Driveways · Patios · Landscaping — Trowbridge, Wiltshire</p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold tracking-tight leading-[0.95] text-5xl sm:text-6xl md:text-7xl max-w-4xl">
            When we build,
            <br />
            we build <span className="text-turf">to last.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft leading-relaxed">
            Block paving, resin and tarmac driveways, patios, fencing and full garden
            transformations across Trowbridge and Wiltshire — built on proper groundwork by a team
            that answers the phone.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-slab">
              Get a free quote
            </Link>
            <a href={`tel:${BUSINESS.phoneHref}`} className="btn-ghost">
              Call {BUSINESS.phone}
            </a>
          </div>
          <p className="mt-10 font-[family-name:var(--font-mono)] text-xs tracking-[0.16em] uppercase text-ink-soft">
            Find us on Bark · Facebook · MyBuilder — free quotes, no call-out fees
          </p>
        </div>
      </section>

      {/* Services in running bond */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <p className="eyebrow mb-3">What we build</p>
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl tracking-tight">
              Laid like our paving: one solid course at a time.
            </h2>
          </div>
          <Link href="/services" className="font-[family-name:var(--font-mono)] text-sm text-turf underline underline-offset-4 shrink-0">
            All services →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-9">
          {SERVICES.map((s, i) => {
            const row = Math.floor(i / 2);
            const offsetRow = row % 2 === 1;
            const first = i % 2 === 0;
            const colStart = offsetRow ? (first ? "md:col-start-2" : "md:col-start-6") : first ? "md:col-start-1" : "md:col-start-5";
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group md:col-span-4 ${colStart} border-2 border-tarmac bg-white p-6 hover:bg-tarmac hover:text-paper transition-colors`}
              >
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-ink-soft group-hover:text-paper/75 leading-relaxed">
                  {s.short}
                </p>
                <span className="mt-4 inline-block font-[family-name:var(--font-mono)] text-xs tracking-[0.16em] uppercase text-turf group-hover:text-turf-bright">
                  View service →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="bg-stone border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow mb-3">How a job runs</p>
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl tracking-tight max-w-2xl">
            Three stages. The middle one is why it lasts.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {PROCESS.map((p) => (
              <div key={p.step} className="border-t-4 border-turf pt-5">
                <span className="font-[family-name:var(--font-mono)] text-sm text-turf">{p.step}</span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] font-bold text-xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-3">Where we work</p>
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl tracking-tight">
              Based in Trowbridge. Building across Wiltshire and beyond.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Our reputation in Wiltshire is built on exceptional customer support, perfect
              finishes and top-quality materials. If you&apos;re near one of these towns, you&apos;re
              in our patch — and if you&apos;re not sure, just ask.
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
      </section>

      <CTA />
    </>
  );
}
