import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    text: "Excellente adresse dans le quartier St Germain / Odéon. Des produits frais et une carte qui change tous les jours… On peut y aller les yeux fermés.",
    name: "Louise Gauthier",
    role: "Local Guide",
  },
  {
    text: "Toujours très bon et très frais, tout est fait sur place. L'ambiance est chaleureuse.",
    name: "H D",
    role: "Avis vérifié",
  },
  {
    text: "Service impeccable, toujours aimable et accueillant. Les soupes, tartines et desserts sont un régal.",
    name: "Saima Benou Halima",
    role: "Avis vérifié",
  },
];

export function Reviews() {
  return (
    <section id="avis" data-testid="testimonials-section" className="scroll-mt-20 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C85A32]">
            Avis Clients
          </p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-[#1C1917] sm:text-4xl lg:text-[40px]">
            Ils sont devenus des <em className="font-accent font-medium text-[#2B4C3F]">habitués</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4" delay={0.05}>
            <div
              data-testid="rating-score-card"
              className="flex h-full flex-col justify-between rounded-2xl bg-[#2B4C3F] p-8 text-white shadow-[0_20px_44px_rgba(27,46,38,0.25)] sm:p-10"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4A359]">
                  Note globale
                </span>
                <div className="mt-6 flex items-end gap-2">
                  <span
                    data-testid="rating-score"
                    className="font-heading text-7xl font-bold leading-none tracking-tight sm:text-8xl"
                  >
                    4,6
                  </span>
                  <span className="pb-2 font-heading text-2xl text-[#C2D1C9]">/5</span>
                </div>
                <div className="mt-5 flex gap-1 text-[#D4A359]" aria-label="4,6 étoiles sur 5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-6 w-6 fill-current" />
                  ))}
                </div>
              </div>
              <p className="mt-8 border-t border-white/15 pt-6 text-sm leading-relaxed text-[#C2D1C9]">
                Basé sur <strong className="text-white">153 avis</strong> — satisfaction client et
                ambiance chaleureuse plébiscitées par le quartier.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-1 xl:grid-cols-1">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={0.1 + i * 0.08}>
                <figure
                  data-testid={`testimonial-card-${i}`}
                  className="flex h-full flex-col justify-between gap-5 rounded-2xl border border-[#EBE5D8] bg-white p-7 shadow-[0_10px_26px_rgba(74,51,40,0.05)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(74,51,40,0.1)] sm:flex-row sm:items-start sm:p-8"
                >
                  <Quote className="h-8 w-8 shrink-0 rotate-180 text-[#C85A32]/30" aria-hidden="true" />
                  <div className="flex-1">
                    <blockquote className="font-accent text-lg italic leading-snug text-[#2B4C3F] sm:text-xl">
                      {r.text}
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7ECE6] font-heading text-base font-bold text-[#C85A32]">
                        {r.name.charAt(0)}
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-[#1C1917]">{r.name}</span>
                        <span className="block text-xs text-[#57534E]">{r.role}</span>
                      </span>
                      <span className="ml-auto flex text-[#D4A359]">
                        {[0, 1, 2, 3, 4].map((s) => (
                          <Star key={s} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </span>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
