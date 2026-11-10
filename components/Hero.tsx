import { Download, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="fade-up text-sm font-semibold uppercase tracking-[0.15em]">{profile.label}</p>
          <h1 className="fade-up mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">
            <span className="text-brand">Aromal</span> <span>Sathyan</span>
          </h1>
          <p className="fade-up mt-4 text-lg font-bold text-brand sm:text-xl">{profile.title}</p>
          <p className="fade-up mt-6 max-w-xl leading-relaxed text-white/80">{profile.intro}</p>
          <p className="fade-up mt-4 text-sm font-medium text-white">{profile.availability}</p>

          <div className="fade-up mt-10 flex flex-wrap gap-4">
            <a href={profile.resumePath} download className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-soft">
              <Download size={16} /> Download CV
            </a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand/10">
              Contact Me
            </a>
          </div>

          <div className="fade-up mt-8 flex gap-3">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="flex h-11 w-11 items-center justify-center rounded-md bg-surface text-brand transition hover:bg-brand/15">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send email" className="flex h-11 w-11 items-center justify-center rounded-md bg-surface text-brand transition hover:bg-brand/15">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="fade-up mx-auto w-full max-w-sm">
          <img src="/profile.jpg" alt="Aromal Sathyan" className="aspect-[3/4] w-full rounded-2xl border border-brand/40 object-cover object-top" />
        </div>
      </div>
    </section>
  );
}
