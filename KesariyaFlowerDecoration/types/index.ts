export type Category =
  | "venue"
  | "mandap"
  | "stage"
  | "catering"
  | "photography"
  | "music"
  | "lighting"
  | "flowers";

export interface Facility {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: Category;
  images: string[];
  features: string[];
  priceRange?: {
    min: number;
    max: number;
    currency: string;
  };
  capacity?: {
    min: number;
    max: number;
  };
  featured: boolean;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  guestCount: number;
  interestedFacility: string;
  message: string;
}

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  icon: string;
}
