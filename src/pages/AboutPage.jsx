import AppIcon from "../components/AppIcon";
import Reveal from "../components/Reveal";
import { demoLink, expertWhatsAppLink } from "../data/siteData";
import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    title: "Especialización hotelera",
    body: "Autocore fue creado para resolver cobros de reservas, políticas de cancelación, depósitos y validaciones que una operación hotelera necesita todos los días.",
    icon: "hotel",
  },
  {
    title: "Orquestación financiera",
    body: "Conecta bancos, pasarelas, PMS, Channel Managers y ventas directas para que el dinero fluya con menos fricción y más control.",
    icon: "integration",
  },
  {
    title: "Automatización operativa",
    body: "Reduce tareas manuales, alertas tardías y reprocesos en cobros, validaciones y conciliación de reservas.",
    icon: "automation",
  },
];

const principles = [
  "El dinero viaja directo al banco del hotel.",
  "Las validaciones suceden antes de que el problema impacte la operación.",
  "La tecnología debe adaptarse al alojamiento, no al revés.",
];

const milestones = [
  {
    title: "Qué hacemos",
    body: "Automatizamos cobros de reservas y conectamos el flujo de pagos con la operación real del hotel.",
  },
  {
    title: "Cómo operamos",
    body: "Nos integramos con banca y sistemas hoteleros para validar, ejecutar y monitorear pagos de forma centralizada.",
  },
  {
    title: "Qué buscamos",
    body: "Proteger ingresos, reducir cancelaciones y hacer que el equipo del hotel dependa menos de procesos manuales.",
  },
];

function AboutPage() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [nextPrincipleIndex, setNextPrincipleIndex] = useState(1);
  const [isPrincipleFlipping, setIsPrincipleFlipping] = useState(false);
  const [isPrincipleResetting, setIsPrincipleResetting] = useState(false);
  const [isPrinciplePaused, setIsPrinciplePaused] = useState(false);
  const [principleProgressCycle, setPrincipleProgressCycle] = useState(0);
  const principleTimeoutRef = useRef(null);
  const principlePhaseStartRef = useRef(0);
  const principlePhaseRemainingRef = useRef(2000);
  const principlePhaseRef = useRef("read");
  const activePrincipleRef = useRef(0);
  const nextPrincipleRef = useRef(1);

  useEffect(() => {
    activePrincipleRef.current = activePrinciple;
  }, [activePrinciple]);

  useEffect(() => {
    nextPrincipleRef.current = nextPrincipleIndex;
  }, [nextPrincipleIndex]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveMilestone((current) => (current === milestones.length - 1 ? 0 : current + 1));
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return undefined;
    }

    const clearCurrentTimeout = () => {
      if (principleTimeoutRef.current) {
        window.clearTimeout(principleTimeoutRef.current);
        principleTimeoutRef.current = null;
      }
    };

    const schedulePhase = (delay) => {
      clearCurrentTimeout();
      principlePhaseRemainingRef.current = delay;
      principlePhaseStartRef.current = Date.now();

      principleTimeoutRef.current = window.setTimeout(() => {
        if (principlePhaseRef.current === "read") {
          const nextIndex = (activePrincipleRef.current + 1) % principles.length;
          setNextPrincipleIndex(nextIndex);
          principlePhaseRef.current = "flip";
          setIsPrincipleFlipping(true);
          schedulePhase(700);
          return;
        }

        const nextIndex = nextPrincipleRef.current;
        const followingIndex = (nextIndex + 1) % principles.length;
        principlePhaseRef.current = "read";
        setActivePrinciple(nextIndex);
        setIsPrincipleResetting(true);
        setPrincipleProgressCycle((current) => current + 1);

        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setNextPrincipleIndex(followingIndex);
            setIsPrincipleFlipping(false);
            setIsPrincipleResetting(false);
          });
        });

        schedulePhase(2000);
      }, delay);
    };

    if (isPrinciplePaused) {
      if (principleTimeoutRef.current) {
        const elapsed = Date.now() - principlePhaseStartRef.current;
        principlePhaseRemainingRef.current = Math.max(principlePhaseRemainingRef.current - elapsed, 0);
      }
      clearCurrentTimeout();
      return;
    }

    schedulePhase(principlePhaseRemainingRef.current);

    return clearCurrentTimeout;
  }, [isPrinciplePaused]);
  const nextPrinciple = principles[nextPrincipleIndex];

  return (
    <>
      <section className="hero-surface overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <Reveal variant="left" className="max-w-3xl">
            <span className="eyebrow">Nosotros</span>
            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.04] tracking-tight text-[var(--color-brand-900)] md:text-6xl">
              Autocore conecta la operación hotelera con los servicios financieros.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Somos una infraestructura de pagos especializada en hotelería. Ayudamos a que reservas, bancos y tecnología trabajen en un mismo flujo para cobrar mejor, reducir pérdidas y asegurar ingresos reales.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent-500)] px-6 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-600)]"
              >
                Agendar una demo
              </a>
              <a
                href={expertWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent-200)] bg-white px-6 py-4 text-base font-medium text-[var(--color-brand-900)] transition hover:border-[var(--color-accent-300)] hover:bg-[var(--color-accent-50)]"
              >
                Hablar con un experto
              </a>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-brand-900)] p-6 text-white shadow-[0_24px_80px_rgba(4,2,59,0.18)] lg:p-8">
              <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-[var(--color-accent-500)]/30 blur-3xl" />
              <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
              <div className="relative space-y-5">
                {milestones.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-[1.6rem] px-5 py-5 transition-all duration-500 ${
                      index === activeMilestone
                        ? "translate-y-[-4px] scale-[1.015] border border-[var(--color-accent-300)] bg-white/12 shadow-[0_18px_44px_rgba(0,114,240,0.16)]"
                        : "translate-y-0 scale-100 border border-white/10 bg-white/5"
                    }`}
                  >
                    <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-brand-100)]">0{index + 1}</p>
                    <h2
                      className={`mt-3 text-2xl font-black transition-colors duration-500 ${
                        index === activeMilestone ? "text-white" : ""
                      }`}
                    >
                      {item.title}
                    </h2>
                    <p
                      className={`mt-3 text-base leading-7 transition-colors duration-500 ${
                        index === activeMilestone ? "text-slate-100" : "text-slate-200"
                      }`}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Por qué existimos</span>
          <h2 className="section-title text-[var(--color-brand-900)]">Un hotel no necesita solo una pasarela. Necesita que el cobro realmente suceda.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Autocore nace para cerrar la brecha entre la reserva confirmada y el dinero recibido, con procesos pensados específicamente para la lógica comercial y operativa de los alojamientos.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="about-purpose-card flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_48px_rgba(4,2,59,0.06)]">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-[var(--color-accent-50)] text-[var(--color-accent-600)]">
                  <AppIcon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-2xl font-black text-[var(--color-brand-900)]">{item.title}</h3>
                <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <Reveal className="cta-circuit-surface rounded-[2rem] bg-[var(--color-brand-900)] px-8 py-10 text-white shadow-[0_24px_80px_rgba(4,2,59,0.18)] lg:grid lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
          <div className="relative z-[1]">
            <span className="eyebrow-dark">Cómo pensamos</span>
            <p className="mt-6 text-3xl font-black leading-tight">
              Diseñamos tecnología para proteger ingresos, no para agregar complejidad.
            </p>
          </div>
          <div className="relative z-[1] mt-8 space-y-4 lg:mt-0">
            <div
              className="difference-flip-card auto-flip-card"
              onMouseEnter={() => setIsPrinciplePaused(true)}
              onMouseLeave={() => setIsPrinciplePaused(false)}
            >
              <div
                className={[
                  "difference-flip-inner",
                  isPrincipleFlipping ? "is-flipped" : "",
                  isPrincipleResetting ? "is-resetting" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div
                  key={`principle-front-${activePrinciple}`}
                  className="difference-flip-face difference-flip-front difference-bullet rounded-[1.35rem] border border-white/10 px-5 py-4"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-500)]/16 text-[var(--color-accent-300)]">
                    <AppIcon name="checkCircle" className="h-4 w-4" />
                  </span>
                  <p className="text-base leading-7 text-slate-100">{principles[activePrinciple]}</p>
                </div>
                <div
                  key={`principle-back-${nextPrincipleIndex}`}
                  className="difference-flip-face difference-flip-back difference-bullet rounded-[1.35rem] border border-white/10 px-5 py-4"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-500)]/24 text-[var(--color-accent-200)]">
                    <AppIcon name="checkCircle" className="h-4 w-4" />
                  </span>
                  <p className="text-base font-medium leading-7 text-white">{nextPrinciple}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {principles.map((item, index) => {
                const isActive = index === activePrinciple;
                const isCompleted =
                  activePrinciple > index || (activePrinciple === principles.length - 1 && index === 0 && principleProgressCycle > 0);

                return (
                  <div key={item} className="h-1.5 overflow-hidden rounded-full bg-white/15" aria-hidden="true">
                    <span
                      className={[
                        "story-progress-fill",
                        isActive ? "is-active" : "",
                        isCompleted ? "is-complete" : "",
                        isPrinciplePaused ? "is-paused" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      key={`${principleProgressCycle}-${index}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

export default AboutPage;
