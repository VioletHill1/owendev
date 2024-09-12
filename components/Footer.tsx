"use client";
import React from "react";
import Ripple from "./Ripple";

const Footer = () => {
  return (
    <footer className="grid grid-rows-2 grid-cols-2  px-7 lg:px-32 pb-4 lg:pb-10 w-full">
      <div className=" order-2 text-sm text-zinc-500 font-semibold">
        Owen R.
      </div>
      <div className="col-span-2 mb-8 flex order-1 justify-center gap-5 font-semibold">
        <Ripple />
        <span>Available for work</span>
      </div>
      <div className="flex order-3 justify-end text-zinc-500 font-semibold text-sm">
        Made by Owen Rodriguez
      </div>
    </footer>
  );
};

export default Footer;
