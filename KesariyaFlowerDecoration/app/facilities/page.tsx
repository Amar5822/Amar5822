import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { facilities } from "@/lib/facilities";
import FacilityCard from "@/components/facilities/FacilityCard";

export const metadata = {
  title: "Our Services - Kesariya Flower Decoration",
  description:
    "Explore our comprehensive wedding services including venues, decoration, catering, photography and more.",
};

export default function FacilitiesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our complete range of wedding services designed to make
              your celebration perfect
            </p>
          </div>
        </section>

        {/* All Facilities */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
