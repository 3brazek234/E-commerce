import fash from "../assets/navbar-imgs/fash.png";
import ele from "../assets/navbar-imgs/ele.png";
import bags from "../assets/navbar-imgs/Bags.png";
import groceries from "../assets/navbar-imgs/footwear.png";
import footwear from "../assets/navbar-imgs/footwear.png";
import beauty from "../assets/navbar-imgs/beauty.png";
import type { NavItem } from "./interfaces";
import swipImg from "../assets/Main-swiper/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg";
import swipImg1 from "../assets/Main-swiper/swiper.jpg";
import swipImg2 from "../assets/Main-swiper/file_1734525014348_NewProject(7).jpg";
import swipImg3 from "../assets/Main-swiper/file_1734524971122_NewProject(8).jpg";
export const NavItems: NavItem[] = [
  {
    label: "Fashion",
    src: fash,
    subItems: [
      { label: "Men's Clothing", link: "/mens-clothing" },
      { label: "Women's Clothing", link: "/womens-clothing" },
    ],
  },
  {
    label: "Electronics",
    src: ele,
    subItems: [
      { label: "Phones", link: "/phones" },
      { label: "Laptops", link: "/laptops" },
    ],
  },
  {
    label: "Bags",
    src: bags,
    subItems: [
      { label: "Phones", link: "/phones" },
      { label: "Laptops", link: "/laptops" },
    ],
  },
  {
    label: "Groceries",
    src: groceries,
    subItems: [
      { label: "Phones", link: "/phones" },
      { label: "Laptops", link: "/laptops" },
    ],
  },
  {
    label: "Footwear",
    src: footwear,
    subItems: [
      { label: "Phones", link: "/phones" },
      { label: "Laptops", link: "/laptops" },
    ],
  }, // Empty subItems if no submenu
  {
    label: "Beauty",
    src: beauty,
    subItems: [
      { label: "Phones", link: "/phones" },
      { label: "Laptops", link: "/laptops" },
    ],
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
