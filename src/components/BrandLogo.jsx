import { Link } from "react-router-dom";

function BrandLogo({ to = "/", compact = false }) {
  return (
    <Link to={to} className="flex items-center" aria-label="Autocore inicio">
      <img
        src="/assets/autocore-logo-official.png"
        alt="Autocore"
        className={compact ? "h-11 w-auto object-contain" : "h-12 w-auto object-contain"}
      />
    </Link>
  );
}

export default BrandLogo;
