import { createContext } from "react";

interface ContextProps {
  cartItems: any;
  cartTotal: number;
  addToCart: Function;
  updateQty: Function;
  removeFromCart: Function;
  emptyCart: Function;
}

export const CartContext = createContext({} as ContextProps);
