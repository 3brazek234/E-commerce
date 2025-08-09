import { useState } from "react";
import { useCategory } from "../../../hooks/useCategory";
import useRelatedProducts from "../../../hooks/useRelatedProducts";
import ProductCard from "../Product/ProductCard";

export default function HomeCategory() {
  const { data, isLoading, isError } = useCategory();
  const [selectedCategory, setSelectedCategory] = useState("tv");
  const {
    data: relatedData,
    isLoading: isRelatedLoading,
    error: isRelatedError,
  } = useRelatedProducts(selectedCategory);
  console.log(relatedData, isRelatedLoading, isRelatedError);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Home Category
      </h2>
      <p className="text-gray-600">
        Explore our wide range of products tailored to your needs.
      </p>
      {/* Add more content or components related to HomeCategory here */}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading categories</p>}
      {data && (
        <div className="between">
          <ul className="flex gap-2 flex-wrap">
            {data?.categories.map((category) => (
              <li
                key={category}
                className={`text-gray-700 px-4 py-2 bg-gray-200 rounded-3xl hover:bg-gray-300 transition-colors cursor-pointer ${
                  selectedCategory === category
                    ? "bg-purple-700 text-white hover:text-gray-700"
                    : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
          <div className="text-blue-600 underline ">
            <p>see all products</p>
          </div>{" "}
        </div>
      )}
      {isRelatedLoading && <p>Loading related products...</p>}
      {isRelatedError && <p>Error loading related products</p>}
   

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {relatedData?.products.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
