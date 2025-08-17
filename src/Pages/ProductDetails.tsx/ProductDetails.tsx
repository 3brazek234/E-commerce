import { Link, useParams } from "react-router-dom";
import useSingleProduct from "../../hooks/useSingleProduct";
import ZoomImg from "../../ui/ZoomImg";
import React, { Suspense } from "react";
import useRelatedProducts from "../../hooks/useRelatedProducts";
import { Skeleton } from "@mui/material"; 
import { FaShoppingCart } from "react-icons/fa";
import BasicTabs from "../../Components/ProducDetails/Tabs";

const CardSwiper = React.lazy(() => import("../../ui/CardSwiper"));

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useSingleProduct(id!);
  const { data: relatedProducts, isLoading: isRelatedLoading } =
    useRelatedProducts(data?.product.category || "");

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg">
        {/* استخدم Skeleton للصورة */}
        <div className="w-full">
          <Skeleton variant="rectangular" width="100%" height={300} />
        </div>
        {/* استخدم Skeleton للنصوص */}
        <div className="flex flex-col">
          <Skeleton variant="text" width="60%" height={40} className="mb-4" />
          <Skeleton variant="text" width="40%" height={30} className="mb-6" />
          <Skeleton variant="text" width="80%" height={20} className="mb-4" />
          <Skeleton variant="text" width="50%" height={20} className="mb-4" />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={50}
            className="mt-auto"
          />
        </div>
      </div>
    );
  }

  if (error || !data?.product) {
    return (
      <div className="text-center text-red-600 py-12">
        Failed to load product details.
      </div>
    );
  }
  if (isRelatedLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-12">
        <Skeleton variant="rectangular" width="100%" height={300} />
      </div>
    );
  }
  const { title, image, category, price, brand, model } = data.product;
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: category, path: "/men" },
    { label: title.slice(0, 8) },
  ];
  return (
    <>
      <div className="max-w-4xl mt-12 mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg">
        {/* Left: Zoomable Image */}
        <div className="w-full">
          {/* استخدم Skeleton للصورة أثناء التحميل */}
          {isLoading ? (
            <Skeleton variant="rectangular" width="100%" height={300} />
          ) : (
            <ZoomImg src={image} alt={title} />
          )}
        </div>

        {/* Right: Details */}
        <div className="flex flex-col">
          {/* Breadcrumbs */}
          <div className="flex mb-4">
            <nav className="max-w-4xl text-gray-600 text-sm">
              {breadcrumbItems.map((item, index) => (
                <span key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-indigo-600 hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                  {index < breadcrumbItems.length - 1 && " / "}
                </span>
              ))}
            </nav>
          </div>
          {/* Title */}
          <h2 className="text-3xl font-extrabold mb-4 text-gray-800">
            {title}
          </h2>

          {/* Brand / Model / Category Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
              Brand: {brand}
            </span>
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
              Model: {model}
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              Category: {category}
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl font-extrabold text-indigo-600 mb-8">
            ${price}
          </p>

          <div className="flex items-center gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded">
              <button className="px-4 py-2 text-gray-600">-</button>
              <span className="px-4 py-2">1</span>
              <button className="px-4 py-2 text-gray-600">+</button>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-auto bg-red-600 hover:bg-purple-800 text-white px-6 py-2 rounded transition-colors duration-300 center">
              <FaShoppingCart className="inline-block mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 mt-12">
        <BasicTabs product={data.product} />
      </div>

      {/* Related Products Section */}
      <div className="max-w-4xl mx-auto p-6 mt-12">
        <Suspense fallback={<div>Loading related products...</div>}>
          <CardSwiper
            items={relatedProducts?.slice(0, 10) || []}
            title="PRODUCTS YOU MAY LIKE"
            description="Explore more products from the same category."
          />
        </Suspense>
      </div>
    </>
  );
};

export default ProductDetails;
