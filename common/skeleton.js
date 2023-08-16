import React from "react";
import PostLoader from "./postLoader";
import { Row, Col } from "reactstrap";
export const Skeleton = (props) => {
  return (
    <Row>
      <Col>
        <div className="product-box">
          <div className="img-wrapper"></div>
          <PostLoader />
        </div>
      </Col>
      <Col>
        <div className="product-box">
          <div className="img-wrapper"></div>
          <PostLoader />
        </div>
      </Col>
      <Col>
        <div className="product-box">
          <div className="img-wrapper"></div>
          <PostLoader />
        </div>
      </Col>
      <Col>
        <div className="product-box">
          <div className="img-wrapper"></div>
          <PostLoader />
        </div>
      </Col>
      <Col>
        <div className="product-box">
          <div className="img-wrapper"></div>
          <PostLoader />
        </div>
      </Col>
      <Col>
        <div className="product-box">
          <div className="img-wrapper"></div>
          <PostLoader />
        </div>
      </Col>
    </Row>
  );
};
