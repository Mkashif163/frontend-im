import React from "react";
import { NextPage } from "next";
import { Row, Col } from "reactstrap";
import ProductBox1 from "./slider-product/slider-product1";

interface productType {
  hoverEffect: string;
}

const TitleSection: NextPage<productType> = ({ hoverEffect }) => {
  return (
    <>
      <div className="title1 section-my-space">
        <h4>Special Products</h4>
      </div>
      <div className="product section-pb-space mb--5">
        <div className="custom-container">
          <Row>
            <Col className="pe-0">
              <div className="product-slide-6 ratio_asos no-arrow">
                <ProductBox1 hoverEffect={hoverEffect} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default TitleSection;
