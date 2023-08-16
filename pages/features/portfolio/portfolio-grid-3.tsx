import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import Portfolio from "../../../views/Features/Portfolio";
import Breadcrumb from "views/Containers/Breadcrumb";

const PortfolioGrid3: NextPage = () => (
  <Layout1>
    <Breadcrumb parent="Portfolio" title="Three Grid" />
    <Portfolio cols="isotopeSelector filter col-lg-4 col-sm-6" />
  </Layout1>
);

export default PortfolioGrid3;
