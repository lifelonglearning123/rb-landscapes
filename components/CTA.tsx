import Link from "next/link";
import { BUSINESS } from "@/lib/services";

export default function CTA({
  title = "Ready to get started?",
  text = "Tell us about the job and we'll arrange a free, no-obligation quote.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-tarmac text-paper bond-dark">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20 flex flex-col md:flex-row md:items-center gap-8 md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-paper/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0">
          <Link href="/contact" className="btn-slab btn-slab-light">
            Get a free quote
          </Link>
          <a
            href={`tel:${BUSINESS.phoneHref}`}
            className="btn-ghost !border-paper !text-paper hover:!bg-paper hover:!text-tarmac"
          >
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
