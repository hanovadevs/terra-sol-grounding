export interface Product {
  id: string;
  name: string;
  tagline?: string;
  price: string;
  image: string;
  amazonUrl: string;
  description: string;
  benefits: string[];
  sizes?: string[];
  colors?: string[];
  kit?: string[];
  packaging?: string;
  isPremium?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  location: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}
