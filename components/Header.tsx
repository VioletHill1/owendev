"use client";

import Link from "next/link";
import React from "react";
import { bebas } from "@/assets/fonts";

const Header = () => {
  return (
    <header
      className={`fixed ${bebas.className} flex justify-between items-center w-full py-4 px-4 z-10 lg:py-8 lg:px-32`}
    >
      <div className="font-extrabold text-xl">Owen R.</div>
      <nav className="flex">
        <Link href="/">Home</Link>
        <Link href="/">Work</Link>
        <Link href="/">About</Link>
      </nav>
    </header>
  );
};

export default Header;
