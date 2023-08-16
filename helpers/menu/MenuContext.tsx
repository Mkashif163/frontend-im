import React, { createContext, useState } from "react";

interface ContextProps {
  leftMenu: boolean;
  setLeftMenu: Function;
  menuResponsive: boolean;
  setMenuResponsive: Function;
}

export const Context = createContext({} as ContextProps);
export const Provider = (props) => {
  const [leftMenu, setLeftMenu] = useState(false);
  const [menuResponsive, setMenuResponsive] = useState<boolean>(false);

  const menuContext = {
    leftMenu,
    setLeftMenu,
    menuResponsive,
    setMenuResponsive,
  };

  return <Context.Provider value={menuContext}> {props.children}</Context.Provider>;
};

export const { Consumer } = Context;

export { Context as MenuContext, Provider as MenuContextProvider } from "./MenuContext";
