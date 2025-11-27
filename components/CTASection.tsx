// CTASection.tsx  : call to action
export default function CTASection() {
  return (
   <section
  id="contact"
  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
>
  <div className="max-w-6xl mx-auto px-4 py-14 text-center text-white">

    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      Ready to Transform Your Digital Future?
    </h2>

    {/* Description */}
    <p className="max-w-2xl mx-auto mb-8 text-sm sm:text-base text-white/90">
      Join hundreds of successful businesses across Western Australia who
      trust us with their mobile app development needs.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4 justify-center">

      {/* Main CTA */}
      <button
        className=" cursor-pointer
          rounded-full px-6 py-3 
          bg-white text-gray-900 
          text-sm sm:text-base font-semibold 
          shadow-md
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl
          active:scale-95
          w-full sm:w-auto
        "
      >
        Start Your Project Today
      </button>

      {/* Outline Button */}
      <button
        className=" cursor-pointer
          rounded-full px-6 py-3 
          border border-white/70 
          text-white text-sm sm:text-base font-semibold 
          bg-white/10 backdrop-blur-sm
          transition-all duration-300
          hover:bg-white/20 hover:-translate-y-1 hover:shadow-lg
          active:scale-95
          w-full sm:w-auto
        "
      >
        Schedule Consultation
      </button>

    </div>
  </div>
</section>

  );
}
