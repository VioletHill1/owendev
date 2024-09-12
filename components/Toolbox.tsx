"use client";
import React from "react";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import { bebas } from "@/assets/fonts";
import Carousel from "./carousel/Carousel";

const Toolbox = () => {
  return (
    <section
      id="toolboxSection"
      className="flex flex-col justify-center items-center h-1/2 px-7 mb-20 lg:mb-0 lg:px-32"
    >
      <header className="text-7xl lg:text-8xl font-bold text-center">
        <AnimatedTextCharacter
          text="Toolbox."
          className={`${bebas.className}`}
        />
      </header>
      <div className="w-full flex justify-center items-center overflow-hidden my-14">
        <Carousel />
      </div>
    </section>
  );
};

export default Toolbox;
