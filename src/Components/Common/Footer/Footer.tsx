import { Link } from "react-router-dom";
import { NavItems } from "../../../Constants";
import Logo from "../../../ui/Logo";
import MapComponent from "../../../ui/MapComponent";
import SocialMediaIcons from "../../../ui/SocialMediaIcons";
const Footer = () => {
  return (
    <div className="w-full bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="flex flex-col gap-4 col-span-2">
          <Logo />
          <p className="text-gray-600 text-sm font-medium">
            We offer a wide range of high-quality products, including
            smartphones, laptops, TVs, and accessories, all at competitive
            prices. Our mission is to provide exceptional service and innovative technology to enhance your digital lifestyle.
          </p>
          <SocialMediaIcons />
          <p className="text-gray-600 text-sm font-medium">
            Copyright © 2025 Your Store. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-gray-800 mr-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {NavItems.map((item, index) => (
              <li
                key={index}
                className="text-gray-600 text-sm font-medium cursor-pointer hover:text-purple-600 transition-all duration-300"
              >
            <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>  
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-gray-800 mr-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Help
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-600 text-sm font-medium hover:text-purple-600 transition-all duration-300">
              Shipping
            </li>
            <li className="text-gray-600 text-sm font-medium hover:text-purple-600 transition-all duration-300">
              Payment
            </li>
            <li className="text-gray-600 text-sm font-medium hover:text-purple-600 transition-all duration-300">
              Return Policy
            </li>
            <li className="text-gray-600 text-sm font-medium hover:text-purple-600 transition-all duration-300">
              FAQ
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
            <MapComponent/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
