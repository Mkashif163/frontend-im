import { NextPage } from "next";
import { Row, Col } from "reactstrap";

import Layout1 from "../../views/layouts/layout1";
import Sidebar from "../../views/Collections/Sidebar";
import NewProduct from "../../views/Collections/NewProduct";
import Collection from "../../views/Collections/Collection";
import Breadcrumb from "views/Containers/Breadcrumb";

const RightSidebar: NextPage = () => (
  <Layout1>
    <Breadcrumb parent="Category" title="RightSidebar" />
    <section className="section-big-pt-space section-big-pb-space ratio_asos bg-light">
      <div className="collection-wrapper">
        <div className="custom-container">
          <Row>
            {/* Collection */}
            <Collection cols="col-xl-3 col-md-4 col-6 col-grid-box" layoutList="" />
            {/* Sidebar */}
            <Col sm="3" className="collection-filter category-page-side">
              <div className="sticky-sidebar">
                <Sidebar />
                <NewProduct />
                <div className="collection-sidebar-banner">
                  <a href="#">
                    <img src="/images/category/side-banner.png" className="img-fluid " alt="" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  </Layout1>
);

export default RightSidebar;
