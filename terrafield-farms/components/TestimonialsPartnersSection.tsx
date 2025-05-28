const TestimonialsPartnersSection = () => {
  const testimonials = [
    {
      quote: "TerraField Farms consistently delivers the freshest produce with unmatched quality. We are proud to partner with them.",
      attribution: "- Satisfied Customer/Partner Name 1",
    },
    {
      quote: "The commitment to sustainable practices and community support is why we choose TerraField Farms. Their products are top-notch!",
      attribution: "- Satisfied Customer/Partner Name 2",
    },
  ];

  const partnerLogos = [
    { name: "Partner/Certification 1", bgColor: "bg-gray-200" },
    { name: "Partner/Certification 2", bgColor: "bg-gray-300" },
    { name: "Partner/Certification 3", bgColor: "bg-gray-400" },
    { name: "Partner/Certification 4", bgColor: "bg-gray-500" },
  ];

  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-green-800">Testimonials & Partners</h2>

        {/* Testimonials Subsection */}
        <div className="mb-16">
          <h3 className="mb-10 text-center text-3xl font-semibold text-green-700">What Our Customers Say</h3>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-8 shadow-lg">
                <p className="mb-6 text-lg italic text-gray-700">"{testimonial.quote}"</p>
                <p className="text-right font-semibold text-green-600">{testimonial.attribution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners/Certifications Subsection */}
        <div>
          <h3 className="mb-10 text-center text-3xl font-semibold text-green-700">Our Valued Partners & Certifications</h3>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4">
            {partnerLogos.map((logo, index) => (
              <div key={index} className={`flex h-32 items-center justify-center rounded-lg ${logo.bgColor} p-6 shadow-md`}>
                <p className="text-center font-medium text-gray-700">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPartnersSection;
