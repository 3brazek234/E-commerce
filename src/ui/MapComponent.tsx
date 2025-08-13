import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const   MapComponent = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-bold text-gray-800 bg-gradient-to-r from-p  urple-600 to-pink-600 bg-clip-text text-transparent">
        Visit Our Store
      </h3>
      
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-purple-600 mt-1 flex-shrink-0" />
          <div>
            <p className="text-gray-700 font-medium">Main Store</p>
            <p className="text-gray-600 text-sm">123 Shopping Street</p>
            <p className="text-gray-600 text-sm">Cairo, Egypt 12345</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <FaPhone className="text-purple-600 flex-shrink-0" />
          <div>
            <p className="text-gray-700 font-medium">+20 123 456 7890</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-purple-600 flex-shrink-0" />
          <div>
            <p className="text-gray-700 font-medium">info@yourstore.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;