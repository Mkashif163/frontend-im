import { Col, Row } from "reactstrap";
import { NextPage } from "next";
import Sidebar from "./Sidebar";
import NewProduct from "./NewProduct";
import Collection from "./Collection";
import { FilterContext } from "helpers/filter/filter.context";
import { useContext } from "react";

const LeftSidebarCollection: NextPage = () => {
  const { leftSidebarOpen } = useContext(FilterContext);

  return (
    <Row>
      <Col
        sm="3"
        style={{
          left: leftSidebarOpen ? "-15px" : "",
        }}
        id="filter"
        className="collection-filter category-page-side">
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
      {/* Collection */}
      <Collection cols="col-xl-3 col-md-4 col-6 col-grid-box" layoutList="" />
    </Row>
  );
};

export default LeftSidebarCollection;
