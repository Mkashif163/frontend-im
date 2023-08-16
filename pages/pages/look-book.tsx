import React from "react";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import LookBookPage from "../../views/pages/lookBookPage";

const lookbook: NextPage = () => {
  return (
    <Layout1>
      <LookBookPage />
    </Layout1>
  );
};

export default lookbook;
