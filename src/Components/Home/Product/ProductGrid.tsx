import CardSwiper from "../../../ui/CardSwiper";

import useHomeProduct from "../../../hooks/useHomeProduct";
import HomeCategory from "../HomeCategory/HomeCategory";
import IsLoading from "../../../ui/IsLoading";
const ProductGrid = () => {
  const { data, isLoading, isError } = useHomeProduct();
  return (
    <div className="min-h-screen bg-gray-50 p-8 main-container ">
      <div className="max-w-7xl mx-auto">
        <div className="main-product-card overflow-hidden rounded-xl">
          {isLoading && <IsLoading />}
          {isError && <p>Error loading products</p>}
          <CardSwiper
            items={data || []}
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
