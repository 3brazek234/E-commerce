import logo from "../../assets/logo.jpg";
import { GiShoppingCart } from "react-icons/gi";
import SearchNav from "../../ui/SearchNav";
import LocationButton from "../../ui/LocationButton";

const Header = () => {
  return (
    <header>
      <div className="container center py-2 bg-purple">
        <p className="text-white text-sm">
          Due to the <b>COVID 19</b> epidemic, orders may be processed with a
          slight delay
        </p>
      </div>
      <div className="main-container px-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <div className="col-span-1 flex justify-center">
            <img src={logo} alt="logo" />
          </div>

          <div className="col-span-2 flex gap-4 items-center">
            <LocationButton/>
            <SearchNav />
          </div>

          <div className="sign">
            <div className="btn center gap-4">
              <button className="rounded-3xl bg-[#6A48AA] text-white py-1 px-4 text-sm">
                Sign in
              </button>
              <div className="relative ">
                <GiShoppingCart className="text-2xl text-gray-800" />
                <span
                  className="
                absolute -top-2 -right-2
                bg-red-500 text-white
                rounded-full
                w-5 h-5
                flex items-center justify-center
                text-xs font-bold
              "
                >
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
