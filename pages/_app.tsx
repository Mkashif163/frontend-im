import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import { useApollo } from "../helpers/apollo";
import { FilterProvider } from "../helpers/filter/filter.provider";
import { CartProvider } from "../helpers/cart/cart.provider";
import { WishlistProvider } from "../helpers/wishlist/wish.provider";
import { CurrencyContextProvider } from "../helpers/currency/CurrencyContext";
import { CompareProvider } from "../helpers/compare/compare.provider";
import { MenuContextProvider } from "../helpers/menu/MenuContext";
import { ApiDataProvider } from "helpers/data/DataContext";
import TaptoTop from "../views/Containers/TapTop";
// import Customizer from "../views/Containers/customizer";
import Loader from "../common/Loader";

// Styles
import "public/scss/app.scss";
import "react-toastify/dist/ReactToastify.css";

// Language translation file
import "../data/i18n";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Loader>
          <div>
            <ApiDataProvider>
              <CurrencyContextProvider>
                <MenuContextProvider>
                  <CartProvider>
                    <WishlistProvider>
                      <CompareProvider>
                        <FilterProvider>
                          <Component {...pageProps} />
                        </FilterProvider>
                      </CompareProvider>
                    </WishlistProvider>
                  </CartProvider>
                </MenuContextProvider>
              </CurrencyContextProvider>
              <ToastContainer />
              <TaptoTop />
              {/* <Customizer /> */}
            </ApiDataProvider>
          </div>
        </Loader>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
