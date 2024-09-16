"use client";

import React, { FC, RefObject } from "react";

import ItemWork from "./ItemWork";
import { bebas } from "@/assets/fonts";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

interface WorkProps {
  sectionRef?: RefObject<HTMLDivElement>;
}

const Work: FC<WorkProps> = ({ sectionRef }) => {
  return (
    <section
      id="workSection"
      ref={sectionRef}
      className="flex flex-col justify-center items-center my-40 lg: gap-14 px-7 lg:px-20"
    >
      <header className="text-7xl lg:text-8xl font-bold text-center">
        <AnimatedTextCharacter text="Work." className={`${bebas.className}`} />
      </header>
      <div className="flex justify-center">
        <ItemWork />
      </div>
    </section>
  );
};

export default Work;
