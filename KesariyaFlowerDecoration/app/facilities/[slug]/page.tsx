import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getFacilityBySlug, facilities } from "@/lib/facilities";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  return facilities.map((facility) => ({
    slug: facility.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const facility = getFacilityBySlug(params.slug);

  if (!facility) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${facility.title} - Kesariya Flower Decoration`,
    description: facility.description,
  };
}

export default function FacilityDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const facility = getFacilityBySlug(params.slug);

  if (!facility) {
    notFound();
  }

  const formatPrice = () => {
    if (!facility.priceRange) return null;

    const { min, max, currency } = facility.priceRange;
    if (currency.includes("plate")) {
      return `${currency.replace("/plate", "")} ${min.toLocaleString()} - ${max.toLocaleString()}/plate`;
    }
    return `${currency} ${min.toLocaleString()} - ${max.toLocaleString()}`;
  };

  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="container-custom py-16">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>{" "}
            /
            <Link href="/facilities" className="hover:text-primary ml-2">
              Services
            </Link>{" "}
            /<span className="ml-2 text-gray-900">{facility.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="relative h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden mb-4">
                {facility.images[0] ? (
                  <Image
                    src={facility.images[0]}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-8xl">
                    {facility.category === "venue" && "🏛️"}
                    {facility.category === "mandap" && "🕌"}
                    {facility.category === "stage" && "🎭"}
                    {facility.category === "flowers" && "🌸"}
                    {facility.category === "catering" && "🍽️"}
                    {facility.category === "photography" && "📸"}
                    {facility.category === "music" && "🎵"}
                    {facility.category === "lighting" && "💡"}
                  </div>
                )}
              </div>
            </div>

            {/* Details */}
            <div>
              <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                {facility.title}
              </h1>

              <div className="mb-6">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  {facility.category.charAt(0).toUpperCase() +
                    facility.category.slice(1)}
                </span>
              </div>

              {facility.priceRange && (
                <div className="mb-6">
                  <p className="text-2xl font-bold text-secondary">
                    {formatPrice()}
                  </p>
                </div>
              )}

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {facility.longDescription}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Features
                </h2>
                <ul className="space-y-2">
                  {facility.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {facility.capacity && (
                <div className="mb-8">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Capacity
                  </h2>
                  <p className="text-gray-700">
                    {facility.capacity.min} - {facility.capacity.max} guests
                  </p>
                </div>
              )}

              {/* CTA */}
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-primary hover:bg-primary-dark text-white py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
                >
                  Send Inquiry
                </Link>
                <Link
                  href="/facilities"
                  className="block w-full text-center border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary py-4 rounded-lg text-lg font-semibold transition-all"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
