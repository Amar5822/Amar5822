import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            Make Your Dream Wedding
            <span className="block text-gradient mt-2">Come True</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the magic of your special day with Kesariya Flower
            Decoration. From stunning venues to exquisite decor, we bring your
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/facilities"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-4xl mb-2">🏛️</div>
              <p className="text-sm font-semibold text-gray-700">
                Premium Venues
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌸</div>
              <p className="text-sm font-semibold text-gray-700">
                Floral Decor
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🍽️</div>
              <p className="text-sm font-semibold text-gray-700">Catering</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📸</div>
              <p className="text-sm font-semibold text-gray-700">Photography</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
