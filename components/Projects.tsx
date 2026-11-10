import SectionHeading from "./SectionHeading";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Projects" title="MBA projects & case studies" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="flex flex-col rounded-xl border border-white/10 bg-ink p-7 transition hover:border-brand/60">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{p.type}</p>
              <h3 className="mt-2 text-lg font-semibold text-brand">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-white/80">{p.summary}</p>
              {p.recommendations && <p className="mt-3 text-sm leading-relaxed text-white/70">{p.recommendations}</p>}
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.topics.map((t) => (
                  <li key={t} className="rounded-full bg-brand/10 px-3 py-1 text-xs text-white/90">{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
