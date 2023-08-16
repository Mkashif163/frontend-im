import { createContext } from "react";

interface ContextProps {
  selectedCategory: String;
  setSelectedCategory: Function;
  selectedBrands: any;
  setSelectedBrands: Function;
  handleBrands: Function;
  selectedColor: String;
  setSelectedColor: Function;
  selectedPrice: any;
  setSelectedPrice: Function;
  filterOpen: any;
  setFilterOpen: Function;
  leftSidebarOpen: any;
  setLeftSidebarOpen: Function;
  sidebarpopup: any;
  setSidebarpopup: Function;
}

export const FilterContext = createContext({} as ContextProps);
