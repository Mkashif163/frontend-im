import React, { useState } from "react";
import { NextPage } from "next";
import Slider from "react-slick";
import { Row, Col, Media } from "reactstrap";
import Link from "next/link";

var settings = {
  autoplay: false,
  autoplaySpeed: 2500,
};

const SliderBanner: NextPage = () => {
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
    <>
      <section className="theme-slider section-pt-space">
        <div className="custom-container">
          <Row className="row">
            <Col xl="8" lg="9" className="offset-xl-2 px-abjust">
              <div className="slide-1 no-arrow ">
                <div className="slide-1 no-arrow ">
                  <Slider {...settings}>
                    <div>
                      <div className="slider-banner slide-banner-5 ">
                        <div className="slider-img">
                          <Media src="/images/layout-6/slider/2.1.jpg" className="bg-img" alt="slider" />
                          <ul className="layout6-slide-2">
                            <li>
                              <Media src="/images/layout-6/slider/2.2.png" className="img-fluid" alt="slider" />
                            </li>
                            <li>
                              <Media src="/images/layout-6/slider/2.3.png" className="img-fluid" alt="slider" />
                            </li>
                            <li>
                              <Media src="/images/layout-6/slider/2.4.png" className="img-fluid" alt="slider" />
                            </li>
                            <li>
                              <Media src="/images/layout-6/slider/2.5.png" className="img-fluid" alt="slider" />
                            </li>
                          </ul>
                        </div>
                        <div className="slider-banner-contain">
                          <div>
                            <h5>save 30%</h5>
                            <h3>@ lowest prices</h3>
                            <h1>fresh vegetables </h1>
                            <Link
                              href={{
                                pathname: "/collections/leftsidebar/",
                                query: {
                                  category: "VEGETABLES",
                                },
                              }}>
                              <a className="btn btn-rounded">shop now</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="slider-banner slide-banner-5" onMouseMove={(e) => onMouseHover(e)}>
                        <div className="slider-img">
                          <ul className="layout6-slide-1">
                            <li style={elemOne} id="img-1">
                              <Media src="/images/layout-6/slider/1.1.png" className="img-fluid" alt="slider" />
                            </li>
                          </ul>
                        </div>
                        <div className="slider-banner-contain">
                          <div>
                            <h5>save 30%</h5>
                            <h3>@ lowest prices</h3>
                            <h1>fresh vegetables </h1>
                            <Link
                              href={{
                                pathname: "/collections/leftsidebar/",
                                query: {
                                  category: "VEGETABLES",
                                },
                              }}>
                              <a className="btn btn-rounded">shop now</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </Col>
            <Col xl="2" sm="3" className="ps-0 offer-banner">
              <div className="offer-banner-img">
                <Media src="/images/layout-6/collection-banner/4.jpg" alt="offer-banner" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default SliderBanner;
