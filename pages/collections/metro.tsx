import React from "react";

import { Row, Col } from "reactstrap";
import { NextPage } from "next";
import Layout1 from "../../views/layouts/layout1";
import CollectionMetro from "../../views/Collections/collection-metro";
import Breadcrumb from "views/Containers/Breadcrumb";

const Metro: NextPage = () => (
  <Layout1>
    <Breadcrumb parent="Category" title="Metro" />
    <section className="section-big-pt-space bg-light">
      <div className="collection-wrapper">
        <div className="custom-container">
          <Row>
            <Col className="collection-content">
              <CollectionMetro />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  </Layout1>
);

export default Metro;
