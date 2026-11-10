import SectionHeading from "./SectionHeading";
import { focusAreas, skillGroups, languages, interests, personalInterests } from "@/data/site";

export default function Expertise() {
  return (
    <section id="expertise" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Expertise" title="Focus areas and skills" />

        <div className="grid gap-6 md:grid-cols-2">
          {focusAreas.map((area) => (
            <div key={area.title} className="rounded-xl border border-white/10 bg-ink p-6">
              <h3 className="text-lg font-semibold text-brand">{area.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {area.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-white/15 px-3 py-1 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">Languages</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {languages.map((l) => (
                <li key={l.language}><span className="font-medium">{l.language}:</span> {l.level}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">Career interests</h3>
            <p className="mt-1 text-xs text-muted">Areas I am exploring. These are interests, not established professional skills.</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {interests.map((i) => (
                <li key={i} className="rounded-full border border-dashed border-muted/60 px-3 py-1 text-sm text-muted">{i}</li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-brand">Personal interests</h3>
            <ul className="mt-4 space-y-1 text-sm text-white/80">
              {personalInterests.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
