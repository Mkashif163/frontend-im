/* eslint-disable padded-blocks */

import React from "react";

import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import Breadcrumb from "../../views/Containers/Breadcrumb";
import TabProduct from "../../views/Products-Detail/tab-product";
import RelatedProducts from "../../views/Products-Detail/related products";
import FourImagePage from "../../views/Products-Detail/4-ImagesPage";

const FourImages: NextPage = () => {
  return (
    <div className="b-g-light">
      <Layout1>
        <Breadcrumb title="4 Image" parent="product" />
        <section className="section-big-pt-space bg-light">
          <FourImagePage />
        </section>
        <div className="custom-container">
          <TabProduct />
        </div>
        <RelatedProducts />
      </Layout1>
    </div>
  );
};

export default FourImages;
