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
            <button
              className="
      rounded-full px-8 py-4 text-sm font-bold text-white 
      bg-gradient-to-r from-purple-500 to-indigo-500
      shadow-md 
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
      border border-purple-300 bg-white/60 backdrop-blur
      text-gray-800
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
      h-50 w-30
      sm:h-54 sm:w-34
      md:h-62 md:w-42
      lg:h-70 lg:w-56
      rounded-3xl 
      bg-gradient-to-b from-blue-600 to-pink-500 
      shadow-[0_20px_50px_rgba(0,0,0,0.25)] 
      rotate-2 flex items-center justify-center 
      border-[10px] border-[#0d0d0d]
    "
          >
            <div className="flex flex-col items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="w-10 h-10 mb-2 opacity-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
                />
              </svg>

              <span className="text-white font-medium text-lg">
                Your App Here
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
