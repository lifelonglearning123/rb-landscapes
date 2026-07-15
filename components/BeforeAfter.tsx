"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import type { Stage } from "@/lib/portfolio";
import { STAGE_LABEL } from "@/lib/portfolio";

/**
 * Draggable before/after reveal. The "after" image sits underneath, full-size;
 * the "before" image is clipped from the right by the handle position (so no
 * squashing). Works with pointer drag, click-to-position, and keyboard.
 */
export default function BeforeAfter({
  before,
  after,
  priority = false,
  sizes = "(min-width: 1024px) 640px, 100vw",
}: {
  before: Stage;
  after: Stage;
  priority?: boolean;
  sizes?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const beforeLabel = STAGE_LABEL[before.kind];
  const afterLabel = STAGE_LABEL[after.kind];

  return (
    <div
      ref={ref}
      className="ba group relative aspect-[4/3] w-full select-none overflow-hidden bg-tarmac"
      onPointerDown={(e) => {
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        setDragging(true);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => dragging && setFromClientX(e.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      {/* AFTER (base layer) */}
      <Image
        src={after.src}
        alt={after.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        draggable={false}
      />

      {/* BEFORE (clipped from the right by the handle) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Corner labels */}
      <span className="pointer-events-none absolute left-3 top-3 z-20 bg-tarmac/85 px-2 py-1 font-[family-name:var(--font-mono)] text-[0.62rem] uppercase tracking-[0.18em] text-paper">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 z-20 bg-turf px-2 py-1 font-[family-name:var(--font-mono)] text-[0.62rem] uppercase tracking-[0.18em] text-paper">
        {afterLabel}
      </span>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 z-20 w-0.5 bg-paper"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div
          role="slider"
          tabIndex={0}
          aria-label={`Reveal ${beforeLabel.toLowerCase()} and ${afterLabel.toLowerCase()}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
            else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
            else if (e.key === "Home") setPos(0);
            else if (e.key === "End") setPos(100);
          }}
          className="pointer-events-auto absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center bg-paper text-tarmac shadow-[0_2px_10px_rgba(24,28,34,0.45)] outline-none ring-turf transition-transform focus-visible:ring-2 group-hover:scale-105"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6 4 12l5 6M15 6l5 6-5 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}
