import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import { contactChannels, socialLinks } from "../data/siteData";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_.75fr_.75fr_.75fr] lg:px-8">
        <div className="max-w-md">
          <BrandLogo compact />
          <p className="mt-5 text-base leading-7 text-slate-600">
            Optimización de pagos digitales en hoteles con una experiencia más confiable para reservas, finanzas y
            operación.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">Contacto</h3>
          <ul className="mt-5 space-y-3 text-base text-slate-600">
            {contactChannels.map((item) => (
              <li key={item.label}>
                <a className="transition hover:text-[var(--color-brand-900)]" href={item.href}>
                  {item.value}
                </a>
              </li>
            ))}
            <li>
              <Link className="transition hover:text-[var(--color-brand-900)]" to="/contacto">
                Página de contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">Redes</h3>
          <ul className="mt-5 space-y-3 text-base text-slate-600">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a className="transition hover:text-[var(--color-brand-900)]" href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">Legales</h3>
          <ul className="mt-5 space-y-3 text-base text-slate-600">
            <li>
              <Link className="transition hover:text-[var(--color-brand-900)]" to="/politica-de-privacidad">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-[var(--color-brand-900)]" to="/terminos-y-condiciones">
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Autocore. Todos los derechos reservados.</p>
          <p>Pagos digitales hoteleros con enfoque corporativo.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
