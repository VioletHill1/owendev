"use client";

import React from "react";
import { bebas } from "@/assets/fonts";

const Header = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header
      className={`fixed ${bebas.className} flex justify-between items-center w-full py-4 px-7 z-10 lg:py-8 lg:px-32`}
    >
      <div className="font-extrabold text-xl lg:text-3xl">Owen R.</div>
      <nav className="flex gap-4 text-xl">
        <button onClick={() => scrollToSection("heroSection")}>Home</button>
        <button onClick={() => scrollToSection("workSection")}>Work</button>
        <button onClick={() => scrollToSection("aboutSection")}>About</button>
      </nav>
    </header>
  );
};

export default Header;
