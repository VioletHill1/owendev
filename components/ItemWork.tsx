import { bebas } from "@/assets/fonts";

import ss1 from "@/assets/ss1.png";
import { motion } from "framer-motion";
import Image from "next/image";

const ItemWork = () => {
  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
    hidden: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.7 },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={childVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ margin: "-200px", once: true }}
      className={`flex flex-col justify-between lg:w-1/2 h-[330px] lg:h-[500px] bg-[#123B2B]  rounded-3xl`}
    >
      <header className="p-10">
        <h4 className={`text-4xl lg:text-6xl text-white ${bebas.className}`}>
          PHOTOGRAPHER
        </h4>
        <div>
          <ul className="flex gap-3 text-[13px] mt-3">
            <li className="text-zinc-300 border border-zinc-300 px-3 py-1 rounded-full">
              Web Design
            </li>
            <li className="text-zinc-300 border border-zinc-300 px-3 py-1 rounded-full">
              Landing Page
            </li>
          </ul>
        </div>
      </header>
      <figure className="px-10 rounded-2xl transition-none transform-none ">
        <Image
          src={ss1}
          alt="Image 1"
          className="rounded-t-xl transition-none transform-none"
        />
      </figure>
    </motion.div>
  );
};

export default ItemWork;
