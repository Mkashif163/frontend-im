import React from "react";
import { NextPage } from "next";
import { Media, Row, Col } from "reactstrap";
import Link from "next/link";

interface slider {
  img1: string;
  title1: string;
  title2: string;
  btn: string;
  category: string;
}

interface sliderProps {
  banner: slider;
}

const banners = [
  {
    img1: "/images/layout-3/collection-banner/11.jpg",
    title1: "Video Camera",
    title2: "O-VIDEO Moldova",
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-3/collection-banner/12.jpg",
    title1: "Furniture",
    title2: "Beds & Bedroom",
    category: "FURNITURE",
    btn: "Shop Now",
  },
];

const BannerList: React.FC<sliderProps> = ({ banner }) => {
  return (
    <Col md="6">
      <div className="collection-banner-main banner-7 p-left">
        <div className="collection-img">
          <Media src={banner.img1} className="img-fluid bg-img " alt="banner" />
        </div>
        <div className="collection-banner-contain ">
          <div>
            <h3>{banner.title1}</h3>
            <h4>{banner.title2}</h4>
            <div className="shop">
              <Link
                href={{
                  pathname: "/collections/leftsidebar/",
                  query: {
                    category: banner.category,
                  },
                }}>
                <a>
                  {banner.btn}
                  <i className="fa fa-arrow-circle-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

const CollectionBanner: NextPage = () => (
  <section className="collection-banner section-pb-space layout-3">
    <div className="custom-container">
      <Row className="layout-3-collection">
        {banners.map((banner, i) => (
          <BannerList banner={banner} key={i} />
        ))}
      </Row>
    </div>
  </section>
);

export default CollectionBanner;
