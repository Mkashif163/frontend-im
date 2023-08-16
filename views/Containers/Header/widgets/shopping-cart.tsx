import React, { useState, Fragment } from "react";

import { CartContext } from "../../../../helpers/cart/cart.context";
import Link from "next/link";
import { Media } from "reactstrap";
import { useTranslation } from "react-i18next";
import { CurrencyContext } from "../../../../helpers/currency/CurrencyContext";

const ShoppingCart = ({ position, cartDisplay, layout }) => {
  const [openSide, setOpenSide] = useState(false);
  const { cartItems, removeFromCart, cartTotal } = React.useContext(CartContext);
  const { selectedCurr } = React.useContext(CurrencyContext);
  const symbol = selectedCurr.symbol;
  const { t } = useTranslation();

  return (
    <Fragment>
      {layout === "layout3" ? (
        <li
          className="mobile-cart cart-hover-div"
          onClick={() => {
            setOpenSide(true);
            document.body.style.overflow = "hidden";
          }}>
          <a href="#">
            <span className="cart-item">{cartItems.length}</span>
            <i className="icon-shopping-cart"></i>
          </a>
        </li>
      ) : (
        <div
          className="cart-block cart-hover-div"
          onClick={() => {
            setOpenSide(true);
            document.body.style.overflow = "hidden";
          }}>
          <div className="cart ">
            <span className="cart-product"> {cartItems.length} </span>
            <ul>
              <li className="mobile-cart">
                <a href="#">
                  <i className="icon-shopping-cart "></i>
                </a>
              </li>
            </ul>
          </div>
          <div className={`cart-item ${cartDisplay}`}>
            <h5>{t("shopping")}</h5>
            <h5>{t("cart")}</h5>
          </div>
        </div>
      )}

      <div id="cart_side" className={`add_to_cart ${position} ${openSide ? "open-side" : ""} `}>
        <a
          href="#"
          className="overlay"
          onClick={() => {
            setOpenSide(false);
            document.body.style.overflow = "visible";
          }}></a>
        <div className="cart-inner">
          <div className="cart_top">
            <h3>my cart</h3>
            <div
              className="close-cart"
              onClick={() => {
                setOpenSide(false);
                document.body.style.overflow = "visible";
              }}>
              <a href="#">
                <i className="fa fa-times" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="cart_media">
            <ul className="cart_product">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <li key={`cart-popup-${index}`}>
                    <div className="media">
                      <a href="#">
                        <Media alt="" className="me-3" src={`/images/${item.images[0].src}`} />
                      </a>
                      <div className="media-body">
                        <a href="#">
                          <h4>{item.title}</h4>
                        </a>
                        <h4>
                          <span>
                            {item.qty} x {symbol} {item.price}
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="close-circle">
                      <a href="#" onClick={() => removeFromCart(item)}>
                        <i className="ti-trash" aria-hidden="true"></i>
                      </a>
                    </div>
                  </li>
                ))
              ) : (
                <h2>No item in cart</h2>
              )}
            </ul>
            {!!cartItems.length && (
              <ul className="cart_total">
                <li>
                  <div className="total">
                    <h5>
                      subtotal :{" "}
                      <span>
                        {symbol} {cartTotal * selectedCurr.value}
                      </span>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="buttons">
                    <Link href="/pages/account/cart">
                      <a
                        className="btn btn-normal btn-xs view-cart"
                        onClick={() => {
                          document.body.style.overflow = "visible";
                        }}>
                        view cart
                      </a>
                    </Link>
                    <Link href="/pages/account/checkout">
                      <a
                        className="btn btn-normal btn-xs checkout"
                        onClick={() => {
                          document.body.style.overflow = "visible";
                        }}>
                        checkout
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShoppingCart;
