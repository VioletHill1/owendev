"use client";

import { Bebas_Neue } from "next/font/google";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import { FC, RefObject } from "react";
import Ripple from "./Ripple";
import Image from "next/image";
import down from "@/assets/downArrow.svg";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

interface HeroProps {
  scrollToRef: RefObject<HTMLDivElement>;
}

const HeroSection: FC<HeroProps> = ({ scrollToRef }) => {
  const handleScrollClick = () => {
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative flex flex-col items-center justify-center h-dvh">
      <div className="absolute bottom-14">
        <motion.button
          onClick={handleScrollClick}
          animate={{ y: [0, 15, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
            repeatDelay: 0.5,
          }}
        >
          <Image src={down} alt="Down Arrow" width={30} height={30} />
        </motion.button>
      </div>
      <div className="absolute flex flex-col gap-6 items-center text-center">
        <h1 className="flex flex-col items-center leading-none ">
          <AnimatedTextCharacter
            className={`text-[62px] text-wrap lg:text-9xl ${bebas.className}`}
            text="Owen Rodriguez"
          />
          <span className="flex items-center">
            <AnimatedTextCharacter
              className={`text-[62px] text-wrap lg:text-9xl text-rose-600 ${bebas.className}`}
              text="Developer "
            />
            <AnimatedTextCharacter
              className={`text-[62px] text-wrap lg:text-9xl ${bebas.className}`}
              text="& "
            />
            <span className="text-medium leading-4 text-zinc-400 lg:text-base mr-4 lg:mr-0 font-semibold">
              Based in <br /> NJ, USA
            </span>
          </span>
          <span className="flex items-center lg:w-full justify-between">
            <Button
              radius="full"
              variant="ghost"
              className="font-semibold text-slate-200 hover:text-black gap-4 mr-5 lg:gap-5 p-5 lg:px-7 lg:ml-24"
            >
              <Ripple />
              <span>Contact</span>
            </Button>
            {/* <button className="flex justify-center items-center border gap-5 lg:ml-20 p-3 lg:px-7 lg:py-4 rounded-full"></button> */}
            <AnimatedTextCharacter
              className={`text-[62px] text-wrap lg:text-9xl text-yellow-400 ${bebas.className}`}
              text="Designer"
            />
          </span>
        </h1>

        <div className="text-xl font-semibold lg:text-lg w-3/4 lg:w-1/2">
          Building modern and scalable web solutions for your business.
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
