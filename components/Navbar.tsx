"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";

function ArsLogo() {
  return (
    <svg width={44} height={44} viewBox="0 0 120 120" role="img" aria-label="Aromal Sathyan, ARS logo" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="114" height="114" rx="22" fill="#171717" stroke="#F0004F" strokeWidth="4" />
      <text x="60" y="76" textAnchor="middle" fontFamily="var(--font-montserrat), Arial, sans-serif" fontWeight="800" fontSize="46" letterSpacing="2">
        <tspan fill="#FFFFFF">AR</tspan>
        <tspan fill="#F0004F">S</tspan>
      </text>
      <rect x="26" y="88" width="68" height="4" rx="2" fill="#F0004F" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" aria-label="Back to top">
          <ArsLogo />
        </a>

        <ul className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-muted transition hover:text-brand">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/10 bg-ink px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)} className="block py-2 text-white hover:text-brand">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
