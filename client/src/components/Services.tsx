import { Tractor, Factory, Store, Globe } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Tractor,
      title: "Farming",
      description:
        "Responsible agriculture with high-yield, high-quality practices using sustainable methods.",
    },
    {
      icon: Factory,
      title: "Processing",
      description:
        "State-of-the-art transformation of raw materials into premium goods with quality assurance.",
    },
    {
      icon: Store,
      title: "Marketplace",
      description:
        "Local market presence delivering freshness at your doorstep with community focus.",
    },
    {
      icon: Globe,
      title: "Export",
      description:
        "Reaching global markets with our quality-first approach and reliable distribution networks.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold terra-deep mb-4">
            What We Do
          </h2>
          <p className="text-lg terra-gray max-w-2xl mx-auto">
            Our integrated approach covers every step from seed to shelf, ensuring
            quality and sustainability at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-terra-green rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-terra-deep transition-colors duration-300">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold terra-deep mb-3">
                  {service.title}
                </h3>
                <p className="terra-gray">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
