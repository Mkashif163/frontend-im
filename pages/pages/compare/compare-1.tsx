import React from "react";
import { NextPage } from "next";

import Layout1 from "../../../views/layouts/layout1";
import ComparePage from "../../../views/pages/compare/comparePage";

const Compare: NextPage = () => {
  return (
    <Layout1>
      <ComparePage />
    </Layout1>
  );
};

export default Compare;
