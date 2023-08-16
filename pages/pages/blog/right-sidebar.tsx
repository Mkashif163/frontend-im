import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import RightSidebarPage from "../../../views/blog/rightSidebarPage";

const RightSidebar: NextPage = () => {
  return (
    <Layout1>
      <RightSidebarPage />
    </Layout1>
  );
};

export default RightSidebar;
