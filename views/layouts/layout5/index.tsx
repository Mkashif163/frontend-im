import { ReactNode } from "react";
import { NextPage } from "next";
import HeaderContainer from "../../Containers/Header/header2";
import Footer from "../../Containers/Footer";
import { FilterProvider } from "../../../helpers/filter/filter.provider";
import { CartProvider } from "../../../helpers/cart/cart.provider";
import Loader from "common/Loader";

interface Props {
  children: ReactNode;
}
const Layout5Section: NextPage<Props> = ({ children }) => (
  <Loader>
    <div className="bg-light">
      <CartProvider>
        <HeaderContainer cartPopupPosition="left" category={false} display="d-none" categoryHeaderClass="category-inverse" layoutLogo="layout-5" />
        <FilterProvider>{children}</FilterProvider>
        <Footer layoutLogo="layout-5" />
      </CartProvider>
    </div>
  </Loader>
);

export default Layout5Section;
