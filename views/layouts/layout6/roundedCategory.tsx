import React from "react";
import { NextPage } from "next";
import { Row, Col, Container, Media } from "reactstrap";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
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

const CategoryList = [
  { img: "/images/layout-6/rounded-category/1.png", category: "Avacado" },
  { img: "/images/layout-6/rounded-category/2.png", category: "chili" },
  { img: "/images/layout-6/rounded-category/3.png", category: "Boroccoli" },
  { img: "/images/layout-6/rounded-category/4.png", category: "Radish" },
  { img: "/images/layout-6/rounded-category/5.png", category: "Papaya" },
  { img: "/images/layout-6/rounded-category/6.png", category: "Tomato" },
  { img: "/images/layout-6/rounded-category/7.png", category: "Lettuce" },
  { img: "/images/layout-6/rounded-category/8.png", category: "Cherris" },
];
const Category: NextPage = () => {
  return (
    <>
      <section className="rounded-category vagitable-category  section-mt-space">
        <Container>
          <Row>
            <Col>
              <div className="slide-6 no-arrow">
                <Slider {...settings}>
                  {CategoryList.map((data, i) => (
                    <div key={i}>
                      <div className="category-contain">
                        <a href="#">
                          <div className="img-wrapper">
                            <Media src={data.img} alt="category" className="img-fluid" />
                          </div>
                          <div>
                            <div className="btn-rounded">{data.category}</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Category;
