export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Plataforma", href: "/plataforma" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Precios", href: "/precios" },
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
    question: "¿Autocore es una pasarela de pagos?",
    answer:
      "Autocore es un orquestador de pagos inteligentes, especializado en hotelería. Las pasarelas solo procesan pagos; Autocore se asegura de que el cobro suceda bien, a tiempo y alineado con la operación y la estrategia de ventas del hotel.",
  },
  {
    question: "¿El dinero es intermediado por Autocore?",
    answer:
      "El dinero viaja directamente a las entidades financieras y al banco del hotel. Autocore no retiene, no terceriza ni administra fondos del hotel.",
  },
  {
    question: "¿Cómo ayuda Autocore a reducir cancelaciones y no-shows?",
    answer:
      "Ejecutando y validando pagos antes del check-in, con automatización y alertas ante garantías de pago inválidas. Esto asegura ingresos anticipados y libera habitaciones a tiempo para generar ventas reales.",
  },
  {
    question: "¿Es posible cobrar tarjetas virtuales de Booking, Expedia, Despegar y otras plataformas?",
    answer:
      "Autocore fue creado precisamente para facilitar el cobro seguro y eficiente de reservas provenientes de todos los canales hoteleros. Permite cobrar tarjetas virtuales de OTAs y ventas directas, automatizando validaciones, fechas correctas de cobro y reduciendo errores operativos, contracargos y reprocesos desde las extranets.",
  },
  {
    question: "¿Qué tan segura es la información sensible?",
    answer:
      "Todas las transacciones se ejecutan con cifrado de extremo a extremo y validaciones antifraude. Se elimina la exposición de datos sensibles y el manejo manual de tarjetas, diseñado teniendo en cuenta la rotación de personal.",
  },
  {
    question: "¿Autocore reemplaza mi pasarela o mi banco?",
    answer:
      "No necesariamente. Autocore se integra con bancos y entidades financieras para orquestar el cobro de reservas, sin necesidad de terminar relaciones existentes con otros proveedores de pago.",
  },
  {
    question: "¿Qué tipo de hoteles pueden usar Autocore?",
    answer:
      "Hoteles independientes, cadenas, hostales, co-livings y operadores con múltiples propiedades. Autocore se adapta a la operación y a los canales de venta del alojamiento, no al revés.",
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
export const loginLink = "https://app.autocore.pro/";
export const expertWhatsAppLink =
  "https://wa.me/573205406782?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20Autocore";
