import React from "react";
import Layout1 from "../../../views/layouts/layout1";

import MasonryGrid from "../../../views/Features/Masonry";
import Breadcrumb from "views/Containers/Breadcrumb";

const MesonaryGrid4 = () => (
  <Layout1>
    <Breadcrumb parent="Masonary" title="Four Grid" />
    <MasonryGrid cols="isotopeSelector" masonryGrid={4} />
  </Layout1>
);

export default MesonaryGrid4;
