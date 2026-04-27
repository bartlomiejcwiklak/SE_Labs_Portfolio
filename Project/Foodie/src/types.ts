// Type definitions for the Foodie application
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  calories: number;
  allergens: string[];
  description: string;
  image?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number];
  address: string;
  waitTime: number; // in minutes
  seatsAvailable: boolean;
  seatingCapacity: number;
  currentCapacity: number;
  menu: MenuItem[];
  reviews: Review[];
  image: string;
}

export type DietaryPreference = 'Gluten-Free' | 'Vegan' | 'Vegetarian' | 'Dairy-Free' | 'Nut-Free';

export interface UserPreferences {
  allergies: string[];
  dietary: DietaryPreference[];
}
