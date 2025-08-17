import CardSwiper from "../../../ui/CardSwiper";

import useHomeProduct from "../../../hooks/useHomeProduct";
import HomeCategory from "../HomeCategory/HomeCategory";
const ProductGrid = () => {
  const { data } = useHomeProduct();
  return (
    <div className="min-h-screen bg-gray-50 p-8 main-container ">
      <div className="max-w-7xl mx-auto">
        <div className="main-product-card overflow-hidden lg:basis-3/4 rounded-xl">
          <CardSwiper
            items={data?.products}
            title="POPULAR PRODUCTS"
            description="Do not miss the current offers until the end of March."
          />
          <HomeCategory />
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
