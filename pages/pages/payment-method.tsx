import React from "react";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import PaymentMethod from "views/pages/account/paymentPage";

const PaymentHistory: NextPage = () => {
  return (
    <Layout1>
      <PaymentMethod />
    </Layout1>
  );
};

export default PaymentHistory;
