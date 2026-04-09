import { useState } from "react";
import { NavLink } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import { demoLink, loginLink, navLinks } from "../data/siteData";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`sticky top-0 border-b border-slate-200/80 bg-white/90 backdrop-blur ${open ? "z-[70]" : "z-40"}`}>
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
            className="inline-flex items-center rounded-full border border-[var(--color-accent-200)] bg-white px-5 py-3 text-sm font-medium text-[var(--color-brand-900)] transition hover:border-[var(--color-accent-300)] hover:bg-[var(--color-accent-50)]"
            href={loginLink}
            target="_blank"
            rel="noreferrer"
          >
            Iniciar sesión
          </a>
          <a
            className="inline-flex items-center rounded-full bg-[var(--color-accent-500)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-accent-600)]"
            href={demoLink}
            target="_blank"
            rel="noreferrer"
          >
            Agendar una demo
          </a>
        </nav>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[80] lg:hidden" aria-hidden={!open}>
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-[3px]"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
          />
          <div className="absolute right-0 top-0 flex h-dvh w-[min(22rem,92vw)] flex-col overflow-y-auto border-l border-slate-200 bg-white px-5 py-5 shadow-[-18px_0_40px_rgba(15,23,42,0.16)]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <BrandLogo compact />
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[var(--color-brand-900)]"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <nav className="mt-6 flex flex-1 flex-col gap-2" aria-label="Móvil">
              {navLinks.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[var(--color-brand-50)] text-[var(--color-brand-900)]"
                        : "bg-white text-slate-700 hover:bg-slate-50 hover:text-[var(--color-brand-900)]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-6 grid gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent-200)] bg-white px-5 py-3 text-sm font-medium text-[var(--color-brand-900)]"
                href={loginLink}
                target="_blank"
                rel="noreferrer"
              >
                Iniciar sesión
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent-500)] px-5 py-3 text-sm font-medium text-white"
                href={demoLink}
                target="_blank"
                rel="noreferrer"
              >
                Agendar una demo
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
