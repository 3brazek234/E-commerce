import { FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function SecondHeader() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 shadow-sm hidden md:block">
      <div className="container mx-auto px-4 py-3">
        <div className="between">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <h3 className="text-sm font-semibold text-gray-700 mr-2">Follow Us:</h3>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="social-icon twitter-icon"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="social-icon instagram-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="social-icon facebook-icon"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="social-icon youtube-icon"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
              <FaPhone className="text-green-500" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
              <FaEnvelope className="text-blue-500" />
              <span>info@yourstore.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
              <FaMapMarkerAlt className="text-red-500" />
              <span>123 Store St, City</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondHeader