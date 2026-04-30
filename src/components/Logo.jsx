import './Logo.css'

export default function Logo({ size = 44 }) {
  return (
    <div className="logo-wrap" style={{ height: size }}>
      <div className="logo-icon" style={{ width: size, height: size }}>
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a9e5c" />
              <stop offset="100%" stopColor="#0d6e3f" />
            </linearGradient>
            <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#1a9e5c" />
            </linearGradient>
          </defs>

          {/* Outer rotating ring */}
          <circle cx="30" cy="30" r="28" stroke="#1a9e5c" strokeWidth="1.5" strokeDasharray="5 3" className="logo-ring" fill="none" />

          {/* Main badge circle */}
          <circle cx="30" cy="30" r="24" fill="url(#lg1)" />

          {/* Inner highlight */}
          <circle cx="30" cy="30" r="24" fill="url(#lg2)" opacity="0.3" />

          {/* Basket body */}
          <rect x="17" y="34" width="26" height="13" rx="2.5" fill="white" opacity="0.95" />
          {/* Basket weave lines */}
          <line x1="22" y1="34" x2="22" y2="47" stroke="#dcfce7" strokeWidth="1" />
          <line x1="27" y1="34" x2="27" y2="47" stroke="#dcfce7" strokeWidth="1" />
          <line x1="33" y1="34" x2="33" y2="47" stroke="#dcfce7" strokeWidth="1" />
          <line x1="38" y1="34" x2="38" y2="47" stroke="#dcfce7" strokeWidth="1" />
          <line x1="17" y1="39" x2="43" y2="39" stroke="#dcfce7" strokeWidth="1" />
          <line x1="17" y1="43" x2="43" y2="43" stroke="#dcfce7" strokeWidth="1" />

          {/* Basket handle */}
          <path d="M21 34 Q21 24 30 24 Q39 24 39 34" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Vegetable/leaf on top of handle */}
          <g className="logo-leaves">
            <path d="M30 24 Q27 17 22 15 Q24 21 30 24" fill="#86efac" />
            <path d="M30 24 Q33 17 38 15 Q36 21 30 24" fill="#4ade80" />
            <path d="M30 22 Q30 16 30 14" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Small dots decoration */}
          <circle cx="14" cy="30" r="2" fill="white" opacity="0.5" />
          <circle cx="46" cy="30" r="2" fill="white" opacity="0.5" />
          <circle cx="30" cy="8" r="1.5" fill="white" opacity="0.4" />
          <circle cx="30" cy="52" r="1.5" fill="white" opacity="0.4" />
        </svg>

        {/* Pulse ring */}
        <div className="logo-pulse" />
      </div>

      <div className="logo-text">
        <span className="logo-name">Ayra Family </span>
        <span className="logo-bazar">Mart</span>
      </div>
    </div>
  )
}
