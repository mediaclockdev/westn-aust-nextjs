// Last dark footer (logo, services, locations, contact)

import Image from "next/image";


export default function Footer() {
  return (
   <footer className="bg-[#050816] text-gray-300">
  <div
    className="
      max-w-6xl mx-auto px-4 py-10 
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
      gap-8
    "
  >
    {/* Column 1: Logo + text */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="h-10 w-10 flex items-center justify-center">
          <Image
            src="/WA logo.png"
            width={40}
            height={40}
            alt="WA Logo"
            className="rounded-lg"
          />
        </div>

        <span className="font-semibold text-lg">WA Dev Company</span>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed">
        Western Australia&apos;s premier mobile app development company,
        creating innovative solutions for businesses across Perth and WA.
      </p>
    </div>

    {/* Column 2: Services */}
    <div>
      <h4 className="font-semibold mb-4">Services</h4>
      <ul className="space-y-2 text-sm text-gray-400">
        <li className="cursor-pointer hover:text-white transition">iOS Development</li>
        <li className="cursor-pointer hover:text-white transition">Android Development</li>
        <li className="cursor-pointer hover:text-white transition">Cross-Platform Apps</li>
        <li className="cursor-pointer hover:text-white transition">AI Integration</li>
      </ul>
    </div>

    {/* Column 3: Locations */}
    <div>
      <h4 className="font-semibold mb-4">Locations</h4>
      <ul className="space-y-2 text-sm text-gray-400">
        <li className="cursor-pointer hover:text-white transition">Perth</li>
        <li className="cursor-pointer hover:text-white transition">Fremantle</li>
        <li className="cursor-pointer hover:text-white transition">Subiaco</li>
        <li className="cursor-pointer hover:text-white transition">Joondalup</li>
      </ul>
    </div>

    {/* Column 4: Contact */}
    <div>
      <h4 className="font-semibold mb-4">Contact</h4>
      <ul className="space-y-2 text-sm text-gray-400">
        <li className="cursor-pointer hover:text-white transition">📞 +61 8 9123 4567</li>
        <li className="cursor-pointer hover:text-white transition">✉️ hello@wadev.com.au</li>

        {/* Social icons */}
        <li className="flex gap-3 mt-2">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            className="
              cursor-pointer 
              h-8 w-8 rounded-md bg-gray-800 
              flex items-center justify-center 
              hover:bg-gray-700 transition
            "
          >
            <Image src="/icons/linkedin.svg" width={20} height={20} alt="LinkedIn" />
          </a>

          {/* X */}
          <a
            href="https://x.com/YOUR_USERNAME"
            target="_blank"
            className="
              cursor-pointer 
              h-8 w-8 rounded-md bg-gray-800 
              flex items-center justify-center 
              hover:bg-gray-700 transition
            "
          >
            <Image src="/icons/x.svg" width={20} height={20} alt="X" />
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div className="border-t border-gray-800 ">
    <div className="max-w-6xl mx-auto px-5 py-5 text-xs text-gray-500 text-center">
      © 2024 Western Australia Development Company. All rights reserved.
    </div>
  </div>
</footer>

  );
}
