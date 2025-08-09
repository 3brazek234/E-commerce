import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import SocialMediaIcons from "../../../ui/SocialMediaIcons";

function SecondHeader() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 border-b border-gray-200 shadow-sm hidden md:block">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Social Media Icons */}
        <SocialMediaIcons/>

          {/* Contact Information */}
          <div className="hidden lg:flex items-center gap-8 text-sm">
            <div className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-all duration-300 group cursor-pointer">
              <div className="p-2 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors duration-300">
                <FaPhone className="text-green-600 text-xs" />
              </div>
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-all duration-300 group cursor-pointer">
              <div className="p-2 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                <FaEnvelope className="text-blue-600 text-xs" />
              </div>
              <span className="font-medium">info@yourstore.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-all duration-300 group cursor-pointer">
              <div className="p-2 rounded-full bg-red-100 group-hover:bg-red-200 transition-colors duration-300">
                <FaMapMarkerAlt className="text-red-600 text-xs" />
              </div>
              <span className="font-medium">123 Store St, City</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondHeader