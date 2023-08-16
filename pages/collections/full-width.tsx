import React from "react";

import { Row, Col } from "reactstrap";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import CollectionFullWidth from "../../views/Collections/CollectionFullWidth";
import Breadcrumb from "views/Containers/Breadcrumb";

const FullWidth: NextPage = () => (
  <Layout1>
    <Breadcrumb parent="Category" title="Full Width" />
    <section className="section-big-pt-space bg-light">
      <div className="collection-wrapper">
        <div className="custom-container">
          <Row>
            <Col className="collection-content">
              <CollectionFullWidth />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  </Layout1>
);

export default FullWidth;
