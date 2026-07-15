import Link from "next/link";
import { BUSINESS } from "@/lib/services";

// Fixed conversion bar shown on small screens only.
export default function MobileCallBar() {
  return (
    <div className="callbar fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-paper/15 bg-tarmac-deep/95 backdrop-blur md:hidden">
      <a
        href={`tel:${BUSINESS.phoneHref}`}
        className="flex items-center justify-center gap-2 py-3.5 font-[family-name:var(--font-display)] font-bold text-paper"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.24 1L6.6 10.8Z"
            fill="currentColor"
          />
        </svg>
        Call
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 border-l border-paper/15 bg-turf py-3.5 font-[family-name:var(--font-display)] font-bold text-paper"
      >
        Free quote
      </Link>
    </div>
  );
}
