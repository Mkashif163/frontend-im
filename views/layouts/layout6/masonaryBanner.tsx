import React from "react";
import { NextPage } from "next";
import { Row, Col, Container, Media } from "reactstrap";
import Masonry from "react-masonry-css";
import Link from "next/link";

const MasonaryBanner: NextPage = () => {
  return (
    <>
      <section className="masonory-banner o-hidden">
        <Container fluid={true}>
          <Row className="masonary-banner-block1 gutter-15">
            <Col xl="6" lg="12">
              <Row>
                <Col sm="6">
                  <Row className="masonary-banner-block">
                    <Col md="12">
                      <Masonry className="masonary-banner-main">
                        <div className="masonory-banner-img">
                          <Media src="/images/layout-6/masonory-banner/1.jpg" className="img-fluid bg-img" alt="masonory-banner" />
                        </div>
                        <div className="masonary-banner-contant p-center">
                          <h5>union bed</h5>
                        </div>
                      </Masonry>
                    </Col>
                    <Col md="12">
                      <Masonry className="masonary-banner-main">
                        <div className="masonory-banner-img">
                          <Media src="/images/layout-6/masonory-banner/2.jpg" className="img-fluid bg-img" alt="masonory-banner" />
                        </div>
                        <div className="masonary-banner-contant p-center">
                          <h5>strawberry</h5>
                        </div>
                      </Masonry>
                    </Col>
                  </Row>
                </Col>
                <Col sm="6" className="ps-3">
                  <Masonry className="masonary-banner-main">
                    <div className="masonory-banner-img masonory-img1">
                      <Media src="/images/layout-6/masonory-banner/3.jpg" className="img-fluid bg-img" alt="masonory-banner" />
                    </div>
                    <div className="masonary-banner-contant p-center">
                      <div>
                        <h5>chili</h5>
                        <Link
                          href={{
                            pathname: "/collections/leftsidebar/",
                            query: {
                              category: "VEGETABLES",
                            },
                          }}>
                          <a className="btn-rounded">shop now</a>
                        </Link>
                      </div>
                    </div>
                  </Masonry>
                </Col>
              </Row>
            </Col>
            <Col xl="6" lg="12">
              <div className="row masonary-banner-block masonary-inner1">
                <Col md="12">
                  <Row className="masonary-banner-block2">
                    <Col sm="6" className="pe-0">
                      <Masonry className="masonary-banner-main">
                        <div className="masonory-banner-img">
                          <Media src="/images/layout-6/masonory-banner/4.jpg" className="img-fluid bg-img" alt="masonory-banner" />
                        </div>
                        <div className="masonary-banner-contant p-center">
                          <h5>tomato</h5>
                        </div>
                      </Masonry>
                    </Col>
                    <Col sm="6">
                      <Masonry className="masonary-banner-main">
                        <div className="masonory-banner-img">
                          <Media src="/images/layout-6/masonory-banner/5.jpg" className="img-fluid bg-img" alt="masonory-banner" />
                        </div>
                        <div className="masonary-banner-contant p-center">
                          <h5>lemon</h5>
                        </div>
                      </Masonry>
                    </Col>
                  </Row>
                </Col>
                <Col md="12" className="pe-0">
                  <Masonry className="masonary-banner-main">
                    <div className="masonory-banner-img">
                      <Media src="/images/layout-6/masonory-banner/6.jpg" alt="masonary-banner" className="img-fluid bg-img" />
                    </div>
                    <div className="masonary-banner-contant p-right">
                      <div className="masonary-banner-subcontant">
                        <div>
                          <h2>organic</h2>
                          <h5>fruits</h5>
                          <Link
                            href={{
                              pathname: "/collections/leftsidebar/",
                              query: {
                                category: "VEGETABLES",
                              },
                            }}>
                            <a className="btn-rounded">shop now</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Masonry>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MasonaryBanner;
