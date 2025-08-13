import bg from "../../../assets/01.jpg";
import { FaArrowDown } from "react-icons/fa";
const HeroSection = ({title, description}: {title: string, description: string}) => {
    return (
        <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={bg}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl max-w-2xl">
            {description}
          </p>
          <div className="mt-8 animate-bounce">
            <FaArrowDown className="text-3xl mx-auto" />
          </div>
        </div>
      </div>
    );
};
export default HeroSection;