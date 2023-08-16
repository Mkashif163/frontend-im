import React from "react";
import { NextPage } from "next";
import { Row, Col, Media } from "reactstrap";
import Link from "next/link";

const BannerSection: NextPage = () => (
  <section className="collection-banner section-pt-space">
    <div className="custom-container">
      <Row className="collection collection-layout1">
        <Col md="4" className="offset-xl-2 p-r-md-0">
          <div className="collection-banner-main p-left">
            <div className="collection-img">
              <Media src={"/images/layout-1/collection-banner/1.jpg"} className="img-fluid bg-img" alt="banner" />
            </div>
            <div className="collection-banner-contain">
              <div>
                <h3>vivo</h3>
                <h4>smart phone</h4>
                <div className="shop">
                  <Link
                    href={{
                      pathname: "/collections/leftsidebar/",
                      query: {
                        category: "ELECTRONICS",
                      },
                    }}>
                    <a>
                      shop Now
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md="4" className="col-4">
          <div className="collection-banner-main p-left">
            <div className="collection-img">
              <Media src={"/images/layout-1/collection-banner/2.jpg"} className="img-fluid bg-img" alt="banner" />
            </div>
            <div className="collection-banner-contain">
              <div>
                <h3>hand</h3>
                <h4>lether bag</h4>
                <div className="shop">
                  <Link
                    href={{
                      pathname: "/collections/leftsidebar/",
                      query: {
                        category: "BAGS",
                      },
                    }}>
                    <a>
                      shop Now
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md="2" className="ps-md-0">
          <div className="collection-banner-main p-left banner-6">
            <div className="collection-img">
              <img src={"/images/layout-1/collection-banner/7.jpg"} className="img-fluid bg-img" alt="banner" />
            </div>
            <div className="collection-banner-contain align-items-start">
              <div>
                <h6>10% off</h6>
                <h4>Nikon Camera</h4>    
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </section>
);

export default BannerSection;
