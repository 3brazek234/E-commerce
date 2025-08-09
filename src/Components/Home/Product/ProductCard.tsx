import { useState } from "react";
import { FaCartPlus, FaHeart, FaEye } from "react-icons/fa";
import type { Product } from "../../../types/interfaces";
import { Link } from "react-router-dom";
import useCartStore from "../../../store/Cart";
import { toast } from "react-toastify";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const { addItemToCart } = useCartStore();
  if (!product) {
    return null;
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCart = (product: Product) => {
    addItemToCart(product);
    toast.success("Product added to cart");
  };

  return (
    <>
      <div className="product-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 w-full max-w-sm mx-auto">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className="aspect-square relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Quick view button */}
            <Link to={`/product/${product.id}`}>
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white flex items-center gap-2 shadow-lg font-medium">
                <FaEye className="text-purple-600" />
                <span>Quick View</span>
              </button>
            </Link>
          </div>

          {/* Like Button */}
          <button
            onClick={handleLike}
            className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm ${
              isLiked
                ? "bg-red-500 text-white shadow-red-200"
                : "bg-white/90 text-red-500 hover:bg-red-50"
            } ${isLiked ? "animate-bounce" : ""}`}
          >
            <FaHeart className={`text-sm ${isLiked ? "animate-pulse" : ""}`} />
          </button>

          {/* Discount Badge */}
          {product.discount && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg animate-pulse">
              {product.discount}% OFF
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <h3 className="font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300 text-lg leading-tight min-h-[3.5rem]">
            {product.title}
          </h3>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {product.discount && (
                <span className="text-sm text-gray-500 line-through">
                  ${(product.price * (1 + product.discount / 100)).toFixed(2)}
                </span>
              )}
              <p className="text-2xl font-bold text-purple-600">
                ${product.price}
              </p>
            </div>
            {product.discount && (
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                Save ${((product.price * product.discount) / 100).toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => handleAddToCart(product)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
          >
            <FaCartPlus className="text-lg" />
            <span>Add to Cart</span>
          </button>
        </div>

        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </>
  );
};

export default ProductCard;
