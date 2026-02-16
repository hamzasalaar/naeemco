import { CheckCircle } from "lucide-react";

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Quality Assurance",
    description:
      "All products go through strict quality checks to ensure compliance with international standards.",
  },
  {
    title: "Global Shipping",
    description:
      "Reliable logistics and international shipping to over 25 countries worldwide.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Offering premium products at competitive rates for bulk and corporate buyers.",
  },
  {
    title: "Certified Compliance",
    description:
      "ISO, CE, and FDA certified products ensuring trusted and safe exports.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container-width text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
          Why Choose Us
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We combine experience, quality, and reliability to provide products
          that meet global standards and exceed client expectations.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition duration-300"
            >
              <CheckCircle className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
