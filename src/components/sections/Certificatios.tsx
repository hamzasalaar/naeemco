type Certification = {
  name: string;
  logo?: string; // can be local image or placeholder for now
};

const certifications: Certification[] = [
  { name: "ISO 9001" },
  { name: "CE Certified" },
  { name: "FDA Approved" },
  { name: "GMP Compliant" },
  { name: "Quality Management System" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="container-width text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
          Our Certifications & Compliance
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          We adhere to international quality and safety standards to ensure our
          products meet global export regulations and industry best practices.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition duration-300"
            >
              {/* Placeholder logo */}
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm font-semibold mb-3">
                Logo
              </div>
              <p className="text-gray-700 text-center font-medium">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
