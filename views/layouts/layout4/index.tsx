import { ReactNode } from "react";
import { NextPage } from "next";
import HeaderContainer from "../../Containers/Header/header1";
import Footer from "../../Containers/Footer";
import { FilterProvider } from "../../../helpers/filter/filter.provider";
import { CartProvider } from "../../../helpers/cart/cart.provider";
import Loader from "common/Loader";

interface Props {
  children: ReactNode;
}
const Layout4Section: NextPage<Props> = ({ children }) => (
  <Loader>
    <div className="bg-light">
      <CartProvider>
        <HeaderContainer cartPopupPosition="top" display="d-none" category={true} layoutLogo="layout-4" />
        <FilterProvider>{children}</FilterProvider>
        <Footer layoutLogo="layout-4" />
      </CartProvider>
    </div>
  </Loader>
);

export default Layout4Section;
