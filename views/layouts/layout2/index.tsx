import { ReactNode } from "react";
import { NextPage } from "next";
import HeaderContainer from "../../Containers/Header/header2";
import Footer from "./common/footer";
import { FilterProvider } from "../../../helpers/filter/filter.provider";
import { CartProvider } from "../../../helpers/cart/cart.provider";
import Loader from "common/Loader";

interface Props {
  children: ReactNode;
}
const Layout2Section: NextPage<Props> = ({ children }) => (
  <div className="bg-light">
    <Loader>
      <div>
        <CartProvider>
          <HeaderContainer category={true} cartPopupPosition="bottom" display="d-none" categoryHeaderClass={null} layoutLogo="layout-1" />
          <FilterProvider>{children}</FilterProvider>
          <Footer />
        </CartProvider>
      </div>
    </Loader>
  </div>
);

export default Layout2Section;
