import React from "react";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import NoSidebarPage from "../../views/blog/noSidebarPage";

const NoSidebar: NextPage = () => {
  return (
    <Layout1>
      <NoSidebarPage />
    </Layout1>
  );
};

export default NoSidebar;
