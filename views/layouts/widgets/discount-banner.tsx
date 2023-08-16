import React from "react";
import { NextPage } from "next";
import { Container, Row, Col } from "reactstrap";

const DiscountBanner: NextPage = () => {
  return (
    <section className="discount-banner">
      <Container>
        <Row>
          <Col lg="12">
            <div className="discount-banner-contain">
              <h2>Discount on every single item on our site.</h2>
              <h1>
                <span>OMG! Just Look at the</span> <span>great Deals!</span>
              </h1>
              <div className="rounded-contain rounded-inverse">
                <div className="rounded-subcontain">How does it feel, when you see great discount deals for each product?</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DiscountBanner;
