import React, { useState, useEffect, useRef, useContext } from "react";
import { NextPage } from "next";
import Slider from "react-slick";
import { Row, Col, Media } from "reactstrap";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { CurrencyContext } from "../../../helpers/currency/CurrencyContext";
import CountDownComponent from "../widgets/CountDownComponent";

const GET_COLLECTION = gql`
  query getCollection($collection: String) {
    collection(collec: $collection) {
      id
      title
      description
      type
      brand
      category
      price
      new
      sale
      discount
      stock
      variants {
        id
        sku
        size
        color
        image_id
      }
      images {
        image_id
        id
        alt
        src
      }
    }
  }
`;

var bestSellerSetting = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const HotDeal: NextPage = () => {
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const currencyContext = useContext(CurrencyContext);
  const { selectedCurr } = currencyContext;
  var { loading, data: dataR } = useQuery(GET_COLLECTION, {
    variables: {
      collection: "hotdeal",
    },
  });
  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);
  const { nav1, nav2 } = state;

  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    fade: true,
    infinite: true,
    dots: false,
  };

  var setting1 = {
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="hot-deal b-g-white section-pb-space space-abjust">
      <div className="custom-container">
        <Row className="hot-2">
          <Col lg="12">
            {/* <!--title start--> */}
            <div className="title3 b-g-white text-center">
              <h4>today&#39;s hot deal</h4>
            </div>
            {/* <!--titel end--> */}
          </Col>
          <Col lg="9">
            <div className="slide-1 no-arrow">
              <div>
                <div className="hot-deal-contain deal-abjust">
                  <Row className="row hot-deal-subcontain">
                    <Col lg="4" md="4">
                      <div className="hotdeal-right-slick border-0">
                        <Slider asNavFor={nav1} ref={(slider) => (slider2.current = slider)} {...settings}>
                          {dataR &&
                            dataR.collection[0].images.map((img: any, i: any) => {
                              return (
                                <div key={i}>
                                  <Media src={`/images/${img.src}`} alt="hot-deal" className="img-fluid  " />
                                </div>
                              );
                            })}
                        </Slider>
                      </div>
                    </Col>
                    <Col lg="6" md="6">
                      <div className="hot-deal-center">
                        <div>
                          <div>
                            <h5>Simply dummy text of the printing. </h5>
                          </div>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div>
                            <p>
                              It is a long established fact that a reader. It is a long established fact that a reader.It is a long established fact that a reader. It is a long established fact that a
                              reader.
                            </p>
                            {dataR && !loading ? (
                              <div className="price">
                                <span>
                                  {selectedCurr.symbol}
                                  {(dataR && dataR.collection[0].price * selectedCurr.value).toFixed(2)}
                                </span>
                                <span>
                                  {" "}
                                  {selectedCurr.symbol}
                                  {((dataR && dataR.collection[0].price - (dataR && dataR.collection[0].price * (dataR && dataR.collection[0].discount / 100))) * selectedCurr.value).toFixed(2)}
                                </span>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                          <CountDownComponent />
                        </div>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="hotdeal-right-nav">
                        <Slider
                          asNavFor={nav2}
                          ref={(slider) => (slider1.current = slider)}
                          vertical={true}
                          {...setting1}
                          slidesToShow={2}
                          swipeToSlide={true}
                          focusOnSelect={true}
                          verticalSwiping={true}>
                          {dataR &&
                            dataR.collection[0].images.map((img: any, i: any) => {
                              return (
                                <div key={i}>
                                  <Media src={`/images/${img.src}`} alt="hot-deal" className="img-fluid  " />
                                </div>
                              );
                            })}
                        </Slider>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <Slider className="bg-light h-100" {...bestSellerSetting}>
              <div>
                <div className="media-banner border-0">
                  <div className="media-banner-box">
                    <div className="media-heading">
                      <h5>New Products</h5>
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
                <div className="media-banner  border-0">
                  <div className="media-banner-box">
                    <div className="media-heading">
                      <h5>Hot deal</h5>
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
                </div>
              </div>
              <div>
                <div className="media-banner  border-0">
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
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HotDeal;
