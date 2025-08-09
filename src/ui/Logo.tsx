import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Logo = () => {
    return (
        <div className="w-32">
        <Link
         to="/">
          <img src={logo} alt="logo" className="h-8 object-contain" />
        </Link>
      </div>
    );
};
export default Logo;