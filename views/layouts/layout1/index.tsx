import { ReactNode, useEffect } from "react";
import { NextPage } from "next";
import HeaderContainer from "../../Containers/Header/header1";
import Footer from "../../Containers/Footer";
// import TopBrand from "../widgets/TopBrand";
import { FilterProvider } from "../../../helpers/filter/filter.provider";
import { CartProvider } from "../../../helpers/cart/cart.provider";
import Loader from "common/Loader";

interface Props {
  children: ReactNode;
}

const Layout1: NextPage<Props> = ({ children }) => {
  const path = window.location.pathname;
  const pathMatch = ["Layouts", "/"];
  useEffect(() => {
    document.documentElement.classList.remove(localStorage.getItem("color"));
    localStorage.setItem("color", "color-1");
    document.documentElement.classList.add(localStorage.getItem("color"));
  }, []);
  return (
    <Loader>
      <div>
        <CartProvider>
          <HeaderContainer category={false} cartPopupPosition="top" display="d-none" layoutLogo="layout-2" />
          <FilterProvider>{children}</FilterProvider>
          <Footer layoutLogo="layout-2" />
        </CartProvider>
      </div>
    </Loader>
  );
};

export default Layout1;
