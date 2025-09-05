export interface Product {
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

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
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

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of E-commerce: Trends to Watch in 2024",
    excerpt: "Discover the latest trends shaping the future of online shopping and how they'll impact your business.",
    content: "The e-commerce landscape continues to evolve at a rapid pace, with new technologies and consumer behaviors emerging constantly. In 2024, we're seeing several key trends that are set to transform the industry...",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&auto=format",
    author: "Sarah Johnson",
    date: "2024-02-15",
    category: "E-commerce",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Sustainable Fashion: Why It Matters More Than Ever",
    excerpt: "Exploring the importance of sustainable practices in the fashion industry and how consumers can make a difference.",
    content: "As environmental concerns continue to grow, the fashion industry is under increasing pressure to adopt more sustainable practices. From water conservation to ethical labor practices, sustainability is no longer optional...",
    image: "https://images.unsplash.com/photo 1600607686527-6fb886090705?w=1000&auto=format",
    author: "Michael Chen",
    date: "2024-02-10",
    category: "Fashion",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Tech Gadgets That Will Transform Your Daily Life",
    excerpt: "A roundup of the most innovative tech gadgets that are making waves this year.",
    content: "From smart home devices to wearable tech, 2024 is bringing us some of the most innovative gadgets we've ever seen. These devices aren't just cool—they're designed to make your life easier, more efficient, and more connected...",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&auto=format",
    author: "David Kim",
    date: "2024-02-05",
    category: "Technology",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "The Art of Minimalist Living: Less is More",
    excerpt: "How adopting a minimalist approach can lead to a more fulfilling and intentional lifestyle.",
    content: "In a world of constant consumption and digital overload, many are finding peace in minimalism. This lifestyle choice isn't just about having fewer possessions—it's about making room for what truly matters...",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902d5e98?w=1000&auto=format",
    author: "Emma Wilson",
    date: "2024-01-28",
    category: "Lifestyle",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Smart Home Automation: Where to Start",
    excerpt: "A beginner's guide to transforming your home with smart technology.",
    content: "Smart home technology has come a long way in recent years, and it's now more accessible than ever. Whether you're looking to enhance security, save energy, or simply add convenience to your daily routine, there's a smart home solution for you...",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1000&auto=format",
    author: "Robert Taylor",
    date: "2024-01-20",
    category: "Technology",
    readTime: "8 min read"
  },
  {
    id: 6,
    title: "The Rise of Sustainable Packaging in E-commerce",
    excerpt: "How online retailers are reducing their environmental impact through innovative packaging solutions.",
    content: "As e-commerce continues to grow, so does the environmental impact of packaging waste. Forward-thinking companies are now leading the way with sustainable packaging solutions that don't compromise on protection or customer experience...",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1000&auto=format",
    author: "Lisa Park",
    date: "2024-01-15",
    category: "E-commerce",
    readTime: "5 min read"
  }
];
