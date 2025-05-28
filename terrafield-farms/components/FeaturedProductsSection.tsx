const FeaturedProductsSection = () => {
  const products = [
    {
      name: "Product Name 1",
      description: "Short product description highlighting its quality and benefits. This product is organically grown.",
      imagePlaceholderColor: "bg-green-200",
    },
    {
      name: "Product Name 2",
      description: "Short product description highlighting its quality and benefits. Freshly harvested and packed.",
      imagePlaceholderColor: "bg-golden-200",
    },
    {
      name: "Product Name 3",
      description: "Short product description highlighting its quality and benefits. Rich in nutrients and flavor.",
      imagePlaceholderColor: "bg-blue-200",
    },
    {
      name: "Product Name 4",
      description: "Short product description highlighting its quality and benefits. Sustainably sourced and processed.",
      imagePlaceholderColor: "bg-red-200",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-green-800">Our Featured Products</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col rounded-lg bg-white p-6 shadow-md">
              {/* Placeholder for product image */}
              <div className={`mb-4 h-48 w-full rounded ${product.imagePlaceholderColor}`}></div>
              <h3 className="mb-2 text-xl font-semibold text-green-700">{product.name}</h3>
              <p className="mb-4 flex-grow text-gray-600">{product.description}</p>
              <button className="mt-auto rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
