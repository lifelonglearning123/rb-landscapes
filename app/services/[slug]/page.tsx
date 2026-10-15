import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService, BUSINESS } from "@/lib/services";
import { AREAS, AREAS_SERVED } from "@/lib/areas";
import { SITE_URL, BUSINESS_ID, faqSchema } from "@/lib/schema";
import { projectsForService } from "@/lib/portfolio";
import ProjectCard from "@/components/ProjectCard";
import QuoteForm from "@/components/QuoteForm";
import Faqs from "@/components/Faqs";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
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
    title: service.h1,
    description: service.description,
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

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: service.name,
        name: service.h1,
        description: service.intro,
        provider: { "@id": BUSINESS_ID },
        areaServed: AREAS_SERVED.map((name) => ({ "@type": "Place", name })),
        url: `${SITE_URL}/services/${service.slug}`,
      },
      faqSchema(service.faqs),
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
            {service.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft leading-relaxed">{service.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#quote" className="btn-slab">Get a free quote</a>
            <a href={`tel:${BUSINESS.phoneHref}`} className="btn-ghost">Call {BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-5">
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl md:text-3xl tracking-tight">
            {service.involvesHeading}
          </h2>
          <ol className="space-y-4">
            {service.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="font-[family-name:var(--font-mono)] text-sm text-turf pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-[family-name:var(--font-display)] font-bold leading-tight">{s.title}</p>
                  <p className="mt-1 text-sm text-ink-soft leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="pt-4 space-y-5">
            {service.body.map((p, i) => (
              <p key={i} className="text-ink-soft leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="pt-6 space-y-4">
            {service.benefits.map((b) => (
              <div key={b.title} className="border-l-4 border-turf bg-white p-5">
                <h3 className="font-[family-name:var(--font-display)] font-bold">{b.title}</h3>
                <p className="mt-1 text-sm text-ink-soft leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="pt-8 space-y-4">
            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl md:text-3xl tracking-tight">
              What it costs
            </h2>
            {service.cost.map((p, i) => (
              <p key={i} className="text-ink-soft leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="pt-8">
            <h2 className="eyebrow mb-4">Common questions</h2>
            <Faqs faqs={service.faqs} />
          </div>
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

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="eyebrow mb-3">Where we work</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight md:text-4xl">
            Areas we do this in
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
            We&apos;re based in Trowbridge and do {service.name.toLowerCase()} across west Wiltshire,
            Bath and north-east Somerset. Each area page covers what&apos;s particular about working
            there.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            <li>
              <Link
                href="/"
                className="block border border-line bg-white px-4 py-3 font-[family-name:var(--font-mono)] text-sm hover:border-tarmac hover:text-turf"
              >
                Trowbridge
              </Link>
            </li>
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
