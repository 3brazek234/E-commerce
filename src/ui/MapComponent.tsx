import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const   MapComponent = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-bold text-gray-800 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Visit Our Store
      </h3>
      
      {/* Store Information */}
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
        
        <div className="flex items-start gap-3">
          <FaClock className="text-purple-600 mt-1 flex-shrink-0" />
          <div>
            <p className="text-gray-700 font-medium">Store Hours</p>
            <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 9:00 PM</p>
            <p className="text-gray-600 text-sm">Sat - Sun: 10:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>
      
      {/* Interactive Map Placeholder */}
      {/* <div className="mt-4">
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-6 text-center border border-purple-200">
          <FaMapMarkerAlt className="text-purple-600 text-3xl mx-auto mb-3" />
          <p className="text-gray-700 font-medium mb-2">Find Us on Map</p>
          <p className="text-gray-600 text-sm mb-4">Click to view our location on Google Maps</p>
          <button 
            onClick={() => window.open('https://maps.google.com/?q=Cairo,Egypt', '_blank')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Open in Google Maps
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default MapComponent;