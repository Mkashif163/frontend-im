import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import TabFeaturesPage from "../../../views/Features/TabFeaturesPage";
import Breadcrumb from "views/Containers/Breadcrumb";

const TabFeatures: NextPage = () => (
  <Layout1>
    <Breadcrumb parent="Element" title="Tab Feature" />
    <TabFeaturesPage />
  </Layout1>
);

export default TabFeatures;
