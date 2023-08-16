import React from "react";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import OrderHistoryPage from "../../views/pages/orderHistory";

const OrderHistory: NextPage = () => {
  return (
    <Layout1>
      <OrderHistoryPage />
    </Layout1>
  );
};

export default OrderHistory;
