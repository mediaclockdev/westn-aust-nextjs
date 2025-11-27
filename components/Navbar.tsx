// Top nav bar (logo + links + Get a Quote button)

"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 bg-white/80 backdrop-blur z-20 shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 flex items-center justify-center">
            <Image
              src="/WA logo.png"
              width={40}
              height={40}
              alt="WA Logo"
              className="rounded-lg object-contain scale-160"
            />
          </div>
          <span className="font-semibold text-lg">WA Dev Company</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Desktop CTA */}
      <div className="flex md:block justify-center md:justify-start">
  <button 
    className="cursor-pointer
      rounded-full px-5 py-2 text-sm font-semibold 
      text-white bg-gradient-to-r from-blue-500 to-purple-500
      w-full sm:w-auto
      transition-all duration-600
    hover:-translate-y-1 hover:shadow-xl
    active:scale-95
    "
  >
    Get a Quote
  </button>
</div>



        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-0.5 w-6 bg-black transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-black transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-black transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur py-4 px-6 space-y-4 shadow-lg animate-slideDown">
          <a href="#services" className="block text-gray-800">Services</a>
          <a href="#portfolio" className="block text-gray-800">Portfolio</a>
          <a href="#about" className="block text-gray-800">About</a>
          <a href="#contact" className="block text-gray-800">Contact</a>

          <button className=" cursor-pointer w-full rounded-full py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500">
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}
