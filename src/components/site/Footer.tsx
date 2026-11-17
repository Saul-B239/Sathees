import { Phone } from "lucide-react";
import { SiInstagram, SiFacebook } from "@icons-pack/react-simple-icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer data-testid="footer-section" className="border-t border-[#E5DEC9] bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 sm:pb-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#57534E]">
              Bistrot chic & bar gourmand au cœur du Marché Alimentaire Saint-Germain. Tartines,
              soupes du marché et jus frais — tout est fait maison, chaque jour.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Suivre Sathees sur Instagram"
                data-testid="footer-social-instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DEC9] bg-white text-[#1C1917] transition-[color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#C85A32] hover:text-[#C85A32]"
              >
                <SiInstagram size={16} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Suivre Sathees sur Facebook"
                data-testid="footer-social-facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5DEC9] bg-white text-[#1C1917] transition-[color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#C85A32] hover:text-[#C85A32]"
              >
                <SiFacebook size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#C85A32]">
              Nous trouver
            </h3>
            <address className="mt-5 text-sm not-italic leading-relaxed text-[#57534E]">
              4-8 Rue Lobineau
              <br />
              75006 Paris — Étage G
              <br />
              Marché Alimentaire Saint-Germain
            </address>
            <a
              href="tel:+33156817007"
              data-testid="footer-phone-link"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#1C1917] transition-colors hover:text-[#C85A32]"
            >
              <Phone className="h-4 w-4 text-[#C85A32]" />
              01 56 81 70 07
            </a>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#C85A32]">
              Horaires
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-[#57534E]">
              Service continu jusqu'à 20h00
              <br />
              Repas sur place · Livraison · À emporter
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#F0ECE1] px-4 py-2 text-xs font-bold text-[#2B4C3F]">
              <span className="h-2 w-2 rounded-full bg-[#2B4C3F]" />
              Ouvert — ferme à 20h00
            </p>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-16 select-none text-center font-heading text-[18vw] font-bold leading-none tracking-tight text-[#1C1917]/[0.05] md:text-[10rem]"
        >
          Sathees
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-[#E5DEC9] pt-8 text-xs text-[#57534E] sm:flex-row">
          <p data-testid="footer-copyright">© 2026 Sathees — Paris 6e. Tous droits réservés.</p>
          <nav className="flex gap-6" aria-label="Liens légaux">
            <a href="#" data-testid="footer-legal-mentions" className="transition-colors hover:text-[#C85A32]">
              Mentions légales
            </a>
            <a href="#" data-testid="footer-legal-privacy" className="transition-colors hover:text-[#C85A32]">
              Confidentialité
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
