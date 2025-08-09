import type { NavItem } from "../types/interfaces";
import swipImg from "../assets/Main-swiper/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg";
import swipImg1 from "../assets/Main-swiper/swiper.jpg";
import swipImg2 from "../assets/Main-swiper/file_1734525014348_NewProject(7).jpg";
import swipImg3 from "../assets/Main-swiper/file_1734524971122_NewProject(8).jpg";
import vector1 from "../assets/Hero/Vector.png";
import vector2 from "../assets/Hero/Vector (1).png";
import vector3 from "../assets/Hero/Vector (4).png";
import vector4 from "../assets/Hero/Vector (6).png";
import vector6 from "../assets/Hero/fa-brands-1 (1).png";
import vector7 from "../assets/Hero/fa-brands-2.png";

export const NavItems: NavItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Shop",
    link: "/product",
  },
  {
    label: "Blog",
    link: "/blog",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "Order Tracking",
    link: "/order-tracking",
  },
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "FAQ",
    link: "/faq",
  },
];

export const slides = [
  { src: swipImg, alt: "Banner 1", id: 1 },
  { src: swipImg1, alt: "E-commerce Store", id: 2 },
  {
    src: swipImg2,
    alt: "Shopping Experience",
    id: 3,
  },
  {
    src: swipImg3,
    alt: "Modern Shopping",
    id: 4,
  },
];
export const brandImages: string[] = [
  vector1,
  vector2,
  vector3,
  vector4,
  vector6,
  vector7,
];
