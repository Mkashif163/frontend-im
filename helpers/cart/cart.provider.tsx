import React, { useState, useEffect } from "react";
import { CartContext } from "./cart.context";
import { product } from "../interfaces/product";
import { toast } from "react-toastify";

const getLocalCartItems = () => {
  try {
    const list = localStorage.getItem("cartList");
    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

export const CartProvider = (props: any) => {
  const [cartItems, setCartItems] = useState(getLocalCartItems() as product[]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const Total = cartItems.reduce((a, b) => +a + +b.total, 0);
    setCartTotal(Total);
    localStorage.setItem("cartList", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add Product To Cart
  const addToCart = (item) => {
    toast.success("Product Added to Cart Successfully !");
    const index = cartItems.findIndex((itm) => itm.id === item.id);

    if (index !== -1) {
      const product = cartItems[index];
      const quantity = product.qty ? product.qty + 1 : 1;
      cartItems[index] = { ...product, ...item, qty: quantity, total: item.price * quantity };
      setCartItems([...cartItems]);
    } else {
      const product = { ...item, qty: 1, total: item.price };
      setCartItems([...cartItems, product]);
    }
  };

  // Update Product Quantity
  const updateQty = (item, quantity) => {
    if (quantity >= 1) {
      const index = cartItems.findIndex((itm) => itm.id === item.id);
      if (index !== -1) {
        const product = cartItems[index];
        cartItems[index] = { ...product, ...item, qty: quantity, total: item.price * quantity };

        setCartItems([...cartItems]);
        toast.info("Product Quantity Updated !");
      } else {
        const product = { ...item, qty: quantity, total: item.price * quantity };
        setCartItems([...cartItems, product]);
        toast.success("Product Added Updated !");
      }
    } else {
      toast.error("Enter Valid Quantity !");
    }
  };

  // Remove Product From Cart
  const removeFromCart = (item) => {
    toast.error("Product Removed from Cart Successfully !");
    setCartItems(cartItems.filter((e) => e.id !== item.id));
  };

  const emptyCart = () => {
    toast.error("Cart is empty");
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        addToCart,
        updateQty,
        removeFromCart,
        emptyCart,
      }}>
      {props.children}
    </CartContext.Provider>
  );
};
