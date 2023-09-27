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

  console.log(cartItems)

  useEffect(() => {
    const Total = cartItems.reduce((a, b) => +a + +b.total, 0);
    setCartTotal(Total);
    localStorage.setItem("cartList", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add Product To Cart
  const addToCart = (item,qty, condition) => {
    toast.success("Product Added to Cart Successfully !");
    const index = cartItems.findIndex((itm) => itm.id === item.id);
    console.log("condition", condition)
  
    if (index !== -1) {
      const product = cartItems[index];
      const quantity = product.qty ? product.qty + 1 : 1;
  
      // Determine the price based on the selected condition
      const selectedPrice = condition === "New" ? item.new_sale_price: item.refurnished_sale_price;
  
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
      const selectedPrice = condition === "New" ? item.new_sale_price : item.refurnished_sale_price;
      const product = {
        ...item,
        qty: 1,
        total: selectedPrice,
        condition: condition,
        selectedPrice: selectedPrice, // Store the selected price in the cart item
      };
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
