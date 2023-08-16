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
  subTitle2: string;
  btn: string;
  category: string;
}

interface sliderProps {
  banner: slider;
}

const banners = [
  {
    img1: "/images/layout-4/slider/1.1.png",
    title1: "Last Chance to Grab",
    title2: "headphones",
    subTitle1: "new earphones",
    subTitle2: "wireless headphone only $99",
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-4/slider/1.2.png",
    title1: "exclusive launch offer",
    title2: "new range off",
    subTitle1: "philips headephone",
    subTitle2: "with rich bass",
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-4/slider/1.3.png",
    title1: "providing customized",
    title2: "samsung CCTV",
    subTitle1: "full hd solution",
    subTitle2: "strength your sequrity",
    category: "ELECTRONICS",
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
    <div className="slider-banner slide-banner-3" onMouseMove={(e) => onMouseHover(e)}>
      <div className="slider-img">
        <ul className="layout4-slide-1">
          <li style={elemOne} id="img-1">
            <img src={banner.img1} className="img-fluid" alt="slider" />
          </li>
        </ul>
      </div>
      <div className="slider-banner-contain">
        <div>
          <h5>{banner.title1}</h5>
          <h3>{banner.title2}</h3>
          <h1>{banner.subTitle1}</h1>
          <h2>{banner.subTitle2}</h2>
          <Link
            href={{
              pathname: "/collections/leftsidebar/",
              query: {
                category: banner.category,
              },
            }}>
            <a className="btn btn-normal">{banner.btn}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const SliderBanner: NextPage = () => {
  return (
    <>
      <section className="theme-slider section-py-space">
        <div className="custom-container">
          <Row className="slider-layout-4">
            <Col xs="10" className="slider-slide">
              <div className="slide-1 no-arrow">
                <Slider {...settings}>
                  {banners.map((banner, i) => (
                    <BannerList banner={banner} key={i} />
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default SliderBanner;