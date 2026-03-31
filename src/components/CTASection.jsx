import { Link } from "react-router-dom";
import { demoLink } from "../data/siteData";

function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="cta-circuit-surface cta-circuit-surface-static rounded-[2.5rem] bg-slate-950 px-8 py-14 text-white lg:flex lg:items-center lg:justify-between lg:px-12">
        <div className="relative z-[1] max-w-2xl">
          <span className="eyebrow-dark">Siguiente paso</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Convierte el flujo de pagos en una ventaja operativa.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Agenda una demo y revisa cómo Autocore puede integrarse con tu stack actual para cobrar más rápido y con
            menos fricción.
          </p>
        </div>
        <div className="relative z-[1] mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0">
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent-500)] px-6 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-600)]"
          >
            Solicitar demo
          </a>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-base font-medium text-white transition hover:bg-white/10"
          >
            Hablar con ventas
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
