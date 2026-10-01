import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_SERVICES, getService, BUSINESS } from "@/lib/services";
import { AREA_PAGES, getArea, areaFaqs } from "@/lib/areas";
import QuoteForm from "@/components/QuoteForm";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rblandscapesanddriveways.com";

export function generateStaticParams() {
  return AREA_PAGES.map((a) => ({ slug: a.slug }));
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
    title: `Paving contractor in ${area.name}`,
    description: area.intro.slice(0, 155),
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

  const faqs = areaFaqs(area);
  const featuredSlugs = new Set(area.featured.map((f) => f.slug));
  const otherServices = ALL_SERVICES.filter((s) => !featuredSlugs.has(s.slug));

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="bond border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="eyebrow mb-4">
            <Link href="/areas" className="hover:underline">Areas</Link> / {area.town}
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl tracking-tight max-w-3xl">
            Paving contractor in {area.name}
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
          {area.local.map((p, i) => (
            <p key={i} className="text-ink-soft leading-relaxed">{p}</p>
          ))}
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-ink-soft">
            Including {area.places.join(" · ")}
          </p>

          <div className="pt-8">
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl md:text-3xl tracking-tight">
              What we do here
            </h2>
            <div className="mt-5 space-y-4">
              {area.featured.map((f) => {
                const service = getService(f.slug);
                if (!service) return null;
                return (
                  <Link
                    key={f.slug}
                    href={`/services/${f.slug}`}
                    className="block border-l-4 border-turf bg-white p-5 hover:bg-stone transition-colors"
                  >
                    <h3 className="font-[family-name:var(--font-display)] font-bold">{service.name}</h3>
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed">{f.note}</p>
                  </Link>
                );
              })}
            </div>
            <p className="mt-6 text-sm text-ink-soft leading-relaxed">
              Everything else we offer is available in {area.town} too:
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-block border border-line bg-white px-3 py-2 font-[family-name:var(--font-mono)] text-xs hover:border-tarmac"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-soft leading-relaxed">
              Dropped kerbs and anything else touching the public highway in {area.town} are a
              matter for {area.authority}.
            </p>
          </div>

          <div className="pt-8">
            <p className="eyebrow mb-4">Common questions</p>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="border border-line bg-white p-5 group">
                  <summary className="font-[family-name:var(--font-display)] font-bold cursor-pointer list-none flex justify-between items-center gap-4">
                    {f.q}
                    <span className="text-turf font-[family-name:var(--font-mono)] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <aside id="quote" className="lg:col-span-2">
          <div className="border-2 border-tarmac bg-stone p-6 lg:sticky lg:top-24">
            <p className="eyebrow mb-2">Free quote</p>
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl tracking-tight">
              Get a price for work in {area.town}
            </h2>
            <div className="mt-5">
              <QuoteForm />
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
