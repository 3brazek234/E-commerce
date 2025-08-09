import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import useCartStore from "../../store/Cart";

const Cart= ({ setCartToggle }: { setCartToggle: (value: boolean) => void }) => {

  const { cartItem, addItemToCart, updateItemQuantity, removeItemFromCart } = useCartStore();

  const totalAmount = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = cartItem.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="fixed top-0 right-0 w-[400px] h-screen overflow-y-scroll bg-white z-[1000000] shadow-2xl transform transition-transform duration-300 ease-in-out">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-xl">
              <GiShoppingCart className="text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Shopping Cart</h1>
              <p className="text-purple-100">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </p>
            </div>
          </div>

          <button
            onClick={() => setCartToggle(false)}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all duration-200 hover:scale-110"
          >
            <IoIosClose className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4 max-h-[calc(100vh-280px)]">
        <div className="space-y-4">
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl p-4 border border-purple-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-bold"
                    onClick={() => addItemToCart(item)}
                  >
                    {item.quantity}
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex-1 space-y-2">
                  <h3 className="font-bold text-gray-800 text-sm leading-tight">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-purple-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-500">
                      ${item.price.toFixed(2)} each
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3 bg-white rounded-full p-1 shadow-sm">
                      <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1} className="w-8 h-8 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 hover:scale-110 transform">
                        <FaMinus className="text-xs" />
                      </button>
                      <span className="font-bold text-gray-800 min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} disabled={item.quantity === item.stock} className="w-8 h-8 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 hover:scale-110 transform">
                        <FaPlus className="text-xs" />
                      </button>
                    </div>

                    <button onClick={() => removeItemFromCart(item.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-all duration-200 hover:scale-110">
                      <FaTrash className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer - Total & Checkout */}
      <div className="border-t border-gray-200 p-6 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="space-y-4">
          {/* Subtotal */}
          <div className="flex justify-between items-center text-lg">
            <span className="font-medium text-gray-700">Subtotal:</span>
            <span className="font-bold text-purple-600">
              ${totalAmount.toFixed(2)}
            </span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Shipping:</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>

          <hr className="border-purple-200" />

          {/* Total */}
          <div className="flex justify-between items-center text-xl">
            <span className="font-bold text-gray-800">Total:</span>
            <span className="font-bold text-purple-600">
              ${totalAmount.toFixed(2)}
            </span>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Proceed to Checkout
          </button>

          {/* Continue Shopping */}
          <button
            onClick={() => setCartToggle(false)}
            className="w-full text-purple-600 hover:text-purple-700 font-medium py-2 transition-colors duration-200"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
