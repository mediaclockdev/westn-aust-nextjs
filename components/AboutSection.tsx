// "Perth-Based Mobile App Development Experts" + image + bullets

import Image from "next/image";

export default function AboutSection() {
  return (
 <section id="about" className="bg-white">
  <div
    className="
      max-w-6xl mx-auto 
      px-4 
      py-12 sm:py-16 lg:py-20 
      grid grid-cols-1 md:grid-cols-2 
      gap-10 lg:gap-16 
      items-center
    "
  >
    {/* Left content */}
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Perth-Based Mobile App Development Experts
      </h2>

      <p className="text-gray-600 mb-4 text-sm md:text-base">
        With over 12+ years of professional experience, Western Australia
        Development Company has earned a reputable reputation in Perth as a
        renowned provider of mobile and digital solutions.
      </p>
      <p className="text-gray-600 mb-6 text-sm md:text-base">
        Our team specializes in creating apps for businesses across various
        industries, including mining logistics, healthcare, retail, real
        estate, and professional services. We&apos;re committed to
        delivering quality, generating value, and ensuring long-term
        customer satisfaction.
      </p>

      <ul className="space-y-3 text-gray-700 text-sm md:text-base">
        <li className="flex items-start gap-2">
          <span className="mt-1 text-purple-500">✔</span>
          <span>Expert team across Perth, Fremantle, Subiaco</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 text-purple-500">✔</span>
          <span>Serving Joondalup, Cannington, Rockingham</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 text-purple-500">✔</span>
          <span>Customer-centric approach &amp; world-class solutions</span>
        </li>
      </ul>
    </div>

    {/* Right image */}
    <div className="relative mt-8 md:mt-0">
      <div className="rounded-3xl overflow-hidden shadow-xl">
        <Image
          src="/perth-city.jpg"
          alt="Perth city skyline"
          width={640}
          height={420}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* small gradient card bottom-right (location icon) */}
      <div
        className="
          bounce-icon 
          absolute 
          bottom-4 right-4 
          sm:bottom-6 sm:right-6 
          h-15 w-15 sm:h-16 sm:w-16 
          rounded-2xl 
          bg-gradient-to-br from-purple-500 to-pink-500 
          flex items-center justify-center 
          shadow-lg
        "
      >
        <Image
          src="/icons/location.png"
          alt="Location Icon"
          width={30}
          height={30}
          className="object-contain"
        />
      </div>
    </div>
  </div>
</section>

  );
}
