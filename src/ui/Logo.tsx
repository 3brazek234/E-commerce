import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Logo = () => {
    return (
        <div className="w-full">
        <Link
         to="/">
          <img src={logo} alt="logo" className="md:h-16 h-12 object-contain" />
        </Link>
      </div>
    );
};
export default Logo;