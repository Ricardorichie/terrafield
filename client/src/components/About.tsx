export default function About() {
  return (
    <section id="about" className="py-20 bg-terra-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold terra-deep mb-6">
              Who We Are
            </h2>
            <p className="text-lg terra-gray mb-6 leading-relaxed">
              TerraField Farms is committed to sustainable farming practices that
              honor our land while meeting global agricultural demands. Since our
              founding, we've built a reputation for innovation, quality, and
              community impact.
            </p>
            <p className="text-lg terra-gray mb-8 leading-relaxed">
              Our mission extends beyond cultivation – we're transforming how
              agriculture connects communities, nourishes families, and preserves
              our environment for future generations.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold terra-green">25+</div>
                <div className="text-sm terra-gray">Years Experience</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold terra-green">40+</div>
                <div className="text-sm terra-gray">Countries Served</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Sustainable farming facilities"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Farm team collaboration"
              className="absolute bottom-4 right-4 rounded-lg shadow-lg w-48 h-36 object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
