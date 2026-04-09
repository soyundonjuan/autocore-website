import { useEffect, useRef, useState } from "react";
import AppIcon from "../components/AppIcon";
import Reveal from "../components/Reveal";
import { demoLink, expertWhatsAppLink } from "../data/siteData";

const platformSteps = [
  {
    icon: "automation",
    title: "Pagos Automatizados",
    body: "Cobros automáticos a tarjetas virtuales de Booking, Expedia, Despegar, Hotelbeds, Hyperguest y más.",
    accent: "Sin copiar datos. Sin errores manuales. Sin olvidos.",
  },
  {
    icon: "terminal",
    title: "Terminal Virtual",
    body: "Cobra tarjetas virtuales de clientes y plataformas de reservas en segundos.",
    accent: "Terminal de pago especializada en hotelería.",
  },
  {
    icon: "qr",
    title: "Link de pago y QRs",
    body: "Envía un link o QR y recibe pagos online con tarjeta y otros medios de pago locales.",
    accent: "Ideal para anticipos y reservas directas",
  },
  {
    icon: "link",
    title: "Integraciones sin costo",
    body: "Conéctate con el software de tu proveedor y automatiza los cobros.",
    accent: "El desarrollo lo hacemos nosotros.",
  },
];

const orbitIcons = [
  { icon: "wallet", label: "Cobros", angle: 0 },
  { icon: "dashboard", label: "Reportes", angle: 60 },
  { icon: "automation", label: "Automatización", angle: 120 },
  { icon: "bank", label: "Banca", angle: 180 },
  { icon: "qr", label: "QR y links", angle: 240 },
  { icon: "integration", label: "Integraciones", angle: 300 },
];
const platformFeatureSections = [
  {
    title: "Pagos automatizados",
    titleAccent: "automatizados",
    intro: "Cobros eficientes en segundos:",
    bulletIcons: ["search", "automation", "mail"],
    bullets: [
      "Revisión 24/7 de reservas y condiciones de pago",
      "Ejecución de pagos automáticos sobre tarjetas que garantizan reservas",
      "Alertas automáticas sobre resultados de transacciones con comprobante de pago",
    ],
    secondaryTitle: "Requisitos:",
    secondaryBullets: ["Conexión con software de reservas", "Configurar políticas de cancelación"],
    visual: "automation",
  },
  {
    title: "Terminal virtual",
    titleAccent: "virtual",
    intro: "Cobrar tarjetas en hoteles nunca había sido tan simple, eficiente y seguro.",
    bulletIcons: ["creditCard", "wallet"],
    bullets: [
      "Ingresas los datos básicos del titular de la reserva, datos de la tarjeta y cobra.",
      "Funciona con tarjetas débito y crédito, de Visa, Mastercard, American Express, Diners...",
    ],
    visual: "terminal",
  },
  {
    title: "Links de pagos y QRs",
    titleAccent: "pagos y QRs",
    intro: "Optimiza el pago de tus ventas directas:",
    bulletIcons: ["qr", "shield"],
    bullets: ["Comparte código QR o Enlace de pago", "Cliente paga de manera simple y segura"],
    secondaryCopy: "El único Link de pago creado exclusivamente para alojamientos.",
    secondaryTitle: "Reduce riesgo de fraude al validar datos de:",
    secondaryBullets: [
      "Comprador",
      "Titular del servicio (huésped)",
      "Propietario del medio de pago",
      "Huella digital de dispositivo de pago",
    ],
    visual: "links",
  },
  {
    title: "Integraciones",
    intro: "Autocore conecta tu banco a los sistemas hoteleros que ya utilizas",
    secondaryTitle: "La mejor plataforma de pagos para conectar:",
    chipIcons: ["link", "dashboard", "hotel", "document", "chat", "layers"],
    chipBullets: ["Motor de reservas", "Channel Manager", "PMS", "CRM", "ChatBot", "Y más.."],
    visual: "integrations",
  },
];

const automationRows = [
  { portal: "Booking.com", reservationId: "44554544158", status: "Aprobado" },
  { portal: "Despegar", reservationId: "1026667", status: "Aprobado" },
  { portal: "Expedia", reservationId: "4454528216", status: "Aprobado" },
  { portal: "Booking.com", reservationId: "4884103489", status: "Aprobado" },
  { portal: "HyperGuest", reservationId: "4738176882", status: "Aprobado" },
  { portal: "Hotelbeds", reservationId: "4721957255", status: "Aprobado" },
];

const automationReservationLoops = [
  ["44554544158", "44554544241", "44554544302"],
  ["4884103489", "4884103591", "4884103664"],
  ["4721957255", "4721957348", "4721957421"],
];

const terminalTypingFields = [
  { label: "Numero de tarjeta", value: "**** **** **** 4318" },
  { label: "Titular", value: "J. AVECILLAS" },
  { label: "Fecha de expiracion", value: "**/**" },
  { label: "CVC", value: "***" },
  { label: "Cuotas", value: "1 cuota" },
];

function PlatformFeatureVisual({ type }) {
  const [automationStep, setAutomationStep] = useState(0);
  const [activeAutomationRow, setActiveAutomationRow] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typedLengths, setTypedLengths] = useState(terminalTypingFields.map(() => 0));
  const [isQuotaOpen, setIsQuotaOpen] = useState(false);
  const [isBankExpanded, setIsBankExpanded] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");

  useEffect(() => {
    if (type !== "automation") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return undefined;
    }

    const sequence = [0, 3, 5];
    const intervalId = window.setInterval(() => {
      setAutomationStep((current) => (current + 1) % 3);
      setActiveAutomationRow((current) => sequence[(sequence.indexOf(current) + 1 + sequence.length) % sequence.length]);
    }, 1700);

    return () => window.clearInterval(intervalId);
  }, [type]);

  useEffect(() => {
    if (type !== "links") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setIsBankExpanded(true);
      setSelectedBank("PSE");
      return undefined;
    }

    let timeoutId;

    const runCycle = () => {
      setIsBankExpanded(false);
      setSelectedBank("");

      timeoutId = window.setTimeout(() => {
        setIsBankExpanded(true);

        timeoutId = window.setTimeout(() => {
          setSelectedBank("PSE");

          timeoutId = window.setTimeout(() => {
            setIsBankExpanded(false);
            setSelectedBank("");

            timeoutId = window.setTimeout(runCycle, 800);
          }, 950);
        }, 1100);
      }, 900);
    };

    runCycle();

    return () => window.clearTimeout(timeoutId);
  }, [type]);

  useEffect(() => {
    if (type !== "terminal") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setTypedLengths(terminalTypingFields.map((field) => field.value.length));
      setIsQuotaOpen(false);
      return undefined;
    }

    const timeoutIds = [];
    const schedule = (callback, delay) => {
      const timeoutId = window.setTimeout(callback, delay);
      timeoutIds.push(timeoutId);
      return timeoutId;
    };

    const runCycle = () => {
      setTypingIndex(0);
      setTypedLengths(terminalTypingFields.map(() => 0));
      setIsQuotaOpen(false);

      const typeField = (fieldIndex, charIndex = 0) => {
        const value = terminalTypingFields[fieldIndex].value;

        if (fieldIndex === 4) {
          setTypingIndex(4);
          setIsQuotaOpen(true);

          schedule(() => {
            setTypedLengths((current) =>
              current.map((length, index) => (index === 4 ? value.length : length)),
            );

            schedule(() => {
              setIsQuotaOpen(false);

              schedule(runCycle, 2000);
            }, 700);
          }, 650);

          return;
        }

        setTypingIndex(fieldIndex);
        setTypedLengths((current) =>
          current.map((length, index) => (index === fieldIndex ? charIndex : length)),
        );

        if (charIndex < value.length) {
          schedule(() => typeField(fieldIndex, charIndex + 1), fieldIndex === 0 ? 85 : 105);
          return;
        }

        schedule(() => typeField(fieldIndex + 1, 0), 650);
      };

      typeField(0, 0);
    };

    setIsQuotaOpen(false);
    runCycle();

    return () => timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
  }, [type]);

  if (type === "automation") {
    const rows = automationRows.map((row, index) => {
      const loopIndex = [0, 3, 5].indexOf(index);

      if (loopIndex === -1) {
        return row;
      }

      return {
        ...row,
        reservationId: automationReservationLoops[loopIndex][automationStep],
      };
    });

    return (
      <div className="platform-feature-visual">
        <div className="platform-mockup-shell platform-mockup-shell-light">
          <div className="platform-mockup-topbar">
            <span className="platform-mockup-dot" />
            <span className="platform-mockup-dot" />
            <span className="platform-mockup-dot" />
          </div>
          <div className="platform-table-shell">
            <div className="platform-table-head">
              <span>#</span>
              <span>Portal</span>
              <span>Id reserva</span>
              <span>Estado</span>
              <span />
            </div>
            {rows.map((row, index) => (
              <div
                key={`${row.portal}-${index}`}
                className={`platform-table-row ${activeAutomationRow === index ? "is-updating" : ""} ${
                  activeAutomationRow !== index ? "is-shifting" : ""
                } ${activeAutomationRow < index ? "is-shifting-down" : "is-shifting-up"}`}
              >
                <span>{index + 1}</span>
                <span>{row.portal}</span>
                <span className={`platform-reservation-id ${activeAutomationRow === index ? "is-updating" : ""}`}>
                  {row.reservationId}
                </span>
                <span className={`platform-status ${row.status === "Declinado" ? "is-declined" : ""}`}>{row.status}</span>
                <span>⋮</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "terminal") {
    return (
      <div className="platform-feature-visual">
        <div className="platform-mockup-shell platform-mockup-shell-light">
          <div className="platform-mockup-topbar">
            <span className="platform-mockup-dot" />
            <span className="platform-mockup-dot" />
            <span className="platform-mockup-dot" />
          </div>
          <div className="platform-payment-shell">
            <div className="platform-payment-top">
              <div>
                <p>Compra online en: Hotel Regatta</p>
                <p>Nombre: Julia Avecillas</p>
                <p>Valor a cobrar: $ 3.179.121 COP</p>
              </div>
            </div>
            <div className="platform-payment-body">
              <p className="platform-form-heading">Ingresa los datos de la tarjeta de credito o debito</p>
              <div className="platform-form-grid">
                {terminalTypingFields.slice(0, 4).map((field, index) => (
                  <div key={field.label} className="platform-form-field">
                    <span className="platform-form-label">{field.label}</span>
                    <span className={`platform-form-value ${typingIndex === index ? "is-typing" : ""}`}>
                      {field.value.slice(0, typedLengths[index])}
                      <span className={`platform-typing-caret ${typingIndex === index ? "is-active" : ""}`} />
                    </span>
                  </div>
                ))}
              </div>
              <div className="platform-form-field mt-3">
                <span className="platform-form-label">{terminalTypingFields[4].label}</span>
                <div className={`platform-select-shell ${isQuotaOpen ? "is-open" : ""}`}>
                  <span className="platform-form-value">
                    {typedLengths[4] > 0 ? "1 cuota" : ""}
                  </span>
                  <span className={`platform-select-arrow ${isQuotaOpen ? "is-open" : ""}`}>⌄</span>
                </div>
                <div className={`platform-select-options ${isQuotaOpen ? "is-open" : ""}`} aria-hidden="true">
                  <span className={`platform-select-option ${typedLengths[4] > 0 ? "is-active" : ""}`}>1 cuota</span>
                  <span className="platform-select-option">2 cuotas</span>
                  <span className="platform-select-option">3 cuotas</span>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <span className="platform-pay-button">Cobrar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "links") {
    return (
      <div className="platform-feature-visual">
        <div className="platform-mockup-shell platform-mockup-shell-light">
          <div className="platform-mockup-topbar">
            <span className="platform-mockup-dot" />
            <span className="platform-mockup-dot" />
            <span className="platform-mockup-dot" />
          </div>
          <div className="platform-links-shell">
            <div className="platform-links-top">
              <p>Compra online en: Hotel Regatta</p>
              <p>Valor a pagar: $ 300 USD</p>
            </div>
            <div className="platform-links-body">
              <div className="platform-method-row">
                <span className="platform-method-title">Con Tarjeta de crédito o débito</span>
                <span>›</span>
              </div>
              <div className={`platform-method-row ${isBankExpanded ? "is-expanded" : ""}`}>
                <span className="platform-method-title">Desde tu Banco</span>
                <span className={`platform-method-arrow ${isBankExpanded ? "is-expanded" : ""}`}>⌄</span>
              </div>
              <div className={`platform-bank-grid ${isBankExpanded ? "is-expanded" : ""}`}>
                <div className={`platform-bank-chip ${selectedBank === "PSE" ? "is-selected" : ""}`}>PSE</div>
                <div className="platform-bank-chip">Bancolombia</div>
              </div>
              <div className="platform-method-row">
                <span className="platform-method-title">Con Billetera digital</span>
                <span>›</span>
              </div>
              <div className="platform-method-row">
                <span className="platform-method-title">Tarjeta regalo</span>
                <span>›</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="platform-feature-visual">
      <div className="platform-mockup-shell platform-mockup-shell-light platform-integration-shell">
        <div className="platform-mockup-topbar">
          <span className="platform-mockup-dot" />
          <span className="platform-mockup-dot" />
          <span className="platform-mockup-dot" />
        </div>
        <div className="platform-integration-canvas" aria-hidden="true">
          <svg viewBox="0 0 560 420" className="platform-integration-svg">
            <path className="platform-flow-line" d="M158 116 C205 116 224 154 250 188" />
            <path className="platform-flow-line" d="M158 300 C205 300 224 262 250 228" />
            <path className="platform-flow-line" d="M310 208 C364 208 402 208 426 208" />

            <circle className="platform-flow-signal" r="5">
              <animateMotion dur="2.8s" repeatCount="indefinite" path="M158 116 C205 116 224 154 250 188" />
            </circle>
            <circle className="platform-flow-signal" r="5">
              <animateMotion dur="3.1s" repeatCount="indefinite" path="M158 300 C205 300 224 262 250 228" />
            </circle>
            <circle className="platform-flow-signal" r="5">
              <animateMotion dur="2.4s" repeatCount="indefinite" path="M310 208 C364 208 402 208 426 208" />
            </circle>
          </svg>
        </div>

        <div className="platform-integration-node platform-integration-node-left-top">
          <span className="platform-integration-icon">
            <AppIcon name="dashboard" className="h-6 w-6" />
          </span>
          <span className="platform-integration-label">Channel Manager</span>
        </div>
        <div className="platform-integration-node platform-integration-node-left-bottom">
          <span className="platform-integration-icon">
            <AppIcon name="hotel" className="h-6 w-6" />
          </span>
          <span className="platform-integration-label">PMS</span>
        </div>
        <div className="platform-integration-core">
          <span className="platform-integration-pulse" aria-hidden="true" />
          <span className="platform-integration-pulse delay" aria-hidden="true" />
          <img src="/assets/autocore-logo-official.png" alt="Autocore" className="h-24 w-24 object-contain" />
        </div>
        <div className="platform-integration-node platform-integration-node-right">
          <span className="platform-integration-icon">
            <AppIcon name="bank" className="h-6 w-6" />
          </span>
          <span className="platform-integration-label">Bank</span>
        </div>
      </div>
    </div>
  );
}

function PlatformFeatureSection({ section, reverse = false, delay = 0 }) {
  const titleParts = section.titleAccent ? section.title.split(section.titleAccent) : [section.title];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className={`grid gap-14 lg:grid-cols-2 lg:items-center ${reverse ? "" : ""}`}>
        <Reveal variant={reverse ? "right" : "left"} delay={delay} className={reverse ? "lg:order-2" : ""}>
          <PlatformFeatureVisual type={section.visual} />
        </Reveal>

        <Reveal variant={reverse ? "left" : "right"} delay={delay + 90} className={reverse ? "lg:order-1" : ""}>
          <div className="platform-feature-copy max-w-2xl">
            <span className="eyebrow">Función de plataforma</span>
            <h2 className="section-title platform-feature-title">
              {section.titleAccent ? (
                <>
                  {titleParts[0]}
                  <span className="text-[var(--color-accent-500)]">{section.titleAccent}</span>
                  {titleParts[1]}
                </>
              ) : (
                section.title
              )}
            </h2>

            {section.intro ? <p className="platform-feature-intro">{section.intro}</p> : null}

            {section.bullets ? (
              <div className="platform-feature-group">
                {section.bullets.map((item, index) => (
                  <div key={item} className="platform-bullet-row">
                    <span className="platform-bullet-icon">
                      <AppIcon name={section.bulletIcons?.[index] ?? "checkCircle"} className="h-4 w-4" />
                    </span>
                    <p className="platform-feature-body">{item}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {section.secondaryCopy ? <p className="platform-feature-support">{section.secondaryCopy}</p> : null}

            {section.secondaryBullets ? (
              <div className="platform-feature-requirements">
                {section.secondaryTitle ? (
                  <p className="platform-feature-requirements-label">{section.secondaryTitle.toUpperCase()}</p>
                ) : null}
                {section.secondaryBullets.map((item) => (
                  <div key={item} className="platform-star-row">
                    <span className="platform-star-mark">
                      <AppIcon name="checkCircle" className="h-4 w-4" />
                    </span>
                    <p className="platform-feature-body">{item}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {section.chipBullets ? (
              <div className="platform-feature-chip-group">
                {section.chipBullets.map((item, index) => (
                  <div key={item} className="platform-chip-row">
                    <span className="platform-bullet-icon">
                      <AppIcon name={section.chipIcons?.[index] ?? "checkCircle"} className="h-4 w-4" />
                    </span>
                    <span className="platform-feature-body">{item}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PlatformPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [isGraphicHovered, setIsGraphicHovered] = useState(false);
  const [orbitRotation, setOrbitRotation] = useState(0);
  const orbitRotationRef = useRef(0);
  const orbitSpeedRef = useRef(18);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveStep((current) => (current === platformSteps.length - 1 ? 0 : current + 1));
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return undefined;
    }

    let frameId;
    let previousTime;

    const animate = (time) => {
      if (previousTime === undefined) previousTime = time;

      const delta = time - previousTime;
      previousTime = time;

      const targetSpeed = isGraphicHovered ? 66 : 18;
      orbitSpeedRef.current += (targetSpeed - orbitSpeedRef.current) * 0.045;
      orbitRotationRef.current = (orbitRotationRef.current + (orbitSpeedRef.current * delta) / 1000) % 360;
      setOrbitRotation(orbitRotationRef.current);
      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [isGraphicHovered]);

  return (
    <>
      <section className="hero-surface overflow-hidden">
        <div className="platform-hero mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.12fr_.88fr] lg:px-8 lg:py-14 lg:items-center">
          <Reveal variant="left" className="platform-hero-copy max-w-[42rem]">
            <span className="eyebrow">Pagos inteligentes para hoteles</span>
            <h1 className="mt-5 max-w-[34rem] text-5xl font-black leading-[1.01] tracking-tight text-[var(--color-brand-900)] md:text-[3.45rem]">
              Centraliza y simplifica tus pagos
            </h1>

            <div className="platform-timeline mt-7">
              {platformSteps.map((step, index) => {
                const isActive = index === activeStep;
                const isPast = index < activeStep;

                return (
                  <div key={step.title} className={`platform-step ${isActive ? "is-active" : ""} ${isPast ? "is-past" : ""}`}>
                    <div className="platform-step-marker">
                      <span className="platform-step-icon">
                        <AppIcon name={step.icon} className="h-5 w-5" />
                      </span>
                      {index < platformSteps.length - 1 ? <span className="platform-step-line" aria-hidden="true" /> : null}
                    </div>
                    <div className="platform-step-copy">
                      <h2 className="text-[1.72rem] font-black leading-tight text-[var(--color-brand-900)]">{step.title}</h2>
                      <p className="mt-1 text-[0.98rem] leading-6 text-slate-600">{step.body}</p>
                      <p className="mt-1 text-[0.98rem] leading-6 text-[var(--color-accent-500)]">{step.accent}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
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
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-brand-900)] px-6 py-4 text-base font-medium text-[var(--color-brand-900)] transition hover:bg-[var(--color-brand-50)]"
              >
                Hablar con un experto
              </a>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div
              className="platform-visual platform-hero-visual platform-visual-glow relative overflow-hidden rounded-[2rem] bg-[var(--color-brand-900)] p-5 shadow-[0_24px_80px_rgba(4,2,59,0.18)]"
              onMouseEnter={() => setIsGraphicHovered(true)}
              onMouseLeave={() => setIsGraphicHovered(false)}
            >
            <div className="platform-orbit-shell">
              <div
                className="platform-orbit"
                style={{ transform: `translate(-50%, -50%) rotate(${orbitRotation}deg)` }}
              >
                <div className="platform-orbit-ring" aria-hidden="true" />
                {orbitIcons.map((item) => (
                  <div
                    key={item.label}
                    className="platform-orbit-item"
                    style={{ "--orbit-angle": `${item.angle}deg` }}
                  >
                    <span className="platform-orbit-icon">
                      <span
                        className="platform-orbit-icon-inner"
                        style={{ transform: `rotate(${-orbitRotation}deg)` }}
                      >
                        <AppIcon name={item.icon} className="h-6 w-6" />
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="platform-device">
              <div className="platform-device-screen">
                <span className="platform-device-pulse" aria-hidden="true" />
                <span className="platform-device-pulse platform-device-pulse-delay" aria-hidden="true" />
                <img
                  src="/assets/autocore-logo-official.png"
                  alt="Autocore"
                  className="relative z-[1] h-16 w-16 object-contain"
                />
              </div>
              <div className="platform-device-base" aria-hidden="true" />
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      {platformFeatureSections.map((section, index) => (
        <PlatformFeatureSection
          key={section.title}
          section={section}
          reverse={index % 2 === 1}
          delay={index * 40}
        />
      ))}
    </>
  );
}

export default PlatformPage;
