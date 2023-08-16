import { createContext } from "react";

interface WishlistContextProps {
  wishlistItems: any;
  addToWish: Function;
  removeFromWish: Function;
}

export const WishlistContext = createContext({} as WishlistContextProps);
