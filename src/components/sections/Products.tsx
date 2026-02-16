type ProductCategory = {
  title: string;
  description: string;
  items: string[];
};

const categories: ProductCategory[] = [
  {
    title: "Medical Equipment & Supplies",
    description:
      "High-quality certified medical products meeting international compliance standards.",
    items: [
      "Surgical Instruments",
      "Hospital Equipment",
      "Diagnostic Devices",
      "Disposable Medical Supplies",
      "Personal Protective Equipment (PPE)",
      "Dental Instruments",
    ],
  },
  {
    title: "Textile Products",
    description:
      "Premium textile materials and finished goods for international wholesale markets.",
    items: [
      "Industrial Fabrics",
      "Garments & Apparel",
      "Cotton & Blended Fabrics",
      "Home Textiles",
      "Uniforms & Workwear",
      "Custom Textile Orders",
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding">
      <div className="container-width">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
            Our Product Categories
          </h2>
          <p className="mt-4 text-gray-600">
            We supply a diverse range of certified medical equipment and
            high-quality textile products to global markets.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-[var(--color-primary)]">
                {category.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {category.description}
              </p>

              <ul className="mt-6 space-y-3">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-700 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-block bg-[var(--color-accent)] text-white px-5 py-2 rounded-md text-sm hover:opacity-90 transition"
                >
                  Request Product Details
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
