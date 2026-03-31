import { useEffect, useRef, useState } from "react";
import CTASection from "../components/CTASection";
import AppIcon from "../components/AppIcon";
import FaqList from "../components/FaqList";
import LogoCarousel from "../components/LogoCarousel";
import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";
import { contactChannels, demoLink, expertWhatsAppLink, faqs, hotelLogos, partnerLogos, socialLinks } from "../data/siteData";
import { submitContactEmail } from "../utils/contactEmail";

const heroChannels = ["Booking", "Expedia", "Despegar", "Ventas directas", "PMS"];

const problemCards = [
  {
    icon: "wallet",
    title: "Reservas sin pago",
    body: "Tarjetas inválidas o cobros fallidos generan no-shows y cancelaciones.",
    solution:
      "AutoCore valida tarjetas y confirma reservas antes del check-in.",
  },
  {
    icon: "hotel",
    title: "Habitaciones sin ingreso",
    body: "Reservas sin pago bloquean inventario y reducen ventas disponibles.",
    solution:
      "AutoCore libera inventario no confirmado y protege la ocupación rentable.",
  },
  {
    icon: "fraud",
    title: "Riesgo de fraude",
    body: "Procesos manuales aumentan fraudes, errores y contracargos evitables.",
    solution:
      "AutoCore centraliza validaciones para prevenir fraude y contracargos.",
  },
  {
    icon: "finance",
    title: "Flujo de caja inestable",
    body: "Confirmar una reserva no significa tener el dinero en la cuenta.",
    solution:
      "AutoCore conecta cobros y depósitos para dar visibilidad real del dinero.",
  },
];
const differentiators = [
  "Un hotel vende reservas con políticas, fechas futuras y múltiples canales.",
  "Autocore no es una pasarela de pagos genérica.",
  "Es infraestructura para orquestación de pagos, especializada para hotelería.",
];
const differenceCards = [
  {
    icon: "hotel",
    title: "Diseñado para hotelería",
    body: "Optimiza cobros de reservas, anticipos y políticas de cancelación para reducir no-shows.",
  },
  {
    icon: "bank",
    title: "Dinero directo al banco",
    body: "Los pagos se ejecutan automáticamente para que el dinero llegue al banco del hotel sin retrasos.",
  },
  {
    icon: "fraud",
    title: "Seguridad antifraude",
    body: "Validación antifraude y protección de datos para evitar estafas y contracargos.",
  },
  {
    icon: "automation",
    title: "Automatización de cobros",
    body: "Cobros automáticos y alertas tempranas para reducir errores y carga operativa.",
  },
];
const ecosystemIntegrations = [
  "PMS, Channel Managers y motores de reserva",
  "Bancos y entidades financieras",
  "Pasarelas de pago y aliados de revenue",
];
const ecosystemBenefits = [
  "Cobros automáticos de reservas",
  "Pagos seguros y validados",
  "Dinero directo al banco del hotel",
];
const ecosystemNodes = [
  { label: "Banco", icon: "bank", className: "ecosystem-node-top" },
  { label: "Pago online", icon: "wallet", className: "ecosystem-node-left" },
  { label: "PMS", icon: "hotel", className: "ecosystem-node-right" },
];
const testimonials = [
  {
    name: "Liliana Gómez",
    role: "Gerente General en Sloh Hotel & Bar",
    quote: "La seguridad en los pagos dejó de ser una preocupación operativa.",
    body:
      "Nuestra prioridad siempre ha sido la seguridad de nuestros clientes. Con Autocore no solo fortalecimos ese control, sino que ganamos respaldo y agilidad en el servicio. Hoy el proceso es más confiable y mucho más eficiente para el hotel.",
    image: "/assets/testimonials/liliana-gomez.png",
    video: "/assets/testimonials/video-testimonio-sloh-low.mp4",
    metrics: [
      { value: 75, label: "Ventas con pago aprobado" },
      { value: 47, label: "Validación anticipada de tarjetas" },
      { value: 15, label: "Menos cancelación mensual" },
    ],
  },
  {
    name: "Alejandro Dussan",
    role: "CEO en GEH Suites Hotels",
    quote: "Automatizar los pagos nos ha permitido crecer con control.",
    body:
      "Autocore revolucionó los pagos en nuestros hoteles. El personal, antes ocupado en tareas repetitivas, ahora se dedica a funciones donde su talento se aprovecha al máximo. La automatización nos permite tener mayor control y eficiencia sin aumentar la estructura operativa.",
    image: "/assets/testimonials/alejandro-dussan.png",
    metrics: [
      { value: 65, label: "Menos tareas manuales de cobro" },
      { value: 40, label: "Mejora en previsibilidad de ingresos" },
      { value: 28, label: "Reducción en cancelaciones" },
    ],
  },
  {
    name: "Alfonso Peñaranda",
    role: "Gerente General en H360 Hoteles",
    quote: "Control en tiempo real sobre cada transacción",
    body:
      "Garantizar reservas con pago anticipado es fácil con Autocore. Las respuestas inmediatas del banco en cada transacción nos brindan seguridad y previenen fraudes. Hoy tenemos mayor control y confianza en cada cobro ejecutado.",
    image: "/assets/testimonials/alfonso-penaranda.png",
    metrics: [
      { value: 85, label: "Reservas con validación bancaria inmediata" },
      { value: 70, label: "Reservas con pago anticipado asegurado" },
      { value: 18, label: "Reducción en No Shows" },
    ],
  },
];

function ProblemCardsSection() {
  const [flipped, setFlipped] = useState({});
  const [activeHintIndex, setActiveHintIndex] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return undefined;
    }

    let timeoutId;
    let clearId;
    let lastIndex = -1;

    const scheduleNext = () => {
      const delay = 2600 + Math.random() * 2200;

      timeoutId = window.setTimeout(() => {
        let nextIndex = Math.floor(Math.random() * problemCards.length);

        if (problemCards.length > 1 && nextIndex === lastIndex) {
          nextIndex = (nextIndex + 1) % problemCards.length;
        }

        lastIndex = nextIndex;
        setActiveHintIndex(nextIndex);

        clearId = window.setTimeout(() => {
          setActiveHintIndex(null);
          scheduleNext();
        }, 850);
      }, delay);
    };

    scheduleNext();

    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(clearId);
    };
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <Reveal>
        <div className="max-w-3xl">
          <h2 className="section-title text-[var(--color-brand-900)]">
            Los problemas de pago hacen que los hoteles pierdan ingresos
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Reservas sin pago confirmado, tarjetas inválidas y retrasos en depósitos afectan el revenue del hotel.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {problemCards.map((card, index) => {
          const isFlipped = Boolean(flipped[card.title]);

          return (
            <Reveal key={card.title} delay={index * 90} className="flip-card">
              <div className={`flip-card-inner ${isFlipped ? "is-flipped" : ""} ${activeHintIndex === index ? "is-hinting" : ""}`}>
                <article className="flip-card-face rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_48px_rgba(4,2,59,0.08)]">
                  <div className="problem-card-shell">
                    <div className="inline-flex size-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-[var(--color-accent-50)] text-[var(--color-accent-600)]">
                      <AppIcon name={card.icon} className="h-6 w-6" />
                    </div>
                    <p className="problem-card-kicker mt-6 text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent-600)]">
                      Problema
                    </p>
                    <h3 className="problem-card-title mt-6 text-2xl font-bold text-[var(--color-brand-900)]">{card.title}</h3>
                    <p className="problem-card-copy mt-4 text-base leading-7 text-slate-600">{card.body}</p>
                    <div className="problem-card-actions">
                      <button
                        type="button"
                        onClick={() => setFlipped((current) => ({ ...current, [card.title]: true }))}
                        className="inline-flex items-center rounded-full bg-[var(--color-accent-500)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-accent-600)]"
                      >
                        Ver solución
                      </button>
                    </div>
                  </div>
                </article>

                <article className="flip-card-face flip-card-back rounded-[2rem] border border-[var(--color-brand-900)] bg-[var(--color-brand-900)] text-white shadow-[0_18px_48px_rgba(4,2,59,0.18)]">
                  <div className="problem-card-shell">
                    <div className="inline-flex size-14 shrink-0 items-center justify-center rounded-[1.25rem] bg-white/10 text-[var(--color-accent-300)]">
                      <AppIcon name={card.icon} className="h-6 w-6" />
                    </div>
                    <p className="problem-card-kicker mt-6 text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-brand-100)]">Solución</p>
                    <h3 className="problem-card-title mt-6 text-2xl font-bold">{card.title}</h3>
                    <p className="problem-card-copy mt-4 text-base leading-7 text-slate-200">{card.solution}</p>
                    <div className="problem-card-actions">
                      <button
                        type="button"
                        onClick={() => setFlipped((current) => ({ ...current, [card.title]: false }))}
                        className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                      >
                        Volver
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={180} className="mt-12 rounded-[2rem] bg-[var(--color-brand-900)] px-8 py-10 text-white shadow-[0_24px_80px_rgba(4,2,59,0.16)] lg:flex lg:items-center lg:justify-between">
        <p className="max-w-3xl text-2xl font-black leading-tight">
          AutoCore automatiza los cobros de reservas y protege el revenue de tu hotel.
        </p>
        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center rounded-full bg-[var(--color-accent-500)] px-6 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-600)] lg:mt-0"
        >
          Solicitar demo
        </a>
      </Reveal>
    </section>
  );
}

function DifferenceSection() {
  const [activeDifferentiator, setActiveDifferentiator] = useState(0);
  const [isDifferentiatorFlipping, setIsDifferentiatorFlipping] = useState(false);
  const [isDifferentiatorResetting, setIsDifferentiatorResetting] = useState(false);
  const [isDifferentiatorPaused, setIsDifferentiatorPaused] = useState(false);
  const [progressCycle, setProgressCycle] = useState(0);
  const timeoutRef = useRef(null);
  const phaseStartRef = useRef(0);
  const phaseRemainingRef = useRef(2000);
  const phaseRef = useRef("read");

  useEffect(() => {
    const clearCurrentTimeout = () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const schedulePhase = (delay) => {
      clearCurrentTimeout();
      phaseRemainingRef.current = delay;
      phaseStartRef.current = Date.now();

      timeoutRef.current = window.setTimeout(() => {
        if (phaseRef.current === "read") {
          phaseRef.current = "flip";
          setIsDifferentiatorFlipping(true);
          schedulePhase(700);
          return;
        }

        phaseRef.current = "read";
        setIsDifferentiatorFlipping(false);
        setIsDifferentiatorResetting(true);
        setActiveDifferentiator((current) => (current + 1) % differentiators.length);
        setProgressCycle((current) => current + 1);
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setIsDifferentiatorResetting(false);
          });
        });
        schedulePhase(2000);
      }, delay);
    };

    if (isDifferentiatorPaused) {
      if (timeoutRef.current) {
        const elapsed = Date.now() - phaseStartRef.current;
        phaseRemainingRef.current = Math.max(phaseRemainingRef.current - elapsed, 0);
      }
      clearCurrentTimeout();
      return;
    }

    schedulePhase(phaseRemainingRef.current);

    return clearCurrentTimeout;
  }, [isDifferentiatorPaused]);

  const nextDifferentiator = differentiators[(activeDifferentiator + 1) % differentiators.length];

  return (
    <section className="difference-surface overflow-hidden py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-stretch">
          <Reveal className="difference-panel h-full rounded-[2rem] p-8 lg:p-10" variant="left">
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <span className="eyebrow-dark">Autocore es diferente</span>
                <h2 className="section-title max-w-3xl text-white">
                  ¿Por qué Autocore es diferente ?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                  Las pasarelas de pago tradicionales procesan transacciones simples. Autocore automatiza y asegura el
                  cobro de las reservas hoteleras.
                </p>
              </div>

              <Reveal
                delay={90}
                onMouseEnter={() => setIsDifferentiatorPaused(true)}
                onMouseLeave={() => setIsDifferentiatorPaused(false)}
              >
                <div className="difference-flip-card auto-flip-card">
                  <div
                    className={[
                      "difference-flip-inner",
                      isDifferentiatorFlipping ? "is-flipped" : "",
                      isDifferentiatorResetting ? "is-resetting" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <div className="difference-flip-face difference-flip-front difference-bullet rounded-[1.5rem] border border-white/10 px-5 py-5">
                      <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-500)]/16 text-[var(--color-accent-300)]">
                        <AppIcon
                          name={activeDifferentiator === 0 ? "route" : activeDifferentiator === 1 ? "wallet" : "layers"}
                          className="h-5 w-5"
                        />
                      </span>
                      <p className="text-base leading-7 text-slate-100">{differentiators[activeDifferentiator]}</p>
                    </div>
                    <div className="difference-flip-face difference-flip-back difference-bullet rounded-[1.5rem] border border-white/10 px-5 py-5">
                      <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-500)]/16 text-[var(--color-accent-300)]">
                        <AppIcon
                          name={activeDifferentiator === 0 ? "wallet" : activeDifferentiator === 1 ? "layers" : "route"}
                          className="h-5 w-5"
                        />
                      </span>
                      <p className="text-base leading-7 text-slate-100">{nextDifferentiator}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {differentiators.map((item, index) => {
                    const isActive = index === activeDifferentiator;
                    const isCompleted =
                      activeDifferentiator > index || (activeDifferentiator === differentiators.length - 1 && index === 0 && progressCycle > 0);

                    return (
                      <div
                        key={item}
                        className="h-1.5 overflow-hidden rounded-full bg-white/15"
                        aria-hidden="true"
                      >
                        <span
                          className={[
                            "story-progress-fill",
                            isActive ? "is-active" : "",
                            isCompleted ? "is-complete" : "",
                            isDifferentiatorPaused ? "is-paused" : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          key={`${progressCycle}-${index}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {differenceCards.map((card, index) => (
              <Reveal
                key={card.title}
                delay={80 + index * 90}
                className="difference-card group rounded-[1.8rem] border border-white/10 p-7"
                variant="right"
              >
                <div className="difference-card-icon inline-flex size-14 items-center justify-center rounded-[1.25rem] bg-[var(--color-accent-500)]/14 text-[var(--color-accent-300)]">
                  <AppIcon name={card.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold leading-tight text-white">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-200">{card.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={180}
          className="difference-cta mt-10 rounded-[2rem] border border-[var(--color-accent-400)]/25 px-8 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.24)] lg:flex lg:items-center lg:justify-between"
        >
          <p className="max-w-4xl text-2xl font-black leading-tight text-white">
            Autocore no solo procesa pagos. Garantiza que el cobro suceda y el dinero llegue al hotel.
          </p>
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center rounded-full bg-[var(--color-accent-500)] px-6 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-600)] lg:mt-0"
          >
            Solicitar demo
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function EcosystemSection() {
  const [activeEcosystemNode, setActiveEcosystemNode] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveEcosystemNode((current) => (current + 1) % ecosystemNodes.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[30rem_1fr] lg:items-center">
        <Reveal variant="left" delay={120}>
          <div className="ecosystem-visual relative aspect-square rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(4,2,59,0.1)]">
            <div className="ecosystem-triangle absolute inset-0 m-auto h-[78%] w-[78%]">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <polygon points="50,12 15,74 85,74" className="ecosystem-triangle-line" />
                <circle className="ecosystem-orbit-dot" r="2.6">
                  <animate
                    attributeName="opacity"
                    values="0.25;1;0.45;1;0.25"
                    dur="1.1s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="r"
                    values="2.2;3.2;2.4;3.1;2.2"
                    dur="1.1s"
                    repeatCount="indefinite"
                  />
                  <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#ecosystem-path" />
                  </animateMotion>
                </circle>
                <path id="ecosystem-path" d="M50 12 L15 74 L85 74 Z" fill="none" />
              </svg>

              {ecosystemNodes.map((node, index) => (
                <div key={node.label} className={`ecosystem-node ${node.className}`}>
                  <span className={`ecosystem-node-icon ${index === activeEcosystemNode ? "is-active" : ""}`}>
                    <AppIcon name={node.icon} className="h-6 w-6" />
                  </span>
                  <span className={`ecosystem-node-label ${index === activeEcosystemNode ? "is-active" : ""}`}>
                    {node.label}
                  </span>
                </div>
              ))}

              <div className="ecosystem-core">
                <span className="ecosystem-core-wave ecosystem-core-wave-1" aria-hidden="true" />
                <span className="ecosystem-core-wave ecosystem-core-wave-2" aria-hidden="true" />
                <img
                  src="/assets/autocore-logo-official.png"
                  alt="Autocore"
                  className="h-14 w-14 object-contain"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right">
          <span className="eyebrow">Ecosistema Autocore</span>
          <h2 className="section-title text-[var(--color-brand-900)]">
            Autocore funciona como un ecosistema de pagos para hoteles
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Los pagos en hotelería conectan reservas, bancos y tecnología. Autocore integra todo en un solo flujo
            automatizado.
          </p>

          <div className="mt-10 grid gap-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_.95fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent-600)]">
                  Integraciones clave
                </p>
                <div className="mt-5 space-y-4">
                  {ecosystemIntegrations.map((item, index) => (
                    <div key={item} className="ecosystem-list-row">
                      <span className="ecosystem-list-icon">
                        <AppIcon
                          name={index === 0 ? "hotel" : index === 1 ? "bank" : "wallet"}
                          className="h-4 w-4"
                          strokeWidth={2}
                        />
                      </span>
                      <p className="text-base leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:border-l lg:border-slate-200 lg:pl-8">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-brand-700)]">
                  Esta integración permite
                </p>
                <div className="mt-5 space-y-4">
                  {ecosystemBenefits.map((item) => (
                    <div key={item} className="ecosystem-list-row">
                      <span className="ecosystem-list-icon ecosystem-list-icon-dark">
                        <AppIcon name="shield" className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <p className="text-base leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="max-w-2xl text-2xl font-black leading-tight text-[var(--color-brand-900)]">
              Autocore conecta la hotelería con los servicios financieros.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AnimatedMetric({ value, label, active }) {
  const [displayValue, setDisplayValue] = useState(active ? 0 : value);

  useEffect(() => {
    if (!active) {
      setDisplayValue(0);
      return undefined;
    }

    let frameId;
    const duration = 1100;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayValue(Math.round(value * (1 - (1 - progress) ** 3)));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [active, value]);

  return (
    <div className="testimonial-metric">
      <p className="text-4xl font-black tracking-tight text-[var(--color-accent-500)]">{displayValue}%</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
    </div>
  );
}

function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progressCycle, setProgressCycle] = useState(0);
  const timeoutRef = useRef(null);
  const phaseStartRef = useRef(0);
  const phaseRemainingRef = useRef(3000);

  const showSlide = (index) => {
    setCurrentIndex(index);
    setProgressCycle((current) => current + 1);
    phaseRemainingRef.current = 3000;
  };

  const goToPrevious = () => {
    showSlide(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    showSlide(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const clearCurrentTimeout = () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    if (isPaused || isVideoOpen) {
      if (timeoutRef.current) {
        const elapsed = Date.now() - phaseStartRef.current;
        phaseRemainingRef.current = Math.max(phaseRemainingRef.current - elapsed, 0);
      }
      clearCurrentTimeout();
      return undefined;
    }

    phaseStartRef.current = Date.now();
    timeoutRef.current = window.setTimeout(() => {
      setCurrentIndex((index) => (index === testimonials.length - 1 ? 0 : index + 1));
      setProgressCycle((current) => current + 1);
      phaseRemainingRef.current = 3000;
    }, phaseRemainingRef.current);

    return clearCurrentTimeout;
  }, [currentIndex, isPaused, isVideoOpen]);

  const current = testimonials[currentIndex];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="eyebrow">Resultados reales</span>
          <h2 className="section-title text-[var(--color-brand-900)]">Resultados reales en hoteles reales</h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goToPrevious}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[var(--color-brand-900)] transition hover:border-[var(--color-accent-300)] hover:text-[var(--color-accent-600)]"
            aria-label="Ver testimonio anterior"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18 9 12l6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[var(--color-brand-900)] transition hover:border-[var(--color-accent-300)] hover:text-[var(--color-accent-600)]"
            aria-label="Ver testimonio siguiente"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </Reveal>

      <Reveal
        delay={120}
        className="mt-12 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(4,2,59,0.08)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div key={current.name} className="testimonial-transition grid lg:grid-cols-[24rem_1fr]">
          <div className="testimonial-photo-wrap relative min-h-[24rem] bg-[var(--color-brand-900)]">
            <img src={current.image} alt={current.name} className="testimonial-photo-image h-full w-full object-cover" />
            {current.video ? (
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="testimonial-play-button"
                aria-label={`Ver video testimonial de ${current.name}`}
              >
                <span className="testimonial-play-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M8 6.5v11l9-5.5-9-5.5Z" />
                  </svg>
                </span>
              </button>
            ) : null}
          </div>
          <div className="p-8 lg:p-10">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-2">
                {testimonials.map((item, index) => {
                  const isActive = index === currentIndex;
                  const isCompleted = index < currentIndex;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => showSlide(index)}
                      className="h-1.5 overflow-hidden rounded-full bg-slate-200"
                      aria-label={`Ver testimonio de ${item.name}`}
                    >
                      <span
                        className={[
                          "story-progress-fill",
                          "story-progress-fill-testimonial",
                          isActive ? "is-active" : "",
                          isCompleted ? "is-complete" : "",
                          isPaused || isVideoOpen ? "is-paused" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        key={`${progressCycle}-${index}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent-600)]">
                {current.name}
              </p>
              <p className="mt-2 text-lg font-medium text-slate-600">{current.role}</p>
              <p className="mt-6 max-w-3xl text-3xl font-black leading-tight text-[var(--color-brand-900)]">
                “{current.quote}”
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{current.body}</p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {current.metrics.map((metric) => (
                <AnimatedMetric
                  key={`${current.name}-${metric.label}`}
                  value={metric.value}
                  label={metric.label}
                  active
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={160} className="mt-8 rounded-[2rem] bg-[var(--color-brand-900)] px-8 py-8 text-white lg:flex lg:items-center lg:justify-between">
        <p className="max-w-3xl text-2xl font-black leading-tight">
          ¿Quieres ver resultados en hoteles similares al tuyo?
        </p>
        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center rounded-full bg-[var(--color-accent-500)] px-6 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-600)] lg:mt-0"
        >
          Agendar una demo
        </a>
      </Reveal>

      {isVideoOpen && current.video ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-6 py-10 backdrop-blur-sm">
          <div className="relative inline-flex max-h-[80vh] max-w-full overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/20"
              aria-label="Cerrar video testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
            <video
              src={current.video}
              controls
              autoPlay
              className="block max-h-[80vh] w-auto max-w-[min(100vw-3rem,30rem)] rounded-[2rem] bg-black object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}

const socialIcons = {
  Facebook: "facebook",
  Instagram: "instagram",
  LinkedIn: "linkedin",
};

function HomeContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <Reveal variant="left" className="max-w-xl">
          <span className="eyebrow">Contáctanos</span>
          <h2 className="mt-7 text-5xl font-black leading-[1.04] tracking-tight text-[var(--color-brand-900)] md:text-6xl">
            Hablemos de cómo mejorar los pagos de tu hotel
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Queremos conocer los retos de tus ventas y pagos, para ayudarte a reducir riesgos y asegurar ingresos sin
            afectar tu operación.
          </p>

          <div className="mt-10 flex items-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-accent-200)] bg-white text-[var(--color-accent-600)] transition hover:border-[var(--color-accent-400)] hover:bg-[var(--color-accent-50)]"
                aria-label={item.label}
              >
                <AppIcon name={socialIcons[item.label]} className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="mt-10 space-y-3 text-base text-slate-600">
            {contactChannels.map((item) => (
              <p key={item.label}>
                <a href={item.href} className="transition hover:text-[var(--color-brand-900)]">
                  {item.value}
                </a>
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal
          variant="right"
          delay={120}
          className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(4,2,59,0.08)] lg:p-12"
        >
          <form className="space-y-8" onSubmit={(event) => submitContactEmail(event, "Home")}>
            <div>
              <p className="text-xl font-medium text-[var(--color-brand-900)]">Información de alojamiento</p>
              <div className="mt-5 grid gap-4">
                <input className="contact-input" type="text" name="Nombre comercial" placeholder="Nombre comercial" />
                <select className="contact-input contact-select" name="Tipo de propiedad" defaultValue="">
                  <option value="" disabled>
                    Tipo de propiedad
                  </option>
                  <option>Hotel</option>
                  <option>Hostal</option>
                  <option>Renta corta</option>
                </select>
                <input className="contact-input" type="text" name="Cantidad de habitaciones" inputMode="numeric" placeholder="Cantidad de habitaciones" />
              </div>
            </div>

            <div>
              <p className="text-xl font-medium text-[var(--color-brand-900)]">Datos de contacto</p>
              <div className="mt-5 grid gap-4">
                <input className="contact-input" type="text" name="Nombre completo" placeholder="Nombre completo" />
                <input className="contact-input" type="text" name="Pais" placeholder="País" />
                <div className="grid gap-3 sm:grid-cols-[10rem_1fr]">
                  <select className="contact-input contact-select" name="Codigo de pais" defaultValue="+57">
                    <option value="+57">+57 Colombia</option>
                    <option value="+1">+1 USA / Canadá</option>
                    <option value="+52">+52 México</option>
                    <option value="+54">+54 Argentina</option>
                    <option value="+56">+56 Chile</option>
                    <option value="+51">+51 Perú</option>
                    <option value="+593">+593 Ecuador</option>
                    <option value="+34">+34 España</option>
                  </select>
                  <input className="contact-input" type="text" name="Whatsapp o Telefono" placeholder="Whatsapp/Teléfono" />
                </div>
                <input className="contact-input" type="email" name="Correo electronico" placeholder="Correo electrónico" />
                <textarea
                  name="Mensaje"
                  className="contact-input min-h-[8rem] resize-none rounded-[1.75rem] py-5"
                  placeholder='Mensaje corto Ej: “Tenemos problemas cobrando OTAs”'
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-500)] px-6 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-600)]"
              >
                Enviar
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
                </svg>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero-surface overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          <Reveal className="max-w-2xl" variant="left">
            <span className="eyebrow">Pagos digitales para hoteles</span>
            <h1 className="mt-7 max-w-2xl text-5xl font-black leading-[1.04] tracking-tight text-[var(--color-brand-900)] md:text-6xl">
              Automatiza los pagos de tu hotel y evita pérdidas por reservas impagas
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Convierte reservas en dinero real. Automatiza el cobro de reservas de Booking, Expedia, Despegar y ventas
              directas para evitar no-shows, cancelaciones y contracargos.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
              Plataforma de pagos inteligente para hoteles que permite centralizar cobros, reducir pérdidas y asegurar
              el flujo de caja.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent-500)] px-6 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-600)]"
              >
                Solicitar demo gratis
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
            <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 px-5 py-5 shadow-[0_18px_48px_rgba(4,2,59,0.08)] backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-accent-600)]">
                Integrado con los principales canales de reservas
              </p>
              <div className="hero-marquee-mask mt-5">
                <div className="hero-marquee-track">
                  {[...heroChannels, ...heroChannels].map((channel, index) => (
                    <div
                      key={`${channel}-${index}`}
                      className="hero-channel-pill"
                    >
                      <span>{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

      <ProblemCardsSection />
      <DifferenceSection />
      <EcosystemSection />
      <CTASection />
      <TestimonialSection />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <SectionIntro
              eyebrow="Hoteles con pagos optimizados"
              title="Prueba social construida alrededor de operación hotelera real."
              description="El sitio actual ya comunica tracción en el sector. En el rediseño se presenta con una pared de logos más limpia, consistente y creíble."
            />
            <LogoCarousel items={hotelLogos} ariaLabel="Carrusel de hoteles con pagos optimizados" autoplayOffset={0} />
          </Reveal>
          <Reveal variant="right" delay={120}>
            <SectionIntro
              eyebrow="Nuestros aliados"
              title="Conexiones pensadas para convivir con el stack tecnológico del hotel."
              description="La propuesta combina bancos, pasarelas y software hotelero para evitar desconexiones entre el cobro y la operación diaria."
            />
            <LogoCarousel items={partnerLogos} ariaLabel="Carrusel de aliados financieros" autoplayOffset={1400} />
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
            <FaqList items={faqs} compact />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <Reveal className="rounded-[2rem] bg-[var(--color-brand-900)] px-8 py-10 text-white shadow-[0_24px_80px_rgba(4,2,59,0.18)] lg:flex lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-3xl font-black leading-tight">
              ¿Tienes una duda específica sobre tu operación o tu banco?
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-0">
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[var(--color-accent-500)] px-6 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-600)]"
            >
              Agenda una demo
            </a>
            <a
              href={expertWhatsAppLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/20 px-6 py-4 text-base font-medium text-white transition hover:bg-white/10"
            >
              Hablar con un experto
            </a>
          </div>
        </Reveal>
      </section>

      <HomeContactSection />
    </>
  );
}

export default HomePage;
