export const contactEmailAddress = "info@autocore.pro";

function cleanValue(value) {
  return String(value ?? "").trim();
}

function normalizePropertyType(value) {
  const normalized = cleanValue(value).toLowerCase();

  if (normalized === "hostal") {
    return "hostal";
  }

  if (normalized === "renta corta") {
    return "establecimiento de renta corta";
  }

  return "hotel";
}

export function buildContactMailto(formData, sourceLabel) {
  const rows = Array.from(formData.entries())
    .map(([key, value]) => [cleanValue(key), cleanValue(value)])
    .filter(([, value]) => value.length > 0);

  const body = [
    `Origen: ${sourceLabel}`,
    "",
    ...rows.map(([key, value]) => `${key}: ${value}`),
  ].join("\n");

  const subject = `Nuevo contacto desde ${sourceLabel}`;

  return `mailto:${contactEmailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function submitContactEmail(event, sourceLabel) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const mailto = buildContactMailto(formData, sourceLabel);
  const propertyType = normalizePropertyType(formData.get("Tipo de propiedad"));
  const thankYouUrl = `/gracias?tipo=${encodeURIComponent(propertyType)}`;

  window.location.href = mailto;
  window.setTimeout(() => {
    window.location.assign(thankYouUrl);
  }, 200);
}
