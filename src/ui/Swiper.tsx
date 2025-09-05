import heroImg from "../assets/Main-swiper/swiper.jpg"

const SwiperComponent = () => {


  return (
    <div className="w-full h-4/6 object-contain overflow-hidden relative">
      <img
        src={heroImg}
        alt="Swiper Image 1"
        className="heroImg"
      />

      <div className="absolute top-1/4 left-3/4 ">
        <h2 className="text-white text-3xl font-bold"></h2>
        <p className="text-white mt-2">Discover the best products at unbeatable prices.</p>
      </div>
    </div>
  );
};

export default SwiperComponent;
