
export interface NavItem {
  label: string;
  link: string;
}

// Interface للمنتج
export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;  // ISO Date
  updatedAt: string;  // ISO Date
}

export interface CartItem extends Product {
  quantity: number;
}

// Interface للاستجابة الكاملة (response)
export interface ApiResponse {
  status: string;
  message: string;
  products: Product[];
}
// types.ts
export interface ProductFilters {
  search?: string;
  category?: number;
  maxPrice?: number;
  minPrice?: number;
}
export interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}
export interface ModelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  bgColor?: string;
}