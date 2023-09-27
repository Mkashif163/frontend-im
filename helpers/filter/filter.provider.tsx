import React, { useState, useEffect } from "react";
import { FilterContext } from "./filter.context";

export const FilterProvider = (props: any) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<String>("");
  const [selectedBrands, setSelectedBrands] = useState<String[]>([]);
  const [selectedColor, setSelectedColor] = useState<String>("");
  const [selectedPrice, setSelectedPrice] = useState({ min: 0, max: 500 });
  const [sidebarpopup, setSidebarpopup] = useState(false);

  // Function to handle brand selection
  const handleBrands = (brand: String) => {
    const index = selectedBrands.indexOf(brand);
    if (index > -1) {
      setSelectedBrands(selectedBrands.filter((e) => e !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <FilterContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        handleBrands,
        selectedBrands,
        setSelectedBrands,
        selectedColor,
        setSelectedColor,
        selectedPrice,
        setSelectedPrice,
        filterOpen,
        setFilterOpen,
        leftSidebarOpen,
        setLeftSidebarOpen,
        sidebarpopup,
        setSidebarpopup,
      }}>
      {props.children}
    </FilterContext.Provider>
  );
};
