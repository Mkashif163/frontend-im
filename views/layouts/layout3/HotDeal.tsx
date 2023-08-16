import React, { useState, useEffect, useRef, useContext } from "react";
import { NextPage } from "next";
import Slider from "react-slick";
import { Row, Col, Media } from "reactstrap";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { CurrencyContext } from "../../../helpers/currency/CurrencyContext";

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
        breakpoint: 575,
        settings: {
          vertical: false,
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="section-pb-space ">
      <div className="custom-container">
        <Row className="layout-3-hotdeal">
          <Col xl="2" lg="4" md="4" sm="6">
            <div className="media-banner banner-inverse b-g-white1 border-0">
              <div className="media-banner-box">
                <div className="media-heading">
                  <h5>on sale</h5>
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
          </Col>
          <Col xl="2" lg="4" md="4" sm="6">
            <div className="media-banner b-g-white1 border-0 banner-inverse">
              <div className="media-banner-box">
                <div className="media-heading">
                  <h5>on sale</h5>
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
                  <Media
                    src="/images/layout-1/media-banner/4.jpg"
                    className="img-fluid
                         "
                    alt="banner"
                  />
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
          </Col>
          <Col xl="6" lg="12" md="12" className="col-xl-6 col-lg-12 col-md-12">
            <div className="hot-deal">
              <Slider className="slide-1">
                <div>
                  <div className="hot-deal-contain1 border-0">
                    <div className="hot-deal-heading">
                      <h5>today’s hot deal</h5>
                    </div>
                    <div className="row hot-deal-subcontain">
                      <div className="col-lg-4 col-sm-3 ">
                        <Slider asNavFor={nav1} ref={slider2} {...settings}>
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
                      <div className="col-lg-6 col-sm-7">
                        <div className="hot-deal-center">
                          <div>
                            <div className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <div>
                              <h5>simply dummy text of the printing</h5>
                            </div>
                            <div>
                              <p>it is a long established fact that a reader. it is a long established fact that a reader.</p>
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
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2  col-sm-2">
                        <Slider asNavFor={nav2} vertical={true} ref={slider1} slidesToShow={2} swipeToSlide={true} focusOnSelect={true} verticalSwiping={true} {...setting1}>
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
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
          <Col xl="2" lg="4" md="4" sm="6">
            <div className="media-banner b-g-white1 border-0 banner-inverse">
              <div className="media-banner-box">
                <div className="media-heading">
                  <h5>on sale</h5>
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
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HotDeal;
