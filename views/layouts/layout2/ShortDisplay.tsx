import React, { useState, useContext } from "react";
import { Col, Row, Media, Input } from "reactstrap";
import { CurrencyContext } from "helpers/currency/CurrencyContext";
import { CartContext } from "helpers/cart/cart.context";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";



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

const dummyOffers = [
  {
    id: 1,
    offerCode: "OFF01",
    title: "Get extra $35 off on first Orders",
    description: 'Use code "OFF01" Min. Cart Value $75 | Max. Discount $35',
  },
  {
    id: 2,
    offerCode: "OFF02",
    title: "Flat 20% off on selected items",
    description: 'Use code "OFF02" Valid on items marked with 20% discount tag',
  },
  {
    id: 3,
    offerCode: "OFF03",
    title: "Summer Sale: Enjoy 25% off on clothing",
    description: 'Use code "OFF03" Applicable on all clothing products',
  },
  {
    id: 4,
    offerCode: "OFF04",
    title: "Flash Sale: Additional 10% off on electronics",
    description: 'Use code "OFF04" Valid only for today on electronics items',
  },
  {
    id: 5,
    offerCode: "OFF05",
    title: "Free Shipping on all orders above $50",
    description: 'Use code "OFF05" Applicable on orders with cart value over $50',
  },
  {
    id: 6,
    offerCode: "OFF06",
    title: "Big Savings: $50 off on orders over $150",
    description: 'Use code "OFF06" Minimum cart value $150 required',
  },
  {
    id: 7,
    offerCode: "OFF07",
    title: "Weekend Special: 15% off on all categories",
    description: 'Use code "OFF07" Valid only on weekends',
  },
  {
    id: 8,
    offerCode: "OFF08",
    title: "Clearance Sale: Up to 30% off on clearance items",
    description: 'Use code "OFF08" Limited stock available',
  },
  {
    id: 9,
    offerCode: "OFF09",
    title: "Back to School: 10% off on stationery",
    description: 'Use code "OFF09" Applicable on stationery items',
  },
  {
    id: 10,
    offerCode: "OFF10",
    title: "Repeat Customer: $5 off on every repeat order",
    description: 'Use code "OFF10" Valid for repeat customers only',
  },
  {
    id: 11,
    offerCode: "OFF02",
    title: "Flat 20% off on selected items",
    description: 'Use code "OFF02" Valid on items marked with 20% discount tag',
  },
  {
    id: 12,
    offerCode: "OFF02",
    title: "Flat 20% off on selected items",
    description: 'Use code "OFF02" Valid on items marked with 20% discount tag',
  }, 
  {
    id: 13,
    offerCode: "OFF02",
    title: "Flat 20% off on selected items",
    description: 'Use code "OFF02" Valid on items marked with 20% discount tag',
  },
];

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
  const [qty, setQty] = useState(1);
  const { selectedCurr } = React.useContext(CurrencyContext);
  const [stock, setStock] = useState("InStock");
  const { symbol, value } = selectedCurr;

  const quantitiy = 28;
  const { addToCart } = useContext(CartContext);
  const minusQty = () => {
    if (qty > 1) {
      setStock("InStock");
      setQty(qty - 1);
    }
  };

  const plusQty = () => {
    if (quantitiy >= qty) {
      setQty(qty + 1);
    } else {
      setStock("Out of Stock !");
    }
  };
  const changeQty = (e: any) => {
    setQty(parseInt(e.target.value));
  };
  const discount = 15;
  const price = 779;
  const totalReview = 28;

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
      <section className="short-disply section-py-space ratio_asos product">
        <div className="custom-container bg-white">
          <div className="row">
            <div className="col-lg-7 mb-4 pb-3">
              <h3 className="deal-title mx-2 p-3">Deal of the day</h3>
              <div className="short-product">
                <div className="short-product-images m-3 p-2">
                  <Slider>
                    <Col lg="5">
                      <Slider className="product-slick" asNavFor={nav2} ref={(slider) => (slider1.current = slider)}>
                        {
                          productImages.map((img: any, i: any) => {
                            return (
                              <div key={i}>
                                <Media src={img.img} alt="" className="img-fluid img image_zoom_cls-0" />
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
                <div className="short-product-discription m-3 p-2">
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
                    <div className={quantitiy > 0 ? "stock" : "out-stock"}>
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

                  <div className="product-description border-product">
                    {stock !== "InStock" ? <span className="instock-cls">{stock}</span> : ""}
                    <h6 className="product-title">quantity</h6>
                    <div className="qty-box">
                      <div className="input-group">
                        <span className="input-group-prepend">
                          <button type="button" className="btn quantity-left-minus" data-type="minus" data-field="" onClick={minusQty}>
                            <i className="ti-angle-left"></i>
                          </button>
                        </span>
                        <Input type="text" name="quantity" className="form-control input-number" value={qty} onChange={changeQty} />
                        <span className="input-group-prepend">
                          <button type="button" className="btn quantity-right-plus" data-type="plus" data-field="" onClick={plusQty}>
                            <i className="ti-angle-right"></i>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="product-buttons">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#addtocart"
                      className="btn btn-normal"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(null);
                      }}>
                      add to cart
                    </a>
                    <a href="/pages/account/checkout" className="btn btn-normal">
                      buy now
                    </a>
                  </div>

                  <div className="border-product">
                    <h6 className="product-title">product details</h6>
                    <p>
                      Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-5 mb-4 pb-3">
              <div className="single-producty ">
                <div className="coupens">

                  <div className="coupens-title">
                    <FontAwesomeIcon className="tag" icon={faTags} size="xl" />
                    <h6 className="product-title">{dummyOffers.length} Offers availble</h6>
                  </div>

                  <div className="offers">
                    <ul className="Offers-list">
                      {dummyOffers.map((offer, index) => (
                        <li key={index}>
                          <span className="offer">{offer.offerCode}</span>
                          <div className="offer-details">
                            <h5>{offer.title}</h5>
                            <p>{offer.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default ShortDisplay