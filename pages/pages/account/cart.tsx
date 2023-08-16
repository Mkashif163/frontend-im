import React from "react";
import { NextPage } from "next";

import Layout1 from "../../../views/layouts/layout1";
import CartPage from "../../../views/pages/account/cartPage";

const Cart: NextPage = () => {
  return (
    <Layout1>
      <CartPage />
    </Layout1>
  );
};

export default Cart;
