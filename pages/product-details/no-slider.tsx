import React from "react";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import NoSliderProducts from "../../views/Products-Detail/no-slider-products";
import Breadcrumb from "views/Containers/Breadcrumb";

const NoSlider: NextPage = () => {
  return (
    <Layout1>
      <Breadcrumb title="No slider" parent="product" />
      <NoSliderProducts />
    </Layout1>
  );
};

export default NoSlider;
