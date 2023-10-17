import { ReactNode } from "react";
import { NextPage } from "next";
import Footer from "./common/footer";
import { FilterProvider } from "../../../helpers/filter/filter.provider";
import { CartProvider } from "../../../helpers/cart/cart.provider";
import Loader from "common/Loader";

interface Props {
  children: ReactNode;
}
const Layout2Section: NextPage<Props> = ({ children }) => (
  <div className="bg-light">
    
      <div>
        <CartProvider>
          <FilterProvider>{children}</FilterProvider>
          <Footer />
        </CartProvider>
      </div>
  
  </div>
);

export default Layout2Section;
