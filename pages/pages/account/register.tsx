import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import RegisterPage from "../../../views/pages/account/registerPage";

const Register: NextPage = () => {
  return (
    <Layout1>
      <RegisterPage />
    </Layout1>
  );
};

export default Register;
