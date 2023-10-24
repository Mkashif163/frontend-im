import React, { useState, useEffect } from "react";
import { CartContext } from "./cart.context";
import { product } from "../interfaces/product";
import { toast } from "react-toastify";

// Helper function to get cart items from local storage
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
  // Initialize cartItems state with items from local storage
  const [cartItems, setCartItems] = useState(getLocalCartItems() as product[]);
  
  // Initialize cartTotal state
  const [cartTotal, setCartTotal] = useState(0);

  // useEffect to update cartTotal and save cartItems to local storage
  useEffect(() => {
    const Total = cartItems.reduce((a, b) => +a + +b.total, 0);
    setCartTotal(Total);
    localStorage.setItem("cartList", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add a product to the cart
  const addToCart = (item, qty, condition) => {
    toast.success("Product Added to Cart Successfully !", { autoClose: 500 });
    const index = cartItems.findIndex((itm) => itm.id === item.id);
  
    if (index !== -1) {
      // If the product is already in the cart, update its quantity and total
      const product = cartItems[index];
      const quantity = qty;
  
      // Determine the price based on the selected condition
      const selectedPrice = condition === "New" ? item.new_sale_price : item.refurnished_sale_price;
  
      cartItems[index] = {
        ...product,
        ...item,
        qty: quantity,
        total: selectedPrice * quantity,
        condition: condition,
        selectedPrice: selectedPrice, // Store the selected price in the cart item
      };
      setCartItems([...cartItems]);
    } else {
      // If the product is not in the cart, add it
      const selectedPrice = condition === "New" ? item.new_sale_price : item.refurnished_sale_price;
      const product = {
        ...item,
        qty: qty,
        total: selectedPrice,
        condition: condition,
        selectedPrice: selectedPrice, // Store the selected price in the cart item
      };
      setCartItems([...cartItems, product]);
    }
  };
  
  // Function to update product quantity in the cart
  const updateQty = (item, quantity) => {
    if (quantity >= 1) {
      const index = cartItems.findIndex((itm) => itm.id === item.id);
      if (index !== -1) {
        const product = cartItems[index];
        cartItems[index] = { ...product, ...item, qty: quantity, total: item.price * quantity };

        setCartItems([...cartItems]);
        toast.info("Product Quantity Updated !", { autoClose: 500 });
      } else {
        const product = { ...item, qty: quantity, total: item.price * quantity };
        setCartItems([...cartItems, product]);
        toast.success("Product Quantity Updated !");
      }
    } else {
      toast.error("Enter a Valid Quantity !");
    }
  };
  
  // Function to remove a product from the cart
  const removeFromCart = (item) => {
    toast.error("Product Removed from Cart Successfully !", { autoClose: 500 });
    setCartItems(cartItems.filter((e) => e.id !== item.id));
  };
  
  // Function to empty the cart
  const emptyCart = () => {
    toast.error("Cart is empty");
    setCartItems([]);
  };

  // Provide cart-related functions and data via the CartContext.Provider
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
