import React, { useState } from "react";
import { NextPage } from "next";
import Slider from "react-slick";
import { Row, Col } from "reactstrap";
import Link from "next/link";

var settings = {
  autoplay: false,
  autoplaySpeed: 2500,
};

interface slider {
  img1: string;
  title1: string;
  title2: string;
  subTitle1: string;
  btn: string;
  category: string;
}

interface sliderProps {
  banner: slider;
}

const banners = [
  {
    img1: "/images/layout-1/slider/1.1.png",
    title1: "the best",
    title2: "loffer shoes",
    subTitle1: "minimum 30% off",
    btn: "Shop Now",
    category: "SHOES",
  },
  {
    img1: "/images/layout-1/slider/1.2.png",
    title1: "cinema festival",
    title2: "reflex camera",
    subTitle1: "minimum 40% off",
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-1/slider/1.3.png",
    title1: "march special",
    title2: "leather bag",
    subTitle1: "minimum 60% off",
    category: "BAGS",
    btn: "Shop Now",
  },
];

const BannerList: React.FC<sliderProps> = ({ banner }) => {
  const [elemOne, setElemOne] = useState({});

  const onMouseHover = (e) => {
    const pageX = e.clientX - window.innerWidth / 1;
    const pageY = e.clientY - window.innerHeight / 1;
    var elemOne = {
      transform: "translateX(" + (7 + pageX / 150) + "%) translateY(" + (1 + pageY / 150) + "%)",
    };
    setElemOne(elemOne);
  };
  return (
    <div className="slider-banner" onMouseMove={(e) => onMouseHover(e)}>
      <div className="slider-img">
        <ul className="layout2-slide-1">
          <li id="img-1" style={elemOne}>
            <img src={banner.img1} className="img-fluid" alt="slider" />
          </li>
        </ul>
      </div>
      <div className="slider-banner-contain">
        <div>
          <h4>{banner.title1}</h4>
          <h1>{banner.title2}</h1>
          <h2>{banner.subTitle1}</h2>
          <Link
            href={{
              pathname: "/collections/leftsidebar/",
              query: {
                category: banner.category,
              },
            }}>
            <a className="btn btn-rounded">{banner.btn}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const SilderSection: NextPage = () => {
  return (
    <>
      <section className="theme-slider section-pt-space">
        <div className="custom-container">
          <Row>
            <Col xl="8" lg="9" className="offset-xl-2 px-abjust">
              <Slider className="slide-1 no-arrow" {...settings}>
                {banners.map((banner, i) => (
                  <BannerList banner={banner} key={i} />
                ))}
              </Slider>
            </Col>
            <Col xl="2" sm="3" className="ps-0 offer-banner">
              <div className="offer-banner-img">
                <img src="/images/layout-1/offer-banner.png" alt="offer-banner" className="img-fluid" />
              </div>
              <div className="banner-contain">
                <div>
                  <h5>Special Offer for you</h5>
                  <div className="discount-offer">
                    <h1>50%</h1>
                    <sup>off</sup>
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

export default SilderSection;
