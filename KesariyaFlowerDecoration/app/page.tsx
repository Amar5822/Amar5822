import Hero from "@/components/home/Hero";
import FeaturedFacilities from "@/components/home/FeaturedFacilities";
import ServicesSection from "@/components/home/ServicesSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedFacilities />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
