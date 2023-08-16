import React from "react";
import { NextPage } from "next";
import { Row, Col, Media } from "reactstrap";
import Link from "next/link";

const BigBanner: NextPage = () => (
  <section className="collection-banner b-g-white">
    <div className="custom-container">
      <Row className="collection2 collection-layout3">
        <Col lg="4" md="6">
          <Row className="banner-2-padding collection4">
            <Col xs="6">
              <div className="collection-banner-main banner-2">
                <div className="collection-img">
                  <Media src="/images/layout-3/collection-banner/1.jpg" className="img-fluid bg-img  " alt="banner" />
                </div>
                <div className="collection-banner-contain">
                  <div>
                    <h3>washing</h3>
                    <h4>machine</h4>
                    <div className="shop">
                      <Link
                        href={{
                          pathname: "/collections/leftsidebar/",
                          query: {
                            category: "ELECTRONICS",
                          },
                        }}>
                        <a>
                          Shop Now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="collection-banner-main banner-2">
                <div className="collection-img">
                  <Media src="/images/layout-3/collection-banner/2.jpg" className="img-fluid bg-img  " alt="banner" />
                </div>
                <div className="collection-banner-contain">
                  <div>
                    <h3>canon</h3>
                    <h4>camera</h4>
                    <div className="shop">
                      <Link
                        href={{
                          pathname: "/collections/leftsidebar/",
                          query: {
                            category: "ELECTRONICS",
                          },
                        }}>
                        <a>
                          Shop Now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="banner-3-padding collection4">
            <Col xs="6">
              <div className="collection-banner-main banner-2">
                <div className="collection-img">
                  <Media src="/images/layout-3/collection-banner/3.jpg" className="img-fluid bg-img  " alt="banner" />
                </div>
                <div className="collection-banner-contain ">
                  <div>
                    <h3>new</h3>
                    <h4>books</h4>
                    <div className="shop">
                      <Link
                        href={{
                          pathname: "/collections/leftsidebar/",
                          query: {
                            category: "KIDS",
                          },
                        }}>
                        <a>
                          Shop Now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="collection-banner-main banner-2">
                <div className="collection-img">
                  <Media src="/images/layout-3/collection-banner/4.jpg" className="img-fluid bg-img  " alt="banner" />
                </div>
                <div className="collection-banner-contain ">
                  <div>
                    <h3>boys</h3>
                    <h4>shoes</h4>
                    <div className="shop">
                      <Link
                        href={{
                          pathname: "/collections/leftsidebar/",
                          query: {
                            category: "SHOES",
                          },
                        }}>
                        <a>
                          Shop Now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg="4" md="6">
          <Row className="row ">
            <Col xs="12">
              <div className="collection-banner-main banner-3 p-center ">
                <div className="collection-img">
                  <Media src="/images/layout-3/collection-banner/5.jpg" className="img-fluid bg-img  " alt="banner" />
                </div>
                <div className="collection-banner-contain  text-center">
                  <div>
                    <h3>apple laptop</h3>
                    <h4>only $999 hurry up!</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg="4" sm="12">
          <Row className="row banner-2-padding  collection5 ">
            <Col lg="12" md="6">
              <div className="collection-banner-main banner-4 p-left">
                <div className="collection-img">
                  <Media src="/images/layout-3/collection-banner/6.jpg" className="img-fluid bg-img  " alt="banner" />
                </div>
                <div className="collection-banner-contain ">
                  <div>
                    <h3>lG</h3>
                    <h4>smartwatch</h4>
                    <div className="shop">
                      <Link
                        href={{
                          pathname: "/collections/leftsidebar/",
                          query: {
                            category: "WATCH",
                          },
                        }}>
                        <a>
                          Shop Now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="12" md="6">
              <div className="collection-banner-main banner-4 p-left">
                <div className="collection-img">
                  <Media src="/images/layout-3/collection-banner/7.jpg" className="img-fluid bg-img" alt="banner" />
                </div>
                <div className="collection-banner-contain ">
                  <div>
                    <h3>jewellery</h3>
                    <h4>diamond ring</h4>
                    <div className="shop">
                      <Link
                        href={{
                          pathname: "/collections/leftsidebar/",
                          query: {
                            category: "JEWELLWEY",
                          },
                        }}>
                        <a>
                          Shop Now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </section>
);

export default BigBanner;
