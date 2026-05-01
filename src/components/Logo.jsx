import './Logo.css'

export default function Logo({ size = 44 }) {
  return (
    <div className="logo-wrap" style={{ height: size }}>
      <div className="logo-icon" style={{ width: size, height: size }}>
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a3a6e" />
              <stop offset="100%" stopColor="#0c1a3a" />
            </linearGradient>
            <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1a3a6e" />
            </linearGradient>
            <linearGradient id="lg3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#fde68a" />
            </linearGradient>
          </defs>

          {/* Outer rotating ring */}
          <circle cx="30" cy="30" r="28" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="5 3" className="logo-ring" fill="none" />

          {/* Main badge circle */}
          <circle cx="30" cy="30" r="24" fill="url(#lg1)" />

          {/* Inner highlight */}
          <circle cx="30" cy="30" r="24" fill="url(#lg2)" opacity="0.25" />

          {/* Shopping bag body */}
          <rect x="17" y="30" width="26" height="16" rx="3" fill="white" opacity="0.95" />

          {/* Bag handle */}
          <path d="M22 30 Q22 21 30 21 Q38 21 38 30" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Saffron star accent on bag */}
          <path d="M30 33 L31.2 36.6 L35 36.6 L32 38.8 L33.2 42.4 L30 40.2 L26.8 42.4 L28 38.8 L25 36.6 L28.8 36.6 Z" fill="url(#lg3)" opacity="0.9" />

          {/* Small sparkle dots */}
          <circle cx="14" cy="30" r="1.8" fill="#fbbf24" opacity="0.6" />
          <circle cx="46" cy="30" r="1.8" fill="#fbbf24" opacity="0.6" />
          <circle cx="30" cy="8" r="1.4" fill="white" opacity="0.5" />
        </svg>

        {/* Pulse ring */}
        <div className="logo-pulse" />

        {/* Sparkle accent */}
        <span className="logo-sparkle">✦</span>
      </div>

      <div className="logo-text">
        <span className="logo-name">Ayra</span>
        <span className="logo-bazar">Mart</span>
      </div>
    </div>
  )
}
