import React, { useContext, useState } from "react";
import { Col, Row, Input, Modal, ModalHeader, ModalBody } from "reactstrap";
import Slider from "react-slick";
import { CartContext } from "helpers/cart/cart.context";
import { CurrencyContext } from "helpers/currency/CurrencyContext";
import { WishlistContext } from "helpers/wishlist/wish.context";

interface OutsideImageSlickProps {
  item: any;
}

const OutsideImageSlick: React.FC<OutsideImageSlickProps> = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWish } = useContext(WishlistContext);
  const { selectedCurr } = React.useContext(CurrencyContext);
  const { symbol, value } = selectedCurr;

  const [state, setState] = useState({ nav1: null, nav2: null });

  const slider1 = React.useRef<Slider>();
  const slider2 = React.useRef<Slider>();
  React.useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, [item]);

  const [modal, setModal] = useState(false);
  const [qty, setQty] = useState(1);
  const [stock, setStock] = useState("InStock");

  const uniqueSize = [];
  const uniqueColor = [];
  const onOpenModal = () => {
    setModal(true);
  };

  const onCloseModal = () => {
    setModal(false);
  };

  const minusQty = () => {
    if (qty > 1) {
      setStock("InStock");
      setQty(qty - 1);
    }
  };

  const plusQty = () => {
    if (item.stock >= qty) {
      setQty(qty + 1);
    } else {
      setStock("Out of Stock !");
    }
  };
  const changeQty = (e: any) => {
    setQty(parseInt(e.target.value));
  };

  const { nav1, nav2 } = state;
  const changeColorVar = (img_id) => {
    slider1.current.slickGoTo(img_id);
  };
  return (
    <>
      {item ? (
        <Row>
          <Col lg="6">
            <Slider className="product-slick" asNavFor={nav2} ref={(slider) => (slider1.current = slider)}>
              {item &&
                item.images.map((img: any, i: any) => {
                  return (
                    <div key={i}>
                      <img src={`/images/${img.src}`} alt="" className="img-fluid  image_zoom_cls-0" />
                    </div>
                  );
                })}
            </Slider>
          </Col>
          <Col lg="6" className="rtl-text">
            <Row>
              <Col lg="12">
                <div className="product-right">
                  <h2>{item.title}</h2>
                  <h4>
                    <del>
                      {symbol}
                      {item.price * value}%
                    </del>
                    <span>{item.discount}% off</span>
                  </h4>
                  <h3>
                    {symbol} {((item.price - item.price * (item.discount / 100)) * value).toFixed(2)}
                  </h3>
                  <>
                    {item.variants &&
                      item.variants.map((vari) => {
                        var findItem = uniqueColor.find((x) => x.color === vari.color);
                        if (!findItem) uniqueColor.push(vari);
                        var findItemSize = uniqueSize.find((x) => x === vari.size);
                        if (!findItemSize) uniqueSize.push(vari.size);
                      })}
                    {uniqueColor.length > 0 ? (
                      <ul className="color-variant">
                        {uniqueColor.map((vari, i) => {
                          return <li className={vari.color} key={i} title={vari.color} onClick={() => changeColorVar(i)}></li>;
                        })}
                      </ul>
                    ) : (
                      ""
                    )}

                    <div className="product-description border-product">
                      <div>
                        {uniqueSize.length > 0 ? (
                          <>
                            <h6 className="product-title size-text">
                              select size{" "}
                              <span>
                                <a data-toggle="modal" data-target="#sizemodal" onClick={onOpenModal}>
                                  size chart
                                </a>
                              </span>
                            </h6>
                            <Modal isOpen={modal} toggle={onCloseModal} centered={true}>
                              <ModalHeader toggle={onCloseModal}>Sheer Straight Kurta</ModalHeader>
                              <ModalBody>
                                <div className="modal-body">
                                  <img src="/images/size-chart.jpg" alt="" className="img-fluid " />
                                </div>
                              </ModalBody>
                            </Modal>

                            <div className="size-box">
                              <ul>
                                {uniqueSize.map((size, i) => (
                                  <li key={i}>
                                    <a href="#">{size}</a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
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
                  </>
                  <div className="product-buttons">
                    <a
                      href="#"
                      className="btn btn-normal"
                      onClick={() => {
                        addToCart(item);
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
                      Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,
                    </p>
                  </div>
                  <div className="border-product  pb-0">
                    <div className="product-icon">
                      <ul className="product-social ">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-rss"></i>
                          </a>
                        </li>
                      </ul>
                      <div className="d-inline-block">
                        <button
                          className="wishlist-btn"
                          onClick={() => {
                            addToWish(item);
                          }}>
                          <i className="fa fa-heart"></i>
                          <span className="title-font">Add To WishList</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="order-up">
                <Row className="imgae-outside-thumbnail">
                  <Col xs="12">
                    <Slider className="slider-nav" asNavFor={nav1} ref={(slider) => (slider2.current = slider)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true}>
                      {item &&
                        item.images.map((img: any, i: any) => {
                          return (
                            <div key={i}>
                              <img src={`/images/${img.src}`} alt="" className="img-fluid  image_zoom_cls-0" />
                            </div>
                          );
                        })}
                    </Slider>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </>
  );
};

export default OutsideImageSlick;
