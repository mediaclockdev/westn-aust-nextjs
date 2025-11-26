// "Mobile App Development Company in Perth" + buttons + image

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
         
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Mobile App Development Company in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Perth
            </span>
          </h1>
          <p className="text-gray-600 text-1xl mb-8 max-w-xl">
            Transform your digital future with Western Australia&apos;s premier
            mobile app development experts. We create innovative, scalable
            solutions for businesses across Perth and WA.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-full px-10 py-5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500">
              Start Your Project
            </button>
            <button className="rounded-full px-6 py-3 text-sm font-semibold border border-purple-300 bg-white/60">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Right mockup box */}
        <div className="flex justify-center">
          <div className="relative h-72 w-52 md:h-80 md:w-56 rounded-3xl bg-gradient-to-b from-purple-500 to-pink-500 shadow-2xl rotate-6 flex items-center justify-center">
            <span className="text-white font-medium text-lg">Your App Here</span>
          </div>
        </div>
      </div>
    </section>
  );
}
