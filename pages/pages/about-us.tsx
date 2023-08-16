import React from "react";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import About from "../../views/pages/aboutUs";

const AboutUs: NextPage = () => {
  return (
    <Layout1>
      <About />
    </Layout1>
  );
};

export default AboutUs;
