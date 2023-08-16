import React, { useState } from "react";
import { NextPage } from "next";
import Slider from "react-slick";
import { Row, Col, Media } from "reactstrap";
import Link from "next/link";

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface slider {
  img1: string;
  img2: string;
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
    img1: "/images/layout-3/slider/1.1.png",
    img2: "/images/layout-3/slider/1.2.png",
    title1: "discount 50% off",
    title2: "sport shoes",
    subTitle: "weekly final sale",
    category: "SHOES",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-3/slider/2.1.png",
    img2: "/images/layout-3/slider/2.2.png",
    title1: "up to 30% off",
    title2: "sport shoes",
    subTitle: "summer collection",
    category: "SHOES",
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
    <div>
      <div className="slider-banner slide-banner-2 p-center" onMouseMove={(e) => onMouseHover(e)}>
        <div className="slider-img">
          <ul className="layout3-slide-1">
            <li id="img-1" style={elemOne}>
              <Media src={banner.img1} className="img-fluid" alt="slider" />
            </li>
            <li id="img-2" style={elemOne}>
              <Media src={banner.img2} className="img-fluid" alt="slider" />
            </li>
          </ul>
        </div>
        <div className="slider-banner-contain">
          <div className="sub-contain">
            <h4>{banner.title1}</h4>
            <h1>{banner.title2}</h1>
            <span>{banner.subTitle} </span>
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
  );
};

const SliderSection: NextPage = () => {
  return (
    <section className="section-pb-space b-g-white">
      <section className="theme-slider">
        <div className="custom-container">
          <Row>
            <Col>
              <Slider className="slide-1 no-arrow" {...settings}>
                {banners.map((banner, i) => (
                  <BannerList banner={banner} key={i} />
                ))}
              </Slider>
            </Col>
          </Row>
        </div>
      </section>
    </section>
  );
};

export default SliderSection;
