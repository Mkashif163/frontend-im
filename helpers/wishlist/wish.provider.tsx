import React, { useState, useEffect } from "react";
import { WishlistContext } from "./wish.context";
import { product } from "../interfaces/product";
import { toast } from "react-toastify";

const getLocalWishlistItems = () => {
  try {
    const list = localStorage.getItem("wishlist");
    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

export const WishlistProvider = (props: any) => {
  const [wishlistItems, setWishlistItems] = useState(getLocalWishlistItems() as product[]);
  // const [isVisible]

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Add Product To Wishlist
  const addToWish = (item) => {
    const index = wishlistItems.findIndex((wish) => wish.id === item.id);
    if (index === -1) {
      toast.success("Product Added to Wishlist Successfully !");
      setWishlistItems([...wishlistItems, item]);
    } else {
      toast.error("This Product Already Added !");
    }
  };

  // Remove Product From Wishlist
  const removeFromWish = (item) => {
    setWishlistItems(wishlistItems.filter((e) => e.id !== item.id));
    toast.error("Product Removed from Wishlist Successfully !");
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWish,
        removeFromWish,
      }}>
      {props.children}
    </WishlistContext.Provider>
  );
};
