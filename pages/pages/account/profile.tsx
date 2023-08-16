import React from "react";
import { NextPage } from "next";
import Layout1 from "../../../views/layouts/layout1";
import ProfilePage from "../../../views/pages/account/profilePage";

const Profile: NextPage = () => {
  return (
    <Layout1>
      <ProfilePage />
    </Layout1>
  );
};

export default Profile;
