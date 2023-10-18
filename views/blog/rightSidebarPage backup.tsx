import React from "react";
import { NextPage } from "next";
import { Row, Col } from "reactstrap";
import BlogPage from "./common/blogPage";
import MediaPage from "./common/mediaPage";
import Link from "next/link";

const RightSidebarPage: NextPage = () => {
  return (
    <div className="bg-light">
      {/* <!-- section start --> */}
      <section className="section-big-py-space blog-page ratio2_3">
        <div className="custom-container">
          <Row>
            {/* <!--Blog List start--> */}
            <Col xl="9" lg="8" md="7" className="order-sec">
              <MediaPage />
            </Col>
            {/* <!--Blog List start--> */}

            {/* <!--Blog sidebar start--> */}
            <BlogPage />
            {/* <!--Blog sidebar start--> */}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default RightSidebarPage;
