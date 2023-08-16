import React, { useState, useEffect, useRef, useContext } from "react";
import { NextPage } from "next";
import { Row, Col, Media } from "reactstrap";
import Slider from "react-slick";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { CurrencyContext } from "../../../helpers/currency/CurrencyContext";
import CountDownComponent from "../widgets/CountDownComponent";

interface onSale {
  img: string;
  title: string;
  salePrice: number;
  discountPrice: number;
}

interface saleProps {
  sale: onSale;
}

const saleLeft = [
  {
    img: "/images/layout-1/media-banner/1.jpg",
    title: "Trim dress",
    salePrice: 75.5,
    discountPrice: 50.5,
  },
  {
    img: "/images/layout-1/media-banner/2.jpg",
    title: "Belted dress",
    salePrice: 75.5,
    discountPrice: 50.5,
  },
  {
    img: "/images/layout-1/media-banner/3.jpg",
    title: "Fitted dress",
    salePrice: 75.5,
    discountPrice: 50.5,
  },
  {
    img: "/images/layout-1/media-banner/4.jpg",
    title: "Belted dress",
    salePrice: 75.5,
    discountPrice: 50.5,
  },
];

const saleRight = [
  {
    img: "/images/layout-1/media-banner/4.jpg",
    title: "Belted dress",
    salePrice: 75.5,
    discountPrice: 50.5,
  },
  {
    img: "/images/layout-1/media-banner/1.jpg",
    title: "Trim dress",
    salePrice: 100.5,
    discountPrice: 50.5,
  },
  {
    img: "/images/layout-1/media-banner/2.jpg",
    title: "Belted dress",
    salePrice: 75.5,
    discountPrice: 50.5,
  },
  {
    img: "/images/layout-1/media-banner/3.jpg",
    title: "Fitted dress",
    salePrice: 100.5,
    discountPrice: 50.5,
  },
];

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

const SaleList: React.FC<saleProps> = ({ sale }) => {
  const currencyContext = useContext(CurrencyContext);
  const { selectedCurr } = currencyContext;
  return (
    <div className="media-banner-box">
      <div className="media">
        <Media src={sale.img} className="img-fluid  " alt="banner" />
        <div className="media-body">
          <div className="media-contant">
            <div>
              <ul className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </ul>
              <p>{sale.title}</p>
              <h6>
                {selectedCurr.symbol}
                {(sale.salePrice * selectedCurr.value).toFixed(2)}
                <span>${sale.discountPrice}</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
    <>
      <section>
        <div className="custom-container ">
          <Row className="hot-4">
            <Col md="2" className="pe-lg-0  ">
              <div className="media-banner b-g-white1 border-0 media-banner-2">
                <div className="media-banner-box">
                  <div className="media-heading">
                    <h5>on sale</h5>
                  </div>
                </div>
                {saleLeft.map((sale, i) => (
                  <SaleList sale={sale} key={i} />
                ))}
              </div>
            </Col>
            <Col md="8">
              <div className="hot-deal layout-4">
                <div className="title1 pb-0 text-left ps-5">
                  <h4>today&#39;s hot deal</h4>
                </div>
                <div className="slide-1 no-arrow">
                  <div>
                    <div className="hot-deal-contain  deal-abjust b-g-white1 hot-deal-contain2">
                      <Row className="hot-deal-subcontain">
                        <Col lg="4" md="4">
                          <div className="hotdeal-right-slick">
                            <Slider asNavFor={nav1} {...settings} ref={slider2}>
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
                                  It is a long established fact that a reader. It is a long established fact that a reader.It is a long established fact that a reader. It is a long established fact
                                  that a reader.
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
                            <Slider {...setting1} asNavFor={nav2} vertical={true} ref={slider1} slidesToShow={2} swipeToSlide={true} focusOnSelect={true} verticalSwiping={true}>
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
              </div>
            </Col>
            <Col md="2" className="p-l-md-0 ">
              <div className="media-banner  b-g-white1 border-0 media-banner-2">
                <div className="media-banner-box">
                  <div className="media-heading">
                    <h5>on sale</h5>
                  </div>
                </div>
                {saleRight.map((sale, i) => (
                  <SaleList sale={sale} key={i} />
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default HotDeal;
