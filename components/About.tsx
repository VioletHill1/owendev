"use client";

import React from "react";

import { bebas } from "@/assets/fonts";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import Image from "next/image";
import me1 from "@/assets/me2.webp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="aboutSection"
      className="flex flex-col justify-center items-center min-h-screen gap-14 pb-12"
    >
      <header className="text-7xl lg:text-8xl font-bold text-center">
        <AnimatedTextCharacter text="About." className={`${bebas.className}`} />
      </header>
      <div className="flex flex-col-reverse px-7 lg:grid lg:grid-cols-2 items-center lg:pl-32">
        <motion.article
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="flex flex-col gap-5"
        >
          <header>
            <h3 className={`${bebas.className} text-4xl`}>
              Hello! I&apos;m Owen. Web Developer & Design with over a year of
              experience.
            </h3>
          </header>
          <p className="text-lg">
            During this year I&apos;ve working and improving myself in the area
            of front-end and a little of back-end. As an independent, I am
            completly free to work with agencies, startups, or anyone who wants
            to create their own mark for any kind of business.
          </p>
          <p className="text-lg">
            I&apos;m currently a Senior in Linden High School with a goal of
            reach a bachelor degree in Computer Science, and a Master in Data
            Science. I also love to listen to Muse and Imagine Dragons, and
            I&apos;m a big fan of cats.
          </p>
        </motion.article>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <figure className="size-72 rounded-full p-2 border-2 mb-14 lg:mb-0">
            <Image
              src={me1}
              width={400}
              height={400}
              alt="photo of me"
              className="object-cover size-full rounded-full"
            />
          </figure>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
