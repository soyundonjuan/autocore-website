import LegalDocumentPage from "../components/LegalDocumentPage";

const privacySections = [
  {
    heading: "1. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO",
    paragraphs: [
      'La presente Política de Privacidad regula el tratamiento de los datos personales que AUTOCORE HOTELS S.A.S. (en adelante, "AUTOCORE") recopila a través del sitio web autocore.pro y en el marco de la prestación de su servicio de orquestación de pagos para el sector hotelero.',
      "Responsable del Tratamiento: AUTOCORE HOTELS S.A.S. Representante Legal: Miguel Ángel Celis Dirección: [DIRECCIÓN], Colombia Correo de contacto para datos personales: [EMAIL PRIVACIDAD] Sitio web: autocore.pro",
      "AUTOCORE actúa conforme a la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas aplicables en materia de protección de datos personales en Colombia. Para los usuarios ubicados en otros países de América Latina, AUTOCORE adopta estándares equivalentes de protección.",
    ],
  },
  {
    heading: "2. DATOS PERSONALES QUE RECOPILAMOS",
    items: [
      {
        label: "2.1 Datos de visitantes del sitio web",
        paragraphs: ["Cuando usted navega en autocore.pro, podemos recopilar de forma automática:"],
        bullets: [
          "Dirección IP y datos de geolocalización aproximada.",
          "Tipo de navegador, dispositivo y sistema operativo.",
          "Páginas visitadas, tiempo de permanencia y comportamiento de navegación (mediante cookies analíticas).",
          "Datos de sesión y preferencias de usuario.",
        ],
      },
      {
        label: "2.2 Datos que usted nos proporciona voluntariamente",
        paragraphs: ["A través de los formularios del sitio web (solicitud de demo, contacto comercial), usted puede proporcionarnos:"],
        bullets: [
          "Nombre y apellidos del representante del hotel.",
          "Nombre y datos del establecimiento hotelero.",
          "Correo electrónico corporativo y teléfono de contacto.",
          "Ciudad y país de operación del hotel.",
          "Cualquier otra información que usted incluya voluntariamente en los mensajes.",
        ],
      },
      {
        label: "2.3 Datos de clientes contratantes (hoteles)",
        paragraphs: [
          "En el marco del contrato de licencia de software, AUTOCORE trata adicionalmente los datos necesarios para la ejecución del servicio, incluyendo datos del representante legal, datos de facturación y credenciales de acceso al Software. El tratamiento de estos datos se rige por el contrato suscrito entre las partes.",
        ],
      },
      {
        label: "2.4 Datos que NO recopilamos",
        paragraphs: [
          "AUTOCORE NO almacena, procesa ni transmite datos de tarjetas de pago (números de tarjeta, CVV, fechas de vencimiento ni datos de titulares). Los datos de pago viajan directamente entre el dispositivo del huésped y el Canal de Pago del Hotel, sin pasar por los servidores de AUTOCORE.",
        ],
      },
    ],
  },
  {
    heading: "3. FINALIDADES DEL TRATAMIENTO",
    paragraphs: ["AUTOCORE trata sus datos personales para las siguientes finalidades:"],
    bullets: [
      "Gestionar solicitudes de información, demos y contacto comercial.",
      "Ejecutar el contrato de licencia de software y servicio de orquestación de pagos.",
      "Enviar comunicaciones relacionadas con el servicio contratado (actualizaciones, mantenimientos, soporte).",
      "Mejorar la experiencia de navegación y las funcionalidades del sitio web mediante análisis estadístico.",
      "Cumplir con obligaciones legales, contables y tributarias aplicables.",
      "Prevenir fraudes y garantizar la seguridad de la plataforma.",
    ],
  },
  {
    heading: "4. BASE JURÍDICA DEL TRATAMIENTO",
    paragraphs: ["El tratamiento de sus datos personales se realiza con base en:"],
    bullets: [
      "Su consentimiento libre, previo, expreso e informado, otorgado al diligenciar los formularios del sitio web o al suscribir el contrato de licencia.",
      "La ejecución del contrato de licencia de software celebrado con AUTOCORE.",
      "El cumplimiento de obligaciones legales aplicables a AUTOCORE como prestador de servicios tecnológicos.",
      "El interés legítimo de AUTOCORE en mejorar sus servicios y garantizar la seguridad de su plataforma.",
    ],
  },
  {
    heading: "5. USO DE COOKIES Y TECNOLOGÍAS DE RASTREO",
    items: [
      {
        label: "5.1 ¿Qué son las cookies?",
        paragraphs: [
          "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten al sitio recordar sus acciones y preferencias durante un período de tiempo.",
        ],
      },
      {
        label: "5.2 Tipos de cookies que utilizamos",
        bullets: [
          "Cookies técnicas o esenciales: necesarias para el funcionamiento básico del sitio web. No requieren su consentimiento.",
          "Cookies analíticas: nos permiten medir el tráfico y el comportamiento de los visitantes para mejorar el sitio (ej. Google Analytics). Requieren su consentimiento.",
          "Cookies de preferencias: recuerdan sus configuraciones para personalizar su experiencia.",
        ],
      },
      {
        label: "5.3 Control de cookies",
        paragraphs: [
          "Usted puede configurar su navegador para rechazar o eliminar las cookies en cualquier momento. La desactivación de cookies técnicas puede afectar el funcionamiento del sitio web. Para gestionar sus preferencias de cookies analíticas, utilice el banner de consentimiento disponible en el sitio.",
        ],
      },
    ],
  },
  {
    heading: "6. TRANSFERENCIA Y TRANSMISIÓN DE DATOS",
    paragraphs: ["Sus datos personales podrán ser compartidos con las siguientes categorías de destinatarios, bajo estrictas medidas de confidencialidad:"],
    bullets: [
      "Proveedores de servicios en la nube (infraestructura tecnológica): Amazon Web Services, Google Cloud Platform u otros equivalentes, únicamente para la operación del Software.",
      "Proveedores de herramientas de análisis web (ej. Google Analytics), bajo sus propias políticas de privacidad.",
      "Autoridades competentes, cuando exista obligación legal o requerimiento judicial.",
    ],
  },
  {
    heading: "7. PLAZOS DE CONSERVACIÓN",
    paragraphs: ["Los datos personales serán conservados durante los siguientes plazos:"],
    bullets: [
      "Datos de visitantes y formularios de contacto: hasta 2 años desde la última interacción, o hasta que usted solicite su supresión.",
      "Datos de clientes contratantes: durante la vigencia del contrato y 5 años adicionales tras su terminación, conforme a las obligaciones contables y tributarias aplicables.",
      "Logs de transacciones del Software: 2 años desde la fecha de cada instrucción, conforme al contrato.",
    ],
  },
  {
    heading: "8. DERECHOS DE LOS TITULARES",
    paragraphs: ["Conforme a la Ley 1581 de 2012, usted tiene derecho a:"],
    bullets: [
      "Conocer, actualizar y rectificar sus datos personales.",
      "Solicitar prueba de la autorización otorgada para el tratamiento.",
      "Ser informado sobre el uso que se ha dado a sus datos.",
      "Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la normativa de protección de datos.",
      "Revocar la autorización y/o solicitar la supresión de sus datos cuando no exista obligación legal o contractual que justifique su conservación.",
      "Acceder gratuitamente a sus datos personales que hayan sido objeto de tratamiento.",
    ],
  },
  {
    heading: "9. MEDIDAS DE SEGURIDAD",
    paragraphs: ["AUTOCORE implementa medidas técnicas, administrativas y físicas para proteger sus datos personales contra acceso no autorizado, pérdida, alteración o divulgación indebida, incluyendo:"],
    bullets: [
      "Cifrado de datos en tránsito y en reposo.",
      "Control de acceso por roles y autenticación multifactor para el personal interno.",
      "Monitoreo continuo de la infraestructura tecnológica.",
      "Protocolos de notificación de incidentes de seguridad dentro de las 72 horas siguientes a su conocimiento.",
    ],
  },
  {
    heading: "10. DATOS DE MENORES DE EDAD",
    paragraphs: [
      "Los servicios de AUTOCORE están dirigidos exclusivamente a personas jurídicas y a personas naturales mayores de 18 años que actúen en calidad de representantes de establecimientos hoteleros. AUTOCORE no recopila intencionalmente datos personales de menores de edad. Si usted detecta que un menor ha proporcionado datos a través de nuestro sitio, por favor notifíquenos de inmediato.",
    ],
  },
  {
    heading: "11. MODIFICACIONES A ESTA POLÍTICA",
    paragraphs: [
      "AUTOCORE podrá actualizar esta Política de Privacidad cuando sea necesario para reflejar cambios en sus prácticas de tratamiento de datos, en la legislación aplicable o en sus servicios. Toda modificación será publicada en este sitio web con indicación de la fecha de la última actualización. Para cambios sustanciales que afecten a clientes contratantes, AUTOCORE notificará por correo electrónico con al menos 30 días de anticipación.",
    ],
  },
  {
    heading: "12. CONTACTO Y QUEJAS",
    paragraphs: [
      'Para cualquier consulta, solicitud o queja relacionada con el tratamiento de sus datos personales: Correo electrónico: [EMAIL PRIVACIDAD] Asunto sugerido: "Protección de Datos Personales - [su nombre]" Sitio web: autocore.pro',
      "Si considera que su derecho a la protección de datos ha sido vulnerado, puede presentar una queja ante la Superintendencia de Industria y Comercio (SIC): www.sic.gov.co",
      "© 2026 AUTOCORE HOTELS S.A.S. Todos los derechos reservados. | autocore.pro",
    ],
  },
];

function PrivacyPage() {
  return (
    <LegalDocumentPage
      eyebrow="Legal"
      title="Política de Privacidad y Tratamiento de Datos Personales"
      updatedAt="Marzo 2026"
      intro="Documento informativo sobre el tratamiento de datos personales recopilados a través de autocore.pro y durante la prestación del servicio de orquestación de pagos para hoteles."
      sections={privacySections}
    />
  );
}

export default PrivacyPage;
