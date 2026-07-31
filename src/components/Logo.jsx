export default function Logo({ className = "", style = {} }) {
  return (
    <svg 
      className={className}
      style={style}
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf0a6" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#997a15" />
        </linearGradient>
        <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>
      </defs>

      {/* Sun Rays */}
      <path d="M250 80 L250 40" stroke="url(#goldGradient)" strokeWidth="12" strokeLinecap="round" />
      <path d="M190 95 L160 60" stroke="url(#goldGradient)" strokeWidth="10" strokeLinecap="round" />
      <path d="M310 95 L340 60" stroke="url(#goldGradient)" strokeWidth="10" strokeLinecap="round" />
      <path d="M140 135 L100 110" stroke="url(#goldGradient)" strokeWidth="9" strokeLinecap="round" />
      <path d="M360 135 L400 110" stroke="url(#goldGradient)" strokeWidth="9" strokeLinecap="round" />
      <path d="M110 190 L70 180" stroke="url(#goldGradient)" strokeWidth="8" strokeLinecap="round" />
      <path d="M390 190 L430 180" stroke="url(#goldGradient)" strokeWidth="8" strokeLinecap="round" />

      {/* Sun Arc */}
      <path d="M110 230 C120 140, 180 110, 250 110 C320 110, 380 140, 390 230" stroke="url(#goldGradient)" strokeWidth="10" strokeLinecap="round" />

      {/* Letter S */}
      <path d="M280 200 C240 160, 180 160, 150 200 C120 240, 150 280, 200 300 C250 320, 290 350, 260 400 C230 450, 150 430, 130 380 L130 380" stroke="url(#silverGradient)" strokeWidth="45" strokeLinecap="round" />

      {/* Letter M */}
      <path d="M260 300 L260 420" stroke="url(#goldGradient)" strokeWidth="45" strokeLinecap="round" />
      <path d="M250 280 L310 350 L370 200 L370 420" stroke="url(#goldGradient)" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" />

      {/* Play Button */}
      <polygon points="210,230 210,290 260,260" fill="url(#goldGradient)" />

      {/* Bottom Text */}
      <text x="250" y="470" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="55" fill="currentColor" textAnchor="middle" letterSpacing="4">
        SHINY MÉDIA
      </text>
    </svg>
  );
}
