import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import LoginPage from "../../../views/login/loginPage";

const Login: NextPage = () => {
  return (
    <Layout1>
      <LoginPage />
    </Layout1>
  );
};

export default Login;
