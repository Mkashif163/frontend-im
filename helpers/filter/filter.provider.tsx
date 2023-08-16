import React, { useState } from "react";
import { FilterContext } from "./filter.context";
import { useRouter } from "next/router";

export const FilterProvider = (props: any) => {
  const router = useRouter();
  const brand: any = router.query.brand;
  const color: any = router.query.color;
  const pricemin: any = router.query.pricemin;
  const pricemax: any = router.query.pricemax;
  const category: any = router.query.category;
  const param: [] = brand ? brand.split(",") : [];
  const [filterOpen, setFilterOpen] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<String>(category || "FASHION");
  const [selectedBrands, setSelectedBrands] = useState<String[]>(param || []);
  const [selectedColor, setSelectedColor] = useState<String>(color || "");
  const [selectedPrice, setSelectedPrice] = useState({ min: parseInt(pricemin) || 0, max: parseInt(pricemax) || 500 });
  const [sidebarpopup, setSidebarpopup] = useState(false);
  const handleBrands = (brand: String) => {
    var index = selectedBrands.indexOf(brand);
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
