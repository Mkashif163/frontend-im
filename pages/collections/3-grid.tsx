import { Row, Col } from "reactstrap";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import Sidebar from "../../views/Collections/Sidebar";
import NewProduct from "../../views/Collections/NewProduct";
import OfferSlider from "../../views/Collections/OfferSlider";
import Collection from "../../views/Collections/Collection";
import Breadcrumb from "views/Containers/Breadcrumb";

const ThreeGrid: NextPage = () => {
  return (
    <Layout1>
      <Breadcrumb parent="Category" title="Three Grid" />
      <section className="section-big-pt-space ratio_asos bg-light">
        <div className="collection-wrapper">
          <div className="custom-container">
            <Row>
              {/* Sidebar */}
              <Col sm="3" className="collection-filter category-page-side">
                <Sidebar />
                <NewProduct />
                <div className="collection-sidebar-banner">
                  <a href="#">
                    <img src="/images/category/side-banner.png" className="img-fluid " alt="" />
                  </a>
                </div>
                <OfferSlider />
              </Col>

              {/* Collection */}
              <Collection cols="col-md-4 col-6 col-grid-box" layoutList="" />
            </Row>
          </div>
        </div>
      </section>
    </Layout1>
  );
};

export default ThreeGrid;
