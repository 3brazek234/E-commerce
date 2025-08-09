
import CardSwiper from "../../../ui/CardSwiper";

import useHomeProduct from "../../../hooks/useHomeProduct";
import HomeCategory from "../HomeCategory/HomeCategory";
const ProductGrid = () => {
const {data, isLoading, error} = useHomeProduct();
  return (
    <div className="min-h-screen bg-gray-50 p-8 main-container ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Product Gallery
        </h1>

        

          {/* الصور على اليمين - هياخد 3/4 المساحة */}
          <div className="main-product-card overflow-hidden lg:basis-3/4 rounded-xl">
          <CardSwiper items={data?.products} title="POPULAR PRODUCTS" description="Do not miss the current offers until the end of March." />
             <HomeCategory />
          </div>
     
      </div>
    </div>
  );
};

export default ProductGrid;
