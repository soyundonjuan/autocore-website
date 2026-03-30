import { useState } from "react";
import { NavLink } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import { demoLink, navLinks } from "../data/siteData";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <BrandLogo compact />

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[var(--color-brand-900)] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Abrir menú"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-[var(--color-brand-900)]" : "text-slate-700 hover:text-[var(--color-brand-900)]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="inline-flex items-center rounded-full bg-[var(--color-accent-500)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-accent-600)]"
            href={demoLink}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar demo
          </a>
        </nav>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5" aria-label="Móvil">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-[var(--color-brand-50)] text-[var(--color-brand-900)]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[var(--color-brand-900)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              className="mt-3 inline-flex items-center justify-center rounded-full bg-[var(--color-accent-500)] px-5 py-3 text-sm font-medium text-white"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar demo
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
