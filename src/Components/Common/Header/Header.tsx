import logo from "../../../assets/logo.png";
import { GiShoppingCart } from "react-icons/gi";
import SearchNav from "../../../ui/SearchNav";
import LocationButton from "../../../ui/LocationButton";
import { IoIosArrowDown, IoIosSunny } from "react-icons/io";
import { useThemeValue } from "../../../store/Theme";
import { IoMdMoon } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { NavItems } from "../../../Constants";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import AuthBns from "../../../ui/AuthBns";
import { Link } from "react-router-dom";
import SecondHeader from "../SecondHeader/SecondHeader";
const Header = () => {
  const { theme, toggleTheme } = useThemeValue();
  const [toggle, setToggle] = useState<boolean>(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  return (
    <>
      <header className="theme-base hidden md:block">
        {/* COVID Banner */}
        <div className="w-full bg-[#7A55C1] py-2">
          <div className="container mx-auto px-4">
            <p className="text-white text-sm text-center font-normal">
              Due to the <span className="font-bold">COVID 19</span> epidemic, orders may be processed with a slight delay
            </p>
          </div>
        </div>

        <SecondHeader />

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="w-48">
              <Link to="/">
                <img src={logo} alt="logo" className="h-12 object-contain" />
              </Link>
            </div>

            {/* Search and Location */}
            <div className="flex-1 flex gap-4 items-center max-w-3xl">
              <LocationButton />
              <SearchNav />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 bg-[#7A55C1] hover:bg-[#6A48AA] text-white py-2 px-6 rounded-full text-sm font-medium transition-all duration-300">
                Sign in
              </button>
              
              <div className="relative cursor-pointer group">
                <GiShoppingCart className="text-2xl text-gray-800 dark:text-white transition-colors" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  0
                </span>
              </div>

              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  <IoIosSunny className="text-2xl text-yellow-400" />
                ) : (
                  <IoMdMoon className="text-2xl text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Header */}
      <div className="block md:hidden theme-base">
        {/* COVID Banner */}
        <div className="w-full bg-[#7A55C1] py-2">
          <p className="text-white text-xs text-center font-normal px-4">
            Due to the <span className="font-bold">COVID 19</span> epidemic, orders may be processed with a slight delay
          </p>
        </div>

        <SecondHeader />

        <div className="px-4 py-3">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div className="w-32">
              <Link to="/">
                <img src={logo} alt="logo" className="h-8 object-contain" />
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-[#7A55C1] hover:bg-[#6A48AA] text-white py-1.5 px-4 rounded-full text-sm font-medium transition-all duration-300">
                Sign in
              </button>
              
              <div className="relative cursor-pointer">
                <GiShoppingCart className="text-2xl text-gray-800 dark:text-white" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  0
                </span>
              </div>

              <button 
                onClick={toggleTheme}
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === "dark" ? (
                  <IoIosSunny className="text-xl text-yellow-400" />
                ) : (
                  <IoMdMoon className="text-xl text-gray-700" />
                )}
              </button>

              <button 
                onClick={() => setToggle(true)}
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <IoMenu className="text-2xl" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-3 mt-3">
            <LocationButton />
            <SearchNav />
          </div>
        </div>
      </div>

      {toggle && (
        <>
          <div className="fixed inset-0 z-10 bg-black/70 w-full h-full block md:hidden">
            <div
              className="
          h-screen bg-white w-4/5 p-6 flex flex-col gap-6 relative
          rounded-tr-2xl rounded-br-2xl shadow-2xl
          transition-transform duration-300 ease-in-out
          animate-slide-in
          overflow-y-auto
        "
              style={{ minWidth: "260px", maxWidth: "340px" }}
            >
              <div className="flex items-center justify-between mb-4">
                <img src={logo} alt="logo" className="h-10" />
                <div
                  onClick={() => setToggle(false)}
                  className="bg-black/80 rounded-full text-white p-2 shadow-md hover:bg-gray-700 hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <MdOutlineKeyboardDoubleArrowLeft className="w-6 h-6" />
                </div>
              </div>
              <LocationButton />
              <AuthBns />
              <nav>
                <ul>
                  {NavItems.map((item, idx) => (
                    <div key={item.label} className="mb-2">
                      <li
                        onClick={() =>
                          setActiveSubmenu(activeSubmenu === idx ? null : idx)
                        }
                        className={`
                    flex items-center justify-between py-3 px-4 font-semibold rounded-xl
                    transition-colors duration-200
                    ${
                      activeSubmenu === idx
                        ? "bg-purple-100 text-purple-700"
                        : "hover:bg-gray-100"
                    }
                    cursor-pointer
                  `}
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={item.src}
                            alt={item.label}
                            width={22}
                            className="rounded"
                          />
                          {item.label}
                        </div>
                        {item.subItems && item.subItems.length > 0 && (
                          <IoIosArrowDown
                            className={`ml-2 transition-transform duration-300 ${
                              activeSubmenu === idx ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </li>
                      {/* Submenu */}
                      {item.subItems && item.subItems.length > 0 && (
                        <ul
                          className={`
                      overflow-hidden transition-all duration-300
                      ${
                        activeSubmenu === idx
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                      bg-gray-50 rounded-lg shadow-inner ml-6 mt-1
                    `}
                        >
                          {item.subItems.map((sub) => (
                            <li
                              key={sub.label}
                              className="
                          pl-4 py-2 text-base text-gray-700 rounded-lg
                          hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200
                        "
                            >
                              <Link to={sub.link}>{sub.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
