import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import Button from "../../../views/Features/button";
import Breadcrumb from "views/Containers/Breadcrumb";

const ButtonElement: NextPage = () => {
  return (
    <Layout1>
      <Breadcrumb parent="Element" title="Button" />
      <Button />
    </Layout1>
  );
};

export default ButtonElement;
