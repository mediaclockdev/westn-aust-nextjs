// "Mobile App Development Company in Perth" + buttons + image

export default function HeroSection() {
  return (
    <section className=" bg-gradient-to-r from-blue-300 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Mobile App Development Company in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500">
              Perth
            </span>
          </h1>
          <p className="text-gray-600 text-1xl mb-8 max-w-xl">
            Transform your digital future with Western Australia&apos;s premier
            mobile app development experts. We create innovative, scalable
            solutions for businesses across Perth and WA.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="
      rounded-full px-8 py-4 text-sm font-bold text-white 
     bg-gradient-to-r from-[#E53935] to-[#E53935] shadow-md 
      transition-all duration-300
      hover:scale-105 hover:shadow-xl 
      active:scale-95
      w-full sm:w-auto
    "
            >
              Start Your Project
            </button>

            <button
              className="
      rounded-full px-6 py-3 text-sm font-medium 
      border border-blue-400 bg-white/60 backdrop-blur
      text-[#084EC0]
      transition-all duration-300
      hover:bg-white hover:shadow-lg hover:scale-105
      active:scale-95
      w-full sm:w-auto
    "
            >
              View Portfolio
            </button>
          </div>
        </div>

        {/* Right mockup box */}
        <div className="flex justify-center">
          <div
            className="
      bounce-animation relative
      h-[330px] w-[170px]
      sm:h-[360px] sm:w-[190px]
      md:h-[420px] md:w-[230px]
      lg:h-[480px] lg:w-[280px]
      rounded-[40px]
      bg-gradient-to-b from-[#2563eb] to-[#1d4ed8]
      shadow-[0_25px_60px_rgba(0,0,0,0.25)]
      border-[10px] border-[#0d0d0d]
      flex items-center justify-center
    "
          >
            <div className="flex flex-col items-center text-white">
              {/* Top Icon */}
              <div className="absolute top-4 bg-blue-700 px-3 py-2 rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="w-6 h-6 opacity-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18h.01M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
                  />
                </svg>
              </div>

              {/* Heart Icon */}
              <div className="absolute left-[-18px] top-[120px] bg-red-500 p-2 rounded-xl shadow-lg">
                ❤️
              </div>

              {/* Star Icon */}
              <div className="absolute right-[-18px] top-[80px] bg-blue-500 p-2 rounded-xl shadow-lg">
                ⭐
              </div>

              {/* Middle Placeholder Box */}
              <div className="w-[80%] h-[110px] rounded-xl bg-blue-400/40 mt-10"></div>

              {/* Two small buttons */}
              <div className="flex gap-3 mt-4">
                <div className="w-14 h-10 rounded-lg bg-blue-500/60"></div>
                <div className="w-14 h-10 rounded-lg bg-blue-500/60"></div>
              </div>

              {/* Bottom Text lines */}
              <div className="mt-4 space-y-2">
                <div className="w-32 h-3 bg-blue-500/40 rounded-lg"></div>
                <div className="w-28 h-3 bg-blue-500/40 rounded-lg"></div>
              </div>

              {/* CTA Button */}
              <div className="mt-6 w-[75%] h-10 rounded-full bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
