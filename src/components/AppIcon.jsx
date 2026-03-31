const icons = {
  clock: (
    <path
      d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  shield: (
    <path
      d="m12 3 7 3v5c0 4.4-2.9 8.4-7 9-4.1-.6-7-4.6-7-9V6l7-3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  wallet: (
    <>
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 16.5v-9Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 12h5" strokeLinecap="round" />
      <circle cx="15.5" cy="12" r=".75" fill="currentColor" stroke="none" />
    </>
  ),
  automation: (
    <>
      <path d="M8 8V5m8 3V5M5 12H3m18 0h-2M8 16v3m8-3v3" strokeLinecap="round" />
      <rect x="7" y="7" width="10" height="10" rx="2.5" strokeLinejoin="round" />
      <path d="M10 12h4m-2-2v4" strokeLinecap="round" />
    </>
  ),
  finance: (
    <>
      <path d="M5 17V9m7 8V5m7 12v-6" strokeLinecap="round" />
      <path d="M3 19h18" strokeLinecap="round" />
    </>
  ),
  fraud: (
    <>
      <path d="m12 3 7 3v5c0 4.4-2.9 8.4-7 9-4.1-.6-7-4.6-7-9V6l7-3Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9.5 12 1.7 1.7L14.8 10" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  integration: (
    <>
      <rect x="3.5" y="6" width="6" height="4.5" rx="1.5" strokeLinejoin="round" />
      <rect x="14.5" y="13.5" width="6" height="4.5" rx="1.5" strokeLinejoin="round" />
      <path d="M9.5 8.25h5M14.5 15.75h-5M12 8.25v7.5" strokeLinecap="round" />
    </>
  ),
  bank: (
    <>
      <path d="M4 10h16M6 10V8.5m4 1.5V8.5m4 1.5V8.5m4 1.5V8.5M3 19h18M5 10v7m14-7v7" strokeLinecap="round" />
      <path d="M12 4 3 8.5h18L12 4Z" strokeLinejoin="round" />
    </>
  ),
  sync: (
    <>
      <path d="M7 8a6 6 0 0 1 10.2-2.2L19 7.5M17 16a6 6 0 0 1-10.2 2.2L5 16.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 4.5v3h-3M5 19.5v-3h3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  building: (
    <>
      <path d="M5 20V6.5A1.5 1.5 0 0 1 6.5 5h11A1.5 1.5 0 0 1 19 6.5V20M3 20h18M9 9h1m4 0h1M9 13h1m4 0h1" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  stars: (
    <>
      <path d="m12 4 1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L12 4Z" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  hotel: (
    <>
      <path d="M4 20V8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12M4 12h16M8 10v2m8-2v2M8 15h3m5 0h-3M3 20h18" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  layers: (
    <>
      <path d="m12 4 8 4-8 4-8-4 8-4ZM4 12l8 4 8-4M4 16l8 4 8-4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  route: (
    <>
      <path d="M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 16h4a3 3 0 0 0 3-3V8.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  phone: <path d="M5 6.5c0 6.4 5.1 11.5 11.5 11.5h1a1.5 1.5 0 0 0 1.5-1.5V14l-4 1-2.4-2.4 1-4-2.6-2.6H7.5A1.5 1.5 0 0 0 6 7.5v-1Z" strokeLinecap="round" strokeLinejoin="round" />,
  search: (
    <>
      <circle cx="11" cy="11" r="5" />
      <path d="m20 20-4.2-4.2" strokeLinecap="round" />
    </>
  ),
  document: (
    <>
      <path d="M8 3h6l4 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
      <path d="M14 3v5h5M9 13h6M9 17h6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  chat: (
    <>
      <path d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H10l-5 4v-4H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
      <path d="M8 11h8M8 14h5" strokeLinecap="round" />
    </>
  ),
  linkedin: (
    <>
      <path d="M7 9v8M7 6.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM11 17V9m0 0h3a3 3 0 0 1 3 3v5m-6-8v1m0 0a3.5 3.5 0 0 1 3-1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r=".8" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <>
      <path d="M13.5 20v-7h2.6l.4-3h-3V8.2c0-.9.3-1.5 1.6-1.5H16.7V4.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V10H8v3h2.3v7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  qr: (
    <>
      <rect x="4" y="4" width="5" height="5" rx="1" strokeLinejoin="round" />
      <rect x="15" y="4" width="5" height="5" rx="1" strokeLinejoin="round" />
      <rect x="4" y="15" width="5" height="5" rx="1" strokeLinejoin="round" />
      <path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z" fill="currentColor" stroke="none" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" strokeLinejoin="round" />
      <path d="m7 10 2 2-2 2M12 14h5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  link: (
    <>
      <path d="M10 14 8.5 15.5a3 3 0 1 1-4.2-4.2L7 8.6M14 10l1.5-1.5a3 3 0 1 1 4.2 4.2L17 15.4M9 15l6-6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" strokeLinejoin="round" />
      <path d="M7 15v-3M11 15V9M15 15v-5M7 8h9" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.7 12 2.1 2.2 4.5-4.7" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  creditCard: (
    <>
      <rect x="3.5" y="6" width="17" height="12" rx="2.5" strokeLinejoin="round" />
      <path d="M3.5 10.5h17M7 15h3.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4M12 3.8c2.4 2.2 3.8 5.1 3.8 8.2S14.4 18 12 20.2M12 3.8C9.6 6 8.2 8.9 8.2 12s1.4 6 3.8 8.2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 4.75a7.25 7.25 0 0 0-6.18 11.04l-.77 3.08 3.18-.73A7.25 7.25 0 1 0 12 4.75Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.3 9.1c.15-.34.3-.35.56-.36h.48c.16 0 .42.06.57.4.15.35.52 1.42.56 1.52.04.1.07.24 0 .38-.08.14-.12.23-.24.35l-.34.39c-.1.11-.21.23-.09.45.12.22.53.88 1.14 1.43.79.7 1.45.92 1.66 1.02.21.1.33.08.45-.05.13-.13.52-.61.66-.82.13-.2.27-.17.45-.1.19.08 1.18.56 1.38.66.2.1.33.15.38.23.05.08.05.48-.11.95-.16.46-.94.9-1.3.95-.33.05-.76.07-1.23-.08-.29-.09-.66-.22-1.15-.43-2.02-.87-3.33-2.97-3.43-3.1-.09-.12-.82-1.09-.82-2.08 0-1 .52-1.48.7-1.7Z" fill="currentColor" stroke="none" />
      <path d="m10.75 11.75 2.55 1.45" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 19V5M6 11l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

function AppIcon({ name, className = "h-6 w-6", strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    >
      {icons[name] ?? icons.layers}
    </svg>
  );
}

export default AppIcon;
