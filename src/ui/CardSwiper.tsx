import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../Components/Home/Product/ProductCard"; // تأكد من استيراد المكون بشكل صحيح
import { Autoplay, Navigation } from "swiper/modules";
import type { Product } from "../types/interfaces";
interface CardSwiperProps {
  items: Product[]; // Fixed: should be an array
  title: string;
  description: string;
}

const CardSwiper = ({ items, title, description }: CardSwiperProps) => {
  return (
    <div className="product-swiper-container mb-16 px-4 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          {title.split(' ').map((word, index) => (
            index === title.split(' ').length - 1 ? (
              <span key={index} className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {word}
              </span>
            ) : (
              <span key={index}>{word} </span>
            )
          ))}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">{description}</p>
      </div>

      {/* Swiper Container */}
      <div className="relative">
        <Swiper
          spaceBetween={20}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
          }}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
          breakpoints={{
            320: { 
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: { 
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: { 
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: { 
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1280: { 
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1536: { 
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="product-swiper !overflow-visible"
        >
          {items?.map((item: Product, index: number) => (
            <SwiperSlide key={`${item.id}-${index}`} className="!h-auto">
              <div className="transform transition-all duration-300 hover:scale-105">
                <ProductCard product={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-swiper-button-prev absolute top-1/2 -left-6 z-10 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110 hover:bg-purple-50">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button className="custom-swiper-button-next absolute top-1/2 -right-6 z-10 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110 hover:bg-purple-50">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>      {/* Decorative Elements */}
    </div>
  );
};

export default CardSwiper;
