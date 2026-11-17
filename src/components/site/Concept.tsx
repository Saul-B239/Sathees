import { HeartHandshake, Leaf, ShoppingBasket, Soup } from "lucide-react";
import { Reveal } from "./Reveal";

const MARKET_IMG =
  "https://images.unsplash.com/photo-1606237906294-ae86d103d715?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHxmcmVzaCUyMG1hcmtldCUyMHZlZ2V0YWJsZXMlMjBzdGFsbHxlbnwwfHx8fDE3OTA1MDIzNDN8MA&ixlib=rb-4.1.0&q=85&w=1000";
const BISTRO_IMG =
  "https://images.unsplash.com/photo-1670819917685-f1040e76b9b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxwYXJpc2lhbiUyMGJpc3RybyUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvciUyMHdhcm0lMjB3b29kfGVufDB8fHx8MTc5MDUwMjM0NHww&ixlib=rb-4.1.0&q=85&w=1000";

const PILLARS = [
  {
    icon: ShoppingBasket,
    title: "Les produits du marché",
    text: "Installés au cœur du Marché Alimentaire Saint-Germain, nous composons chaque matin avec les arrivages de nos voisins maraîchers.",
  },
  {
    icon: Soup,
    title: "100% fait maison",
    text: "Soupes mijotées du matin, pain au levain artisanal, tartines montées à la commande. Ici, tout est fait sur place, sous vos yeux.",
  },
  {
    icon: Leaf,
    title: "Une pause saine & gourmande",
    text: "Une carte équilibrée de 10 € à 20 €, renouvelée quotidiennement, pensée pour les déjeuners du quartier comme pour les flâneurs.",
  },
  {
    icon: HeartHandshake,
    title: "Un accueil aimable & souriant",
    text: "L'ambiance chaleureuse d'un bistrot de quartier, portée par une équipe qui connaît ses habitués — service jusqu'à 20h00.",
  },
];

export function Concept() {
  return (
    <section id="concept" data-testid="concept-section" className="scroll-mt-20 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C85A32]">
            Notre Concept
          </p>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
            L'art du fait maison, au rythme du{" "}
            <em className="font-accent font-medium text-[#2B4C3F]">marché</em>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#57534E] sm:text-lg">
            Un lieu chaleureux niché dans le Marché Alimentaire Saint-Germain, où la fraîcheur
            n'est pas une promesse mais une évidence quotidienne.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8">
          <Reveal className="md:col-span-7" delay={0.05}>
            <article
              data-testid="concept-card-0"
              className="group relative h-full overflow-hidden rounded-2xl shadow-[0_16px_36px_rgba(74,51,40,0.08)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(74,51,40,0.14)]"
            >
              <img
                src={MARKET_IMG}
                alt="Étal de légumes frais du Marché Saint-Germain"
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full md:min-h-[320px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B2E26]/90 to-transparent p-6 sm:p-8">
                <PillarHeading index={0} light />
                <p className="mt-2 max-w-md text-sm leading-relaxed text-[#FAF7F2]/90">
                  {PILLARS[0].text}
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.12}>
            <article
              data-testid="concept-card-1"
              className="flex h-full flex-col justify-between rounded-2xl border border-[#EBE5D8] bg-white p-6 shadow-[0_16px_36px_rgba(74,51,40,0.06)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(74,51,40,0.12)] sm:p-8"
            >
              <PillarIcon index={1} />
              <div>
                <PillarHeading index={1} />
                <p className="mt-2 text-sm leading-relaxed text-[#57534E]">{PILLARS[1].text}</p>
              </div>
            </article>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.05}>
            <article
              data-testid="concept-card-2"
              className="flex h-full flex-col justify-between rounded-2xl bg-[#F0ECE1] p-6 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(74,51,40,0.12)] sm:p-8"
            >
              <PillarIcon index={2} />
              <div>
                <PillarHeading index={2} />
                <p className="mt-2 text-sm leading-relaxed text-[#57534E]">{PILLARS[2].text}</p>
              </div>
            </article>
          </Reveal>

          <Reveal className="md:col-span-7" delay={0.12}>
            <article
              data-testid="concept-card-3"
              className="group grid h-full grid-cols-1 overflow-hidden rounded-2xl bg-[#1B2E26] shadow-[0_16px_36px_rgba(27,46,38,0.2)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(27,46,38,0.28)] sm:grid-cols-2"
            >
              <div className="p-6 sm:p-8">
                <PillarIcon index={3} dark />
                <PillarHeading index={3} light />
                <p className="mt-2 text-sm leading-relaxed text-[#C2D1C9]">{PILLARS[3].text}</p>
              </div>
              <img
                src={BISTRO_IMG}
                alt="Salle chaleureuse du bistrot Sathees, bois clair et lumière douce"
                className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-full"
              />
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PillarIcon({ index, dark = false }: { index: number; dark?: boolean }) {
  const Icon = PILLARS[index].icon;
  return (
    <span
      className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full ${
        dark ? "bg-[#D4A359]/15 text-[#D4A359]" : "bg-[#F7ECE6] text-[#C85A32]"
      }`}
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}

function PillarHeading({ index, light = false }: { index: number; light?: boolean }) {
  return (
    <h3
      className={`font-heading text-xl font-semibold tracking-tight ${
        light ? "text-[#FAF7F2]" : "text-[#1C1917]"
      }`}
    >
      {PILLARS[index].title}
    </h3>
  );
}
