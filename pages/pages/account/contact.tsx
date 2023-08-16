import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import ContactPage from "../../../views/pages/account/contactPage";

const Contact: NextPage = () => {
  return (
    <Layout1>
      <ContactPage />
    </Layout1>
  );
};

export default Contact;
