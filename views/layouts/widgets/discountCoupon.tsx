import React from "react";
import { NextPage } from "next";
import { Row, Col, Container } from "reactstrap";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 10,
  slidesToScroll: 10,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
      },
    },
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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

const DiscountAvilable = [
  { title: "10% off" },
  { title: "under @99" },
  { title: "free shipping" },
  { title: "extra 10% off" },
  { title: "$79 cashback" },
  { title: "80% off" },
  { title: "on sale" },
  { title: "only $49" },
  { title: "under @150" },
  { title: "save money" },
  { title: "80% off" },
];

const DiscountCoupon: NextPage = () => {
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col className="ps-0">
            <div className="slide-10 no-arrow">
              <Slider {...settings}>
                {DiscountAvilable.map(function (data, i) {
                  return (
                    <div key={i}>
                      <a href="#">
                        <div className="box-category-contain">
                          <h4>{data.title}</h4>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DiscountCoupon;
