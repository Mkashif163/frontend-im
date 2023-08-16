import React, { useState } from "react";
import { NextPage } from "next";

import Slider from "react-slick";
import { Row, Col, Media } from "reactstrap";
import Link from "next/link";

var settings = {
  autoplay: false,
  autoplaySpeed: 2500,
};

interface slider {
  img1: string;
  img2: string;
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
    img1: "/images/layout-2/slider/1.1.png",
    img2: "/images/layout-2/slider/1.2.png",
    title1: "mi",
    title2: "Mobile",
    subTitle1: "fast and light",
    subTitle2: "Pixel Perfect Deal Camera",
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-2/slider/2.1.png",
    img2: "/images/layout-2/slider/2.2.png",
    title1: "big",
    title2: "Sale",
    subTitle1: "now start at $99",
    subTitle2: "50% off",
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-2/slider/3.2.png",
    img2: "/images/layout-2/slider/3.1.png",
    title1: "camera",
    title2: "Sale",
    subTitle1: "now start at $79",
    subTitle2: "70% off today",
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
    <div className="slider-banner p-center slide-banner-1" onMouseMove={(e) => onMouseHover(e)}>
      <div className="slider-img">
        <ul className="layout1-slide-1">
          <li id="img-1" style={elemOne}>
            <Media src={banner.img1} className="img-fluid" alt="slider" />
          </li>
          <li id="img-2" className="slide-center" style={elemOne}>
            <Media src={banner.img2} className="img-fluid" alt="slider" />
          </li>
        </ul>
      </div>
      <div className="slider-banner-contain">
        <div>
          <h1>
            {banner.title1}
            <span>{banner.title2}</span>
          </h1>
          <h4>{banner.subTitle1}</h4>
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
      <section className="theme-slider b-g-white " id="theme-slider">
        <div className="custom-container">
          <Row>
            <Col>
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
