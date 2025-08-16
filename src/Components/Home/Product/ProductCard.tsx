import { useState } from "react";
import { FaCartPlus, FaHeart, FaEye } from "react-icons/fa";
import type { Product } from "../../../types/interfaces";
import { Link } from "react-router-dom";
import useCartStore from "../../../store/Cart";
import { toast } from "react-toastify";
import { RatingStars } from "../../../ui/RatingStars";

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
  console.log(product);
  const handleAddToCart = (product: Product) => {
    addItemToCart(product);
    toast.success("Product added to cart");
  };

  return (
    <>
      <div className="product-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 w-full max-w-sm mx-auto flex flex-col justify-between">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className="aspect-square relative">
            <img
              src={product.images[0]}
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
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1 px-4 py-2">
          {/* Title */}
          <h3 className="font-bold text-gray-800 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300 text-lg leading-tight truncate w-48">
            {product.title}
          </h3>
          {/* slug */}
          <div className="flex gap-2">
            <span className="text-gray">Slug:</span>
            <p className="text-gray-600">{product.slug}</p>
          </div>

          {/* category */}
          <div className="flex gap-2 items-center">
            <span className="text-gray">Category:</span>
            <button className="px-2 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              {product.category.name}
            </button>
          </div>

          {/* stock */}
          <div className="flex gap-2">
            <span className="text-gray">Stock:</span>
            <button className="text-gray-600 mb-2">4 items left</button>
          </div>
          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-purple-600">
                ${product.price}
              </p>
              <p className="text-gray-600 text-sm font-semibold line-through">
                9%
              </p>
            </div>
          </div>
        </div>
        <div>
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
