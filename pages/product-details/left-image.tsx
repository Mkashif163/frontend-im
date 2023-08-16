import React from "react";

import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import Breadcrumb from "../../views/Containers/Breadcrumb";
import TabProduct from "../../views/Products-Detail/tab-product";
import RelatedProducts from "../../views/Products-Detail/related products";
import LeftImagePage from "../../views/Products-Detail/leftImagePage";

const LeftImage: NextPage = () => {
  return (
    <div className="b-g-light">
      <Layout1>
        <Breadcrumb title="left image" parent="product" />
        <section className="section-big-pt-space bg-light">
          <LeftImagePage />
        </section>
        <div className="custom-container">
          <TabProduct />
        </div>
        <RelatedProducts />
      </Layout1>
    </div>
  );
};

export default LeftImage;
