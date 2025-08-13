import CustomerReview from "../../Components/Home/CustomerReview/CustomerReview";
import OurValues from "../../Components/Home/OurValues/OurValues";
import ProductGrid from "../../Components/Home/Product/ProductGrid";
import Bannar from "../../ui/Bannar";
import Swiper from "../../ui/Swiper";


const Home = () => {
  return (
    <>
      <Swiper/>
      <ProductGrid/>
      <CustomerReview/>
      <OurValues/>
      <Bannar/>
    </>
  );
};

export default Home;
