import { create } from "zustand";
import type { Product, CartItem } from "../types/interfaces";

interface CartState {
  cartItem: CartItem[];
  addItemToCart: (item: Product) => void;
  removeItemFromCart: (id: number) => void; 
  updateItemQuantity: (id: number, quantity: number) => void;
}
 
const useCartStore = create<CartState>((set, get) => ({
  cartItem: [],

  addItemToCart: (item) => {
    const itemExists = get().cartItem.find(
      (cartItem) => cartItem.id === item.id
    );

    if (itemExists) {
      set({
        cartItem: get().cartItem.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      });
    } else {
      set({ cartItem: [...get().cartItem, { ...item, quantity: 1 }] });
    }
  },

  removeItemFromCart: (id) => {
    set({
      cartItem: get().cartItem.filter((cartItem) => cartItem.id !== id),
    });
  },

  updateItemQuantity: (id, quantity) => {
    set({
      cartItem: get().cartItem.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      ),
    });
  },
}));

export default useCartStore;