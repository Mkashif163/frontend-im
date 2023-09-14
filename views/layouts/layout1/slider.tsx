import React, { useState } from "react";
import { NextPage } from "next";

import Slider from "react-slick";
import { Row, Col, Media } from "reactstrap";
import Link from "next/link";

var settings = {
  autoplay: true,
  autoplaySpeed: 3500,
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
    img1: "/images/layout-2/slider/s1.jpg",
    img2: "/images/layout-2/slider/s1.jpg",
    title1: "Valves",
    title2: "Lights",
    subTitle1: "Upto 20% off", // Updated
    subTitle2: "Switchgear & Industrial Automation", // Updated
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-2/slider/s2.jpg",
    img2: "/images/layout-2/slider/s2.jpg",
    title1: "big",
    title2: "Sale",
    subTitle1: "Upto 25% off", // Updated
    subTitle2: "LED Explosion Proof Light", // Updated
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-2/slider/s3.jpg",
    img2: "/images/layout-2/slider/s3.jpg",
    title1: "camera",
    title2: "Sale",
    subTitle1: "Upto 20% off", // Updated
    subTitle2: "Electric Industrial Motors", // Updated
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-2/slider/s4.jpg",
    img2: "/images/layout-2/slider/s4.jpg",
    title1: "ALL",
    title2: "Sale",
    subTitle1: "Upto 15% off", // Updated
    subTitle2: "Industrial Valves", // Updated
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-2/slider/s5.jpg",
    img2: "/images/layout-2/slider/s5.jpg",
    title1: "weekend",
    title2: "Offers",
    subTitle1: "Upto 20% off (VFD)", // Updated
    subTitle2: "Energy-efficient solution", // Updated
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
];


const BannerList: React.FC<sliderProps> = ({ banner }) => {

  return (
    <div className="slider-banner p-center slide-banner-1" >
      <div className="slider-img">
        <ul className="layout1-slide-1">
          <li id="img-1">
            <img src={banner.img1} className="  " alt="slider" />
          </li>
         
        </ul>
      </div>
      <div className="slider-banner-contain">
        <div className="transparent-bg">
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
