import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, BUSINESS, getService } from "@/lib/services";
import { AREAS, getArea } from "@/lib/areas";
import { SITE_URL, faqSchema } from "@/lib/schema";
import QuoteForm from "@/components/QuoteForm";
import Faqs from "@/components/Faqs";
import CTA from "@/components/CTA";

export const dynamicParams = false;

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: area.h1,
    description: area.description,
    alternates: { canonical: `${SITE_URL}/areas/${area.slug}` },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const focus = area.focus.flatMap((f) => {
    const s = getService(f.slug);
    return s ? [{ service: s, text: f.text }] : [];
  });
  const others = SERVICES.filter((s) => !area.focus.some((f) => f.slug === s.slug));

  const schema = {
    "@context": "https://schema.org",
    ...faqSchema(area.faqs),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bond border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="eyebrow mb-4">Areas we cover / {area.name}</p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl tracking-tight max-w-3xl">
            {area.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft leading-relaxed">{area.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#quote" className="btn-slab">Get a free quote</a>
            <a href={`tel:${BUSINESS.phoneHref}`} className="btn-ghost">Call {BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-5">
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl md:text-3xl tracking-tight">
            Working in {area.name}
          </h2>
          {area.working.map((p, i) => (
            <p key={i} className="text-ink-soft leading-relaxed">{p}</p>
          ))}

          <dl className="grid gap-4 border-l-4 border-turf bg-white p-5 sm:grid-cols-2">
            <div>
              <dt className="font-[family-name:var(--font-mono)] text-[0.66rem] uppercase tracking-[0.16em] text-ink-soft">
                Including
              </dt>
              <dd className="mt-1 text-sm leading-relaxed">{area.nearby.join(" · ")}</dd>
            </div>
            <div>
              <dt className="font-[family-name:var(--font-mono)] text-[0.66rem] uppercase tracking-[0.16em] text-ink-soft">
                Dropped kerbs approved by
              </dt>
              <dd className="mt-1 text-sm leading-relaxed">{area.council}</dd>
            </div>
          </dl>

          <div className="pt-8">
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl md:text-3xl tracking-tight">
              What we do here
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {focus.map(({ service, text }) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group border-2 border-tarmac bg-white p-5 transition-colors hover:bg-tarmac hover:text-paper"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">{service.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft group-hover:text-paper/75">{text}</p>
                </Link>
              ))}
            </div>
            <p className="mt-8 eyebrow mb-3">Also in {area.name}</p>
            <ul className="flex flex-wrap gap-2">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-block border border-line bg-white px-3 py-1.5 text-sm hover:border-tarmac hover:text-turf"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8">
            <h2 className="eyebrow mb-4">Common questions</h2>
            <Faqs faqs={area.faqs} />
          </div>
        </div>

        <aside id="quote" className="lg:col-span-2">
          <div className="border-2 border-tarmac bg-stone p-6 lg:sticky lg:top-24">
            <p className="eyebrow mb-2">Free quote</p>
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl tracking-tight">
              Get a price in {area.name}
            </h2>
            <div className="mt-5">
              <QuoteForm />
            </div>
          </div>
        </aside>
      </section>

      <CTA
        title={`Planning a job in ${area.name}?`}
        text="Tell us what you have in mind and we'll arrange a free site visit and a fixed written quote."
      />
    </>
  );
}
