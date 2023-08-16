import React from "react";
import Layout1 from "../../../views/layouts/layout1";

import MasonryGrid from "../../../views/Features/Masonry";
import Breadcrumb from "views/Containers/Breadcrumb";

const MesonaryGrid3 = () => (
  <Layout1>
    <Breadcrumb parent="Masonary" title="Three Grid" />
    <MasonryGrid cols="isotopeSelector filter" masonryGrid={3} />
  </Layout1>
);

export default MesonaryGrid3;
