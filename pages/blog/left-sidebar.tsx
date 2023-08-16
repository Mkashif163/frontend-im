import React from "react";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import LeftSidebarPage from "../../views/blog/leftSidebarPage";

const LeftSidebar: NextPage = () => {
  return (
    <Layout1>
      <LeftSidebarPage />
    </Layout1>
  );
};

export default LeftSidebar;
