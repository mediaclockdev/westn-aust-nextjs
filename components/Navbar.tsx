// Top nav bar (logo + links + Get a Quote button)

"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 bg-white/80 backdrop-blur z-20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 flex items-center justify-center">
            <Image
              src="/WA logo.png"
              width={40}
              height={40}
              alt="WA Logo"
              className="rounded-lg object-contain scale-180"
            />
          </div>

          <span className="font-semibold text-lg">WA Dev Company Hello</span>
        </div>

        {/* Middle: Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Right: CTA */}
        <button className="rounded-full px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500">
          Get a Quote
        </button>
      </nav>
    </header>
  );
}
