import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";

import Portfolio from "../../../views/Features/Portfolio";
import Breadcrumb from "views/Containers/Breadcrumb";

const PortfolioGrid6: NextPage = () => (
  <Layout1>
    <Breadcrumb parent="Portfolio" title="Six Grid" />
    <Portfolio cols="isotopeSelector filter col-lg-2 col-sm-6" />
  </Layout1>
);

export default PortfolioGrid6;
