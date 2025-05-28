const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-green-800">Who We Are</h2>
        <p className="mb-12 text-center text-lg text-gray-700">
          TerraField Farms is dedicated to sustainable and innovative farming practices. 
          Since our founding in 2005, we have been committed to cultivating high-quality 
          produce while nurturing our community and environment. Our core values are 
          sustainability, quality, and community impact.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Placeholder for Farm Image */}
          <div className="h-64 rounded-lg bg-green-300 shadow-md">
            <p className="flex h-full items-center justify-center text-xl font-semibold text-green-800">
              Our Farm
            </p>
          </div>
          {/* Placeholder for Team Image */}
          <div className="h-64 rounded-lg bg-golden-300 shadow-md">
            <p className="flex h-full items-center justify-center text-xl font-semibold text-golden-800">
              Our Team
            </p>
          </div>
          {/* Placeholder for Facilities Image */}
          <div className="h-64 rounded-lg bg-blue-300 shadow-md">
            <p className="flex h-full items-center justify-center text-xl font-semibold text-blue-800">
              Our Facilities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
