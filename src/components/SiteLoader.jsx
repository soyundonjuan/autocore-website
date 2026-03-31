function SiteLoader({ visible }) {
  return (
    <div
      className={`site-loader${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
      role="status"
      aria-live="polite"
    >
      <div className="site-loader-backdrop" />
      <div className="site-loader-core">
        <span className="site-loader-wave" />
        <span className="site-loader-wave site-loader-wave-delay" />
        <img src="/assets/autocore-logo-official.png" alt="Autocore" className="site-loader-logo" />
      </div>
    </div>
  );
}

export default SiteLoader;
