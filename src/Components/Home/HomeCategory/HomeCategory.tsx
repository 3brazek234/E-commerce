import { useState } from "react";
import { useCategory } from "../../../hooks/useCategory";
import useRelatedProducts from "../../../hooks/useRelatedProducts";
import ProductCard from "../Product/ProductCard";
import type { Product } from "../../../types/interfaces";
import CardSwiper from "../../../ui/CardSwiper";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import SideAddress from "../../../ui/SideAddress";
import { Link } from "react-router-dom";
import IsLoading from "../../../ui/IsLoading";

export default function HomeCategory() {
  const { data, isLoading, isError } = useCategory();
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const {
    data: relatedData,
    isLoading: isRelatedLoading,
    error: isRelatedError,
  } = useRelatedProducts(selectedCategory) as {
    data: Product[];
    isLoading: boolean;
    error: Error | null;
  };
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Home Category
      </h2>
      <p className="text-gray-600">
        Explore our wide range of products tailored to your needs.
      </p>

      {isLoading && <IsLoading />}
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
      {isRelatedLoading && <IsLoading />}
      {isRelatedError && <p>Error loading related products</p>}

      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4  gap-4">
        {relatedData?.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className=" block md:hidden">
        <CardSwiper items={relatedData?.slice(0, 8)} title="" description="" />
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/product">
          {" "}
          <button className="text-white px-4 py-2 rounded-3xl hover:bg-purple-800 bg-gray-400 transition-colors center">
            See All Products
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </Link>
      </div>
      <div className="my-4 p-4">
        <SideAddress
          title="Our Categories"
          description="Explore our wide range of products tailored to your needs."
        />
        <div className="flex gap-7 flex-wrap my-4">
          {data?.slice(0, 7).map(
            (category) =>
              category.image && (
                <div key={category.id} className="flex flex-col gap-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-32 h-32 object-cover rounded-full"
                  />

                  <p>{category.name}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
