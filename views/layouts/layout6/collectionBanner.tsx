import React from "react";
import { NextPage } from "next";
import { Row, Col, Media } from "reactstrap";
import Link from "next/link";

const CollectionBanner: NextPage = () => {
  return (
    <>
      <section className="collection-banner section-pt-space">
        <div className="custom-container">
          <Row className="layout-4-collection">
            <Col md="4">
              <div className="collection-banner-main p-left  height-equal">
                <div className="collection-img">
                  <Media src="/images/layout-6/collection-banner/1.jpg" className="img-fluid bg-img  " alt="banner" />
                </div>
                <div className="collection-banner-contain">
                  <div>
                    <h3>fresh</h3>
                    <h4>orange juice</h4>
                    <div className="shop">
                      <Link
                        href={{
                          pathname: "/collections/leftsidebar/",
                          query: {
                            category: "VEGETABLES",
                          },
                        }}>
                        <a>
                          shop now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="collection-banner-main p-left  height-equal">
                <div className="collection-img ">
                  <Media src="/images/layout-6/collection-banner/2.jpg" className="img-fluid bg-img" alt="banner" />
                </div>
                <div className="collection-banner-contain">
                  <div>
                    <h3>fresh</h3>
                    <h4>pineapple</h4>
                    <div className="shop">
                      <Link
                        href={{
                          pathname: "/collections/leftsidebar/",
                          query: {
                            category: "VEGETABLES",
                          },
                        }}>
                        <a>
                          shop now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="2" className="pl-md-0">
              <div className="collection-banner-main p-top banner-6">
                <div className="collection-img">
                  <Media src="/images/layout-6/collection-banner/3.jpg" className="img-fluid bg-img  " alt="banner" />
                </div>
                <div className="collection-banner-contain">
                  <div>
                    <h6>10% off</h6>
                    <h4>fresh juice</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default CollectionBanner;