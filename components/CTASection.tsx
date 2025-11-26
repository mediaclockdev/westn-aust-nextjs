// CTASection.tsx  : call to action
export default function CTASection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
    >
      <div className="max-w-6xl mx-auto px-4 py-14 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Digital Future?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-sm md:text-base text-white/90">
          Join hundreds of successful businesses across Western Australia who
          trust us with their mobile app development needs.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="rounded-full px-6 py-3 bg-white text-gray-900 text-sm font-semibold shadow-md">
            Start Your Project Today
          </button>
          <button className="rounded-full px-6 py-3 border border-white/70 text-sm font-semibold bg-white/10">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
