import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/portfolio";
import { firstLast, STAGE_LABEL } from "@/lib/portfolio";
import BeforeAfter from "@/components/BeforeAfter";

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const single = project.stages.length < 2;
  const { before, after } = firstLast(project);
  const showStrip = project.stages.length > 2;

  return (
    <article className="reveal">
      <div className="frame frame-turf">
        {single ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-tarmac">
            <Image
              src={project.stages[0].src}
              alt={project.stages[0].alt}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              priority={priority}
              className="object-cover"
            />
            <span className="tag tag-turf absolute right-3 top-3">
              {STAGE_LABEL[project.stages[0].kind]}
            </span>
          </div>
        ) : (
          <BeforeAfter before={before} after={after} priority={priority} />
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {project.serviceSlug ? (
          <Link href={`/services/${project.serviceSlug}`} className="tag tag-turf hover:opacity-90">
            {project.serviceLabel}
          </Link>
        ) : (
          <span className="tag tag-turf">{project.serviceLabel}</span>
        )}
        <span className="tag">{project.stages.length} photos</span>
      </div>

      <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
        {project.title}
      </h3>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-soft">{project.summary}</p>

      {showStrip && (
        <div className="mt-5">
          <p className="eyebrow mb-2 !text-ink-soft">The groundwork</p>
          <ol className="grid grid-cols-4 gap-2">
            {project.stages.map((s, i) => (
              <li key={s.src} className="relative aspect-square overflow-hidden bg-tarmac frame">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="140px"
                  className="object-cover"
                />
                <span className="absolute inset-x-0 bottom-0 bg-tarmac/80 px-1.5 py-0.5 text-center font-[family-name:var(--font-mono)] text-[0.55rem] uppercase tracking-[0.12em] text-paper">
                  {STAGE_LABEL[s.kind]}
                  <span className="text-sand"> · {i + 1}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </article>
  );
}
