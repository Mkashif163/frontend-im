import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import ForgetPasswordPage from "../../../views/pages/account/forgetPasswordPage";

const ForgetPassword: NextPage = () => {
  return (
    <Layout1>
      <ForgetPasswordPage />
    </Layout1>
  );
};

export default ForgetPassword;
