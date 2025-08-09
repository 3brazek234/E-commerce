  // import { Brands } from "../../Components/Home/Brands/Brands";
import CustomerReview from "../../Components/Home/CustomerReview/CustomerReview";
import ProductGrid from "../../Components/Home/Product/ProductGrid";
import Bannar from "../../ui/Bannar";
import Swiper from "../../ui/Swiper";


const Home = () => {
  return (
    <>
      <Swiper/>
      {/* <Brands/> */}
      <ProductGrid/>
      <CustomerReview/>
      <Bannar/>
    </>
  );
};

export default Home;
