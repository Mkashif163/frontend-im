import { createContext } from "react";

interface ContextProps {
  compareItems: any;
  addToCompare: Function;
  removeFromComapre: Function;
}

export const CompareContext = createContext({} as ContextProps);
