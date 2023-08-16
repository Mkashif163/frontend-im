import React from "react";

import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import TitlePage from "../../../views/Features/title-page";
import Breadcrumb from "views/Containers/Breadcrumb";

const TitleClass: NextPage = () => {
  return (
    <Layout1>
      <Breadcrumb parent="Element" title="Category" />
      <TitlePage />
    </Layout1>
  );
};

export default TitleClass;
