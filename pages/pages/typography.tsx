import React from "react";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import TypographyPage from "../../views/pages/typographyPage";

const AboutUs: NextPage = () => {
  return (
    <Layout1>
      <TypographyPage />
    </Layout1>
  );
};

export default AboutUs;
