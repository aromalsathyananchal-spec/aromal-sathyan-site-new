import SectionHeading from "./SectionHeading";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Services" title="How I can help" />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-surface p-8 transition hover:border-brand/60">
              <h3 className="text-xl font-semibold text-brand">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-white/75">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
