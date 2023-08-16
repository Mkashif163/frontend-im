import React from "react";
import Slider from "react-slick";
import { NextPage } from "next";
import { Container, Row, Col, Media } from "reactstrap";

var settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: false,
    fade: false,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
      ]
};

const MediaBanner: NextPage = () => (
  <section className="section-big-py-space b-g-white">
    <Container>
      <Row>
        <Col>
          <Slider className="media-slide no-arrow" {...settings}>
            <div>
              <div className="media-banner">
                <div className="media-banner-box">
                  <div className="media-heading">
                    <h5>New Products</h5>
                  </div>
                </div>
                <div className="media-banner-box">
                  <div className="media">
                    <Media src="/images/layout-1/media-banner/1.jpg" className="img-fluid" alt="banner" />
                    <div className="media-body">
                      <div className="media-contant">
                        <div>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <p>Generator on Internet.</p>
                          <h6>$153.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media-banner-box">
                  <div className="media">
                    <Media src="/images/layout-1/media-banner/2.jpg" className="img-fluid  " alt="banner" />
                    <div className="media-body">
                      <div className="media-contant">
                        <div>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <p>Generator on Internet.</p>
                          <h6>$153.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="media-banner">
                <div className="media-banner-box">
                  <div className="media-heading">
                    <h5>Feature products</h5>
                  </div>
                </div>
                <div className="media-banner-box">
                  <div className="media">
                    <Media src="/images/layout-1/media-banner/3.jpg" className="img-fluid  " alt="banner" />
                    <div className="media-body">
                      <div className="media-contant">
                        <div>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <p>Generator on Internet.</p>
                          <h6>$153.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media-banner-box">
                  <div className="media">
                    <Media src="/images/layout-1/media-banner/4.jpg" className="img-fluid  " alt="banner" />
                    <div className="media-body">
                      <div className="media-contant">
                        <div>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <p>Generator on Internet.</p>
                          <h6>$153.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="media-banner">
                <div className="media-banner-box">
                  <div className="media-heading">
                    <h5>Best Sellers</h5>
                  </div>
                </div>
                <div className="media-banner-box">
                  <div className="media">
                    <Media src="/images/layout-1/media-banner/1.jpg" className="img-fluid  " alt="banner" />
                    <div className="media-body">
                      <div className="media-contant">
                        <div>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <p>Generator on Internet.</p>
                          <h6>$153.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media-banner-box">
                  <div className="media">
                    <Media src="/images/layout-1/media-banner/2.jpg" className="img-fluid  " alt="banner" />
                    <div className="media-body">
                      <div className="media-contant">
                        <div>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <p>Generator on Internet.</p>
                          <h6>$153.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="media-banner border-0">
                <div className="media-banner-box">
                  <div className="media-heading">
                    <h5>50% off</h5>
                  </div>
                </div>
                <div className="media-banner-box">
                  <div className="media">
                    <Media src="/images/layout-1/media-banner/3.jpg" className="img-fluid  " alt="banner" />
                    <div className="media-body">
                      <div className="media-contant">
                        <div>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <p>Generator on Internet.</p>
                          <h6>$153.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media-banner-box">
                  <div className="media">
                    <Media src="/images/layout-1/media-banner/4.jpg" className="img-fluid  " alt="banner" />
                    <div className="media-body">
                      <div className="media-contant">
                        <div>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <p>Generator on Internet.</p>
                          <h6>$153.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="media-banner">
                <div className="media-banner-box">
                  <div className="media-heading">
                    <h5>Best Sellers</h5>
                  </div>
                </div>
                <div className="media-banner-box">
                  <div className="media">
                    <Media src="/images/layout-1/media-banner/1.jpg" className="img-fluid  " alt="banner" />
                    <div className="media-body">
                      <div className="media-contant">
                        <div>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <p>Generator on Internet.</p>
                          <h6>$153.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media-banner-box">
                  <div className="media">
                    <Media src="/images/layout-1/media-banner/2.jpg" className="img-fluid  " alt="banner" />
                    <div className="media-body">
                      <div className="media-contant">
                        <div>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <p>Generator on Internet.</p>
                          <h6>$153.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default MediaBanner;
