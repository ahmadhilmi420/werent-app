export interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  condition: string;
  details: {
    description: string;
    image1_url: string;
    image2_url: string;
    image3_url: string;
  };
}

export interface Review {
  id: number;
  product_id: number;
  user_id: number;
  name: string;
  rating: number;
  comment: string;
  created_at?: string; // Optional, can be used for sorting or display
  updated_at?: string; // Optional, can be used for tracking updates
}

export interface User {
  id: number;
  name: string;
  email: string;
}
