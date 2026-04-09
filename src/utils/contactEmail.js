export const contactEmailAddress = "info@autocore.pro";
const contactFormEndpoint = `https://formsubmit.co/ajax/${contactEmailAddress}`;

function cleanValue(value) {
  return String(value ?? "").trim();
}

function normalizePropertyType(value) {
  const normalized = cleanValue(value).toLowerCase();

  if (["hostal", "hostel"].includes(normalized)) {
    return "hostal";
  }

  if (
    [
      "renta corta",
      "short-term rental",
      "short term rental",
      "alquiler de corta duración",
      "alquiler de corta duracion",
      "aluguel de curta temporada",
    ].includes(normalized)
  ) {
    return "establecimiento de renta corta";
  }

  return "hotel";
}

export function buildContactMailto(formData, sourceLabel) {
  const rows = Array.from(formData.entries())
    .map(([key, value]) => [cleanValue(key), cleanValue(value)])
    .filter(([key]) => !key.startsWith("_"))
    .filter(([, value]) => value.length > 0);

  const body = [
    `Origen: ${sourceLabel}`,
    "",
    ...rows.map(([key, value]) => `${key}: ${value}`),
  ].join("\n");

  const subject = `Nuevo contacto desde ${sourceLabel}`;

  return `mailto:${contactEmailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function submitContactEmail(event, sourceLabel) {
  event.preventDefault();

  const form = event.currentTarget;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonMarkup = submitButton?.innerHTML;
  const formData = new FormData(form);
  const honeypotValue = cleanValue(formData.get("_honey"));
  const formStartedAt = Number.parseInt(cleanValue(formData.get("_form_started_at")), 10);
  const propertyType = normalizePropertyType(formData.get("Tipo de propiedad"));
  const thankYouUrl = `/gracias?tipo=${encodeURIComponent(propertyType)}`;
  const mailto = buildContactMailto(formData, sourceLabel);

  if (honeypotValue) {
    return;
  }

  if (Number.isFinite(formStartedAt) && Date.now() - formStartedAt < 2500) {
    return;
  }

  formData.append("_subject", `Nuevo contacto desde ${sourceLabel}`);
  formData.append("_captcha", "false");
  formData.append("_template", "table");
  formData.append("Origen", sourceLabel);

  try {
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = "Enviando...";
    }

    const response = await fetch(contactFormEndpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || result?.success === "false") {
      throw new Error(result?.message || "No se pudo enviar el formulario.");
    }

    window.location.assign(thankYouUrl);
    return;
  } catch (error) {
    console.error("Form submit failed, falling back to mailto.", error);
    window.location.href = mailto;
    window.setTimeout(() => {
      window.location.assign(thankYouUrl);
    }, 200);
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonMarkup || "Enviar";
    }
  }
}
