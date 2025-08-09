export interface NavItem {
  label: string;
  src: string;
  subItems?: { label: string; link: string }[];
}
export interface ModelProps {
  isOpen: boolean;
  onClose: () => void;
  title? : string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  bgColor?: string;
  overlayColor?: string;
}
export interface CartProps {
  setCartToggle: (value: boolean) => void;
}
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
}