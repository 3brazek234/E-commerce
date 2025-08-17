import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";
import { useCategory } from "../../../hooks/useCategory";
import { NavItems } from "../../../Constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      {/* Sticky/Fixed Navbar */}
      <div
        className={`${
          isScrolled
            ? "fixed top-0 left-0 right-0 z-50 transform translate-y-0 shadow-2xl opacity-100"
            : "fixed top-0 left-0 right-0 transform -translate-y-full opacity-0 pointer-events-none"
        } w-full bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-500 ease-in-out`}
      >
        <nav className="hidden md:block">
          <div className="container mx-auto px-4 py-3 flex items-center gap-6">
            
            <ul className="flex items-center gap-6">
              {NavItems.map((item, index) => (
                <Link to={item.link}>
                  <li key={index}>
                    <span className="relative px-3 py-2 cursor-pointer text-gray-700 font-medium hover:text-purple-600 transition-all duration-300 group text-sm">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Regular Navbar */}
      <div className="w-full bg-white shadow-lg border-t border-gray-100">
        <nav className="hidden md:block">
          <div className="container mx-auto px-4 py-4 flex items-center gap-6">
            <ul className="flex items-center gap-8">
              {NavItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>
                    {" "}
                    <span className="relative px-4 py-2 cursor-pointer text-gray-700 font-medium hover:text-purple-600 transition-all duration-300 group">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
