// "Our Mobile App Development Services" + 3 reusable service cards

const services = [
  {
    title: "iOS Development",
    description:
      "Native iOS applications that deliver exceptional user experiences with cutting-edge features and seamless performance.",
    icon: "",
  },
  {
    title: "Android Development",
    description:
      "Robust Android applications optimized for various devices and screen sizes with modern Material Design principles.",
    icon: "",
  },
  {
    title: "Cross-Platform",
    description:
      "Efficient cross-platform solutions using React Native and Flutter for maximum reach and cost-effectiveness.",
    icon: "</>",
  },
    {
    title: "Web Applications",
    description:
      "Progressive web applications that combine the best of web and mobile app experiences.",
    icon: "",
  },
    {
    title: "AI Integration",
    description:
      "Machine learning and AI-powered features including GPT and LLM capabilities for intelligent automation.",
    icon: "",
  },
      {
    title: "API Integration",
    description:
      "Seamless third-party integrations and custom API development for enhanced functionality and connectivity.",
    icon: "",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Mobile App Development Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We go beyond building applications. We help businesses accelerate
            their digital journey with cutting-edge solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
