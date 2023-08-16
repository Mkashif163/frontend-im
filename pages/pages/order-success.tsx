import React from "react";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import OrderSuccessPage from "../../views/pages/orderSuccess";

const OrderSuccess: NextPage = () => {
  return (
    <Layout1>
      <OrderSuccessPage />
    </Layout1>
  );
};

export default OrderSuccess;
