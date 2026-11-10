import SectionHeading from "./SectionHeading";
import { education, certifications } from "@/data/site";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Education" title="Academic background" />
          <ul className="space-y-6">
            {education.map((e) => (
              <li key={e.degree} className={e.detail ? "rounded-xl border border-brand/40 p-6" : ""}>
                <p className="text-sm text-brand">{e.period}</p>
                <h3 className="mt-1 text-lg font-semibold">{e.degree}</h3>
                <p className="text-sm text-muted">{e.school}</p>
                {e.detail && <p className="mt-3 text-sm leading-relaxed text-white/80">{e.detail}</p>}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-brand">Certifications</h3>
          <ul className="space-y-4">
            {certifications.map((c) => (
              <li key={c.id} className="rounded-xl border border-white/10 p-6">
                <h4 className="font-semibold">{c.name}</h4>
                <p className="mt-1 text-sm text-muted">{c.issuer} · {c.date}</p>
                <p className="mt-1 text-xs text-muted">Certificate ID: {c.id}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
