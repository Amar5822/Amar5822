import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getFacilitiesByCategory, categories } from "@/lib/facilities";
import FacilityCard from "@/components/facilities/FacilityCard";
import { Category } from "@/types";

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const categoryInfo = categories.find((c) => c.id === params.category);

  if (!categoryInfo) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${categoryInfo.name} - Kesariya Flower Decoration`,
    description: categoryInfo.description,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryInfo = categories.find((c) => c.id === params.category);

  if (!categoryInfo) {
    notFound();
  }

  const facilities = getFacilitiesByCategory(params.category as Category);

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
          <div className="container-custom text-center">
            <div className="text-6xl mb-4">{categoryInfo.icon}</div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              {categoryInfo.name}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {categoryInfo.description}
            </p>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            {facilities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facilities.map((facility) => (
                  <FacilityCard key={facility.id} facility={facility} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No services available in this category yet.
                </p>
                <a
                  href="/facilities"
                  className="inline-block mt-6 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full transition-all"
                >
                  View All Services
                </a>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
