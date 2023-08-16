import React from "react";
import { NextPage } from "next";
import { Row, Col, Container, Media } from "reactstrap";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [
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
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

const Images = [
  { img: "/images/insta/1.jpg" },
  { img: "/images/insta/3.jpg" },
  { img: "/images/insta/5.jpg" },
  { img: "/images/insta/7.jpg" },
  { img: "/images/insta/9.jpg" },
  { img: "/images/insta/11.jpg" },
  { img: "/images/insta/13.jpg" },
  { img: "/images/insta/2.jpg" },
];
const Instagram: NextPage = () => {
  return (
    <>
      <section className="instagram section-big-py-space">
        <Container>
          <Row>
            <Col>
              <div className="insta-contant2">
                <div className="slide-7 no-arrow">
                  <Slider {...settings}>
                    {Images.map((data, i) => (
                      <div key={i}>
                        <div className="instagram-box">
                          <Media src={data.img} className="img-fluid  " alt="insta" />
                          <div className="insta-cover">
                            <i className="fa fa-instagram"></i>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="insta-sub-contant2">
                  <div className="insta-title">
                    <h4>
                      <span>#</span>INSTAGRAM
                    </h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Instagram;
