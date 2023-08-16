import React from "react";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import Pages404 from "../../views/pages/Pages404";

const Page404: NextPage = () => {
  return (
    <Layout1>
      <Pages404 />
    </Layout1>
  );
};

export default Page404;
