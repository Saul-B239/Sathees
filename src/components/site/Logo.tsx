interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 64 72" className={className} aria-hidden="true" data-testid="logo-mark">
      <path
        d="M14 64V32c0-12 8-19 18-19s18 7 18 19v32"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <text
        x="32"
        y="55"
        textAnchor="middle"
        fontFamily="'Playfair Display Variable', Georgia, serif"
        fontStyle="italic"
        fontSize="34"
        fill="currentColor"
      >
        S
      </text>
      <circle cx="32" cy="66" r="2.8" fill="#C85A32" stroke="none" />
    </svg>
  );
}

interface LogoProps {
  dark?: boolean;
}

export function Logo({ dark = false }: LogoProps) {
  return (
    <a
      href="#accueil"
      data-testid="logo-link"
      className={`flex items-center gap-2.5 ${dark ? "text-[#FAF7F2]" : "text-[#1C1917]"}`}
    >
      <LogoMark className="h-9 w-8" />
      <span className="leading-none">
        <span className="block font-heading text-2xl font-bold tracking-tight">
          Sathees<span className="text-[#C85A32]">.</span>
        </span>
        <span
          className={`mt-0.5 block text-[9px] font-bold uppercase tracking-[0.28em] ${
            dark ? "text-[#C2D1C9]" : "text-[#57534E]"
          }`}
        >
          Bistrot · Paris 6e
        </span>
      </span>
    </a>
  );
}
