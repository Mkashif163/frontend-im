import React from "react";
import { NextPage } from "next";
import { Row, Col, Media } from "reactstrap";
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
    img: "/images/layout-2/collection-banner/1.jpg",
    title: "women",
    subTitle: "fashion",
    category: "FASHION",
    btn: "shop now",
  },
  {
    img: "/images/layout-2/collection-banner/3.jpg",
    title: "refrigerator",
    subTitle: "lg mini",
    category: "ELECTRONICS",
    btn: "shop now",
  },
  {
    img: "/images/layout-2/collection-banner/2.jpg",
    title: "camera",
    subTitle: "lenses",
    category: "ELECTRONICS",
    btn: "shop now",
  },
  
];

const CollectionBannerList: React.FC<Banners> = ({ banner }) => {
  return (
    <Col md="4">
      <div className="collection-banner-main banner-1  p-right">
        <div className="collection-img">
          <Media src={banner.img} alt="dsfds" />
        </div>
        {/* <div className="collection-banner-contain">
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

const CollectionBanner: NextPage = () => {
  return (
    <>
      <section className="collection-banner section-pt-space b-g-white ">
        <div className="custom-container">
          <Row className="collection2">
            {banners.map((banner, i) => (
              <CollectionBannerList banner={banner} key={i} />
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default CollectionBanner;
