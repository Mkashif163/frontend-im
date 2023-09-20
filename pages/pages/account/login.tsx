import React from "react";
import { NextPage } from "next";
import LoginPage from "../../../views/login/loginPage";
import Layout1 from "views/layouts/layout1";

const Login: NextPage = () => {
  return (
    <Layout1>
      <LoginPage />
    </Layout1>
  );
};

export default Login;
