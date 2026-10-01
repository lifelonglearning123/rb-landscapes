import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_SERVICES, getService, BUSINESS } from "@/lib/services";
import { AREA_PAGES } from "@/lib/areas";
import { projectsForService } from "@/lib/portfolio";
import ProjectCard from "@/components/ProjectCard";
import QuoteForm from "@/components/QuoteForm";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rblandscapesanddriveways.com";

const DEFAULT_PRICING =
  "We don't publish a price list, because no two sites cost the same to build on. Your quote comes from a free site survey: we measure the area, check the ground, levels, drainage and access, and agree materials with you. You then get a fixed written price for the whole job before anything is booked.";

export function generateStaticParams() {
  return ALL_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.headline,
    description: service.intro.slice(0, 155),
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = projectsForService(slug);
  const relatedServices = (service.related ?? [])
    .map((s) => getService(s))
    .filter((s) => s !== undefined);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        description: service.intro,
        provider: { "@id": `${SITE_URL}/#business` },
        serviceType: service.name,
        areaServed: AREA_PAGES.map((a) => ({ "@type": "Place", name: a.name })),
        url: `${SITE_URL}/services/${service.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
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
            <Link href="/services" className="hover:underline">Services</Link> / {service.name}
          </p>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl tracking-tight max-w-3xl">
            {service.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft leading-relaxed">{service.intro}</p>
          <p className="mt-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-ink-soft">
            {BUSINESS.address.locality}-based · {service.name} across Wiltshire, Bath &amp; Somerset
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#quote" className="btn-slab">Get a free quote</a>
            <a href={`tel:${BUSINESS.phoneHref}`} className="btn-ghost">Call {BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-5">
          {service.body.map((p, i) => (
            <p key={i} className="text-ink-soft leading-relaxed">{p}</p>
          ))}

          {service.steps && (
            <div className="pt-6">
              <p className="eyebrow mb-4">What {service.name.toLowerCase()} involves</p>
              <ol className="space-y-5">
                {service.steps.map((s, i) => (
                  <li key={s.title} className="border-t-4 border-turf pt-4">
                    <span className="font-[family-name:var(--font-mono)] text-sm text-turf">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-1 font-[family-name:var(--font-display)] font-bold">{s.title}</h2>
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="pt-6 space-y-4">
            {service.benefits.map((b) => (
              <div key={b.title} className="border-l-4 border-turf bg-white p-5">
                <h2 className="font-[family-name:var(--font-display)] font-bold">{b.title}</h2>
                <p className="mt-1 text-sm text-ink-soft leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <p className="eyebrow mb-4">What it costs</p>
            <p className="text-ink-soft leading-relaxed">{service.pricing ?? DEFAULT_PRICING}</p>
          </div>

          <div className="pt-8">
            <p className="eyebrow mb-4">Common questions</p>
            <div className="space-y-3">
              {service.faqs.map((f) => (
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

          <div className="pt-8">
            <p className="eyebrow mb-4">Areas we do this in</p>
            <ul className="flex flex-wrap gap-2">
              {AREA_PAGES.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="inline-block border border-line bg-white px-3 py-2 font-[family-name:var(--font-mono)] text-xs hover:border-tarmac"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {relatedServices.length > 0 && (
            <div className="pt-8">
              <p className="eyebrow mb-4">Related services</p>
              <ul className="space-y-2">
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="font-[family-name:var(--font-mono)] text-sm text-turf underline underline-offset-4"
                    >
                      {s.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside id="quote" className="lg:col-span-2">
          <div className="border-2 border-tarmac bg-stone p-6 lg:sticky lg:top-24">
            <p className="eyebrow mb-2">Free quote</p>
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl tracking-tight">
              Get a price for {service.name.toLowerCase()}
            </h2>
            <div className="mt-5">
              <QuoteForm defaultService={service.name} />
            </div>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-stone">
          <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow mb-3">Recent {service.name.toLowerCase()}</p>
                <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
                  See it before and after.
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
              {related.slice(0, 3).map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
