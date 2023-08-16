import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import DashboardPage from "../../../views/pages/account/dashboardPage";

const Dashboard: NextPage = () => {
  return (
    <Layout1>
      <DashboardPage />
    </Layout1>
  );
};

export default Dashboard;
