import React from "react";
import { NextPage } from "next";
import { Row, Col, Container, Media } from "reactstrap";
import Slider from "react-slick";

var settings = {
  autoplay: false,
  autoplaySpeed: 2500,
};

const Review = [
  {
    img: "/images/testimonial/1.jpg",
    user: "mark jecno",
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    img: "/images/testimonial/2.jpg",
    user: "mark jecno",
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
  {
    img: "/images/testimonial/3.jpg",
    user: "mark jecno",
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
  },
];
const Testimonial: NextPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <div className="slide-1 no-arrow">
              <Slider {...settings}>
                {Review.map((data, i) => (
                  <div key={i}>
                    <div className="testimonial-contain">
                      <div className="media">
                        <div className="testimonial-img">
                          <Media src={data.img} className="img-fluid rounded-circle" alt="testimonial" />
                        </div>
                        <div className="media-body">
                          <h5>{data.user}</h5>
                          <p>{data.review}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Testimonial;
