import React from "react";
import { NextPage } from "next";
import { Row, Media, Col } from "reactstrap";
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
    img1: "/images/layout-1/collection-banner/3.jpg",
    title1: "classNameic",
    title2: "Wooden Chair",
    category: "FURNITURE",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-1/collection-banner/4.jpg",
    title1: "food",
    title2: "Grocery Items",
    category: "VEGETABLES",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-1/collection-banner/5.jpg",
    title1: "digital",
    title2: "cctv camera",
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
];

const BannerList: React.FC<sliderProps> = ({ banner }) => {
  return (
    <Col md="4">
      <div className="collection-banner-main p-left">
        <div className="collection-img">
          <Media src={banner.img1} className="img-fluid bg-img " alt="banner" />
        </div>
        <div className="collection-banner-contain">
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
  <section className="collection-banner section-pt-space">
    <div className="container-fluid">
      <Row className="collection2">
        {banners.map((banner, i) => (
          <BannerList banner={banner} key={i} />
        ))}
      </Row>
    </div>
  </section>
);

export default CollectionBanner;
