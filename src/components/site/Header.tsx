import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, Phone, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Accueil", hash: "#accueil" },
  { label: "Notre Concept", hash: "#concept" },
  { label: "Le Menu", hash: "#menu" },
  { label: "Avis Clients", hash: "#avis" },
  { label: "Contact & Accès", hash: "#contact" },
];

export function scrollToHash(hash: string) {
  const w = window as unknown as { lenis?: { scrollTo: (t: string, o?: object) => void } };
  if (w.lenis) {
    w.lenis.scrollTo(hash, { offset: -72, duration: 1.4 });
  } else {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="main-navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
        scrolled
          ? "border-b border-[#E5DEC9]/80 bg-[#FAF7F2]/85 shadow-[0_4px_24px_rgba(43,76,63,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {NAV.map((item) => (
            <button
              key={item.hash}
              data-testid={`nav-link-${item.hash.slice(1)}`}
              onClick={() => scrollToHash(item.hash)}
              className="group relative text-sm font-medium text-[#1C1917]/80 transition-colors hover:text-[#C85A32]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C85A32] transition-[width] duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span
            data-testid="open-status-pill"
            className="hidden items-center gap-2 rounded-full border border-[#E5DEC9] bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-[#2B4C3F] md:flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2B4C3F] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2B4C3F]" />
            </span>
            Ouvert · Ferme à 20h00
          </span>
          <a
            href="tel:+33156817007"
            aria-label="Appeler le restaurant Sathees au 01 56 81 70 07"
            data-testid="cta-call-phone"
            className="hidden items-center gap-2 rounded-full bg-[#C85A32] px-5 py-2.5 text-sm font-bold text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#A94320] sm:flex"
          >
            <Phone className="h-4 w-4" />
            Réserver une table
          </a>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DEC9] bg-white/70 text-[#1C1917] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[#E5DEC9]/70 bg-[#FAF7F2]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV.map((item) => (
                <button
                  key={item.hash}
                  data-testid={`mobile-nav-link-${item.hash.slice(1)}`}
                  onClick={() => {
                    setOpen(false);
                    scrollToHash(item.hash);
                  }}
                  className="rounded-xl px-4 py-3 text-left font-heading text-lg text-[#1C1917] transition-colors hover:bg-[#F0ECE1]"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="tel:+33156817007"
                data-testid="mobile-cta-call-phone"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#C85A32] px-5 py-3.5 text-sm font-bold text-white"
              >
                <Phone className="h-4 w-4" />
                Réserver · 01 56 81 70 07
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
