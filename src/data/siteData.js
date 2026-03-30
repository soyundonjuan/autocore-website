export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "FAQ", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
];

export const benefits = [
  {
    title: "Automatización de procesos",
    body: "Conecta las áreas responsables del flujo de pagos y reduce la intervención manual en reservas, confirmaciones y conciliación operativa.",
  },
  {
    title: "Finanzas",
    body: "Aumenta el flujo de caja mensual y maximiza los ingresos del hotel con cobros más eficientes.",
  },
  {
    title: "Reducción de fraudes",
    body: "Aplica validaciones bancarias antifraude en tiempo real para proteger cada transacción y elevar la confianza del huésped.",
  },
];

export const reasons = [
  "Pasarelas, banco y PMS conectados en un mismo flujo",
  "Habilitación de pagos digitales hacia la cuenta bancaria del hotel",
  "Procesamiento disponible 24/7 para reservas y cobros",
  "Modelo útil para cadenas, hoteles urbanos y operación distribuida",
];

export const hotelLogos = Array.from({ length: 17 }, (_, index) => ({
  src: `/assets/hotels/${index + 1}.png`,
  alt: `Logo hotel aliado ${index + 1}`,
}));

export const partnerLogos = Array.from({ length: 11 }, (_, index) => ({
  src: `/assets/financial/${index + 1}.png`,
  alt: `Logo aliado financiero ${index + 1}`,
}));

export const steps = [
  {
    title: "Registra tu operación",
    body: "Solicita el registro de tu hotel y comparte los documentos base de la razón social para habilitar el flujo comercial y financiero.",
  },
  {
    title: "Activa los pagos directos",
    body: "Autocore acompaña la conexión de pagos digitales hacia tu cuenta bancaria y las integraciones necesarias con el software del hotel.",
  },
  {
    title: "Opera 24/7",
    body: "Procesa cobros con una operación disponible todo el día y una experiencia más consistente para el huésped y tu equipo.",
  },
];

export const faqs = [
  {
    question: "¿Autocore reemplaza mi PMS o mi Channel Manager?",
    answer:
      "No. Autocore se integra con tu ecosistema actual para automatizar el flujo de cobro, validación y operación sin reemplazar tus herramientas core.",
  },
  {
    question: "¿Cuánto tarda la activación?",
    answer:
      "El proceso estándar está pensado para dejar al hotel operando en menos de dos semanas, según la disponibilidad documental y técnica de las integraciones.",
  },
  {
    question: "¿Cómo gana valor el área financiera?",
    answer:
      "El hotel mejora el recaudo, acelera conciliaciones y reduce tareas manuales que consumen tiempo del equipo administrativo.",
  },
  {
    question: "¿Qué modelo de cobro maneja Autocore?",
    answer:
      "El esquema principal se comunica como un modelo por transacción exitosa, acompañado por instalación e integraciones sin complejidad innecesaria para la operación.",
  },
  {
    question: "¿Qué hace exactamente Autocore?",
    answer:
      "Autocore automatiza el flujo de pagos digitales en hoteles conectando canales de reserva, pagos, banca y operación para que el cobro sea más eficiente y rentable.",
  },
  {
    question: "¿A qué tipo de hotel le conviene?",
    answer:
      "Es especialmente relevante para hoteles que necesitan reducir trabajo manual, mejorar confirmaciones de pago y profesionalizar su recaudo digital con un enfoque más escalable.",
  },
];

export const pricingItems = [
  "Integraciones entre plataformas de pagos y software del Hotel.",
  "Instalación y soporte mensual.",
  "Pagos automatizados y link de pagos",
  "Terminal virtual de pagos y pagos consolidados de agencias.",
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/AutocoreHotels" },
  { label: "Instagram", href: "https://www.instagram.com/autocoreHotels" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/autocore" },
];

export const contactChannels = [
  { label: "Teléfono", value: "+57 3205406782", href: "tel:+573205406782" },
  { label: "Email", value: "info@autocore.pro", href: "mailto:info@autocore.pro" },
];

export const demoLink = "https://app.autocore.pro/public/contact-us";
