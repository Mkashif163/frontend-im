import React from "react";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import ReviewPage from "../../views/pages/revidewPage";

const Review: NextPage = () => {
  return (
    <Layout1>
      <ReviewPage />
    </Layout1>
  );
};

export default Review;
