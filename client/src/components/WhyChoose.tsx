import { Leaf, Search, Users, Truck } from "lucide-react";

export default function WhyChoose() {
  const benefits = [
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description:
        "Environmental stewardship and regenerative farming methods that protect our planet.",
    },
    {
      icon: Search,
      title: "Traceable Supply Chain",
      description:
        "Complete transparency from farm to table with detailed tracking and quality records.",
    },
    {
      icon: Users,
      title: "Community Initiatives",
      description:
        "Supporting local communities and farmer education programs worldwide.",
    },
    {
      icon: Truck,
      title: "Reliable Export Network",
      description:
        "Global distribution capabilities with dependable logistics and quality assurance.",
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold terra-deep mb-4">
            Why Choose TerraField
          </h2>
          <p className="text-lg terra-gray max-w-2xl mx-auto">
            Our commitment to excellence, sustainability, and innovation sets us
            apart in the agricultural industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-terra-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="terra-green" size={32} />
                </div>
                <h3 className="text-lg font-semibold terra-deep mb-3">
                  {benefit.title}
                </h3>
                <p className="terra-gray text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
