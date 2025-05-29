import { Button } from "@/components/ui/button";

export default function FeaturedProducts() {
  const products = [
    {
      name: "Premium Wheat",
      description:
        "High-quality wheat grains perfect for baking and food production, sustainably grown and carefully processed.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Premium wheat grains",
    },
    {
      name: "Sweet Corn",
      description:
        "Farm-fresh sweet corn varieties that deliver exceptional taste and nutritional value for families worldwide.",
      image: "https://images.unsplash.com/photo-1508747703725-719777637510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Fresh corn harvest",
    },
    {
      name: "Organic Soybeans",
      description:
        "Protein-rich organic soybeans grown using sustainable practices for food and feed applications.",
      image: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Premium soybeans",
    },
  ];

  return (
    <section id="products" className="py-20 bg-terra-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold terra-deep mb-4">
            Featured Products / Crops
          </h2>
          <p className="text-lg terra-gray max-w-2xl mx-auto">
            Discover our premium selection of crops and processed products,
            cultivated with care and delivered with quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold terra-deep mb-2">
                  {product.name}
                </h3>
                <p className="terra-gray mb-4">{product.description}</p>
                <Button className="bg-terra-green hover:bg-terra-deep text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
