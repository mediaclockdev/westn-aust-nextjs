// "Our Mobile App Development Services" + 3 reusable service cards
const services = [
  {
    title: "iOS Development",
    description:
      "Native iOS applications that deliver exceptional user experiences with cutting-edge features and seamless performance.",
    icon: "",
    color: "from-blue-500 to-blue-500",
  },
  {
    title: "Android Development",
    description:
      "Robust Android applications optimized for various devices and screen sizes with modern Material Design principles.",
    icon: "",
    color: " from-blue-500 to-blue-500 ",
  },
  {
    title: "Cross-Platform",
    description:
      "Efficient cross-platform solutions using React Native and Flutter for maximum reach and cost-effectiveness.",
    icon: "</>",
    color: "from-blue-500 to-blue-500",
  },
  {
    title: "Web Applications",
    description:
      "Progressive web applications that combine the best of web and mobile app experiences.",
    icon: "🌐",
    color: "from-blue-500 to-blue-500",
  },
  {
    title: "AI Integration",
    description:
      "Machine learning and AI-powered features including GPT and LLM capabilities for intelligent automation.",
    icon: "",
    color: "from-blue-500 to-blue-500",
  },
  {
    title: "API Integration",
    description:
      "Seamless third-party integrations and custom API development for enhanced functionality and connectivity.",
    icon: "🔌",
    color: " from-blue-500 to-blue-500 ",
  },
];




export default function ServicesSection() {
  return (
    <section id="services" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Mobile App Development Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We go beyond building applications. We help businesses accelerate
            their digital journey with cutting-edge solutions.
          </p>
        </div>

        {/* Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 
                flex flex-col gap-4 cursor-pointer
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-2 hover:border-purple-300
              "
            >
              {/* Icon box with different gradient per item */}
              <div
                className={`
                  h-12 w-12 rounded-xl 
                  bg-gradient-to-br ${service.color}
                  flex items-center justify-center 
                  text-white text-xl 
                  transition-all duration-300
                  group-hover:scale-110
                `}
              >
                {service.icon}
              </div>

              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

