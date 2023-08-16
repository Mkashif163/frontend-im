import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import Portfolio from "../../../views/Features/Portfolio";
import Breadcrumb from "views/Containers/Breadcrumb";

const PortfolioGrid4: NextPage = () => (
  <Layout1>
    <Breadcrumb parent="Portfolio" title="Four Grid" />
    <Portfolio cols="isotopeSelector filter col-lg-3 col-sm-6" />
  </Layout1>
);

export default PortfolioGrid4;
