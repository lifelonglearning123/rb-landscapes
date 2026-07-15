"use client";

import Link from "next/link";
import { useState } from "react";
import { BUSINESS } from "@/lib/services";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Get a quote" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between py-3.5 gap-4">
          <Link href="/" className="leading-tight" onClick={() => setOpen(false)}>
            <span className="block font-[family-name:var(--font-display)] font-extrabold text-lg sm:text-xl tracking-tight">
              R&amp;B <span className="text-turf">LANDSCAPES</span> &amp; DRIVEWAYS
            </span>
            <span className="hidden sm:block font-[family-name:var(--font-mono)] text-[0.62rem] tracking-[0.22em] uppercase text-ink-soft">
              Trowbridge · Wiltshire
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {NAV.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-sm hover:text-turf transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS.phoneHref}`}
              className="font-[family-name:var(--font-mono)] text-sm text-turf hover:underline"
            >
              {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn-slab !py-2.5 !px-4 text-sm">
              Get a free quote
            </Link>
          </nav>

          <button
            className="md:hidden p-2 -mr-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="block w-6 h-0.5 bg-tarmac mb-1.5" />
            <span className="block w-6 h-0.5 bg-tarmac mb-1.5" />
            <span className="block w-6 h-0.5 bg-tarmac" />
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-5 flex flex-col gap-4 border-t border-line pt-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${BUSINESS.phoneHref}`} className="btn-slab text-center">
              Call {BUSINESS.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
