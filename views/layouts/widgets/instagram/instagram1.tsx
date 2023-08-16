import React from "react";
import Slider from "react-slick";
import { Row, Col, Media, Container } from "reactstrap";

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

const InstagramSection: React.FC = () => {
  return (
    <Container fluid={true}>
      <Row className="row">
        <Col className="p-0">
          <div className="insta-contant1 no-arrow">
            <div className="slide-7">
              <Slider {...settings}>
                {Images.map((data, i) => (
                  <div key={i}>
                    <div className="instagram-box" key={i}>
                      <Media src={data.img} className="img-fluid  " alt="insta" />
                      <div className="insta-cover">
                        <i className="fa fa-instagram"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="insta-sub-contant1">
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
  );
};

export default InstagramSection;
