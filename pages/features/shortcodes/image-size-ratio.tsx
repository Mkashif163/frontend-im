import React from "react";
import Layout1 from "../../../views/layouts/layout1";
import ImageRatioPage from "../../../views/Features/ImageRatioPage";
import Breadcrumb from "views/Containers/Breadcrumb";

const ImageSizeRatio = () => (
  <Layout1>
    <Breadcrumb parent="Element" title="Ratio Image" />
    <ImageRatioPage />
  </Layout1>
);

export default ImageSizeRatio;
