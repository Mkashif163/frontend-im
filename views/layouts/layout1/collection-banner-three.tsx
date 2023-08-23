import React from "react";
import { NextPage } from "next";
import { Col, Row, Media } from "reactstrap";
import Link from "next/link";

interface CollectionBannerProps {
  img: string;
  title: string;
  subTitle: string;
  btn: string;
  category: string;
}

interface Banners {
  banner: CollectionBannerProps;
}

const banners = [
  {
    img: "/images/layout-2/collection-banner/4.jpg",
    title: "Leather",
    subTitle: "new bag",
    btn: "shop now",
    category: "BAGS",
  },
  {
    img: "/images/layout-2/collection-banner/5.jpg",
    title: "Nike",
    subTitle: "breeze",
    btn: "shop now",
    category: "SHOES",
  },
  {
    img: "/images/layout-2/collection-banner/6.jpg",
    title: "Printing 3D",
    subTitle: "USB Moon",
    btn: "shop now",
    category: "ELECTRONICS",
  },
];

const CollectionBannerList: React.FC<Banners> = ({ banner }) => {
  return (
    <Col md="4">
      <div className="collection-banner-main banner-1 p-left">
        <div className="collection-img">
          <Media src={banner.img} className="img-fluid bg-img " alt="banner" />
        </div>
        {/* <div className="collection-banner-contain ">
          <div>
            <h3>{banner.title}</h3>
            <h4>{banner.subTitle}</h4>
            <div className="shop">
              <Link
                href={{
                  pathname: "/collections/leftsidebar/",
                  query: {
                    category: banner.category,
                  },
                }}>
                <a>{banner.btn}</a>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </Col>
  );
};

const CollectionBannerThree: NextPage = () => {
  return (
    <section className="collection-banner section-py-space">
      <div className="container-fluid">
        <Row className="collection2">
          {banners.map((banner, i) => (
            <CollectionBannerList banner={banner} key={i} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default CollectionBannerThree;
