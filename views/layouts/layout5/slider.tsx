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
  subTitle: string;
  btn: string;
  category: string;
}

interface sliderProps {
  banner: slider;
}

const banners = [
  {
    img1: "/images/layout-5/slider/1.1.png",
    title1: "bigest sale",
    title2: "home appliances",
    subTitle: "50% off on all selected product",
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-5/slider/1.2.png",
    title1: "big brand big sale",
    title2: "refrigerator",
    subTitle: "30% off on all selected produc",
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-5/slider/1.1.png",
    title1: "today's hot offer",
    title2: "Electronics appliances",
    subTitle: "40% off on all selected product",
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
    <div className="slider-banner slide-banner-4" onMouseMove={(e) => onMouseHover(e)}>
      <div className="slider-img">
        <ul className="layout5-slide-1">
          <li style={elemOne} id="img-1">
            <img src={banner.img1} className="img-fluid" alt="slider" />
          </li>
        </ul>
      </div>
      <div className="slider-banner-contain">
        <div>
          <h3>{banner.title1}</h3>
          <h1>{banner.title2}</h1>
          <h2>{banner.subTitle}</h2>
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
      <section className="theme-slider layout-5">
        <div className="container-fluid">
          <Row>
            <Col xs="12" className="p-0">
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
