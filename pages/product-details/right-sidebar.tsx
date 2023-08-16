import React from "react";

import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import Breadcrumb from "../../views/Containers/Breadcrumb";
import RightSidebarPage from "views/Products-Detail/RightSidebarPage";

const RightSidebar: NextPage = () => {
  return (
    <Layout1>
      <Breadcrumb parent="product" title="right sidebar" />
      <section className="section-big-py-space bg-light">
        <RightSidebarPage />
      </section>
    </Layout1>
  );
};

export default RightSidebar;
