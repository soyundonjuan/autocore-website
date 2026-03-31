import { useEffect, useRef, useState } from "react";
import AppIcon from "../components/AppIcon";
import Reveal from "../components/Reveal";
import { demoLink } from "../data/siteData";

const pricingPoints = [
  "Autocore no cobra mensualidades, soporte ni integraciones.",
  "Sin penalidades y sin cláusulas escondidas.",
  "Es un modelo 100% por resultados donde solo pagas cuando recibes transacciones exitosas.",
];

const pricingMetrics = [
  { label: "Ingresos protegidos", value: "+28%" },
  { label: "Cobros aprobados", value: "+64%" },
  { label: "Pérdidas evitadas", value: "-31%" },
];

const pricingPlans = [
  {
    name: "Básico",
    rate: "1,49% /Venta",
    guarantee: "Garantia mínima de $0 COP",
    volume: "Volumen esperado de < $40M COP",
  },
  {
    name: "Esencial",
    rate: "1,29% /Venta",
    guarantee: "Garantia mínima de $499 COP",
    volume: "Volumen esperado de ≥ $40M y < $150M COP",
    featured: true,
  },
  {
    name: "Estándar",
    rate: "0,99% /Venta",
    guarantee: "Garantia mínima de ≥ $1’449 COP",
    volume: "Volumen esperado de ≥ $150M COP",
  },
];

const pricingPromises = [
  {
    title: "Garantia",
    body: "Solo aplica si pagos procesados son menores que volumen esperado.",
    icon: "shield",
  },
  {
    title: "Depósito automático",
    body: "Ingresos diarios al banco del hotel.",
    icon: "bank",
  },
  {
    title: "¿Mayor volumen?",
    body: "Solicita tarifa más baja si proyectas mayor volumen mensual.",
    icon: "finance",
  },
];

const alternativePaymentLogos = [
  { src: "/assets/nequi.png", alt: "Logo de Nequi" },
  { src: "/assets/pse.jpg", alt: "Logo de PSE" },
  { src: "/assets/daviplata.png", alt: "Logo de Daviplata" },
];

const alternativePaymentStats = [
  { value: "2,99%", label: "Tarifa" },
  { value: "$500", label: "Costo por transacción" },
  { value: "$0 COP", label: "Costos bancarios" },
  { value: "Semanal", label: "Deposito" },
  { value: "$0 COP", label: "Costo de depósito" },
];

function MetricCounter({ value }) {
  const isNegative = value.startsWith("-");
  const target = Number.parseInt(value.replace(/[^\d]/g, ""), 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setCount(target);
      return undefined;
    }

    let frameId;
    let startTime;
    const duration = 1400;

    const animate = (time) => {
      if (startTime === undefined) {
        startTime = time;
      }

      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [target]);

  return `${isNegative ? "-" : "+"}${count}%`;
}

function PricingChart() {
  const initialHeights = [42, 58, 74, 92, 118];
  const [chartHeights, setChartHeights] = useState(initialHeights);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return undefined;
    }

    let targetHeights = [...initialHeights];
    let animationFrameId;
    let timeoutId;

    const updateOneBar = () => {
      const index = Math.floor(Math.random() * targetHeights.length);
      const previous = index === 0 ? 34 : targetHeights[index - 1] + 14;
      const next = index === targetHeights.length - 1 ? 126 : targetHeights[index + 1] - 14;
      const min = Math.min(previous, next - 6);
      const max = Math.max(previous + 6, next);
      const newValue = Math.round(min + Math.random() * Math.max(6, max - min));

      targetHeights = targetHeights.map((height, currentIndex) =>
        currentIndex === index ? newValue : height,
      );

      timeoutId = window.setTimeout(updateOneBar, 850 + Math.random() * 1100);
    };

    const animate = () => {
      setChartHeights((current) =>
        current.map((height, index) => {
          const target = targetHeights[index];
          const delta = target - height;

          if (Math.abs(delta) < 0.35) {
            return target;
          }

          return height + delta * 0.08;
        }),
      );

      animationFrameId = window.requestAnimationFrame(animate);
    };

    timeoutId = window.setTimeout(updateOneBar, 900);
    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const barCenters = [12, 91, 170, 249, 328];
  const chartPoints = chartHeights.map((height, index) => ({
    x: barCenters[index],
    y: Math.round(148 - height),
  }));

  const chartPath = `M${chartPoints[0].x} ${chartPoints[0].y} C${barCenters[0] + 20} ${chartPoints[0].y - 6} ${
    barCenters[1] - 20
  } ${chartPoints[1].y + 6} ${chartPoints[1].x} ${chartPoints[1].y} C${barCenters[1] + 20} ${
    chartPoints[1].y - 6
  } ${barCenters[2] - 20} ${chartPoints[2].y + 6} ${chartPoints[2].x} ${chartPoints[2].y} C${
    barCenters[2] + 20
  } ${chartPoints[2].y - 6} ${barCenters[3] - 20} ${chartPoints[3].y + 6} ${chartPoints[3].x} ${
    chartPoints[3].y
  } C${barCenters[3] + 20} ${chartPoints[3].y - 6} ${barCenters[4] - 20} ${chartPoints[4].y + 6} ${
    chartPoints[4].x
  } ${chartPoints[4].y}`;

  return (
    <div className="pricing-visual relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--color-brand-900)] p-6 text-white shadow-[0_24px_80px_rgba(4,2,59,0.18)] lg:p-8">
      <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-[var(--color-accent-500)]/25 blur-3xl" />
      <div className="absolute bottom-10 right-8 h-32 w-32 rounded-full bg-white/8 blur-3xl" />

      <div className="relative">
        <div className="pricing-chart-intro flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-brand-100)]">Modelo por resultados</p>
            <p className="mt-2 text-lg font-medium">Ingresos en crecimiento</p>
          </div>
          <span className="rounded-full bg-emerald-400/15 px-3 py-2 text-sm font-medium text-emerald-200">
            Positivo
          </span>
        </div>

        <div className="pricing-chart-shell mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-4">
          <div className="pricing-chart-grid">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="pricing-chart-bars" aria-hidden="true">
            {chartHeights.map((height, index) => (
              <span
                key={index}
                className="pricing-chart-bar"
                style={{ "--bar-height": `${height}px`, animationDelay: `${index * 140}ms` }}
              />
            ))}
          </div>

          <svg viewBox="0 0 360 160" className="pricing-chart-line" aria-hidden="true">
            <defs>
              <linearGradient id="pricing-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(125, 187, 255, 0.55)" />
                <stop offset="100%" stopColor="rgba(0, 114, 240, 1)" />
              </linearGradient>
            </defs>
            <path className="pricing-chart-line-path" d={chartPath} />
            <path className="pricing-chart-line-glow" d={chartPath} />
            {chartPoints.map(({ x, y }, index) => (
              <circle
                key={x}
                cx={x}
                cy={y}
                r="5"
                className="pricing-chart-point"
                style={{ animationDelay: `${index * 150}ms` }}
              />
            ))}
          </svg>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {pricingMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="pricing-metric-card rounded-3xl border border-white/10 bg-white/5 p-5"
              style={{ animationDelay: `${820 + index * 130}ms` }}
            >
              <p className="text-sm text-[var(--color-brand-100)]">{metric.label}</p>
              <p className="mt-3 text-2xl font-black text-white">
                <MetricCounter value={metric.value} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PricingPage() {
  const [activePricingPoint, setActivePricingPoint] = useState(0);
  const [isPricingPointFlipping, setIsPricingPointFlipping] = useState(false);
  const [isPricingPointResetting, setIsPricingPointResetting] = useState(false);
  const [isPricingPointPaused, setIsPricingPointPaused] = useState(false);
  const [pricingPointProgressCycle, setPricingPointProgressCycle] = useState(0);
  const pricingPointTimeoutRef = useRef(null);
  const pricingPointPhaseStartRef = useRef(0);
  const pricingPointPhaseRemainingRef = useRef(2000);
  const pricingPointPhaseRef = useRef("read");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return undefined;
    }

    const clearCurrentTimeout = () => {
      if (pricingPointTimeoutRef.current) {
        window.clearTimeout(pricingPointTimeoutRef.current);
        pricingPointTimeoutRef.current = null;
      }
    };

    const schedulePhase = (delay) => {
      clearCurrentTimeout();
      pricingPointPhaseRemainingRef.current = delay;
      pricingPointPhaseStartRef.current = Date.now();

      pricingPointTimeoutRef.current = window.setTimeout(() => {
        if (pricingPointPhaseRef.current === "read") {
          pricingPointPhaseRef.current = "flip";
          setIsPricingPointFlipping(true);
          schedulePhase(700);
          return;
        }

        pricingPointPhaseRef.current = "read";
        setIsPricingPointFlipping(false);
        setIsPricingPointResetting(true);
        setActivePricingPoint((current) => (current === pricingPoints.length - 1 ? 0 : current + 1));
        setPricingPointProgressCycle((current) => current + 1);

        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setIsPricingPointResetting(false);
          });
        });

        schedulePhase(2000);
      }, delay);
    };

    if (isPricingPointPaused) {
      if (pricingPointTimeoutRef.current) {
        const elapsed = Date.now() - pricingPointPhaseStartRef.current;
        pricingPointPhaseRemainingRef.current = Math.max(pricingPointPhaseRemainingRef.current - elapsed, 0);
      }
      clearCurrentTimeout();
      return;
    }

    schedulePhase(pricingPointPhaseRemainingRef.current);

    return clearCurrentTimeout;
  }, [isPricingPointPaused]);

  const nextPricingPoint = pricingPoints[(activePricingPoint + 1) % pricingPoints.length];

  return (
    <>
      <section className="hero-surface overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-24">
          <Reveal className="max-w-3xl" variant="left">
            <span className="eyebrow">Precios</span>
            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.04] tracking-tight text-[var(--color-brand-900)] md:text-6xl">
              Pagos inteligentes sin costos fijos ni permanencia.
            </h1>

            <div className="mt-8 space-y-4">
              <div
                className="difference-flip-card auto-flip-card"
                onMouseEnter={() => setIsPricingPointPaused(true)}
                onMouseLeave={() => setIsPricingPointPaused(false)}
              >
                <div
                  className={[
                    "difference-flip-inner",
                    isPricingPointFlipping ? "is-flipped" : "",
                    isPricingPointResetting ? "is-resetting" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="difference-flip-face difference-flip-front rounded-[1.35rem] border border-white/70 bg-white/80 px-5 py-4 shadow-[0_14px_36px_rgba(4,2,59,0.06)] backdrop-blur">
                    <div className="flex h-full items-center gap-4">
                      <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-50)] text-[var(--color-accent-600)]">
                        <AppIcon name="checkCircle" className="h-5 w-5" />
                      </span>
                      <p className="text-lg leading-8 text-slate-600">{pricingPoints[activePricingPoint]}</p>
                    </div>
                  </div>
                  <div className="difference-flip-face difference-flip-back rounded-[1.35rem] border border-white/70 bg-white/90 px-5 py-4 shadow-[0_14px_36px_rgba(4,2,59,0.08)] backdrop-blur">
                    <div className="flex h-full items-center gap-4">
                      <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-50)] text-[var(--color-accent-600)]">
                        <AppIcon name="checkCircle" className="h-5 w-5" />
                      </span>
                      <p className="text-lg leading-8 text-slate-600">{nextPricingPoint}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {pricingPoints.map((point, index) => {
                  const isActive = index === activePricingPoint;
                  const isCompleted =
                    activePricingPoint > index ||
                    (activePricingPoint === pricingPoints.length - 1 && index === 0 && pricingPointProgressCycle > 0);

                  return (
                    <div key={point} className="h-1.5 overflow-hidden rounded-full bg-slate-200" aria-hidden="true">
                      <span
                        className={[
                          "story-progress-fill",
                          isActive ? "is-active" : "",
                          isCompleted ? "is-complete" : "",
                          isPricingPointPaused ? "is-paused" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        key={`${pricingPointProgressCycle}-${index}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

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
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-accent-200)] bg-white px-6 py-4 text-base font-medium text-[var(--color-brand-900)] transition hover:border-[var(--color-accent-300)] hover:bg-[var(--color-accent-50)]"
              >
                Hablar con un experto
              </a>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <PricingChart />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">Planes</span>
          <h2 className="section-title text-[var(--color-brand-900)]">Planes para pagos con tarjeta</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Tarifas por volumen procesado mensual</p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 90}>
              <article className={`pricing-plan-card ${plan.featured ? "is-featured" : ""}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-[var(--color-brand-900)]">{plan.name}</h3>
                  {plan.featured ? <span className="pricing-plan-pill">Más elegido</span> : null}
                </div>
                <p className="mt-6 text-4xl font-black tracking-tight text-[var(--color-brand-900)]">{plan.rate}</p>
                <div className="mt-8 flex-1 space-y-4">
                  <div className="pricing-plan-row">
                    <span className="pricing-plan-icon">
                      <AppIcon name="shield" className="h-4 w-4" />
                    </span>
                    <p className="text-base leading-7 text-slate-600">{plan.guarantee}</p>
                  </div>
                  <div className="pricing-plan-row">
                    <span className="pricing-plan-icon">
                      <AppIcon name="finance" className="h-4 w-4" />
                    </span>
                    <p className="text-base leading-7 text-slate-600">{plan.volume}</p>
                  </div>
                </div>
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-base font-medium transition ${
                    plan.featured
                      ? "bg-[var(--color-accent-500)] text-white hover:bg-[var(--color-accent-600)]"
                      : "border border-[var(--color-accent-200)] bg-white text-[var(--color-brand-900)] hover:border-[var(--color-accent-300)] hover:bg-[var(--color-accent-50)]"
                  }`}
                >
                  Elige este plan
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-8">
          <div className="pricing-promises-shell">
            {pricingPromises.map((item) => (
              <div key={item.title} className="pricing-promise-card">
                <span className="pricing-promise-icon">
                  <AppIcon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-black text-[var(--color-brand-900)]">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="pb-20">
        <Reveal className="cta-circuit-surface bg-[var(--color-brand-900)] px-6 py-10 text-white shadow-[0_24px_80px_rgba(4,2,59,0.18)] lg:px-8">
          <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between">
            <div className="relative z-[1] max-w-3xl">
              <p className="text-3xl font-black leading-tight">
                ¿Tienes una duda específica sobre
                <br />
                tu operación o tu banco?
              </p>
            </div>
            <div className="relative z-[1] mt-6 flex flex-col gap-4 sm:flex-row lg:mt-0">
              <a
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[var(--color-accent-500)] px-6 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-600)]"
              >
                Agendar una demo
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/20 px-6 py-4 text-base font-medium text-white transition hover:bg-white/10"
              >
                Hablar con un experto
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal variant="left" className="max-w-2xl">
            <span className="eyebrow">Medios de pago alternativos</span>
            <h2 className="section-title text-[var(--color-brand-900)]">Transferencias digitales</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Una opción complementaria para cobros con medios de pago locales, depósitos programados y estructura de costos clara.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {alternativePaymentLogos.map((logo) => (
                <div key={logo.alt} className="pricing-alt-logo">
                  <img src={logo.src} alt={logo.alt} className="max-h-20 w-auto object-contain" />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="pricing-alt-card">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {alternativePaymentStats.map((item) => (
                  <div key={item.label} className="pricing-alt-stat">
                    <p className="text-3xl font-black tracking-tight text-[var(--color-brand-900)]">{item.value}</p>
                    <p className="mt-2 text-sm font-medium text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.4rem] border border-[var(--color-accent-200)] bg-[var(--color-accent-50)] px-5 py-4">
                <p className="text-base leading-7 text-slate-600">
                  Entre mayor volumen esperado, podemos negociar tarifa más baja.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <Reveal className="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(4,2,59,0.08)] lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Inicia tu activación</span>
            <p className="mt-5 text-3xl font-black leading-tight text-[var(--color-brand-900)]">
              Para empezar a cobrar con Autocore solo necesitamos autorización de tu banco.
            </p>
          </div>
          <div className="mt-8 flex shrink-0 flex-col gap-4 sm:flex-row lg:mt-0">
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[var(--color-accent-500)] px-6 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-600)]"
            >
              Agendar una demo
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[var(--color-accent-200)] bg-white px-6 py-4 text-base font-medium text-[var(--color-brand-900)] transition hover:border-[var(--color-accent-300)] hover:bg-[var(--color-accent-50)]"
            >
              Hablar con un experto
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

export default PricingPage;
