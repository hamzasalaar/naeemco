export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-width grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-primary)">
            About Our Company
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We are a trusted global supplier specializing in the export of
            high-quality medical equipment, surgical instruments, and textile
            products. With a strong commitment to compliance, quality control,
            and international standards, we serve clients across multiple
            international markets.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our mission is to deliver reliable, certified, and competitively
            priced products while maintaining long-term partnerships with our
            global buyers.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-(--color-accent)">
                10+
              </h3>
              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-(--color-accent)">
                25+
              </h3>
              <p className="text-sm text-gray-600">Countries Served</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-(--color-accent)">
                500+
              </h3>
              <p className="text-sm text-gray-600">Products Supplied</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-(--color-accent)">
                ISO
              </h3>
              <p className="text-sm text-gray-600">Certified Standards</p>
            </div>
          </div>
        </div>

        {/* Right Side - Placeholder Image Block */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
            <img src="https://i.postimg.cc/V67DVqL3/businessman-touching-virtual-screen.jpg" alt="Company Image" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>

      </div>
    </section>
  );
}