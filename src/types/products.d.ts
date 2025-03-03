
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  condition: string;
  category_id?: string;
  user_id: string;
  latitude?: number;
  longitude?: number;
  location_name?: string;
  images: string[];
  video_urls?: string[];
  whatsapp?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ProductWithDistance extends Product {
  distance: number;
}
