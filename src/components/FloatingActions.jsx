import { useState } from "react";
import AppIcon from "./AppIcon";

const languages = ["Español", "English", "Português"];
const whatsappLink = "https://wa.me/573205406782";

function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-actions">
      <div className="floating-language-wrap">
        {open ? (
          <div className="floating-language-panel" role="dialog" aria-label="Selector de idioma deshabilitado">
            <p className="floating-language-title">Idioma</p>
            <div className="space-y-2">
              {languages.map((language) => (
                <button key={language} type="button" disabled className="floating-language-option">
                  {language}
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-500">Disponible al finalizar la traducción del sitio.</p>
          </div>
        ) : null}

        <button
          type="button"
          className="floating-action-btn floating-action-btn-light"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Cambiar idioma"
        >
          <AppIcon name="globe" className="h-5 w-5" />
        </button>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="floating-action-btn floating-action-btn-whatsapp"
        aria-label="Escribir por WhatsApp"
      >
        <AppIcon name="whatsapp" className="h-5 w-5" />
      </a>

      <button
        type="button"
        className="floating-action-btn floating-action-btn-light"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Volver al inicio"
      >
        <AppIcon name="arrowUp" className="h-5 w-5" />
      </button>
    </div>
  );
}

export default FloatingActions;
