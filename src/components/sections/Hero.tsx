export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[var(--color-primary)] to-[#0d2b5c] text-white">
      <div className="container-width section-padding">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Global Supplier of Medical Equipment & Textile Products
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Delivering high-quality surgical instruments, hospital equipment,
            and premium textile products to international markets with trusted
            compliance and reliability.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="bg-[var(--color-accent)] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
            >
              Request a Quote
            </a>

            <a
              href="#products"
              className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[var(--color-primary)] transition"
            >
              View Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
