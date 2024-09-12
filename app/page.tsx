"use client";

import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Toolbox from "@/components/Toolbox";
import Work from "@/components/Work";
import { useRef } from "react";

export default function Home() {
  const workSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative min-h-screen w-full">
      <HeroSection scrollToRef={workSectionRef} />
      <Work sectionRef={workSectionRef} />
      <Toolbox />
      <About />
    </main>
  );
}
