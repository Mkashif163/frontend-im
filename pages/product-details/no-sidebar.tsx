import React from "react";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import Breadcrumb from "views/Containers/Breadcrumb";
import NoSidebarPage from "views/Products-Detail/NoSidebarPage";

const NoSlider: NextPage = () => {
  return (
    <Layout1>
      <Breadcrumb title="No sidebar" parent="product" />
      <NoSidebarPage />
    </Layout1>
  );
};

export default NoSlider;
