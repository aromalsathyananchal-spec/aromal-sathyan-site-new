import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#home" className="transition hover:text-brand">Back to top ↑</a>
      </div>
    </footer>
  );
}
