import { GiShoppingCart } from "react-icons/gi";
import SearchNav from "../../../ui/SearchNav";
import LocationButton from "../../../ui/LocationButton";
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import { NavItems } from "../../../Constants";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import AuthBns from "../../../ui/AuthBns";
import SecondHeader from "../SecondHeader/SecondHeader";
import Cart from "../../../features/cart/Cart";
import Logo from "../../../ui/Logo";
import useCartStore from "../../../store/Cart";
import { Link } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [cartToggle, setCartToggle] = useState(false);
  const { cartItem } = useCartStore();
  const [isScroll, setIsScroll] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsScroll(scroll > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(cartItem);

  return (
    <>
      <header className="hidden md:block bg-white shadow-lg">
        {/* COVID Banner */}
        <div className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3">
          <div className="container mx-auto px-4">
            <p className="text-white text-sm text-center font-medium">
              Due to the <span className="font-bold">COVID 19</span> epidemic,
              orders may be processed with a slight delay
            </p>
          </div>
        </div>

        <SecondHeader />

        {/* Main Header */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="w-48">
              <Logo />
            </div>

            {/* Search and Location */}
            <div className="flex-1 flex gap-4 items-center max-w-4xl">
              <LocationButton />
              <SearchNav />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-8 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Sign in
              </button>

              <div
                className="relative cursor-pointer group p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
                onClick={() => setCartToggle(true)}
              >
                <GiShoppingCart className="text-3xl text-gray-700 group-hover:text-purple-600 transition-colors duration-300" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg animate-pulse">
                  {cartItem.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <div className="block md:hidden bg-white">
        {/* COVID Banner */}
        <div className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-2">
          <p className="text-white text-xs text-center font-medium px-4">
            Due to the <span className="font-bold">COVID 19</span> epidemic,
            orders may be processed with a slight delay
          </p>
        </div>

        <SecondHeader />

        <div className="px-4 py-3">
          {/* Top Bar */}
          <div
            className={`${
              isScroll
                ? "fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white z-50 transition-all duration-300 shadow-xl py-4 backdrop-blur-sm"
                : "py-6"
            } flex items-center justify-between`}
          >
            <Logo />

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-[#7A55C1] hover:bg-[#6A48AA] text-white py-1.5 px-4 rounded-full text-sm font-medium transition-all duration-300">
                Sign in
              </button>

              <div
                className="relative cursor-pointer"
                onClick={() => setCartToggle(true)}
              >
                <GiShoppingCart className="text-2xl text-gray-800 dark:text-white" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartItem?.length}
                </span>
              </div>

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
                <Logo />
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
                      <Link to={item.link}>
                        <li
                          className={`
                    flex items-center justify-between py-3 px-4 font-semibold rounded-xl
                    transition-colors duration-200
                   
                    cursor-pointer
                  `}
                        >
                          <div className="flex items-center gap-2">
                            {item.label}
                          </div>
                        </li>
                      </Link>
                    </div>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
      {cartToggle && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setCartToggle(false)}
          ></div>
          <div
            className={`
              fixed top-0 right-0 z-50 h-full w-[300px] bg-white shadow-lg
              transition-transform duration-300 ease-in-out
              ${cartToggle ? "translate-x-0" : "translate-x-full"}
            `}
          >
            <Cart setCartToggle={setCartToggle} />
          </div>
        </>
      )}
    </>
  );
};

export default Header;
