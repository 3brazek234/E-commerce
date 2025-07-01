import { MdKeyboardArrowDown } from "react-icons/md";
import { NavItems } from "../../../Constants";

const NavBar = () => {
  return (
    <>
      <nav className="boreder-btn theme-base hidden md:block">
        <div className="container center py-2 items-center gap-3">
          <button className="p-5 bg-[#7A55C1] text-white text-sm text-center flex items-center gap-3 rounded-3xl">
            All Categories
            <MdKeyboardArrowDown />
          </button>
          <ul className="center">
            {NavItems.map((item) => (
              <div>
                <div className="relative">
                  <li className="menu list-none flex gap-1 p-3 mx-3 font-bold hover:bg-[#F1F1F1] rounded-3xl hover:cursor-pointer transition-all duration-200">
                    <img src={item.src} alt={item.label} width={20} />
                    {item.label}
                    {item.subItems && item.subItems.length > 0 && (
                      <div className="submenu">
                        <ul>
                          {item.subItems.map((submenu, index) => (
                            <li key={index}>{submenu.label}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
