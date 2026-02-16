import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Certifications from "@/components/sections/Certificatios";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-15">
        <Hero />
        <About />
        <Products />
        <Certifications />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
