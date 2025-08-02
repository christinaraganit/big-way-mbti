"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="flex justify-center items-center gap-3 h-[55px] w-full">
      <img
        src="/big-way-logo.png"
        alt="Big Way Hot Pot Logo"
        className="w-8 h-8 object-contain"
        crossOrigin="anonymous"
      />
      <p className="text-white text-sm">Big Way Hot Pot</p>
    </footer>
  )
}

export default Footer;