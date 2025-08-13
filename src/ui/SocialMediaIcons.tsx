import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-2">
        <a
          href="#"
          className="social-icon twitter-icon transform hover:scale-110 transition-all duration-300"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="social-icon instagram-icon transform hover:scale-110 transition-all duration-300"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="social-icon facebook-icon transform hover:scale-110 transition-all duration-300"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="social-icon youtube-icon transform hover:scale-110 transition-all duration-300"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
