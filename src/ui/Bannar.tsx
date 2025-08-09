import image from '../assets/cyber-monday-retail-sales.jpg'

const Banner = () => {




  return (
    <div
      className="my-8 relative w-full h-80 md:h-96 lg:h-[400px] bg-cover bg-center flex items-center overflow-hidden "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
   
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-purple-900/30"></div>
      
    
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">

          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Special Edition
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed max-w-xl">
            Discover our exclusive collection with premium quality and unmatched style. 
            Limited quantities available.
          </p>
          
          {/* Discount info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 border border-white/20">
            <p className="text-white font-semibold text-lg">
              🎉 Get 20% OFF with code: <span className="text-yellow-300 font-bold">OFF20</span>
            </p>
          </div>
          
          {/* CTA Button */}
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              SHOP NOW
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-pulse"></div>
    </div>
  );
};
export default Banner;