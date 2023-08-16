import React, { useState, useEffect } from "react";
import { CompareContext } from "./compare.context";
import { product } from "../interfaces/product";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const getLocalCompareItems = () => {
  try {
    const list = localStorage.getItem("compare");
    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

export const CompareProvider = (props) => {
  const [compareItems, setcompareItems] = useState(getLocalCompareItems() as product[]);
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(compareItems));
  }, [compareItems]);

  // Add Product To Wishlist
  const addToCompare = (item) => {
    const index = compareItems.findIndex((compare) => compare.id === item.id);
    if (index === -1) {
      toast.success("Product Added to Compare Successfully !");
      setcompareItems([...compareItems, item]);
      router.push("/pages/compare/compare-1");
    } else {
      toast.error("This Product is Already Added to Compare !");
    }
  };

  // Remove Product From compare
  const removeFromComapre = (item) => {
    setcompareItems(compareItems.filter((e) => e.id !== item.id));
    toast.error("Product Removed from Compare Successfully !");
  };

  return (
    <CompareContext.Provider
      value={{
        compareItems: compareItems,
        addToCompare: addToCompare,
        removeFromComapre: removeFromComapre,
      }}>
      {props.children}
    </CompareContext.Provider>
  );
};
