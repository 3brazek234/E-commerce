import { useEffect, useState } from "react";
import { useCategory } from "../../../hooks/useCategory";
import useRelatedProducts from "../../../hooks/useRelatedProducts";
import ProductCard from "../Product/ProductCard";
import type { Product } from "../../../types/interfaces";

export default function HomeCategory() {
  const { data, isLoading, isError } = useCategory();
  useEffect(() => {
    if (data && data) {
      console.log(data, isLoading, isError, "category");
    }
  }, [data]);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const {
    data: relatedData,
    isLoading: isRelatedLoading,
    error: isRelatedError,
  } = useRelatedProducts(selectedCategory) as { data: Product[]; isLoading: boolean; error: Error | null };
  console.log(relatedData, isRelatedLoading, isRelatedError, "relatedData");
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
            {data?.map((category) => (
              <li
                key={category.id}
                className={`text-gray-700 px-4 py-2 bg-gray-200 rounded-3xl hover:bg-gray-300 transition-colors cursor-pointer ${
                  selectedCategory === category.id
                    ? "bg-purple-700 text-white hover:text-gray-700"
                    : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
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
        {relatedData?.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
