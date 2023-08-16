import React from "react";
import { NextPage } from "next";
import { Row, Col } from "reactstrap";
import BlogPage from "./common/blogPage";
import MediaPage from "./common/mediaPage";
import Breadcrumb from "../Containers/Breadcrumb";

const LeftSidebar: NextPage = () => {
  return (
    <div className="bg-light">
      <Breadcrumb title="blog" parent="home" />
      {/* <!-- section start --> */}
      <section className="section-big-py-space blog-page ratio2_3">
        <div className="custom-container">
          <Row>
            {/* <!--Blog sidebar start--> */}
            <BlogPage />
            {/* <!--Blog sidebar start--> */}

            {/* <!--Blog List start--> */}
            <Col xl="9" lg="8" md="7" className="order-sec">
              <MediaPage />
            </Col>
            {/* <!--Blog List start--> */}
          </Row>
        </div>
      </section>
      {/* <!-- Section ends --> */}
    </div>
  );
};

export default LeftSidebar;
