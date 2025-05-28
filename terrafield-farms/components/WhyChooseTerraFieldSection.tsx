const WhyChooseTerraFieldSection = () => {
  const differentiators = [
    {
      title: "Sustainable Practices",
      description: "Learn more about our commitment to sustainable practices.",
      iconBgColor: "bg-green-500",
    },
    {
      title: "Traceable Supply Chain",
      description: "Learn more about our commitment to a traceable supply chain.",
      iconBgColor: "bg-blue-500",
    },
    {
      title: "Community-Based Initiatives",
      description: "Learn more about our commitment to community-based initiatives.",
      iconBgColor: "bg-yellow-500",
    },
    {
      title: "Reliable Export Network",
      description: "Learn more about our commitment to a reliable export network.",
      iconBgColor: "bg-red-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-green-800">Why Choose TerraField?</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="flex items-start space-x-4 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Placeholder for icon/illustration */}
              <div className={`h-16 w-16 rounded-full ${item.iconBgColor} flex-shrink-0`}></div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-green-700">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTerraFieldSection;
