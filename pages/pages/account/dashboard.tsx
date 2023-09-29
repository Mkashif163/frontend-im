import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import DashboardPage from "../../../views/pages/account/dashboardPage";

const Dashboard: NextPage = () => {
  const [userId, setUserId] = useState(""); // State to store the user ID

  useEffect(() => {
    // Get the user ID from localStorage
    const storedUserId = localStorage.getItem("id");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  return (
    <Layout1>
      {/* Pass the userId as a prop to DashboardPage */}
      <DashboardPage userId={userId} />
    </Layout1>
  );
};

export default Dashboard;
