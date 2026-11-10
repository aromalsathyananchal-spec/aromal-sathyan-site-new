import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/site";

export default function Contact() {
  const items = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Linkedin, label: "LinkedIn profile", href: profile.linkedin, external: true },
    { icon: Download, label: "Download CV (PDF)", href: profile.resumePath, download: true },
  ];

  return (
    <section id="contact" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand">Contact</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Let's work together</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Open to freelance projects and full-time roles in France and Europe. Get in touch about a market study, a business opportunity or a marketing review.
        </p>
        <ul className="mt-12 grid gap-4 text-left sm:grid-cols-2">
          {items.map(({ icon: Icon, label, href, external, download }) => (
            <li key={label}>
              <a href={href} download={download} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="flex items-center gap-3 rounded-lg border border-white/10 bg-ink p-4 transition hover:border-brand">
                <Icon size={18} className="text-brand" /> {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted">
          <MapPin size={16} /> {profile.location}
        </p>
      </div>
    </section>
  );
}
