import { Star, Award, IdCard, Globe, Shield } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "TerraField consistently provides top-quality produce that meets our demanding standards. Their sustainable practices align perfectly with our company values.",
      author: "Sarah Johnson",
      position: "Head Buyer, Global Foods Ltd",
    },
    {
      content:
        "Working with TerraField has transformed our supply chain. Their reliability and quality standards are unmatched in the industry.",
      author: "Michael Chen",
      position: "Supply Chain Director, Fresh Market Co",
    },
    {
      content:
        "The traceability and transparency that TerraField provides gives us complete confidence in every shipment we receive.",
      author: "Lisa Rodriguez",
      position: "Quality Manager, International Retail",
    },
  ];

  const certifications = [
    { icon: IdCard, label: "Organic Certified" },
    { icon: Award, label: "Quality Excellence" },
    { icon: Globe, label: "Global Standards" },
    { icon: Shield, label: "Food Safety" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-terra-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold terra-deep mb-4">
            Testimonials & Partners
          </h2>
          <p className="text-lg terra-gray max-w-2xl mx-auto">
            Hear from our valued customers and partners who trust TerraField Farms
            for quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="terra-gold mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="terra-gray mb-4 italic">"{testimonial.content}"</p>
              <div className="font-semibold terra-deep">{testimonial.author}</div>
              <div className="text-sm terra-gray">{testimonial.position}</div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <h3 className="text-xl font-semibold terra-deep mb-8">
            Our Trusted Partners & Certifications
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <IconComponent className="terra-green mx-auto mb-2" size={32} />
                  <div className="text-xs terra-gray">{cert.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
