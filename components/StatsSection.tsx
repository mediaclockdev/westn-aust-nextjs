// 12+ Years, 1000+ Apps, 500+ Clients, 24/7 Support strip

export default function StatsSection() {
  const stats = [
    { value: "12+", label: "Years Experience" },
    { value: "1000+", label: "Apps Developed" },
    { value: "500+", label: "Happy Clients" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              {item.value}
            </p>
            <p className="mt-2 text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
