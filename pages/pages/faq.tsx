import React from "react";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import FaqPage from "../../views/pages/faqPage";

const Faq: NextPage = () => {
  return (
    <Layout1>
      <FaqPage />
    </Layout1>
  );
};

export default Faq;
