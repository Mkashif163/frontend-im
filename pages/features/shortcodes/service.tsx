import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import ServicePage from "../../../views/Features/ServicePage";
import Breadcrumb from "views/Containers/Breadcrumb";

const Service: NextPage = () => (
  <Layout1>
    <Breadcrumb parent="Element" title="Service" />
    <ServicePage />
  </Layout1>
);

export default Service;
