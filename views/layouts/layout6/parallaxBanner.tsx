import React from "react";
import { NextPage } from "next";
import { Row, Col, Container } from "reactstrap";
import Img from "utils/BgImgRatio";

const ParralaxBanner: NextPage = () => {
  return (
    <>
      <section className="section-big-pt-space">
        <div className="full-banner parallax text-left p-left">
          <Img src="/images/layout-6/parallax-banner/parelex.jpg" alt="" className="bg-img img-fluid" />
          <Container>
            <Row>
              <Col>
                <div className="banner-contain">
                  <h2>2022</h2>
                  <h3>food market</h3>
                  <h4>special offer</h4>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default ParralaxBanner;
