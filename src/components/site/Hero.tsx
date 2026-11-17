import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { MapPin, Phone, Sparkles, Star } from "lucide-react";
import { scrollToHash } from "./Header";

const HERO_IMG =
  "https://images.unsplash.com/photo-1652799686941-b108ff7009e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHw0fHxicnVzY2hldHRhJTIwdG9hc3QlMjBhcnRpc2FuJTIwYnJlYWQlMjB0b3BwaW5nfGVufDB8fHx8MTc5MDUwMjQxOHww&ixlib=rb-4.1.0&q=85&w=1200";

const lineVariants: Variants = {
  hidden: { y: "115%" },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.25 + i * 0.13 },
  }),
};

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="accueil"
      data-testid="hero-section"
      ref={ref}
      className="relative overflow-hidden pt-[72px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-24 h-[540px] w-[540px] rounded-full bg-[#F7ECE6] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 bottom-0 h-[420px] w-[420px] rounded-full bg-[#EAF0EB] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-6">
          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            custom={0.1}
            data-testid="hero-location-tag"
            className="inline-flex items-center gap-2 rounded-full border border-[#E5DEC9] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#2B4C3F]"
          >
            <MapPin className="h-3.5 w-3.5 text-[#C85A32]" />
            Marché Saint-Germain · Paris 6e
          </motion.div>

          <h1 className="mt-7 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-[#1C1917] sm:text-5xl lg:text-6xl">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                L'adresse incontournable
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                de <em className="font-accent font-medium text-[#C85A32]">Saint-Germain</em>
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                &amp; Odéon<span className="text-[#C85A32]">.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            custom={0.85}
            data-testid="hero-subtitle"
            className="mt-6 max-w-xl text-base leading-relaxed text-[#57534E] sm:text-lg"
          >
            Des produits frais, une carte qui change tous les jours pour le plus grand bonheur des
            habitués. Tartines gourmandes, soupes du marché et jus pressés minute — tout est fait
            sur place.
          </motion.p>

          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="tel:+33156817007"
              aria-label="Appeler le restaurant Sathees au 01 56 81 70 07"
              data-testid="hero-cta-reserve"
              className="group flex items-center gap-2.5 rounded-full bg-[#C85A32] px-7 py-4 text-sm font-bold text-white shadow-[0_14px_30px_rgba(200,90,50,0.3)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:bg-[#A94320] hover:shadow-[0_20px_40px_rgba(200,90,50,0.35)]"
            >
              <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              Réserver une table
            </a>
            <button
              data-testid="hero-cta-menu"
              onClick={() => scrollToHash("#menu")}
              className="rounded-full border-2 border-[#1C1917]/15 bg-white/60 px-7 py-[14px] text-sm font-bold text-[#1C1917] transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-[#C85A32] hover:text-[#C85A32]"
            >
              Découvrir la carte
            </button>
          </motion.div>

          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            custom={1.15}
            data-testid="hero-trust-row"
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#57534E]"
          >
            <span className="flex items-center gap-2">
              <span className="flex text-[#D4A359]">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <strong className="text-[#1C1917]">4,6/5</strong> · 153 avis
            </span>
            <span className="hidden h-4 w-px bg-[#E5DEC9] sm:block" />
            <span>
              <strong className="text-[#1C1917]">10 € – 20 €</strong> par personne
            </span>
            <span className="hidden h-4 w-px bg-[#E5DEC9] sm:block" />
            <span>Sur place · Livraison</span>
          </motion.div>
        </div>

        <div className="relative lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="relative mx-auto max-w-[480px]"
          >
            <div className="rounded-t-[190px] rounded-b-[28px] border border-[#E5DEC9] bg-white p-3 shadow-[0_40px_80px_rgba(74,51,40,0.16)]">
              <div className="overflow-hidden rounded-t-[178px] rounded-b-[20px]">
                <motion.img
                  src={HERO_IMG}
                  alt="Tartines artisanales sur pain au levain, garnitures fraîches du marché"
                  data-testid="hero-image"
                  style={{ y: imgY, scale: 1.15 }}
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />
              </div>
            </div>

            <motion.div
              style={{ y: cardY }}
              className="absolute -left-4 top-16 sm:-left-10"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                data-testid="hero-rating-badge"
                className="flex items-center gap-3 rounded-2xl border border-[#E5DEC9] bg-white/95 px-4 py-3 shadow-[0_16px_36px_rgba(74,51,40,0.14)] backdrop-blur"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9F4EC] font-heading text-lg font-bold text-[#C85A32]">
                  4,6
                </span>
                <span className="text-xs leading-tight">
                  <span className="flex text-[#D4A359]">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-3 w-3 fill-current" />
                    ))}
                  </span>
                  <span className="mt-0.5 block font-semibold text-[#1C1917]">153 avis Google</span>
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ y: cardY }}
              className="absolute -bottom-6 -right-2 sm:-right-6"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                data-testid="hero-fresh-badge"
                className="flex items-center gap-3 rounded-2xl bg-[#2B4C3F] px-5 py-3.5 text-white shadow-[0_16px_36px_rgba(27,46,38,0.3)]"
              >
                <Sparkles className="h-5 w-5 text-[#D4A359]" />
                <span className="text-xs leading-tight">
                  <span className="block font-bold">Carte du jour</span>
                  <span className="text-[#C2D1C9]">selon les arrivages du marché</span>
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
