import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About Us - Kesariya Flower Decoration",
  description:
    "Learn about Kesariya Flower Decoration - Your trusted partner for creating unforgettable wedding celebrations.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              About Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creating magical moments since our inception
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Kesariya Flower Decoration has been bringing dream weddings to
                  life with passion, creativity, and unwavering dedication. Our
                  journey began with a simple vision: to transform ordinary
                  celebrations into extraordinary memories.
                </p>
                <p>
                  Today, we stand as one of Rajasthan's most trusted wedding
                  service providers, specializing in venues, decoration,
                  catering, and photography. Every wedding we undertake is
                  treated as our own, with meticulous attention to detail and a
                  commitment to excellence.
                </p>
                <p>
                  Our team of experienced professionals works tirelessly to
                  understand your vision and bring it to life, ensuring that
                  your special day is everything you've dreamed of and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-center mb-12">
              Why Choose Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Personalized Service
                </h3>
                <p className="text-gray-600">
                  Every wedding is unique. We tailor our services to match your
                  vision and preferences.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  We use only the finest materials and work with the best
                  vendors in the industry.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Experienced Team
                </h3>
                <p className="text-gray-600">
                  Our skilled professionals bring years of expertise to make
                  your day perfect.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600">
                  No hidden costs. We believe in honest, upfront pricing for all
                  our services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  24/7 Support
                </h3>
                <p className="text-gray-600">
                  We're always available to answer your questions and address
                  your concerns.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Attention to Detail
                </h3>
                <p className="text-gray-600">
                  From concept to execution, we ensure every detail is perfect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container-custom text-center text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Start Planning?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's create your dream wedding together
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
