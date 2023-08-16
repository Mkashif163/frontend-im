import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import Portfolio from "../../../views/Features/Portfolio";
import Breadcrumb from "views/Containers/Breadcrumb";

const PortfolioGrid2: NextPage = () => (
  <Layout1>
    <Breadcrumb parent="Portfolio" title="Two Grid" />
    <Portfolio cols="isotopeSelector filter col-sm-6" />
  </Layout1>
);

export default PortfolioGrid2;
