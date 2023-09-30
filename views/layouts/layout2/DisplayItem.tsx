import React, { useContext, useEffect, useRef, useState } from "react";
import { CurrencyContext } from "helpers/currency/CurrencyContext";
import Slider from "react-slick";
import { Row, Col, Media, Input, Spinner } from "reactstrap";
import { CartContext } from "helpers/cart/cart.context";
import DisplayStars from "./DisplayStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faMedal } from "@fortawesome/free-solid-svg-icons";

interface DisplayItemProps {
  products: any[]; // Assuming products is an array
}

const DisplayItem: React.FC<DisplayItemProps> = ({ products }) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef<Slider>();
  const slider2 = useRef<Slider>();
  const { nav1, nav2 } = state;
  const { selectedCurr } = useContext(CurrencyContext);
  const { symbol, value } = selectedCurr;
  const [qty, setQty] = useState(1);
  const [stock, setStock] = useState("InStock");
  const { addToCart } = useContext(CartContext);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const minusQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
      setStock("InStock");
    }
  };

  const plusQty = () => {
    if (qty < currentProduct.stock) {
      setQty(qty + 1);
      setStock("InStock");
    } else {
      setStock("Out of Stock !");
    }
  };

  const changeQty = (e: any) => {
    setQty(parseInt(e.target.value));
  };
  const nextProduct = () => {
    setLoading(true); // Set loading to true when changing items
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    setQty(1);
  };

  const prevProduct = () => {
    setLoading(true); // Set loading to true when changing items
    setCurrentProductIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
    setQty(1);
  };

  // Fetch the new product data when changing items
  useEffect(() => {
    setLoading(true); // Set loading to true when changing items
    // Simulate an API call to fetch the product data (replace with your actual API call)
    setTimeout(() => {
      setLoading(false); // Set loading to false when data is fetched
    }, 1000); // Simulated delay, replace with actual data fetching code
  }, [currentProductIndex, products]);

  // Retrieve the current product based on the index
  const currentProduct = products[currentProductIndex];
  if (!currentProduct) {
    // Handle the case where currentProduct is undefined
    return null; // or display an error message
  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="mx-2 p-3">
          <div className="tab-product-main">
            <div className="tab-prodcut-contain">
              <div className="category-title mt-4 mb-2 ms-3">
                <h3>Deals of the Day</h3>
              </div>
            </div>
          </div>
        </div>
        <span>
          <button
            type="button"
            className="btn btn-sm quantity-right-plus border me-2 mt-3"
            data-type="plus"
            data-field=""
            onClick={prevProduct}
          >
            <i className="ti-angle-left"></i>
          </button>
          <button
            type="button"
            className="btn btn-sm quantity-right-plus border ms-2 mt-3"
            data-type="plus"
            data-field=""
            onClick={nextProduct}
          >
            <i className="ti-angle-right"></i>
          </button>
        </span>
      </div>
      {loading ? ( // Render loader when loading is true
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
        <Spinner type="grow" color="primary" />
      </div>
      ) : (
        // Render product details when loading is false
        <>
      <div className="short-product">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <div className="short-product-images m-3 p-2">
                <Slider>
                  <Col lg="5">
                    <Slider
                      className="product-slick"
                      asNavFor={nav2}
                      ref={(slider) => (slider1.current = slider)}
                    >
                      <div
                        className={`imgContainer d-flex justify-content-center px-0`}
                      >
                        <img
                          id="displayedImage"
                          src={currentProduct.url}
                          alt=""
                          className={`img-fluid`}
                          style={{ maxWidth: "80%", maxHeight: "100%" }}
                        />
                      </div>
                    </Slider>
                    <Row>
                      <Col>
                        <Slider
                          className="slider-nav"
                          asNavFor={nav1}
                          ref={(slider) => (slider2.current = slider)}
                          slidesToShow={3}
                          swipeToSlide={true}
                          focusOnSelect={true}
                          arrows={false}
                          adaptiveHeight={true}
                        >
                          {currentProduct.product_images.map(
                            (img: any, i: any) => (
                              <div key={i}>
                                <img
                                  id="thumbnilImage"
                                  src={img.url}
                                  alt=""
                                  className="img-fluid image_zoom_cls-0"
                                  style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                  }}
                                  onClick={() => setSelectedImageIndex(i)}
                                />
                              </div>
                            )
                          )}
                        </Slider>
                      </Col>
                    </Row>
                  </Col>
                </Slider>
              </div>
            </div>
            <div className="col-6">
              <div className="short-product-discription m-3 p-2 col-6">
                <div className="title">
                  <h2>{currentProduct.name}</h2>
                  <h5>Model: {currentProduct.model_no}</h5>
                </div>
                {/* Display other product details */}
                <div className="price-box">
                  <h3 className="fs-5">
                    {symbol}
                    {(
                      (parseFloat(currentProduct.new_price) -
                        parseFloat(currentProduct.new_sale_price)) *
                      value
                    ).toFixed(2)}
                  </h3>{" "}
                  <h4 className="fs-6">
                    <del>
                      {symbol}
                      {parseFloat(currentProduct.new_price) * value}
                    </del>
                    <span>{currentProduct.new_sale_price}% off</span>
                  </h4>
                </div>
                {/* Display condition and reviews */}
                <div className="condition-box">
                  <div>
                    <span className="condition-text">New</span>
                  </div>
                  <div>
                    <span className="condition-text">Used</span>
                  </div>
                  <div
                    className={
                      currentProduct.stock > 0 ? "stock" : "out-stock"
                    }
                  >
                    <a href="#">{stock}</a>
                  </div>
                </div>
                <DisplayStars stars={currentProduct.stars} />
                {/* Display quantity and buttons */}
                <div className="product-description border-product">
                  <>
                    <span className="badge border text-secondary me-2">
                      <span className="text-primary">
                        <FontAwesomeIcon
                          size="xl"
                          className="seller-icon"
                          icon={faMedal}
                        />
                      </span>
                      &nbsp;Best Seller
                    </span>
                    <span className="badge border text-secondary">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="lg"
                        style={{ color: "#20cb53" }}
                      />
                      &nbsp;Verified Seller
                    </span>
                  </>
                  <hr className="mt-2 mb-0" />
                  <h6 className="product-title mt-2">Quantity</h6>
                  <div className="qty-box">
                    <div className="input-group">
                      <span className="input-group-prepend">
                        <button
                          type="button"
                          className="btn btn-sm quantity-left-minus"
                          data-type="minus"
                          data-field=""
                          onClick={minusQty}
                        >
                          <i className="ti-angle-left"></i>
                        </button>
                      </span>
                      <Input
                        type="text"
                        name="quantity"
                        className="form-control form-control-sm input-number"
                        value={qty}
                        onChange={changeQty}
                      />
                      <span className="input-group-prepend">
                        <button
                          type="button"
                          className="btn btn-sm quantity-right-plus"
                          data-type="plus"
                          data-field=""
                          onClick={plusQty}
                        >
                          <i className="ti-angle-right"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-buttons d-flex justify-content-center">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#addtocart"
                    className="btn btn-normal p-1 pe-2 ps-2 m-1"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(null);
                    }}
                  >
                    <p>
                      <small>add to cart</small>
                    </p>
                  </a>
                  <a
                    href="/pages/account/checkout"
                    className="btn btn-normal p-1 pe-2 ps-2 m-1"
                  >
                    <p>
                      <small>buy now</small>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
      )}
    </>
  );
};

export default DisplayItem;
