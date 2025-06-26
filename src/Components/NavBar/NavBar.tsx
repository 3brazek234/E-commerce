import { MdKeyboardArrowDown } from "react-icons/md";
import { NavItems } from "../../Constants";

const NavBar = () => {
  return (
    <nav >
      <div className="container center py-2 items-center gap-3">
        <button className="p-5 bg-[#7A55C1] text-white text-sm text-center flex items-center gap-3 rounded-3xl">
          All Categories
          <MdKeyboardArrowDown />
        </button>
        <ul className="center">
          {NavItems.map((item) => (
            <li className="list-none flex gap-1 p-3 mx-3 font-bold hover:bg-[#F1F1F1] rounded-3xl hover:cursor-pointer">
              <img src={item.src} alt={item.label} width={20} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
