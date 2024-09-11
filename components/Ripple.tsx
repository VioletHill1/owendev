import React from "react";
import { motion } from "framer-motion";

const Ripple = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-3 h-3 bg-blue-400 rounded-full z-10" />
      <motion.div
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: 2.5, opacity: 0 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
          repeatDelay: 0.5,
        }}
        className="absolute w-3 h-3 bg-blue-400 rounded-full"
      />
    </div>
  );
};

export default Ripple;
