import Link from "next/link";
import { getFeaturedFacilities } from "@/lib/facilities";
import FacilityCard from "@/components/facilities/FacilityCard";

export default function FeaturedFacilities() {
  const featured = getFeaturedFacilities();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Featured Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular wedding services handpicked for your
            perfect celebration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/facilities"
            className="inline-block bg-secondary hover:bg-secondary-dark text-gray-900 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
