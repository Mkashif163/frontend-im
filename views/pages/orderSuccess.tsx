import React, { Fragment } from "react";
import { NextPage } from "next";
import { Media, Row, Col } from "reactstrap";
import Breadcrumb from "../../views/Containers/Breadcrumb";
import { CurrencyContext } from "helpers/currency/CurrencyContext";

const OrderSuccessPage: NextPage = () => {
  const items = JSON.parse(localStorage.getItem("order-sucess-items"));
  let subtotal = 0;
  items && items?.map((item) => (subtotal += parseInt(item.price)));
  const shippingCharge = 12;
  const taxRate = 5;
  const { selectedCurr } = React.useContext(CurrencyContext);
  const { symbol, value } = selectedCurr;
  const taxCharge = parseFloat(((subtotal * taxRate) / 100).toFixed(2));
  const grandTotal = subtotal + shippingCharge + taxCharge;
  var currentDate: any = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const getDateFormate = () => {
    var currentDate: any = new Date();
    var temp = new Date(currentDate.setDate(currentDate.getDate() + 1));
    return temp.getDate() + "/" + (temp.getMonth() + 1) + "/" + temp.getFullYear();
  };
  return (
    <>
      {/* <!-- thank-you section start --> */}
      <Breadcrumb title="order-success" parent="home" />
      {/* <!-- Section ends --> */}

      {/* <!-- order-detail section start --> */}
      <section className="section-big-py-space mt--5 bg-light">
        <div className="custom-container">
          {items && items.length > 0 ? (
            <Row>
              <Col lg="6">
                <div className="product-order">
                  <h3>your order details</h3>
                  <Row className="product-order-detail g-3">
                    {items.map((item, i) => {
                      return (
                        <Fragment key={i}>
                          <Col xs="3">
                            <Media src={`/images/${item.images[0].src}`} alt="" className="img-fluid " />
                          </Col>
                          <Col xs="3" className="order_detail">
                            <div>
                              <h4>product name</h4>
                              <h5>{item.title}</h5>
                            </div>
                          </Col>
                          <Col xs="3" className="order_detail">
                            <div>
                              <h4>quantity</h4>
                              <h5>{item.qty}</h5>
                            </div>
                          </Col>
                          <Col xs="3" className="order_detail">
                            <div>
                              <h4>price</h4>
                              <h5>
                                {symbol}
                                {item.price * value}
                              </h5>
                            </div>
                          </Col>
                        </Fragment>
                      );
                    })}
                  </Row>

                  <div className="total-sec">
                    <ul>
                      <li>
                        subtotal{" "}
                        <span>
                          {symbol}
                          {(subtotal * value).toFixed(2)}
                        </span>
                      </li>
                      <li>
                        shipping{" "}
                        <span>
                          {symbol}
                          {(shippingCharge * value).toFixed(2)}
                        </span>
                      </li>
                      <li>
                        tax(GST){" "}
                        <span>
                          {symbol}
                          {taxCharge * value}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="final-total">
                    <h3>
                      total{" "}
                      <span>
                        {symbol} {grandTotal * value}
                      </span>
                    </h3>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="row order-success-sec">
                  <div className="col-sm-6">
                    <h4>summery</h4>
                    <ul className="order-detail">
                      <li>order ID: 5563853658932</li>
                      <li>Order Date: October 22, 2023</li>
                      <li>Order Total: $907.28</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <h4>shipping address</h4>
                    <ul className="order-detail">
                      <li>gerg harvell</li>
                      <li>568, suite ave.</li>
                      <li>Austrlia, 235153</li>
                      <li>Contact No. 987456321</li>
                    </ul>
                  </div>
                  <div className="col-sm-12 payment-mode">
                    <h4>payment method</h4>
                    <p>Pay on Delivery (Cash/Card). Cash on delivery (COD) availabel. Card/Net banking acceptance subject to device availability.</p>
                  </div>
                  <div className="col-md-12">
                    <div className="delivery-sec">
                      <h3>expected date of delivery</h3>
                      <h2>{getDateFormate()}</h2>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <div className="col-sm-12">
              <div>
                <div className="col-sm-12 empty-cart-cls text-center">
                  <img src={`static/images/icon-empty-cart.png`} className="img-fluid mb-4" alt="" />
                  <h3 className="mb-3">
                    <strong>You are not placing any order</strong>
                  </h3>
                  <div className="row cart-buttons">
                    <div className="col-12">
                      <a href="/" className="btn btn-normal">
                        continue shopping
                      </a>
                      {items && (
                        <a href="/pages/account/checkout" className="btn btn-normal ms-3">
                          check out
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* <!-- Section ends --> */}
    </>
  );
};

export default OrderSuccessPage;
