import React, { Fragment } from "react";
import { NextPage } from "next";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import Img from "utils/BgImgRatio";

var settings = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ImageRatioPage: NextPage = () => {
  return (
    <Fragment>
      <div className="bg-light">
        <div className="title6 pb-0">
          <h4>ratio asos</h4>
        </div>

        <section className=" ratio_asos section-big-py-space">
          <Container>
            <Row>
              <Col>
                <Slider className="product-4 product-m no-arrow product" {...settings}>
                  <div>
                    <div className="product-box">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <Img src="/images/img-ratio/1.jpg" className="img-fluid" alt="product" />
                        </div>
                      </div>
                      <div className="product-detail detail-center ">
                        <div className="detail-title">
                          <div className="detail-left">
                            <div className="rating-star">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <a href="">
                              <h6 className="price-title">reader will be distracted.</h6>
                            </a>
                          </div>
                          <div className="detail-right">
                            <div className="check-price">$ 56.21</div>
                            <div className="price">
                              <div className="price">$ 24.05</div>
                            </div>
                          </div>
                        </div>
                        <div className="icon-detail">
                          <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                            <i className="ti-bag"></i>
                          </button>
                          <a href="javascript" title="Add to Wishlist">
                            <i className="ti-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                            <i className="ti-search" aria-hidden="true"></i>
                          </a>
                          <a href="#" title="Compare">
                            <i className="ti-reload" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <Img src="/images/img-ratio/3.jpg" className="img-fluid bg-img " alt="product" />
                        </div>
                      </div>
                      <div className="product-detail detail-center ">
                        <div className="detail-title">
                          <div className="detail-left">
                            <div className="rating-star">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <a href="">
                              <h6 className="price-title">reader will be distracted.</h6>
                            </a>
                          </div>
                          <div className="detail-right">
                            <div className="check-price">$ 56.21</div>
                            <div className="price">
                              <div className="price">$ 24.05</div>
                            </div>
                          </div>
                        </div>
                        <div className="icon-detail">
                          <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                            <i className="ti-bag"></i>
                          </button>
                          <a href="javascript" title="Add to Wishlist">
                            <i className="ti-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                            <i className="ti-search" aria-hidden="true"></i>
                          </a>
                          <a href="#" title="Compare">
                            <i className="ti-reload" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <Img src="/images/img-ratio/5.jpg" className="img-fluid bg-img " alt="product" />
                        </div>
                      </div>
                      <div className="product-detail detail-center ">
                        <div className="detail-title">
                          <div className="detail-left">
                            <div className="rating-star">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <a href="">
                              <h6 className="price-title">reader will be distracted.</h6>
                            </a>
                          </div>
                          <div className="detail-right">
                            <div className="check-price">$ 56.21</div>
                            <div className="price">
                              <div className="price">$ 24.05</div>
                            </div>
                          </div>
                        </div>
                        <div className="icon-detail">
                          <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                            <i className="ti-bag"></i>
                          </button>
                          <a href="javascript" title="Add to Wishlist">
                            <i className="ti-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                            <i className="ti-search" aria-hidden="true"></i>
                          </a>
                          <a href="#" title="Compare">
                            <i className="ti-reload" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <Img src="/images/img-ratio/7.jpg" className="img-fluid bg-img " alt="product" />
                        </div>
                      </div>
                      <div className="product-detail detail-center ">
                        <div className="detail-title">
                          <div className="detail-left">
                            <div className="rating-star">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <a href="">
                              <h6 className="price-title">reader will be distracted.</h6>
                            </a>
                          </div>
                          <div className="detail-right">
                            <div className="check-price">$ 56.21</div>
                            <div className="price">
                              <div className="price">$ 24.05</div>
                            </div>
                          </div>
                        </div>
                        <div className="icon-detail">
                          <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                            <i className="ti-bag"></i>
                          </button>
                          <a href="javascript" title="Add to Wishlist">
                            <i className="ti-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                            <i className="ti-search" aria-hidden="true"></i>
                          </a>
                          <a href="#" title="Compare">
                            <i className="ti-reload" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="title6 pt-0 pb-0">
          <h4>Ratio Square</h4>
        </div>

        <section className="ratio_square gym-product  section-big-py-space">
          <Container>
            <Row>
              <Col>
                <Slider className="product-4 product" {...settings}>
                  <div>
                    <div className="product-box">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <Img src="/images/img-ratio/9.jpg" className="img-fluid bg-img " alt="product" />
                        </div>
                        <div className="product-icon icon-center">
                          <div>
                            <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                              <i className="ti-bag"></i>
                            </button>
                            <a href="javascript" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true"></i>
                            </a>
                          </div>
                          <div>
                            <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                              <i className="ti-search" aria-hidden="true"></i>
                            </a>
                            <a href="#" title="Compare">
                              <i className="ti-reload" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-detail detail-inline ">
                        <div className="detail-title">
                          <div className="detail-left">
                            <div className="rating-star">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <a href="">
                              <h6 className="price-title">reader will be distracted.</h6>
                            </a>
                          </div>
                          <div className="detail-right">
                            <div className="check-price">$ 56.21</div>
                            <div className="price">
                              <div className="price">$ 24.05</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <Img src="/images/img-ratio/10.jpg" className="img-fluid bg-img " alt="product" />
                        </div>
                        <div className="product-icon icon-center">
                          <div>
                            <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                              <i className="ti-bag"></i>
                            </button>
                            <a href="javascript" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true"></i>
                            </a>
                          </div>
                          <div>
                            <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                              <i className="ti-search" aria-hidden="true"></i>
                            </a>
                            <a href="#" title="Compare">
                              <i className="ti-reload" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-detail detail-inline">
                        <div className="detail-title">
                          <div className="detail-left">
                            <div className="rating-star">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <a href="">
                              <h6 className="price-title">reader will be distracted.</h6>
                            </a>
                          </div>
                          <div className="detail-right">
                            <div className="check-price">$ 56.21</div>
                            <div className="price">
                              <div className="price">$ 24.05</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <Img src="/images/img-ratio/11.jpg" className="img-fluid bg-img " alt="product" />
                        </div>
                        <div className="product-icon icon-center">
                          <div>
                            <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                              <i className="ti-bag"></i>
                            </button>
                            <a href="javascript" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true"></i>
                            </a>
                          </div>
                          <div>
                            <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                              <i className="ti-search" aria-hidden="true"></i>
                            </a>
                            <a href="#" title="Compare">
                              <i className="ti-reload" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-detail detail-inline">
                        <div className="detail-title">
                          <div className="detail-left">
                            <div className="rating-star">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <a href="">
                              <h6 className="price-title">reader will be distracted.</h6>
                            </a>
                          </div>
                          <div className="detail-right">
                            <div className="check-price">$ 56.21</div>
                            <div className="price">
                              <div className="price">$ 24.05</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <Img src="/images/img-ratio/12.jpg" className="img-fluid bg-img " alt="product" />
                        </div>
                        <div className="product-icon icon-center">
                          <div>
                            <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                              <i className="ti-bag"></i>
                            </button>
                            <a href="javascript" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true"></i>
                            </a>
                          </div>
                          <div>
                            <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                              <i className="ti-search" aria-hidden="true"></i>
                            </a>
                            <a href="#" title="Compare">
                              <i className="ti-reload" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-detail detail-inline">
                        <div className="detail-title">
                          <div className="detail-left">
                            <div className="rating-star">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <a href="">
                              <h6 className="price-title">reader will be distracted.</h6>
                            </a>
                          </div>
                          <div className="detail-right">
                            <div className="check-price">$ 56.21</div>
                            <div className="price">
                              <div className="price">$ 24.05</div>
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

        <div className="title6 pt-0 pb-0">
          <h4>Ratio Portrait</h4>
        </div>

        <section className="ratio_portrait metro-section portfolio-section section-big-py-space">
          <Container>
            <Row>
              <Col>
                <Slider className="product-4 product-m no-arrow product" {...settings}>
                  <div>
                    <div className="product-box">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <Img src="/images/img-ratio/13.jpg" className="img-fluid bg-img" alt="product" />
                        </div>
                        <div className="product-icon">
                          <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                            <i className="ti-bag"></i>
                          </button>
                          <a href="javascript" title="Add to Wishlist">
                            <i className="ti-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                            <i className="ti-search" aria-hidden="true"></i>
                          </a>
                          <a href="#" title="Compare">
                            <i className="ti-reload" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-detail detail-center1">
                        <ul className="rating-star">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                        <h6>reader will be distracted.</h6>
                        <span className="detail-price">
                          $56.21<span>$24.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <Img src="/images/img-ratio/15.jpg" className="img-fluid bg-img" alt="product" />
                        </div>
                        <div className="product-icon">
                          <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                            <i className="ti-bag"></i>
                          </button>
                          <a href="javascript" title="Add to Wishlist">
                            <i className="ti-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                            <i className="ti-search" aria-hidden="true"></i>
                          </a>
                          <a href="#" title="Compare">
                            <i className="ti-reload" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-detail detail-center1">
                        <ul className="rating-star">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                        <h6>reader will be distracted.</h6>
                        <span className="detail-price">
                          $56.21<span>$24.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <Img src="/images/img-ratio/17.jpg" className="img-fluid bg-img" alt="product" />
                        </div>
                        <div className="product-icon">
                          <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                            <i className="ti-bag"></i>
                          </button>
                          <a href="javascript" title="Add to Wishlist">
                            <i className="ti-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                            <i className="ti-search" aria-hidden="true"></i>
                          </a>
                          <a href="#" title="Compare">
                            <i className="ti-reload" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-detail detail-center1">
                        <ul className="rating-star">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                        <h6>reader will be distracted.</h6>
                        <span className="detail-price">
                          $56.21<span>$24.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="product-box">
                      <div className="product-imgbox">
                        <div className="product-front">
                          <Img src="/images/img-ratio/19.jpg" className="img-fluid  bg-img" alt="product" />
                        </div>
                        <div className="product-icon">
                          <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                            <i className="ti-bag"></i>
                          </button>
                          <a href="javascript" title="Add to Wishlist">
                            <i className="ti-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                            <i className="ti-search" aria-hidden="true"></i>
                          </a>
                          <a href="#" title="Compare">
                            <i className="ti-reload" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                      <div className="product-detail detail-center1">
                        <ul className="rating-star">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                        <h6>reader will be distracted.</h6>
                        <span className="detail-price">
                          $56.21<span>$24.00</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Slider>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Fragment>
  );
};

export default ImageRatioPage;
