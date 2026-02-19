import Link from "next/link";
import Image from "next/image";
import { Facility } from "@/types";

interface FacilityCardProps {
  facility: Facility;
}

export default function FacilityCard({ facility }: FacilityCardProps) {
  const formatPrice = () => {
    if (!facility.priceRange) return null;

    const { min, max, currency } = facility.priceRange;
    if (currency.includes("plate")) {
      return `${currency.replace("/plate", "")} ${min.toLocaleString()} - ${max.toLocaleString()}/plate`;
    }
    return `${currency} ${min.toLocaleString()} - ${max.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:scale-105 group">
      {/* Image */}
      <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20">
        {facility.images[0] ? (
          <Image
            src={facility.images[0]}
            alt={facility.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
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

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {facility.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {facility.description}
        </p>

        {/* Price */}
        {facility.priceRange && (
          <p className="text-secondary font-semibold mb-4">{formatPrice()}</p>
        )}

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {facility.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        <Link
          href={`/facilities/${facility.slug}`}
          className="block w-full text-center bg-primary hover:bg-primary-dark text-white py-2 rounded-lg transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
