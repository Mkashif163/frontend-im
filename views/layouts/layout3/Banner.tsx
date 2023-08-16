import React from "react";
import { Row, Container, Col, Media } from "reactstrap";

interface slider {
  img1: string;
  title1: string;
  title2: string;
  btn: string;
}

interface sliderProps {
  banner: slider;
}

const banners = [
  {
    img1: "/images/layout-3/collection-banner/8.jpg",
    title1: "Men",
    title2: "buckle",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-3/collection-banner/9.jpg",
    title1: "sport",
    title2: "shoes",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-3/collection-banner/10.jpg",
    title1: "army",
    title2: "maffler",
    btn: "Shop Now",
  },
];

const BannerList: React.FC<sliderProps> = ({ banner }) => {
  return (
    <Col md="4">
      <div className="collection-banner-main banner-1">
        <div className="collection-img">
          <Media src={banner.img1} className="img-fluid bg-img  " alt="banner" />
        </div>
        <div className="collection-banner-contain">
          <div>
            <h3>{banner.title1}</h3>
            <h4>{banner.title2}</h4>
            <div className="shop">
              <a>
                {banner.btn}
                <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

const BannerSection: React.FC = () => (
  <section className="collection-banner section-pb-space">
    <Container fluid={true}>
      <Row className="collection2">
        {banners.map((banner, i) => (
          <BannerList banner={banner} key={i} />
        ))}
      </Row>
    </Container>
  </section>
);

export default BannerSection;
