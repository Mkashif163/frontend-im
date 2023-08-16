import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import Instagram from "../../../views/Features/instagram";
import Breadcrumb from "views/Containers/Breadcrumb";

const InstagramElement: NextPage = () => {
  return (
    <Layout1>
      <Breadcrumb parent="Element" title="Instagram" />
      <Instagram />
    </Layout1>
  );
};

export default InstagramElement;
