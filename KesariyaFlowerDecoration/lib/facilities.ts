import { Facility, CategoryInfo, Category } from "@/types";

export const categories: CategoryInfo[] = [
  {
    id: "venue",
    name: "Wedding Venues",
    description: "Beautiful venues for your special day",
    icon: "🏛️",
  },
  {
    id: "mandap",
    name: "Mandap Decoration",
    description: "Traditional and modern mandap designs",
    icon: "🕌",
  },
  {
    id: "stage",
    name: "Stage Decoration",
    description: "Stunning stage setups for your ceremony",
    icon: "🎭",
  },
  {
    id: "flowers",
    name: "Flower Decoration",
    description: "Fresh flower arrangements and decor",
    icon: "🌸",
  },
  {
    id: "catering",
    name: "Catering Services",
    description: "Delicious cuisines for your guests",
    icon: "🍽️",
  },
  {
    id: "photography",
    name: "Photography & Video",
    description: "Capture every precious moment",
    icon: "📸",
  },
  {
    id: "music",
    name: "Music & DJ",
    description: "Live music and DJ services",
    icon: "🎵",
  },
  {
    id: "lighting",
    name: "Lighting & Effects",
    description: "Professional lighting solutions",
    icon: "💡",
  },
];

export const facilities: Facility[] = [
  {
    id: "1",
    title: "Royal Garden Venue",
    slug: "royal-garden-venue",
    description: "Luxurious outdoor garden venue with stunning landscapes",
    longDescription:
      "Our Royal Garden Venue offers a breathtaking outdoor setting perfect for your dream wedding. With lush greenery, beautiful fountains, and ample space for up to 500 guests, this venue provides a magical atmosphere for your special day.",
    category: "venue",
    images: ["/images/facilities/venue1.jpg", "/images/facilities/venue2.jpg"],
    features: [
      "Outdoor garden setting",
      "Capacity: 200-500 guests",
      "Parking available",
      "Ac waiting rooms",
      "Professional sound system",
      "Catering kitchen",
    ],
    priceRange: {
      min: 150000,
      max: 300000,
      currency: "₹",
    },
    capacity: {
      min: 200,
      max: 500,
    },
    featured: true,
  },
  {
    id: "2",
    title: "Traditional Mandap Design",
    slug: "traditional-mandap-design",
    description: "Elegant traditional mandap with intricate floral decorations",
    longDescription:
      "Experience the beauty of traditional Indian wedding ceremonies with our exquisite mandap design. Featuring intricate floral arrangements, traditional pillars, and authentic decor elements that honor your cultural heritage.",
    category: "mandap",
    images: ["/images/facilities/mandap1.jpg"],
    features: [
      "Traditional design",
      "Fresh flower decorations",
      "Custom color themes",
      "Professional setup team",
      "Photo-friendly backdrop",
    ],
    priceRange: {
      min: 75000,
      max: 150000,
      currency: "₹",
    },
    featured: true,
  },
  {
    id: "3",
    title: "Marigold Flower Decoration",
    slug: "marigold-flower-decoration",
    description:
      "Vibrant marigold flower arrangements for full venue decoration",
    longDescription:
      "Brighten your wedding with our stunning marigold flower decorations. We specialize in creating vibrant, traditional Indian floral arrangements using fresh marigolds in various colors and designs.",
    category: "flowers",
    images: ["/images/facilities/flowers1.jpg"],
    features: [
      "Fresh marigold flowers",
      "Full venue decoration",
      "Garlands and torans",
      "Stage backdrop",
      "Entrance decoration",
    ],
    priceRange: {
      min: 50000,
      max: 100000,
      currency: "₹",
    },
    featured: true,
  },
  {
    id: "4",
    title: "Premium Stage Setup",
    slug: "premium-stage-setup",
    description: "Grand stage decoration with elegant backdrop and lighting",
    longDescription:
      "Make your reception unforgettable with our premium stage setup. Featuring elegant backdrops, sophisticated lighting, and beautiful floral arrangements that create the perfect setting for your photos.",
    category: "stage",
    images: ["/images/facilities/stage1.jpg"],
    features: [
      "Elegant backdrop design",
      "Premium lighting",
      "Floral arrangements",
      "Seating for couple",
      "Photo-optimized setup",
    ],
    priceRange: {
      min: 60000,
      max: 120000,
      currency: "₹",
    },
    featured: false,
  },
  {
    id: "5",
    title: "Professional Photography",
    slug: "professional-photography",
    description: "Complete wedding photography and videography package",
    longDescription:
      "Preserve your precious memories with our professional photography and videography services. Our experienced team captures every moment, emotion, and detail of your special day.",
    category: "photography",
    images: ["/images/facilities/photography1.jpg"],
    features: [
      "2 professional photographers",
      "Candid photography",
      "Drone videography",
      "Pre-wedding shoot",
      "Edited photos and videos",
      "Photo album",
    ],
    priceRange: {
      min: 80000,
      max: 200000,
      currency: "₹",
    },
    featured: false,
  },
  {
    id: "6",
    title: "Multi-Cuisine Catering",
    slug: "multi-cuisine-catering",
    description: "Delicious multi-cuisine catering services for all events",
    longDescription:
      "Delight your guests with our exceptional multi-cuisine catering services. We offer a wide variety of dishes from Indian, Chinese, Continental, and more, all prepared with the finest ingredients.",
    category: "catering",
    images: ["/images/facilities/catering1.jpg"],
    features: [
      "Multi-cuisine menu",
      "Live counters",
      "Professional chefs",
      "Customizable menus",
      "Buffet and plated service",
      "Dessert station",
    ],
    priceRange: {
      min: 500,
      max: 1500,
      currency: "₹/plate",
    },
    featured: false,
  },
];

export function getFacilitiesByCategory(category: Category): Facility[] {
  return facilities.filter((f) => f.category === category);
}

export function getFeaturedFacilities(): Facility[] {
  return facilities.filter((f) => f.featured);
}

export function getFacilityBySlug(slug: string): Facility | undefined {
  return facilities.find((f) => f.slug === slug);
}
