import LegalDocumentPage from "../components/LegalDocumentPage";

const termsSections = [
  {
    heading: "1. TITULARIDAD DEL SITIO WEB Y DEL SERVICIO",
    paragraphs: [
      "El sitio web autocore.pro es titularidad de AUTOCORE HOTELS S.A.S., sociedad constituida conforme a las leyes de la República de Colombia, con domicilio en [DIRECCIÓN], representada legalmente por Miguel Ángel Celis.",
      "AUTOCORE es una plataforma tecnológica de orquestación de pagos diseñada exclusivamente para el sector hotelero, cuyo propósito es optimizar cobros de reservas, conciliaciones bancarias y seguridad operativa sobre los flujos de pago de los huéspedes.",
    ],
  },
  {
    heading: "2. NATURALEZA DEL SERVICIO Y DECLARACIONES IMPORTANTES",
    items: [
      {
        label: "2.1 Rol tecnológico de AUTOCORE",
        paragraphs: [
          "AUTOCORE actúa exclusivamente como proveedor tecnológico de orquestación de pagos. En ningún caso capta, recauda como propio, retiene discrecionalmente, custodia ni administra recursos financieros en nombre propio. AUTOCORE no es una entidad financiera, no capta recursos del público y no está sujeta a regulación como operador de pagos por la Superintendencia Financiera de Colombia.",
        ],
      },
      {
        label: "2.2 Modelos de servicio",
        bullets: [
          "Modelo Connect: el hotel contrata directamente con las entidades financieras y AUTOCORE provee la plataforma tecnológica de orquestación. La liquidación y el depósito son responsabilidad de la entidad financiera del hotel.",
          "Modelo Full Service: AUTOCORE gestiona de forma integral las conexiones con entidades financieras, actuando como orquestador tecnológico. La liquidación se coordina por AUTOCORE con la entidad financiera aliada, sin que AUTOCORE disponga de los fondos como propios.",
        ],
      },
      {
        label: "2.3 No almacenamiento de datos de pago",
        paragraphs: [
          "AUTOCORE NO almacena, procesa ni transmite datos de tarjetas de pago (números de tarjeta, CVV, fechas de vencimiento). Los datos sensibles de pago viajan directamente del dispositivo del huésped al Canal de Pago del Hotel, sin pasar por los servidores de AUTOCORE. El cumplimiento PCI DSS es responsabilidad exclusiva del hotel y de sus pasarelas de pago.",
        ],
      },
    ],
  },
  {
    heading: "3. USO PERMITIDO DEL SITIO WEB",
    paragraphs: [
      "El acceso y uso del sitio web autocore.pro está permitido exclusivamente para personas jurídicas (hoteles, cadenas hoteleras, establecimientos de hospedaje) y personas naturales que actúen en su representación, con los siguientes fines:",
    ],
    bullets: [
      "Obtener información sobre los servicios de AUTOCORE.",
      "Solicitar una demostración del Software.",
      "Establecer contacto comercial con el equipo de AUTOCORE.",
      "Acceder al portal de clientes, si aplica.",
      "Queda prohibido utilizar el sitio web para fines ilícitos, reproducir contenidos sin autorización, introducir malware, generar carga desproporcionada o intentar acceder a áreas restringidas.",
    ],
  },
  {
    heading: "4. FORMULARIOS DE CONTACTO Y SOLICITUD DE DEMO",
    paragraphs: ["Al diligenciar los formularios disponibles en autocore.pro, usted declara que:"],
    bullets: [
      "La información proporcionada es veraz, completa y actualizada.",
      "Cuenta con las facultades necesarias para representar al establecimiento hotelero en cuyo nombre actúa.",
      "Autoriza a AUTOCORE para contactarle con fines comerciales relacionados con su solicitud.",
      "Ha leído y acepta la Política de Privacidad de AUTOCORE.",
      "El envío de un formulario de solicitud de demo no genera ninguna obligación contractual para ninguna de las partes. La relación contractual únicamente nace con la suscripción del Contrato de Licencia de Software.",
    ],
  },
  {
    heading: "5. PROCESO DE CONTRATACIÓN",
    paragraphs: [
      "La contratación del servicio de AUTOCORE se formaliza exclusivamente mediante la suscripción del Contrato de Licencia de Software y Servicio de Orquestación de Pagos, documento que regula en detalle los derechos y obligaciones de las partes.",
    ],
    bullets: [
      "El modelo de servicio contratado (Connect o Full Service).",
      "Las tarifas aplicables por medio de pago, detalladas en el Anexo Comercial.",
      "Los niveles de servicio (SLA) y compromisos de disponibilidad.",
      "Los plazos de vigencia, renovación y período mínimo de permanencia.",
      "Las condiciones de liquidación y facturación.",
    ],
  },
  {
    heading: "6. PROPIEDAD INTELECTUAL",
    paragraphs: [
      "Todos los contenidos del sitio web autocore.pro, incluyendo pero no limitado a textos, imágenes, logotipos, diseños, interfaces, código fuente, base de datos y el Software AUTOCORE HOTELS, son propiedad exclusiva de AUTOCORE HOTELS S.A.S. o de sus licenciantes, y están protegidos por las leyes de propiedad intelectual vigentes en Colombia y los tratados internacionales aplicables.",
      "Queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación sin autorización previa y escrita de AUTOCORE.",
    ],
  },
  {
    heading: "7. LIMITACIÓN DE RESPONSABILIDAD DEL SITIO WEB",
    paragraphs: ["AUTOCORE no garantiza la disponibilidad ininterrumpida del sitio web autocore.pro y no será responsable por:"],
    bullets: [
      "Interrupciones, errores o fallos técnicos del sitio web que escapen a su control razonable.",
      "La exactitud o actualidad de los contenidos informativos publicados en el sitio.",
      "Los daños derivados del uso de información obtenida a través del sitio sin formalizar una relación contractual.",
      "Fallos en la conexión a internet o en los dispositivos del usuario.",
      "Contenidos de sitios web de terceros enlazados desde autocore.pro.",
    ],
  },
  {
    heading: "8. ENLACES A SITIOS DE TERCEROS",
    paragraphs: [
      "El sitio web puede contener enlaces a sitios web de terceros (entidades financieras, pasarelas de pago, proveedores tecnológicos). AUTOCORE no controla ni es responsable del contenido, las políticas de privacidad ni las prácticas de dichos sitios. Le recomendamos revisar los términos y políticas de privacidad de cada sitio que visite.",
    ],
  },
  {
    heading: "9. CONFIDENCIALIDAD EN ETAPA PRECONTRACTUAL",
    paragraphs: [
      "Toda información comercial, técnica o financiera que AUTOCORE comparta durante las etapas de presentación, demo o negociación precontractual tendrá carácter confidencial y no podrá ser divulgada a terceros ni utilizada para fines distintos a la evaluación del servicio.",
      "Del mismo modo, AUTOCORE tratará con confidencialidad la información que el hotel comparta durante estas etapas, conforme a su Política de Privacidad.",
    ],
  },
  {
    heading: "10. LEY APLICABLE Y RESOLUCIÓN DE CONTROVERSIAS",
    paragraphs: [
      "Los presentes Términos y Condiciones se rigen e interpretan conforme a las leyes civiles y comerciales de la República de Colombia.",
      "Cualquier controversia derivada del uso del sitio web que no pueda resolverse de manera directa y amigable será sometida a la competencia de los jueces ordinarios de la ciudad de [CIUDAD], Colombia. Para controversias derivadas del Contrato de Licencia de Software, se aplicará el mecanismo de arbitraje establecido en dicho contrato.",
    ],
  },
  {
    heading: "11. MODIFICACIONES A LOS TÉRMINOS Y CONDICIONES",
    paragraphs: [
      "AUTOCORE se reserva el derecho de modificar los presentes Términos y Condiciones en cualquier momento, publicando la versión actualizada en autocore.pro con indicación de la fecha de la última actualización. El uso continuado del sitio web tras la publicación de las modificaciones implica su aceptación. Si no está de acuerdo con los nuevos términos, deberá abstenerse de usar el sitio.",
    ],
  },
  {
    heading: "12. CONTACTO",
    paragraphs: [
      "Para cualquier consulta relacionada con estos Términos y Condiciones: AUTOCORE HOTELS S.A.S. Correo electrónico: [EMAIL CONTACTO] Sitio web: autocore.pro Dirección: [DIRECCIÓN], Colombia",
      "© 2026 AUTOCORE HOTELS S.A.S. Todos los derechos reservados. | autocore.pro",
    ],
  },
];

function TermsPage() {
  return (
    <LegalDocumentPage
      eyebrow="Legal"
      title="Términos y Condiciones de Uso"
      updatedAt="Marzo 2026"
      intro="Condiciones aplicables al acceso, uso del sitio web autocore.pro y solicitud de servicios comerciales de AUTOCORE HOTELS S.A.S."
      sections={termsSections}
    />
  );
}

export default TermsPage;
