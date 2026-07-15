import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService, BUSINESS } from "@/lib/services";
import QuoteForm from "@/components/QuoteForm";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rblandscapesanddriveways.com";

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

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        description: service.intro,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: "Wiltshire, UK",
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

          <div className="pt-6 space-y-4">
            {service.benefits.map((b) => (
              <div key={b.title} className="border-l-4 border-turf bg-white p-5">
                <h2 className="font-[family-name:var(--font-display)] font-bold">{b.title}</h2>
                <p className="mt-1 text-sm text-ink-soft leading-relaxed">{b.text}</p>
              </div>
            ))}
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
    </>
  );
}
