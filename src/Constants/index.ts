import type { NavItem } from "../types/interfaces";

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


export const brandImages: string[] = [
  vector1,
  vector2,
  vector3,
  vector4,
  vector6,
  vector7,
];
export const faqItems = [
  {
    question: "How can I track my order?",
    answer:
      'You can track your order through your personal account in the "My Orders" section, where you will find the order details and its current status.',
  },
  {
    question: "What payment methods are available?",
    answer:
      "We accept cash on delivery, credit and debit cards, and bank transfers.",
  },
  {
    question: "What is the delivery time?",
    answer:
      "Delivery time ranges from 2-5 business days within the city, and may be slightly longer for other cities depending on the location.",
  },
  {
    question: "Can I return or exchange an item?",
    answer:
      "Yes, you can return or exchange the product within 14 days from the date of receipt, provided it is in its original condition.",
  },
  {
    question: "Is shipping free?",
    answer:
      "Yes, shipping is free for all orders over 200 SAR. For orders below that amount, a small shipping fee applies.",
  },
];
