import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import html from "@/assets/html.svg";
import css from "@/assets/css.svg";
import js from "@/assets/js.svg";
import ts from "@/assets/ts.svg";
import tailwind from "@/assets/tailwind.svg";
import mongodb from "@/assets/mongodb.svg";
import react from "@/assets/react.svg";
import nextjs from "@/assets/nextjs.svg";

const Carousel = () => {
  const upperCarousel = [html, css, js, ts, react, nextjs, tailwind, mongodb];
  return (
    <div className="flex gap-10 lg:gap-14 MyGradient">
      <motion.div
        className="flex gap-10 lg:gap-14 flex-shrink-0"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {upperCarousel.map((image, i) => (
          <Image
            src={image}
            key={i}
            width={100}
            height={100}
            alt="Logo"
            className="invert opacity-60 w-16 lg:w-24"
          />
        ))}
      </motion.div>

      <motion.div
        className="flex gap-10 lg:gap-14 flex-shrink-0"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {upperCarousel.map((image, i) => (
          <Image
            src={image}
            key={i}
            width={100}
            height={100}
            alt="Logo"
            className="invert opacity-60 w-16 lg:w-24"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
