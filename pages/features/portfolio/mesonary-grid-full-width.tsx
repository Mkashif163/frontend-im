import React from "react";
import Layout1 from "../../../views/layouts/layout1";

// import MasonryGridFullWidth from "../../../views/Features/MasonryGridFullWIdth";
import Breadcrumb from "views/Containers/Breadcrumb";
import MasonryGrid from "views/Features/Masonry";

const MesonaryGrid2 = () => (
  <Layout1>
    <Breadcrumb parent="Masonary" title="Full Width" />
    <MasonryGrid cols="isotopeSelector" masonryGrid={6} fluid={true} />
  </Layout1>
);

export default MesonaryGrid2;
