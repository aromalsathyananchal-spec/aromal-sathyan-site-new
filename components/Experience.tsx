import SectionHeading from "./SectionHeading";
import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Professional experience" />
        <ol className="relative border-l border-white/15 pl-8">
          {experience.map((job) => (
            <li key={`${job.role}-${job.period}`} className="mb-12 last:mb-0">
              <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-brand" />
              <p className="text-sm font-medium text-brand">{job.period}</p>
              <h3 className="mt-1 text-xl font-semibold">{job.role}</h3>
              <p className="text-sm text-muted">{job.org}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/80">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
