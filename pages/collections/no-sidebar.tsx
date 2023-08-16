import { NextPage } from "next";
import { Row } from "reactstrap";

import Layout1 from "../../views/layouts/layout1";
import Collection from "../../views/Collections/Collection";
import Breadcrumb from "views/Containers/Breadcrumb";

const NoSidebar: NextPage = () => (
  <Layout1>
    <Breadcrumb parent="Category" title="No Sidebar" />
    <section className="section-big-pt-space ratio_asos bg-light">
      <div className="collection-wrapper">
        <div className="custom-container section-big-pb-space">
          <Row>
            {/* Collection */}
            <Collection cols="col-xl-2 col-lg-3 col-md-4 col-6 col-grid-box" layoutList="" />
          </Row>
        </div>
      </div>
    </section>
  </Layout1>
);

export default NoSidebar;
