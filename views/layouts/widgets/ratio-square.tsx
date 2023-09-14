import React, { useState, useContext, useRef, useEffect } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Media, Modal, ModalBody } from "reactstrap";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import Slider from "react-slick";
import { CurrencyContext } from "../../../helpers/currency/CurrencyContext";
import { CartContext } from "../../../helpers/cart/cart.context";
import Link from "next/link";
import { WishlistContext } from "helpers/wishlist/wish.context";
import { CompareContext } from "helpers/compare/compare.context";
import { useRouter } from "next/router";
import { set } from "react-hook-form";

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
  slidesToShow: 5,
  centerPadding: "15px",
  responsive: [
    {
      breakpoint: 1470,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
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
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};



const RatioSquare: NextPage = () => {
  const currencyContext = useContext(CurrencyContext);
  const { selectedCurr } = currencyContext;
  const [activeTab, setActiveTab] = useState("new products");
  const [modal, setModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [stockState, setStockState] = useState("InStock");
  const { addToWish } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const { addToCompare } = useContext(CompareContext);
  const router = useRouter();
  const [selected, setSelected] = useState("motors");
  const [dataR, setDataR] = useState([]);
  const [loading, setLoading] = useState(true);
  const uniqueSize = [];
  const uniqueColor = [];

  const slider2 = useRef<Slider>();
  const collection = [];

  const changeColorVar = (img_id) => {
    slider2.current.slickGoTo(img_id);
  };

  const minusQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setStockState("InStock");
    }
  };

  const plusQty = (stock) => {
    if (stock > quantity) setQuantity(quantity + 1);
    else setStockState("Out of Stock !");
  };

  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const QuickView = () => {
    setModal(!modal);
  };
 
  useEffect(() => {  
    const apiUrl = `http://18.234.66.77/api/search/product/${selected}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Handle the data from the API here
        setDataR(data.data); // Assuming data is an array in the response
        setLoading(false);
        console.log("Fetched Data from API:", dataR);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        setLoading(false);
      });
  }
  , [selected]);



  
  return (
    <section className="ratio_square">
      <div className="custom-container  section-pb-space">
        <div className="b-g-white px-3 pb-3">
          <Row>
            <Col className="p-0">
              <div className="theme-tab product">
                <Nav tabs className="tab-title media-tab">
                    <NavItem >
                      <NavLink className={activeTab === c ? "active" : ""} onClick={() => setActiveTab(c)}>
                        Featured
                      </NavLink>
                    </NavItem>
                    <NavItem >
                      <NavLink className={activeTab === c ? "active" : ""} onClick={() => setActiveTab(c)}>
                        Popular
                      </NavLink>
                    </NavItem>
                    <NavItem >
                      <NavLink className={activeTab === c ? "active" : ""} onClick={() => setActiveTab(c)}>
                        On Sale
                      </NavLink>
                    </NavItem>
                </Nav>
              </div>
              <div className="tab-content-cls">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId={activeTab}>
                    <Slider {...settings}>
                      {dataR &&
                        dataR.map((item, i) => (
                          <div key={i}>
                            <div className="media-banner media-banner-1 border-0">
                              <div className="media-banner-box">
                                <div className="media">
                                  <Link href={`/product-details/${item.id}`}>
                                    <img src={`${item.url ? item.url : "pro3/3.jpg"}`} width="80" height="80" className="img-fluid " alt="banner" />
                                  </Link>
                                  <div className="media-body">
                                    <div className="media-contant">
                                      <div>
                                        <div className="product-detail">
                                          <ul className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                          </ul>
                                          <Link href={`/product-details/${item.id}`}>
                                            <p>{item.name}</p>
                                          </Link>
                                          <h6>
                                            {" "}
                                            {selectedCurr.symbol}
                                            {(item.new_sale_price).toFixed(2)}{" "}
                                            <span>
                                              {selectedCurr.symbol}
                                              {(item.new_price).toFixed(2)}
                                            </span>
                                          </h6>
                                        </div>
                                        <div className="cart-info">
                                          <button onClick={() => addToCart(item)}>
                                            <i className="ti-bag"></i>
                                          </button>
                                          <a onClick={() => addToWish(item)}>
                                            <i className="ti-heart" aria-hidden="true"></i>
                                          </a>
                                          <a href="#" title="Quick View" onClick={() => QuickView()}>
                                            <i className="ti-search" aria-hidden="true"></i>
                                          </a>
                                          <a href="#" title="Compare" onClick={() => addToCompare(item)}>
                                            <i className="fa fa-exchange" aria-hidden="true"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="media-banner-box">
                                <div className="media">
                                  <Link href={`/product-details/${item.id}`}>
                                    <img src={`${item.url ? item.url : "pro3/3.jpg"}`} width="80" height="80" className="img-fluid " alt="banner" />
                                  </Link>
                                  <div className="media-body">
                                    <div className="media-contant">
                                      <div>
                                        <div className="product-detail">
                                          <ul className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                          </ul>
                                          <Link href={`/product-details/${item.id}`}>
                                            <p>{item.name}</p>
                                          </Link>
                                          <h6>
                                            {" "}
                                            {selectedCurr.symbol}
                                            {(item.new_sale_price).toFixed(2)}{" "}
                                            <span>
                                              {selectedCurr.symbol}
                                              {(item.new_price).toFixed(2)}
                                            </span>
                                          </h6>
                                        </div>
                                        <div className="cart-info">
                                          <button onClick={() => addToCart(item)}>
                                            <i className="ti-bag"></i>
                                          </button>
                                          <a onClick={() => addToWish(item)}>
                                            <i className="ti-heart" aria-hidden="true"></i>
                                          </a>
                                          <a href="#" title="Quick View" onClick={() => QuickView()}>
                                            <i className="ti-search" aria-hidden="true"></i>
                                          </a>
                                          <a href="#" title="Compare" onClick={() => addToCompare(item)}>
                                            <i className="fa fa-exchange" aria-hidden="true"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="media-banner-box">
                                <div className="media">
                                  <Link href={`/product-details/${item.id}`}>
                                    <img src={`${item.url ? item.url : "pro3/3.jpg"}`} width="80" height="80" className="img-fluid " alt="banner" />
                                  </Link>
                                  <div className="media-body">
                                    <div className="media-contant">
                                      <div>
                                        <div className="product-detail">
                                          <ul className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                          </ul>
                                          <Link href={`/product-details/${item.id}`}>
                                            <p>{item.name}</p>
                                          </Link>
                                          <h6>
                                            {" "}
                                            {selectedCurr.symbol}
                                            {(item.new_sale_price).toFixed(2)}{" "}
                                            <span>
                                              {selectedCurr.symbol}
                                              {(item.new_price).toFixed(2)}
                                            </span>
                                          </h6>
                                        </div>
                                        <div className="cart-info">
                                          <button onClick={() => addToCart(item)}>
                                            <i className="ti-bag"></i>
                                          </button>
                                          <a onClick={() => addToWish(item)}>
                                            <i className="ti-heart" aria-hidden="true"></i>
                                          </a>
                                          <a href="#" title="Quick View" onClick={() => QuickView()}>
                                            <i className="ti-search" aria-hidden="true"></i>
                                          </a>
                                          <a href="#" title="Compare" onClick={() => addToCompare(item)}>
                                            <i className="fa fa-exchange" aria-hidden="true"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Modal className="fade bd-example-modal-lg theme-modal show quick-view-modal" isOpen={modal} toggle={() => setModal(!modal)} centered size="lg">
                              <ModalBody>
                                <button type="button" className="close" onClick={() => setModal(!modal)}>
                                  <span>&times;</span>
                                </button>
                                <div className="row">
                                  <div className="col-lg-6 col-xs-12">
                                    <Slider ref={(slider) => (slider2.current = slider)}>
                                      {item &&
                                        item.images.map((img: any, i: any) => {
                                          return (
                                            <div key={i}>
                                              <Media src={`/images/${img.src}`} alt="" className="img-fluid  image_zoom_cls-0" />
                                            </div>
                                          );
                                        })}
                                    </Slider>
                                  </div>
                                  <div className="col-lg-6 rtl-text">
                                    <div className="product-right">
                                      <h2>{item?.title}</h2>
                                      <h3>${item?.price}</h3>
                                      <ul className="color-variant">
                                        {uniqueColor.map((vari, i) => {
                                          return <li className={vari.color} key={i} title={vari.color} onClick={() => changeColorVar(i)}></li>;
                                        })}
                                      </ul>
                                      <div className="border-product">
                                        <h6 className="product-title">product details</h6>
                                        <p>{item?.description}</p>
                                      </div>
                                      <div className="product-description border-product">
                                        <div className="size-box">
                                          <ul>
                                            {uniqueSize.map((size, i) => (
                                              <li key={i}>
                                                <a href="#" onClick={(e) => e.preventDefault()}>
                                                  {size}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        {stockState !== "InStock" ? <span className="instock-cls">{stockState}</span> : ""}
                                        <h6 className="product-title">quantity</h6>
                                        <div className="qty-box">
                                          <div className="input-group">
                                            <span className="input-group-prepend">
                                              <button type="button" className="btn quantity-left-minus" onClick={minusQty}>
                                                <i className="ti-angle-left"></i>
                                              </button>
                                            </span>
                                            <input type="text" name="quantity" className="form-control input-number" value={quantity} onChange={changeQty} />
                                            <span className="input-group-prepend">
                                              <button type="button" className="btn quantity-right-plus" onClick={() => plusQty(item.stock)}>
                                                <i className="ti-angle-right"></i>
                                              </button>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="product-buttons">
                                        s
                                        <a href="#" className="btn btn-normal" onClick={() => addToCart(item, quantity)}>
                                          add to cart
                                        </a>
                                        {/* <a href="#" className="btn btn-normal" onClick={() => clickProductDetail(item)}>
                                          view detail
                                        </a> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </ModalBody>
                            </Modal>
                          </div>
                        ))}
                    </Slider>
                  </TabPane>
                </TabContent>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default RatioSquare;
