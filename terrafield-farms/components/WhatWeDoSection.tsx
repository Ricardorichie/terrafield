const WhatWeDoSection = () => {
  const pillars = [
    {
      title: "Farming",
      description: "Responsible agriculture with high-yield, high-quality practices.",
      bgColor: "bg-green-500",
    },
    {
      title: "Processing",
      description: "State-of-the-art transformation of raw materials into premium goods.",
      bgColor: "bg-blue-500",
    },
    {
      title: "Marketplace",
      description: "Local market presence delivering freshness at your doorstep.",
      bgColor: "bg-yellow-500",
    },
    {
      title: "Export",
      description: "Reaching global markets with our quality-first approach.",
      bgColor: "bg-red-500",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-green-800">What We Do</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-lg bg-white p-6 text-center shadow-md">
              {/* Placeholder for icon/image */}
              <div className={`mx-auto mb-4 h-20 w-20 rounded-full ${pillar.bgColor}`}></div>
              <h3 className="mb-2 text-xl font-semibold text-green-800">{pillar.title}</h3>
              <p className="text-gray-700">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
