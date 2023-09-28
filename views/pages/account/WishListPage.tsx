import React from "react";
import { NextPage } from "next";
import { CartContext } from "../../../helpers/cart/cart.context";
import { WishlistContext } from "../../../helpers/wishlist/wish.context";
import { Row, Col, Table } from "reactstrap";
import Link from "next/link";
import { CurrencyContext } from "helpers/currency/CurrencyContext";

const WishListPage: NextPage = () => {
  const { wishlistItems, removeFromWish } = React.useContext(WishlistContext);
  const { addToCart } = React.useContext(CartContext);
  const { selectedCurr } = React.useContext(CurrencyContext);
  const { symbol, value } = selectedCurr;

  const handleAddCart = (item) => {
    addToCart(item);
    removeFromWish(item);
  };
  return (
    <>
      <section className="wishlist-section section-big-py-space ">
        <div className="custom-container">
          {wishlistItems && wishlistItems.length > 0 ? (
            <>
              <Row>
                <Col sm="12">
                  <Table className="table cart-table table-responsive-xs">
                    <thead>
                      <tr className="table-head">
                        <th scope="col">image</th>
                        <th scope="col">product name</th>
                        <th scope="col">price</th>
                        <th scope="col">availability</th>
                        <th scope="col">action</th>
                      </tr>
                    </thead>
                    {wishlistItems.map((item, index) => (
                      <tbody key={index}>
                        <tr>
                          <td>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                              }}>
                              <img src={item.url} alt="product" className="img-fluid" />
                            </a>
                          </td>
                          <td>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                              }}>
                              {item.name}
                            </a>
                            <Row className="mobile-cart-content row">
                              <Col xs="3" className="col-xs-3 col-3">
                                <p>in stock</p>
                              </Col>
                              <Col xs="3" className="col-xs-3 col-3">
                                <h2 className="td-color">
                                  {symbol}
                                  {item.new_sale_price}
                                </h2>
                              </Col>
                              <Col xs="3" className="col-xs-3 col-3">
                                <h2 className="td-color">
                                  <a
                                    href="#"
                                    className="icon me-1"
                                    onClick={(e) => {
                                      e.preventDefault();
                                    }}>
                                    <i className="ti-close"></i>{" "}
                                  </a>
                                  <a
                                    href="#"
                                    className="cart"
                                    onClick={(e) => {
                                      e.preventDefault();
                                    }}>
                                    <i className="ti-shopping-cart"></i>
                                  </a>
                                </h2>
                              </Col>
                            </Row>
                          </td>
                          <td>
                            <h2>
                              {symbol}
                              {item.new_sale_price}
                            </h2>
                          </td>
                          <td>
                            <p>in stock</p>
                          </td>
                          <td>
                            <a
                              href="#"
                              className="icon me-3"
                              onClick={(e) => {
                                e.preventDefault();
                                removeFromWish(item);
                              }}>
                              <i className="ti-close"></i>
                            </a>
                            <a
                              href="#"
                              className="cart"
                              onClick={(e) => {
                                e.preventDefault();
                                handleAddCart(item);
                              }}>
                              <i className="ti-shopping-cart"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </Table>
                </Col>
              </Row>
              <Row className="wishlist-buttons">
                <Col xs="12">
                  <Link href="/collections/leftsidebar">
                    <a className="btn btn-normal">continue shopping</a>
                  </Link>
                  <Link href="/pages/account/checkout">
                    <a className="btn btn-normal">check out</a>
                  </Link>
                </Col>
              </Row>
            </>
          ) : (
            <Col sm="12">
              <div>
                <Col sm="12" className="empty-cart-cls text-center">
                  <img src="/images/empty-wishlist.png" className="img-fluid mb-4" alt="" />
                  <h3>
                    <strong>Your wishlist is Empty</strong>
                  </h3>
                  <h4>Explore more shortlist some items.</h4>
                </Col>
              </div>
            </Col>
          )}
        </div>
      </section>
    </>
  );
};

export default WishListPage;
