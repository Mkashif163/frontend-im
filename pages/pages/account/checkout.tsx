import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import CheckoutPage from "../../../views/pages/account/checkoutPage";

const Checkout: NextPage = () => {
  return (
    <Layout1>
      <CheckoutPage />
    </Layout1>
  );
};

export default Checkout;
