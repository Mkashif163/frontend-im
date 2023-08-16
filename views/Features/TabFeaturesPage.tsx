import React, { Fragment } from "react";
import { NextPage } from "next";
import Portfolio from "./Portfolio";
import TabProduct from "views/layouts/widgets/Tab-Product/TabProduct";

const TabFeaturesPage: NextPage = () => {
  return (
    <Fragment>
      <div className="bg-light">
        <div className="title6">
          <h4>without slider</h4>
        </div>
        <Portfolio cols="isotopeSelector filter col-lg-3 col-md-4 col-sm-6" />

        <div className="title6 pt-0">
          <h4>with slider</h4>
        </div>
        <TabProduct />
      </div>
    </Fragment>
  );
};

export default TabFeaturesPage;
