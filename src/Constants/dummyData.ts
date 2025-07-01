interface Product {
  id: number;
  name: string;
  category: 'clothing' | 'electronics';
  price: number;
  description: string;
  image: string;
  brand: string;
  rating: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    category: "clothing",
    price: 29.99,
    description: "Comfortable cotton t-shirt with a modern fit, perfect for everyday wear",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format",
    brand: "Essential Wear",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 2,
    name: "Wireless Bluetooth Earbuds",
    category: "electronics",
    price: 129.99,
    description: "High-quality wireless earbuds with noise cancellation and long battery life",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&auto=format",
    brand: "TechSound",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 3,
    name: "Slim Fit Denim Jeans",
    category: "clothing",
    price: 59.99,
    description: "Classic slim fit jeans made from premium denim material",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format",
    brand: "DenimCo",
    rating: 4.3,
    inStock: true,
  },
  {
    id: 4,
    name: "Smart LED TV - 55 inch",
    category: "electronics",
    price: 699.99,
    description: "4K Ultra HD Smart LED TV with HDR and built-in streaming apps",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format",
    brand: "VisionTech",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 5,
    name: "Hooded Sweatshirt",
    category: "clothing",
    price: 44.99,
    description: "Warm and cozy hooded sweatshirt perfect for cold weather",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format",
    brand: "Comfort Plus",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 6,
    name: "Smartphone Charger",
    category: "electronics",
    price: 24.99,
    description: "Fast-charging USB-C charger compatible with most smartphones",
    image: "https://images.unsplash.com/photo-1583863622394-257946c07b96?w=500&auto=format",
    brand: "PowerMax",
    rating: 4.2,
    inStock: true,
  },
  {
    id: 7,
    name: "Formal Business Suit",
    category: "clothing",
    price: 299.99,
    description: "Professional business suit made from high-quality wool blend",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format",
    brand: "Executive Style",
    rating: 4.6,
    inStock: false,
  },
  {
    id: 8,
    name: "Gaming Laptop",
    category: "electronics",
    price: 1299.99,
    description: "High-performance gaming laptop with RGB keyboard and dedicated GPU",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format",
    brand: "GamePro",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 9,
    name: "Winter Jacket",
    category: "clothing",
    price: 89.99,
    description: "Waterproof winter jacket with warm insulation and multiple pockets",
    image: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=500&auto=format",
    brand: "Winter Gear",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 10,
    name: "Smart Watch",
    category: "electronics",
    price: 199.99,
    description: "Feature-rich smartwatch with health tracking and notifications",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format",
    brand: "TechWear",
    rating: 4.7,
    inStock: true,
  }
];
