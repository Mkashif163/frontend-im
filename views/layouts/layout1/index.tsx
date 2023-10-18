import { ReactNode, useEffect } from "react";
import { NextPage } from "next";
import HeaderContainer from "../../Containers/Header/header1";
import Footer from "../../Containers/Footer";
// import TopBrand from "../widgets/TopBrand";
import { FilterProvider } from "../../../helpers/filter/filter.provider";
import { CartProvider } from "../../../helpers/cart/cart.provider";

interface Props {
  children: ReactNode;
}

const Layout1: NextPage<Props> = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.remove(localStorage.getItem("color"));
    localStorage.setItem("color", "color-1");
    document.documentElement.classList.add(localStorage.getItem("color"));
  }, []);
  return (
  
      <div>
        <CartProvider>
          <HeaderContainer category={false} cartPopupPosition="top" display="d-none" layoutLogo="layout-2" />
          <FilterProvider>{children}</FilterProvider>
          <Footer layoutLogo="layout-2" />
        </CartProvider>
      </div>
  );
};

export default Layout1;
