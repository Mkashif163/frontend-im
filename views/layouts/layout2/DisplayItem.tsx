import React, { useContext, useRef, useState } from "react";
import { CurrencyContext } from "helpers/currency/CurrencyContext";
import Slider from "react-slick";
import { Row, Col, Media, Input } from "reactstrap"; // Import other dependencies you need
import { CartContext } from "helpers/cart/cart.context";
import DisplayStars from "./DisplayStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faMedal } from "@fortawesome/free-solid-svg-icons";

interface DisplayItemProps {
  dealOffers?: any;
}

const DisplayItem: React.FC<DisplayItemProps> = ({ dealOffers: any }) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
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
    if (qty < currentProduct.quantity) {
      setQty(qty + 1);
      setStock("InStock");
    } else {
      setStock("Out of Stock !");
    }
  };

  const changeQty = (e: any) => {
    setQty(parseInt(e.target.value));
  };

  // Define functions for navigating to the next and previous products
  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % dealOffers.length);
    setQty(1);
  };

  const prevProduct = () => {
    setCurrentProductIndex(
      (prevIndex) => (prevIndex - 1 + dealOffers.length) % dealOffers.length
    );
    setQty(1);
  };

  // Dummy data (you can replace this with your actual data)
  const dealOffers = [
    {
      id: 1,
      offerCode: "OFF01",
      productName: "shirt",
      model: "8724bc",
      title: "Get extra $35 off on first Orders",
      description: `Use code "OFF01" Min. Cart Value $75 | Max. Discount $35,lkasdjflkasjdfl 
      ajsdflk ajsldkfj lasijd fklasjfkljasdlfjasdflijelwfjk;sdjlkxzvzxnv,mznxc
      ,mvnlksajdfklasjfoiweuroiwerj asdf lksadjflsajdflisjdfjaskdfjlsidfjksadjflsjdfls`,
      discount: 1,
      price: 23424,
      totalReview: 15123,
      quantity: 5,
      stock: "InStock",
      stars: 3,
      productImages: [
        { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
        { img: "/images/layout-2/product/3.jpg", category: "Bag" },
        { img: "/images/layout-2/product/4.jpg", category: "Tools" },
        { img: "/images/layout-2/product/5.jpg", category: "Grocery" },
        { img: "/images/layout-2/product/6.jpg", category: "Camera" },
        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/9.jpg", category: "cardigans" },
      ],
    },
    {
      id: 2,
      offerCode: "OFF02",
      productName: "pant",
      model: "8724bc",
      title: "Flat 20% off on selected items",
      description: 'Use code "OFF02" fdslkjaldjflasdkjfkadsj 20% discount tag',
      discount: 5,
      price: 234,
      totalReview: 234,
      quantity: 133,
      stock: "InStock",
      stars: 2,
      productImages: [
        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/9.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
        { img: "/images/layout-2/product/3.jpg", category: "Bag" },
        { img: "/images/layout-2/product/4.jpg", category: "Tools" },
        { img: "/images/layout-2/product/5.jpg", category: "Grocery" },
        { img: "/images/layout-2/product/6.jpg", category: "Camera" },
      ],
    },
    {
      id: 3,
      offerCode: "OFF03",
      productName: "machine",
      model: "8724bc",
      title: "Summer Sale: Enjoy 25% off on clothing",
      description: 'Use code "sakfjklsdjflsdfjasd products',
      discount: 13,
      price: 234,
      totalReview: 141,
      quantity: 13,
      stock: "InStock",
      stars: 5,
      productImages: [
        { img: "/images/layout-2/product/4.jpg", category: "Tools" },
        { img: "/images/layout-2/product/5.jpg", category: "Grocery" },
        { img: "/images/layout-2/product/6.jpg", category: "Camera" },
        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/9.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
        { img: "/images/layout-2/product/3.jpg", category: "Bag" },
      ],
    },
    {
      id: 4,
      offerCode: "OFF04",
      productName: "computer",
      model: "87246bv",
      title: "Flash Sale: Additional 10% off on electronics",
      description:
        "Use code skldjaflasdjflijasdfkljsd today on electronics items",
      discount: 14,
      price: 1243,
      totalReview: 124,
      quantity: 12,
      stock: "InStock",
      stars: 1,
      productImages: [
        { img: "/images/layout-2/product/5.jpg", category: "Grocery" },
        { img: "/images/layout-2/product/6.jpg", category: "Camera" },
        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/9.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
        { img: "/images/layout-2/product/3.jpg", category: "Bag" },
        { img: "/images/layout-2/product/4.jpg", category: "Tools" },
      ],
    },
    {
      id: 5,
      offerCode: "OFF05",
      productName: "device",
      model: "87246bv",
      title: "Free Shipping on all orders above $50",
      description:
        'Use code "OFF05" Applicable on orders with cart value over $50',
      discount: 5,
      price: 1234,
      totalReview: 141,
      quantity: 131,
      stock: "InStock",
      stars: 1.5,
      productImages: [
        { img: "/images/layout-2/product/6.jpg", category: "Camera" },
        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/9.jpg", category: "cardigans" },

        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/9.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
      ],
    },
    {
      id: 6,
      offerCode: "OFF06",
      productName: "electronics",
      model: "87246bv",
      title: "Big Savings: $50 off on orders over $150",
      description: 'Use code "OFF06" Minimum cart value $150 required',
      discount: 34,
      price: 2534,
      totalReview: 342,
      quantity: 20,
      stock: "InStock",
      stars: 2.5,
      productImages: [
        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/9.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/9.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
        { img: "/images/layout-2/product/3.jpg", category: "Bag" },
      ],
    },
    {
      id: 7,
      offerCode: "OFF07",
      productName: "two piece",
      model: "87246bv",
      title: "Weekend Special: 15% off on all categories",
      description: 'Use code "OFF07" Valid only on weekends',
      discount: 1,
      price: 5234,
      totalReview: 5123,
      quantity: 122133,
      stock: "InStock",
      stars: 3.5,
      productImages: [
        { img: "/images/layout-2/product/6.jpg", category: "Camera" },
        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/1.jpg", category: "Flower" },
        { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
        { img: "/images/layout-2/product/3.jpg", category: "Bag" },
        { img: "/images/layout-2/product/4.jpg", category: "Tools" },
        { img: "/images/layout-2/product/5.jpg", category: "Grocery" },
      ],
    },
    {
      id: 8,
      offerCode: "OFF08",
      productName: "big machines",
      model: "87223sr",
      title: "Clearance Sale: Up to 30% off on clearance items",
      description: 'Use code "OFF08" Limited stock available',
      discount: 15,
      price: 779,
      totalReview: 28,
      quantity: 2346,
      stock: "InStock",
      stars: 4.5,
      productImages: [
        { img: "/images/layout-2/product/1.jpg", category: "Flower" },
        { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
        { img: "/images/layout-2/product/3.jpg", category: "Bag" },
        { img: "/images/layout-2/product/4.jpg", category: "Tools" },
        { img: "/images/layout-2/product/5.jpg", category: "Grocery" },
        { img: "/images/layout-2/product/6.jpg", category: "Camera" },
        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
      ],
    },
    {
      id: 9,
      offerCode: "OFF09",
      productName: "shirt",
      model: "87223sr",
      title: "Back to School: 10% off on stationery",
      description: 'Use code "OFF09" Applicable on stationery items',
      discount: 15,
      price: 779,
      totalReview: 28,
      quantity: 2346,
      stock: "InStock",
      stars: 1,
      productImages: [
        { img: "/images/layout-2/product/1.jpg", category: "Flower" },
        { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
        { img: "/images/layout-2/product/3.jpg", category: "Bag" },
        { img: "/images/layout-2/product/4.jpg", category: "Tools" },
        { img: "/images/layout-2/product/5.jpg", category: "Grocery" },
        { img: "/images/layout-2/product/6.jpg", category: "Camera" },
        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
      ],
    },
    {
      id: 10,
      offerCode: "OFF10",
      productName: "shirt",
      model: "87223sr",
      title: "Repeat Customer: $5 off on every repeat order",
      description: 'Use code "OFF10" Valid for repeat customers only',
      discount: 15,
      price: 779,
      totalReview: 28,
      quantity: 26,
      stock: "InStock",
      stars: 2,
      productImages: [
        { img: "/images/layout-2/product/1.jpg", category: "Flower" },
        { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
        { img: "/images/layout-2/product/3.jpg", category: "Bag" },
        { img: "/images/layout-2/product/4.jpg", category: "Tools" },
        { img: "/images/layout-2/product/5.jpg", category: "Grocery" },
        { img: "/images/layout-2/product/6.jpg", category: "Camera" },
        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
      ],
    },
    {
      id: 11,
      offerCode: "OFF02",
      productName: "shirt",
      model: "87246bv",
      title: "Flat 20% off on selected items",
      description:
        'Use code "OFF02" Valid on items marked with 20% discount tag',
      discount: 15,
      price: 779,
      totalReview: 28,
      quantity: 234623,
      stock: "InStock",
      stars: 2,
      productImages: [
        { img: "/images/layout-2/product/1.jpg", category: "Flower" },
        { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
        { img: "/images/layout-2/product/3.jpg", category: "Bag" },
        { img: "/images/layout-2/product/4.jpg", category: "Tools" },
        { img: "/images/layout-2/product/5.jpg", category: "Grocery" },
        { img: "/images/layout-2/product/6.jpg", category: "Camera" },
        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/9.jpg", category: "cardigans" },
      ],
    },
    {
      id: 12,
      offerCode: "OFF02",
      productName: "shirt",
      model: "87246bv",
      title: "Flat 20% off on selected items",
      description:
        'Use code "OFF02" Valid on items marked with 20% discount tag',
      discount: 15,
      price: 779,
      totalReview: 28,
      quantity: 123,
      stock: "InStock",
      stars: 2,
      productImages: [
        { img: "/images/layout-2/product/1.jpg", category: "Flower" },
        { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
        { img: "/images/layout-2/product/3.jpg", category: "Bag" },
        { img: "/images/layout-2/product/4.jpg", category: "Tools" },
        { img: "/images/layout-2/product/5.jpg", category: "Grocery" },
        { img: "/images/layout-2/product/6.jpg", category: "Camera" },
        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/9.jpg", category: "cardigans" },
      ],
    },
    {
      id: 13,
      offerCode: "OFF02",
      productName: "shirt",
      model: "87246bv",
      title: "Flat 20% off on selected items",
      description:
        'Use code "OFF02" Valid on items marked with 20% discount tag',
      discount: 15,
      price: 779,
      totalReview: 28,
      quantity: 123,
      stock: "InStock",
      stars: 2,
      productImages: [
        { img: "/images/layout-2/product/1.jpg", category: "Flower" },
        { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
        { img: "/images/layout-2/product/3.jpg", category: "Bag" },
        { img: "/images/layout-2/product/4.jpg", category: "Tools" },
        { img: "/images/layout-2/product/5.jpg", category: "Grocery" },
        { img: "/images/layout-2/product/6.jpg", category: "Camera" },
        { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
        { img: "/images/layout-2/product/9.jpg", category: "cardigans" },
      ],
    },
  ];

  // Retrieve the current product based on the index
  const currentProduct = dealOffers[currentProductIndex];

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
                          src={
                            currentProduct.productImages[selectedImageIndex].img
                          }
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
                          {currentProduct.productImages.map(
                            (img: any, i: any) => (
                              <div key={i}>
                                <img
                                  id="thumbnilImage"
                                  src={img.img}
                                  alt=""
                                  className="img-fluid image_zoom_cls-0"
                                  style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                  }}
                                  onClick={() => setSelectedImageIndex(i)} // Add this line
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
                  <h2>{currentProduct.productName}</h2>
                  <h5>Model: {currentProduct.model}</h5>
                </div>
                {/* Display other product details */}
                <div className="price-box">
                  <h3 className="fs-5">
                    {symbol}
                    {(
                      (currentProduct.price -
                        currentProduct.price *
                          (currentProduct.discount / 100)) *
                      value
                    ).toFixed(2)}
                  </h3>{" "}
                  <h4 className="fs-6">
                    <del>
                      {symbol}
                      {currentProduct.price * value}
                    </del>
                    <span>{currentProduct.discount}% off</span>
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
                      currentProduct.quantity > 0 ? "stock" : "out-stock"
                    }
                  >
                    <a href="#">{currentProduct.stock}</a>
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
                  {/* {currentProduct.stock !== "InStock" ? (
                <span className="instock-cls">{currentProduct.stock}</span>
              ) : (
                ""
              )} */}
                  <hr className="mt-2 mb-0" />
                  <h6 className="product-title mt-2">quantity</h6>
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
                {/* Display product details */}
                {/* <div className="border-product">
              <h6 className="product-title">product details</h6>
              <p className="text-secondary">
                {currentProduct.description.substring(0, 30)}
                {currentProduct.description.length > 30 ? "..." : ""}
              </p>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayItem;
