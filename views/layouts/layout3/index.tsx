import { ReactNode } from "react";
import { NextPage } from "next";
import HeaderContainer from "../../Containers/Header/header3";
import Footer from "../../Containers/Footer";
import { FilterProvider } from "../../../helpers/filter/filter.provider";
import { CartProvider } from "../../../helpers/cart/cart.provider";
import Loader from "common/Loader";
import TopBrand from "../widgets/TopBrand";

interface Props {
  children: ReactNode;
}
const Layout3Section: NextPage<Props> = ({ children }) => (
  <Loader>
    <div className="bg-light">
      <CartProvider>
        <HeaderContainer category={false} cartPopupPosition="left" display="d-none" />
        <section className="brand-panel">
          <div className="brand-panel-box">
            <TopBrand />
          </div>
        </section>

        <FilterProvider>{children}</FilterProvider>
        <Footer layoutLogo="layout-3-footer" />
      </CartProvider>
    </div>
  </Loader>
);

export default Layout3Section;
