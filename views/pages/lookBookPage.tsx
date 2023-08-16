import React from "react";
import { NextPage } from "next";
import { Row, Container, Col, Media } from "reactstrap";
import Breadcrumb from "../../views/Containers/Breadcrumb";

const LookBookPage: NextPage = () => {
  return (
    <>
      {/* <!-- breadcrumb start --> */}
      <Breadcrumb title="Look-Book" parent="home" />
      {/* <!-- breadcrumb End --> */}

      {/* <!-- look-book  start --> */}
      <section className="lookbook section-big-py-space ratio_square bg-light">
        <Container className="container">
          <Row className="lookbook-part">
            <Col md="6">
              <div className="lookbook-block">
                <div>
                  <Media src="/images/look-book/1.jpg" className="img-fluid  bg-img" alt="" />
                </div>
                <div className="lookbook-dot">
                  <span>1</span>
                  <a href="#">
                    <div className="dot-showbox">
                      <Media src="/images/product-sidebar/002.jpg" className="img-fluid " alt="" />
                      <div className="dot-info">
                        <h5 className="title">tee</h5>
                        <h5>200$</h5>
                        <h6>details</h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="lookbook-dot dot2">
                  <span>2</span>
                  <a href="#">
                    <div className="dot-showbox">
                      <Media src="/images/product-sidebar/001.jpg" className="img-fluid  " alt="" />
                      <div className="dot-info">
                        <h5 className="title">tee</h5>
                        <h5>200$</h5>
                        <h6>details</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="lookbook-block">
                <div>
                  <Media src="/images/look-book/2.jpg" className="img-fluid  bg-img" alt="" />
                </div>
                <div className="lookbook-dot dot3">
                  <span>1</span>
                  <a href="#">
                    <div className="dot-showbox">
                      <Media src="/images/product-sidebar/003.jpg" className="img-fluid " alt="" />
                      <div className="dot-info">
                        <h5 className="title">tee</h5>
                        <h5>200$</h5>
                        <h6>details</h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="lookbook-dot dot4">
                  <span>2</span>
                  <a href="#">
                    <div className="dot-showbox">
                      <Media src="/images/product-sidebar/004.jpg" className="img-fluid " alt="" />
                      <div className="dot-info">
                        <h5 className="title">tee</h5>
                        <h5>200$</h5>
                        <h6>details</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <!-- look-book ends --> */}
    </>
  );
};

export default LookBookPage;
