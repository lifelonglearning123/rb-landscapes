export default function Faqs({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
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
  );
}
