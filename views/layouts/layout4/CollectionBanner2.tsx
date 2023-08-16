import React from "react";
import { NextPage } from "next";
import { Row, Col, Media } from "reactstrap";
import Link from "next/link";

const collectionBannerData = [
  {
    type: "wooden",
    title: "new table",
    btn: "shop now",
    category: "FURNITURE",
  },
  {
    type: "canon",
    title: "camera",
    btn: "shop now",
    category: "ELECTRONICS",
  },
  {
    type: "women",
    title: "fashion",
    btn: "shop now",
    category: "FASHION",
  },
];

const CollectionBanner: NextPage = () => {
  return (
    <>
      <section className="collection-banner section-py-space">
        <div className="custom-container">
          <Row className="collection2">
            {collectionBannerData.map((item, i) => (
              <Col md="4" key={i}>
                <div className="collection-banner-main banner-1">
                  <div className="collection-img">
                    <Media src="/images/layout-4/collection-banner/3.jpg" className="img-fluid bg-img  " alt="banner" />
                  </div>
                  <div className="collection-banner-contain">
                    <div>
                      <h3>{item.type}</h3>
                      <h4>{item.title}</h4>
                      <div className="shop">
                        <Link
                          href={{
                            pathname: "/collections/leftsidebar/",
                            query: {
                              category: item.category,
                            },
                          }}>
                          <a>
                            {item.btn}
                            <i className="fa fa-arrow-circle-right"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default CollectionBanner;
