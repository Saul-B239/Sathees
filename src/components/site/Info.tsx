import { Clock, MapPin, Phone, TrainFront } from "lucide-react";
import { Reveal } from "./Reveal";

const MAP_SRC =
  "https://www.google.com/maps?q=Sathees%2C%204-8%20Rue%20Lobineau%2C%2075006%20Paris&output=embed";

export function Info() {
  return (
    <section
      id="contact"
      data-testid="practical-info-section"
      className="scroll-mt-20 bg-[#1B2E26] py-20 text-[#FAF7F2] sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4A359]">
                Contact & Accès
              </p>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
                Au cœur du Marché
                <br />
                <em className="font-accent font-medium text-[#D4A359]">Saint-Germain</em>
              </h2>
            </Reveal>

            <div className="mt-10 space-y-6">
              <Reveal delay={0.08}>
                <div className="flex items-start gap-4" data-testid="info-address">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D4A359]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold">4-8 Rue Lobineau, 75006 Paris</p>
                    <p className="mt-1 text-sm text-[#C2D1C9]">
                      Étage G — Marché Alimentaire Saint-Germain
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="flex items-start gap-4" data-testid="info-metro">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D4A359]">
                    <TrainFront className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold">Métro Saint-Germain-des-Prés · Mabillon · Odéon</p>
                    <p className="mt-1 text-sm text-[#C2D1C9]">Lignes 4 et 10 à quelques pas</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex items-start gap-4" data-testid="info-hours">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D4A359]">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold">Ouvert aujourd'hui — service jusqu'à 20h00</p>
                    <p className="mt-1 text-sm text-[#C2D1C9]">
                      Repas sur place · Livraison · À emporter
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.26}>
              <a
                href="tel:+33156817007"
                aria-label="Appeler le restaurant Sathees au 01 56 81 70 07"
                data-testid="info-phone-cta"
                className="group mt-12 inline-flex items-center gap-4 rounded-full bg-[#C85A32] py-4 pl-6 pr-8 transition-[background-color,transform] duration-300 hover:-translate-y-1 hover:bg-[#A94320]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-12">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="text-left">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                    Réservation & commande
                  </span>
                  <span className="block font-heading text-2xl font-bold tracking-tight">
                    01 56 81 70 07
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div
              data-testid="info-map"
              className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
            >
              <iframe
                title="Plan d'accès — Sathees, 4-8 Rue Lobineau, 75006 Paris"
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full grayscale-[35%] contrast-[1.05]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
