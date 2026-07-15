import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl tracking-tight">
        This page hasn&apos;t been laid yet.
      </h1>
      <p className="mt-3 text-ink-soft">The page you&apos;re after doesn&apos;t exist — head back to solid ground.</p>
      <Link href="/" className="btn-slab mt-8">Back to home</Link>
    </section>
  );
}
