const ITEMS = [
  "Tartines gourmandes",
  "Soupes du jour",
  "Jus frais pressés",
  "Fait maison",
  "Marché Saint-Germain",
  "Produits de saison",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      data-testid="editorial-marquee-strip"
      className="overflow-hidden border-y border-[#E5DEC9] bg-[#F0ECE1] py-5"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center font-heading text-lg italic text-[#4A3328] sm:text-xl"
              >
                <span className="px-6">{item}</span>
                <span className="text-[#C85A32]">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
