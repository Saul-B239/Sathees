import { useEffect } from "react";
import Lenis from "lenis";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Concept } from "@/components/site/Concept";
import { Menu } from "@/components/site/Menu";
import { Reviews } from "@/components/site/Reviews";
import { Info } from "@/components/site/Info";
import { Footer } from "@/components/site/Footer";
import { MobileCallBar } from "@/components/site/MobileCallBar";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    (window as unknown as { lenis?: Lenis }).lenis = lenis;
    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return (
    <div className="grain min-h-screen bg-[#FAF7F2] text-[#1C1917] antialiased">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Concept />
        <Menu />
        <Reviews />
        <Info />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
