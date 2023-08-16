import React from "react";
import { NextPage } from "next";

import Layout1 from "../../../views/layouts/layout1";
import WishListPage from "../../../views/pages/account/WishListPage";

const WishList: NextPage = () => {
  return (
    <Layout1>
      <WishListPage />
    </Layout1>
  );
};

export default WishList;
