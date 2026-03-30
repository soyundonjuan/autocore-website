import CTASection from "../components/CTASection";
import AppIcon from "../components/AppIcon";
import FaqList from "../components/FaqList";
import LogoCarousel from "../components/LogoCarousel";
import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";
import { benefits, demoLink, faqs, hotelLogos, partnerLogos, pricingItems, reasons, steps } from "../data/siteData";

const heroStats = [
  { label: "Tiempo de activación", value: "2 semanas", icon: "clock" },
  { label: "Operación", value: "24/7", icon: "sync" },
  { label: "Modelo comercial", value: "Pago por transacción", icon: "wallet" },
];

const benefitIcons = {
  "Automatización de procesos": "automation",
  Finanzas: "finance",
  "Reducción de fraudes": "fraud",
};

const reasonIcons = ["integration", "bank", "sync", "building"];
const stepIcons = ["document", "wallet", "clock"];
const pricingIcons = ["layers", "chat", "wallet", "building"];

function HomePage() {
  return (
    <>
      <section className="hero-surface overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          <Reveal className="max-w-2xl" variant="left">
            <span className="eyebrow">Pagos digitales para hoteles</span>
            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.04] tracking-tight text-[var(--color-brand-900)] md:text-6xl">
              Haz que cada reserva se cobre con más control, velocidad y rentabilidad.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Autocore conecta pasarelas de pago, cuentas bancarias, motor de reservas, Channel Manager y PMS para
              automatizar el flujo de cobro y reducir fricción operativa.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent-500)] px-6 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-600)]"
              >
                Agendar demo
              </a>
              <a
                href="#beneficios"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent-200)] bg-white px-6 py-4 text-base font-medium text-[var(--color-brand-900)] transition hover:border-[var(--color-accent-300)] hover:bg-[var(--color-accent-50)]"
              >
                Ver cómo funciona
              </a>
            </div>
            <dl className="mt-12 grid gap-5 sm:grid-cols-3">
              {heroStats.map(({ label, value, icon }) => (
                <div
                  key={`${label}-${value}`}
                  className="rounded-3xl border border-white/60 bg-white/75 p-5 shadow-[0_18px_48px_rgba(4,2,59,0.08)] backdrop-blur"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-50)] text-[var(--color-accent-600)]">
                    <AppIcon name={icon} className="h-5 w-5" />
                  </div>
                  <dt className="text-sm font-medium text-slate-500">{label}</dt>
                  <dd className="mt-2 text-2xl font-bold text-[var(--color-brand-900)]">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="relative" variant="right" delay={120}>
            <div className="absolute inset-0 rounded-[2rem] bg-[var(--color-brand-900)] shadow-[0_24px_80px_rgba(4,2,59,0.18)]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-brand-900)] p-6 text-white lg:p-8">
              <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-[var(--color-accent-500)]/30 blur-3xl" />
              <div className="absolute bottom-10 right-6 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-brand-100)]">Panel operativo</p>
                    <p className="mt-2 text-lg font-medium">Cobros automatizados</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-2 text-sm font-medium text-emerald-200">
                    Activa
                  </span>
                </div>
                <img
                  src="/assets/hero-automation.svg"
                  alt="Ilustración de flujo de pagos automatizados entre reservas, bancos y operación hotelera"
                  className="mt-8 w-full rounded-[1.75rem] border border-white/10 bg-white/5 p-4"
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-[var(--color-brand-100)]">Automatización operacional</p>
                    <p className="mt-3 text-xl font-bold">Menos intervención manual en reservas y conciliación</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-[var(--color-brand-100)]">Validación antifraude</p>
                    <p className="mt-3 text-xl font-bold">Controles bancarios en tiempo real por transacción</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Beneficios para hoteles"
              title="Optimiza tus pagos digitales en dos movimientos simples."
            />
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            Integra el ecosistema bancario con el software hotelero y automatiza procesos que hoy consumen tiempo,
            margen y capacidad operativa.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <Reveal
              key={item.title}
              as="article"
              delay={index * 90}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_48px_rgba(4,2,59,0.08)] transition duration-200 hover:-translate-y-1"
            >
              <div className="accent-chip inline-flex h-14 w-14 items-center justify-center rounded-[1.25rem]">
                <AppIcon name={benefitIcons[item.title]} className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[var(--color-brand-900)]">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-brand-900)] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
            <Reveal variant="left">
              <SectionIntro
              eyebrow="Por qué elegir Autocore"
              title="Cobra tus reservas de forma automática"
              description="Autocore utiliza robots para automatizar la gestión de pagos digitales en tu hotel."
              dark
            />
            </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((item, index) => (
              <Reveal
                key={item}
                as="article"
                delay={index * 90}
                className="rounded-[2rem] border border-white/10 bg-white/6 p-7 backdrop-blur transition duration-200 hover:-translate-y-1"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-[var(--color-accent-300)]">
                  <AppIcon name={reasonIcons[index]} className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-[var(--color-brand-100)]">Valor operativo</p>
                <h3 className="mt-3 text-xl font-bold">{item}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <SectionIntro
              eyebrow="Hoteles con pagos optimizados"
              title="Prueba social construida alrededor de operación hotelera real."
              description="El sitio actual ya comunica tracción en el sector. En el rediseño se presenta con una pared de logos más limpia, consistente y creíble."
            />
            <LogoCarousel items={hotelLogos} ariaLabel="Carrusel de hoteles con pagos optimizados" />
          </Reveal>
          <Reveal variant="right" delay={120}>
            <SectionIntro
              eyebrow="Nuestros aliados"
              title="Conexiones pensadas para convivir con el stack tecnológico del hotel."
              description="La propuesta combina bancos, pasarelas y software hotelero para evitar desconexiones entre el cobro y la operación diaria."
            />
            <LogoCarousel items={partnerLogos} ariaLabel="Carrusel de aliados financieros" />
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-brand-50)] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionIntro
            eyebrow="Implementación"
            title="Optimiza los pagos de tu hotel con una puesta en marcha clara y guiada."
          />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((item, index) => (
              <Reveal
                key={item.title}
                as="article"
                delay={index * 90}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_48px_rgba(4,2,59,0.08)] transition duration-200 hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-[var(--color-accent-50)] text-[var(--color-accent-600)]">
                  <AppIcon name={stepIcons[index]} className="h-6 w-6" />
                </div>
                <span className="inline-flex rounded-full bg-[var(--color-accent-50)] px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-accent-600)]">
                  {item.title}
                </span>
                <h3 className="mt-6 text-2xl font-bold text-[var(--color-brand-900)]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 rounded-[2rem] bg-[var(--color-brand-900)] px-8 py-10 text-white shadow-[0_24px_80px_rgba(4,2,59,0.18)] lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--color-brand-100)]">Activación rápida</p>
              <h3 className="mt-4 text-3xl font-bold">Habilitamos tu hotel para operar en menos de 2 semanas.</h3>
            </div>
            <a
              href="/contacto"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-base font-medium text-[var(--color-brand-900)] transition hover:bg-[var(--color-accent-50)] lg:mt-0"
            >
              Hablar con un asesor
            </a>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal variant="left">
            <SectionIntro
            eyebrow="Preguntas frecuentes"
            title="Resuelve objeciones comerciales y operativas antes de activar el servicio."
          />
          </Reveal>
          <Reveal variant="right" delay={120}>
            <FaqList items={faqs.slice(0, 4)} compact />
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-brand-900)] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <Reveal variant="left">
            <SectionIntro
            eyebrow="Inversión"
            title="Un modelo comercial pensado para crecer con tu operación."
            description="Paga solo por transacción exitosa y mantén una estructura de entrada ligera para digitalizar el flujo de cobros del hotel."
            dark
          />
          </Reveal>
          <Reveal variant="right" delay={120} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="grid gap-5 sm:grid-cols-2">
              {pricingItems.map((item, index) => (
                <Reveal key={item} delay={index * 90} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/8 text-[var(--color-accent-300)]">
                    <AppIcon name={pricingIcons[index]} className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium text-[var(--color-brand-100)]">Incluye</p>
                  <p className="mt-2 text-lg font-bold">{item}</p>
                </Reveal>
              ))}
            </div>
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-base font-medium text-[var(--color-brand-900)] transition hover:bg-[var(--color-accent-50)]"
            >
              Solicitar demo comercial
            </a>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default HomePage;
