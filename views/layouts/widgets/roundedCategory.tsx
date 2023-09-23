import React from "react";
import { NextPage } from "next";
import { Row, Col, Container, Media } from "reactstrap";
import Slider from "react-slick";

var settings = {
  autoplay: true,
  autoplaySpeed: 3500,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 9,
  slidesToScroll: 9,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const BrandList = [
  { img: "/images/layout-2/rounded-cat/1.png", category: "Flower" },
  { img: "/images/layout-2/rounded-cat/2.png", category: "Furniture" },
  { img: "/images/layout-2/rounded-cat/4.png", category: "Tools" },
  { img: "/images/layout-2/rounded-cat/3.png", category: "Bag" },
  { img: "/images/layout-2/rounded-cat/4.png", category: "Tools" },
  { img: "/images/layout-2/rounded-cat/5.png", category: "Grocery" },
  { img: "/images/layout-2/rounded-cat/6.png", category: "Camera" },
  { img: "/images/layout-2/rounded-cat/4.png", category: "Tools" },
  { img: "/images/layout-2/rounded-cat/7.png", category: "cardigans" },
  { img: "/images/layout-2/rounded-cat/8.png", category: "cardigans" },
  { img: "/images/layout-2/rounded-cat/9.png", category: "cardigans" },
  { img: "/images/layout-2/rounded-cat/4.png", category: "Tools" },
];

const Brands: NextPage = () => {
  return (
    <>
    <div className="custom-container">
      <div className="container-brands slide-6 no-arrow">
              <Slider {...settings}>
                {BrandList.map((data, i) => (
                    <div className="category-contain" key={i}>
                
                        <div className="img-wrapper">
                          <Media src={data.img} alt="category" className="img-fluid brands-img" />
                        </div>
                        {/* <div>
                          <div className="btn-rounded">{data.category}</div>
                </div> */}
                    </div>
                ))}
              </Slider>
      </div>
    </div>
    </>
  );
};


export default Brands;