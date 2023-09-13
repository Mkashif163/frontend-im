import React from "react";

import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout1 from "../../views/layouts/layout1";
import RelatedProducts from "../../views/Products-Detail/related-products";
import LeftSidebarPage from "../../views/Products-Detail/leftSidebarPage";

const LeftSidebar: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <Layout1>

      <section className="section-big-pt-space bg-light">
        <LeftSidebarPage pathId={id} />
      </section>
      <RelatedProducts />
    </Layout1>
  );
};

export default LeftSidebar;
