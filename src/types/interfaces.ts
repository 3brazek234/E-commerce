export interface CountryCityResponse {
  error: boolean;
  msg: string;
  data: CountryWithCities[];
}
export interface NavItem {
  label: string;
  link: string;
}
export interface CountryWithCities {
  iso2: string;
  iso3: string;
  country: string;
  cities: string[];
}
// Interface للمنتج
export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount: number;
  popular?: boolean; // هذا الحقل اختياري بناءً على البيانات
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
export type Filters = {
  minPrice: number | null;
  maxPrice: number | null;
  categories: string[];
};
