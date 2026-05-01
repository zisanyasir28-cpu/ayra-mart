import './Logo.css'

export default function Logo({ size = 44 }) {
  return (
    <div className="logo-wrap" style={{ height: size }}>
      <div className="logo-icon" style={{ width: size, height: size }}>
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8c96c" />
              <stop offset="50%" stopColor="#c9a84c" />
              <stop offset="100%" stopColor="#a67c00" />
            </linearGradient>
            <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f0d060" />
              <stop offset="100%" stopColor="#c9a84c" />
            </linearGradient>
            <radialGradient id="noirGlow" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#2a2010" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer rotating ring — thin gold */}
          <circle cx="30" cy="30" r="28" stroke="url(#goldGrad)" strokeWidth="0.8" strokeDasharray="4 3" className="logo-ring" fill="none" />

          {/* Main noir circle */}
          <circle cx="30" cy="30" r="24" fill="#0a0a0a" />

          {/* Subtle inner warmth */}
          <circle cx="30" cy="30" r="24" fill="url(#noirGlow)" />

          {/* Crown — main body */}
          <path d="M18 40 L42 40 L42 34 L37.5 28 L30 35 L22.5 28 L18 34 Z" fill="url(#goldGrad)" className="logo-crown" />

          {/* Crown base band */}
          <rect x="17.5" y="39" width="25" height="4.5" rx="1.5" fill="url(#goldGrad2)" />

          {/* Crown peak gems */}
          <circle cx="22.5" cy="27.5" r="2.8" fill="url(#goldGrad2)" />
          <circle cx="30" cy="24.5" r="3.2" fill="url(#goldGrad2)" />
          <circle cx="37.5" cy="27.5" r="2.8" fill="url(#goldGrad2)" />

          {/* Center diamond on middle gem */}
          <path d="M30 22 L31.5 24.5 L30 27 L28.5 24.5 Z" fill="white" opacity="0.7" />

          {/* Small sparkle accents */}
          <path d="M12 22 L12.8 24.2 L15 25 L12.8 25.8 L12 28 L11.2 25.8 L9 25 L11.2 24.2 Z" fill="#e8c96c" opacity="0.7" className="logo-sparkle-left" />
          <path d="M48 18 L48.6 19.8 L50.4 20.4 L48.6 21 L48 22.8 L47.4 21 L45.6 20.4 L47.4 19.8 Z" fill="#e8c96c" opacity="0.6" className="logo-sparkle-right" />
        </svg>

        {/* Pulse ring */}
        <div className="logo-pulse" />
      </div>

      <div className="logo-text">
        <span className="logo-name">Ayra</span>
        <span className="logo-bazar">M A R T</span>
      </div>
    </div>
  )
}
