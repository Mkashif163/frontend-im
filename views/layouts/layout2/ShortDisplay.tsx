import React, { useState } from "react";
import { Col, Row, Media } from "reactstrap";
import { CurrencyContext } from "helpers/currency/CurrencyContext";
import Slider from "react-slick";
import { gql } from "@apollo/client";



var settings = {
  arrows: true,
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const GET_PRODUCTS = gql`
  query getProducts($type: CategoryType, $limit: Int!) {
    products(type: $type, limit: $limit) {
      items {
        id
        title
        type
        collection {
          collectionName
        }
      }
    }
  }
`;

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


interface ShortDisplayProps {
  effect?: any;
}



const productImages = [
  { img: "/images/layout-2/product/1.jpg", category: "Flower" },
  { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
  { img: "/images/layout-2/product/3.jpg", category: "Bag" },
  { img: "/images/layout-2/product/4.jpg", category: "Tools" },
  { img: "/images/layout-2/product/5.jpg", category: "Grocery" },
  { img: "/images/layout-2/product/6.jpg", category: "Camera" },
  { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
  { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
  { img: "/images/layout-2/product/9.jpg", category: "cardigans" },
];


const ShortDisplay: React.FC<ShortDisplayProps> = ({ effect }) => {
  const [state, setState] = useState({ nav1: null, nav2: null });

  const { selectedCurr } = React.useContext(CurrencyContext);
  const { symbol, value } = selectedCurr;

  const discount = 15;
  const price = 779;
  const totalReview = 28;
  const stock = 10;
  const model = '1756-A7X-Plus-Enhanced-2023-NextGen-XYZ';

  const slider1 = React.useRef<Slider>();
  const slider2 = React.useRef<Slider>();
  const { nav1, nav2 } = state;
  React.useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  });
  return (
    <>
      <section className="section-py-space ratio_asos product">
        <div className="custom-container">
          <div className="row">
            <div className="col-lg-7 mb-4 pb-3 border rounded">
              <h3 className="mx-2 p-3">Deal of the day</h3>
              <div className="d-flex border rounded">
                <div className="w-25 m-3 p-2">
                  <Slider>
                    <Col lg="5">
                      <Slider className="product-slick" asNavFor={nav2} ref={(slider) => (slider1.current = slider)}>
                        {
                          productImages.map((img: any, i: any) => {
                            return (
                              <div key={i}>
                                <Media src={img.img} alt="" className="img-fluid  image_zoom_cls-0" />
                              </div>
                            );
                          })}
                      </Slider>
                      <Row>
                        <Col>
                          <Slider className="slider-nav" asNavFor={nav1} ref={(slider) => (slider2.current = slider)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true} arrows={false} adaptiveHeight={true}>
                            {
                              productImages.map((img: any, i: any) => {
                                return (
                                  <div key={i}>
                                    <Media src={img.img} alt="" className="img-fluid  image_zoom_cls-0" />
                                  </div>
                                );
                              })}
                          </Slider>
                        </Col>
                      </Row>
                    </Col>
                  </Slider>
                </div>
                <div className="m-3 p-2">
                  <div className="title">
                    <h2>Kashif</h2>
                    <h5>Model: {model}</h5>
                  </div>

                  <div className="price-box">
                    <h3>
                      {symbol}
                      {((price - price * (discount / 100)) * value).toFixed(2)}
                    </h3>{" "}
                    <h4>
                      <del>
                        {symbol}
                        {price * value}
                      </del>
                      <span>{discount}% off</span>
                    </h4>

                  </div>

                  <div className="condition-box">
                    <div>
                      <span className="condition-text">New</span>
                    </div>
                    <div>
                      <span className="condition-text">Used</span>
                    </div>
                    <div className={stock > 0 ? "stock" : "out-stock"}>
                      <a href="#">{stock}</a>
                    </div>
                  </div>

                  <div className="reviews">
                    <div className="rating three-star mb-2">
                      <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                    </div>
                    <div className="review">
                      <a href="#">({totalReview} Reviews)</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="single-product h-100 br-sm">

              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default ShortDisplay