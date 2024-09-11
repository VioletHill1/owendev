import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextCharacterProps {
  text: string;
  className: string;
}

const AnimatedTextCharacter: React.FC<AnimatedTextCharacterProps> = ({
  text,
  className,
}) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Variants for each letter

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-100px",
      }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
