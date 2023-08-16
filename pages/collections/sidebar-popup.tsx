import { NextPage } from "next";
import { Row } from "reactstrap";

import Layout1 from "../../views/layouts/layout1";
import CollectionPopup from "../../views/Collections/Collections-popup";
import Breadcrumb from "views/Containers/Breadcrumb";

const SidebarPopup: NextPage = () => (
  <Layout1>
    <Breadcrumb parent="Category" title="Sidebar Popup" />
    <section className="section-big-pt-space section-big-pb-space ratio_asos bg-light">
      <div className="collection-wrapper">
        <div className="custom-container">
          <Row>
            {/* Collection */}
            <CollectionPopup cols="col-xl-3 col-md-4 col-6 col-grid-box" layoutList="" />
          </Row>
        </div>
      </div>
    </section>
  </Layout1>
);

export default SidebarPopup;
