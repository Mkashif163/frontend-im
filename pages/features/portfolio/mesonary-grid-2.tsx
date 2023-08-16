import React from "react";
import Layout1 from "../../../views/layouts/layout1";

import MasonryGrid from "../../../views/Features/Masonry";
import Breadcrumb from "views/Containers/Breadcrumb";

const MesonaryGrid2 = () => (
  <Layout1>
    <Breadcrumb parent="Masonary" title="Two Grid" />
    <MasonryGrid cols="isotopeSelector" masonryGrid={2} />
  </Layout1>
);

export default MesonaryGrid2;
