import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProducts />
        <WhyChoose />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
