import { Phone } from "lucide-react";

export function MobileCallBar() {
  return (
    <div
      data-testid="mobile-call-bar"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#E5DEC9] bg-[#FAF7F2]/92 p-3 backdrop-blur-xl sm:hidden"
    >
      <a
        href="tel:+33156817007"
        aria-label="Appeler le restaurant Sathees au 01 56 81 70 07"
        data-testid="mobile-call-cta"
        className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#C85A32] py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(200,90,50,0.35)]"
      >
        <Phone className="h-4 w-4" />
        Appeler · 01 56 81 70 07
      </a>
    </div>
  );
}
