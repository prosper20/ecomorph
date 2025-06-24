import Image from "next/image";

import LegacySection from "./components/LegacySection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";


export default function WhyUsPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <LegacySection />
      <section className="relative w-full h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-0" />
      <Image
        src="/projects/project29-croped.jpeg"
        alt="Decorative Section"
        fill
        className="object-cover"
        priority
      />
    </section>
    </>
  )
}
