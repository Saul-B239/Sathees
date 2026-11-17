import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Sunrise } from "lucide-react";
import { Reveal } from "./Reveal";

const CATEGORIES = [
  { id: "tout", label: "Toute la carte" },
  { id: "tartines", label: "Tartines & Plats" },
  { id: "soupes", label: "Soupes du Marché" },
  { id: "jus", label: "Jus Frais" },
  { id: "desserts", label: "Douceurs" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

interface Dish {
  name: string;
  desc: string;
  price: string;
  cat: Exclude<CategoryId, "tout">;
  badge: string;
  img: string;
  alt: string;
}

const DISHES: Dish[] = [
  {
    name: "Soupe Haricot Rouge, Potimarron & Coriandre",
    desc: "Velouté onctueux aux haricots rouges et potimarron rôti, coriandre fraîche et crème fermière.",
    price: "9,50 €",
    cat: "soupes",
    badge: "Végétarien",
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxwdW1wa2luJTIwc291cCUyMGJvd2wlMjBydXN0aWN8ZW58MHx8fHwxNzkwNTAyMzQzfDA&ixlib=rb-4.1.0&q=85&w=800",
    alt: "Soupe de potimarron servie avec graines et crème",
  },
  {
    name: "Tartine d'Aubergine",
    desc: "Pain au levain toasté, caviar d'aubergine grillée, herbes du marché et huile d'olive première presse.",
    price: "11,50 €",
    cat: "tartines",
    badge: "Végétarien",
    img: "https://images.unsplash.com/photo-1610439901577-cf832e5c2320?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwzfHxicnVzY2hldHRhJTIwdG9hc3QlMjBhcnRpc2FuJTIwYnJlYWQlMjB0b3BwaW5nfGVufDB8fHx8MTc5MDUwMjQxOHww&ixlib=rb-4.1.0&q=85&w=800",
    alt: "Tartine de pain au levain aux légumes rôtis",
  },
  {
    name: "Tartine de Saumon Fumé",
    desc: "Saumon fumé d'exception, crème citronnée, aneth et jeunes pousses sur pain au levain.",
    price: "13,50 €",
    cat: "tartines",
    badge: "Signature",
    img: "https://images.unsplash.com/photo-1676798088371-858393f11f88?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxzbW9rZWQlMjBzYWxtb24lMjB0b2FzdCUyMGRpbGwlMjBjcmVhbSUyMGNoZWVzZXxlbnwwfHx8fDE3OTA1MDI5MTR8MA&ixlib=rb-4.1.0&q=85&w=800",
    alt: "Tartine de saumon fumé, crème citronnée, aneth et citron",
  },
  {
    name: "Quiche du Jour",
    desc: "Pâte brisée maison, garniture selon l'humeur du marché, servie tiède avec salade croquante.",
    price: "10,50 €",
    cat: "tartines",
    badge: "Du jour",
    img: "https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwxfHxxdWljaGUlMjBzbGljZSUyMHBsYXRlJTIwY2FmZXxlbnwwfHx8fDE3OTA1MDI0MTh8MA&ixlib=rb-4.1.0&q=85&w=800",
    alt: "Part de quiche maison servie avec jeunes pousses",
  },
  {
    name: "Salade du Jour",
    desc: "Grande salade composée minute : légumes croquants, herbes fraîches et touche gourmande du chef.",
    price: "12,00 €",
    cat: "tartines",
    badge: "Frais du marché",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHw0fHxmcmVzaCUyMHNhbGFkJTIwYm93bCUyMGdyZWVuJTIwZ291cm1ldHxlbnwwfHx8fDE3OTA1MDI0MTh8MA&ixlib=rb-4.1.0&q=85&w=800",
    alt: "Grande salade fraîche aux légumes du marché",
  },
  {
    name: "Jus Pomme & Carotte",
    desc: "Pressé à la minute : pommes croquantes, carottes du marché et une pointe de gingembre.",
    price: "6,00 €",
    cat: "jus",
    badge: "Pressé minute",
    img: "https://images.unsplash.com/photo-1528556860752-2a6a19a285a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNhcnJvdCUyMGFwcGxlJTIwanVpY2UlMjBnbGFzc3xlbnwwfHx8fDE3OTA1MDIzNDN8MA&ixlib=rb-4.1.0&q=85&w=800",
    alt: "Verre de jus de carotte fraîchement pressé",
  },
  {
    name: "Moelleux au Chocolat",
    desc: "Cœur coulant au chocolat grand cru, servi tiède avec sa crème légère — le final culte de la maison.",
    price: "7,50 €",
    cat: "desserts",
    badge: "Fait maison",
    img: "https://images.unsplash.com/photo-1585504455924-3d3b0eb2b8ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHw0fHxjaG9jb2xhdGUlMjBmb25kYW50JTIwbGF2YSUyMGNha2UlMjBkZXNzZXJ0fGVufDB8fHx8MTc5MDUwMjM0M3ww&ixlib=rb-4.1.0&q=85&w=800",
    alt: "Moelleux au chocolat au cœur coulant",
  },
];

export function Menu() {
  const [cat, setCat] = useState<CategoryId>("tout");
  const dishes = cat === "tout" ? DISHES : DISHES.filter((d) => d.cat === cat);

  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="scroll-mt-20 bg-[#F0ECE1]/60 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C85A32]">
                Le Menu
              </p>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl lg:text-[40px]">
                La carte du jour<span className="text-[#C85A32]">.</span>
              </h2>
            </div>
            <span
              data-testid="menu-daily-badge"
              className="flex items-center gap-2 rounded-full bg-[#2B4C3F] px-4 py-2 text-xs font-bold text-white"
            >
              <Sunrise className="h-4 w-4 text-[#D4A359]" />
              Arrivages du matin
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            data-testid="menu-tabs"
            role="tablist"
            aria-label="Catégories de la carte"
            className="mt-10 flex flex-wrap gap-2"
          >
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={cat === c.id}
                data-testid={`menu-tab-${c.id}`}
                onClick={() => setCat(c.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-300 ${
                  cat === c.id ? "text-white" : "text-[#57534E] hover:text-[#1C1917]"
                }`}
              >
                {cat === c.id && (
                  <motion.span
                    layoutId="menu-tab-pill"
                    className="absolute inset-0 rounded-full bg-[#C85A32]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{c.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {dishes.map((dish) => (
              <motion.article
                layout
                key={dish.name}
                data-testid={`menu-card-${dish.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#EBE5D8] bg-white shadow-[0_10px_26px_rgba(74,51,40,0.05)] transition-[box-shadow] duration-500 hover:shadow-[0_22px_44px_rgba(74,51,40,0.12)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={dish.img}
                    alt={dish.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#FAF7F2]/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2B4C3F]">
                    {dish.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-semibold leading-snug tracking-tight text-[#1C1917]">
                    {dish.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#57534E]">{dish.desc}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-[#EBE5D8] pt-4">
                    <span className="text-lg font-bold tracking-tight text-[#C85A32]">
                      {dish.price}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#57534E]">
                      Fait sur place
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.05}>
          <div
            data-testid="menu-note-banner"
            className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#1B2E26] px-6 py-7 text-center sm:flex-row sm:px-10 sm:text-left"
          >
            <p className="max-w-xl font-accent text-lg italic leading-snug text-[#FAF7F2] sm:text-xl">
              « Une carte renouvelée quotidiennement selon les arrivages du marché. »
            </p>
            <a
              href="tel:+33156817007"
              aria-label="Appeler le restaurant Sathees au 01 56 81 70 07"
              data-testid="menu-cta-call"
              className="flex shrink-0 items-center gap-2 rounded-full bg-[#C85A32] px-6 py-3.5 text-sm font-bold text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#A94320]"
            >
              <Phone className="h-4 w-4" />
              Commander · 01 56 81 70 07
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
