import Link from "next/link";
import { BUSINESS, SERVICES, AREAS } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="bg-tarmac-deep text-paper bond-dark">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-display)] font-extrabold text-xl">
            R&amp;B LANDSCAPES &amp; DRIVEWAYS
          </p>
          <p className="mt-2 text-sand font-[family-name:var(--font-mono)] text-xs tracking-[0.18em] uppercase">
            {BUSINESS.tagline}
          </p>
          <address className="mt-5 not-italic text-sm leading-relaxed text-paper/75">
            {BUSINESS.address.locality}, {BUSINESS.address.region} {BUSINESS.address.postcode}
            <br />
            <a href={`tel:${BUSINESS.phoneHref}`} className="hover:text-paper underline decoration-turf-bright">
              {BUSINESS.phone}
            </a>{" "}
            ·{" "}
            <a href={`tel:${BUSINESS.landlineHref}`} className="hover:text-paper underline decoration-turf-bright">
              {BUSINESS.landline}
            </a>
            <br />
            <a href={`mailto:${BUSINESS.email}`} className="hover:text-paper underline decoration-turf-bright break-all">
              {BUSINESS.email}
            </a>
          </address>
        </div>

        <div>
          <p className="eyebrow !text-turf-bright mb-4">Services</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-paper/75 hover:text-paper">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-turf-bright mb-4">Areas we cover</p>
          <p className="text-sm text-paper/75 leading-relaxed">{AREAS.join(" · ")}</p>
          <Link href="/contact" className="btn-slab btn-slab-light mt-6 text-sm">
            Get a free quote
          </Link>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-paper/50 font-[family-name:var(--font-mono)]">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
