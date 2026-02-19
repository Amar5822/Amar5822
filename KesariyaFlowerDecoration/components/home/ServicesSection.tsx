import Link from "next/link";
import { categories } from "@/lib/facilities";

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive wedding services to make your celebration
            unforgettable
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 text-center group"
            >
              <div className="text-5xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-4xl font-heading font-bold mb-4">
            Ready to Plan Your Dream Wedding?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Get a personalized quote for your special day
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}
