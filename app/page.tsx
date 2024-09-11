"use client";

import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Toolbox from "@/components/Toolbox";
import Work from "@/components/Work";
import { useRef } from "react";

export default function Home() {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative min-h-screen w-full">
      <HeroSection scrollToRef={nextSectionRef} />
      <Work sectionRef={nextSectionRef} />
      <Toolbox />
      <About />
    </main>
  );
}
