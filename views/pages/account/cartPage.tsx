import React, { useState } from "react";
import { NextPage } from "next";
import { CartContext } from "../../../helpers/cart/cart.context";
import Breadcrumb from "../../../views/Containers/Breadcrumb";
import { CurrencyContext } from "helpers/currency/CurrencyContext";

const CartPage: NextPage = () => {
  const { cartItems, updateQty, removeFromCart, cartTotal } = React.useContext(CartContext);
  const { selectedCurr } = React.useContext(CurrencyContext);
  const { symbol, value } = selectedCurr;
  const [quantityError, setQuantityError] = useState<Boolean>(false);
  const handleQtyUpdate = (item, quantity) => {
    if (quantity >= 1) {
      setQuantityError(false);
      updateQty(item, quantity);
    } else {
      setQuantityError(true);
    }
  };
  return (
    <>
      <Breadcrumb parent="home" title="cart" />
      <section className="cart-section section-big-py-space bg-light">
        <div className="custom-container">
          {cartItems && cartItems.length > 0 ? (
            <>
              <div className="row">
                <div className="col-sm-12">
                  <table className="table cart-table table-responsive-xs">
                    <thead>
                      <tr className="table-head">
                        <th scope="col">image</th>
                        <th scope="col">product name</th>
                        <th scope="col">price</th>
                        <th scope="col">quantity</th>
                        <th scope="col">action</th>
                        <th scope="col">total</th>
                      </tr>
                    </thead>
                    {cartItems.map((item, index) => (
                      <tbody key={`cart-list-${index}`}>
                        <tr>
                          <td>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              <img src={`/images/${item.images[0].src}`} alt="cart" className=" " />
                            </a>
                          </td>
                          <td>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              {item.title}
                            </a>
                            <div className="mobile-cart-content row">
                              <div className="col-xs-3 col-3">
                                <div className="qty-box">
                                  <div className="input-group">
                                    <input type="text" name="quantity" onChange={(e) => updateQty(item, e.target.value)} className="form-control input-number" defaultValue={item.qty} />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xs-3 col-3">
                                <h2 className="td-color">
                                  {symbol}
                                  {item.price}
                                </h2>
                              </div>
                              <div className="col-xs-3 col-3">
                                <h2 className="td-color">
                                  <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                                    <i className="ti-close"></i>
                                  </a>
                                </h2>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h2>
                              {symbol}
                              {item.price}
                            </h2>
                          </td>
                          <td>
                            <div className="qty-box">
                              <div className="input-group">
                                <input
                                  type="number"
                                  name="quantity"
                                  onChange={(e) => handleQtyUpdate(item, e.target.value)}
                                  className="form-control input-number"
                                  defaultValue={item.qty}
                                  style={{ borderColor: quantityError && "red" }}
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href="#"
                              className="icon"
                              onClick={(e) => {
                                e.preventDefault();
                                removeFromCart(item);
                              }}>
                              <i className="ti-close"></i>
                            </a>
                          </td>
                          <td>
                            <h2 className="td-color">
                              {symbol}
                              {(item.total * value).toFixed(2)}
                            </h2>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                  <table className="table cart-table table-responsive-md">
                    <tfoot>
                      <tr>
                        <td>total price :</td>
                        <td>
                          <h2>${cartTotal.toFixed(2)}</h2>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="row cart-buttons">
                <div className="col-12">
                  <a href="/" className="btn btn-normal">
                    continue shopping
                  </a>
                  <a href="/pages/account/checkout" className="btn btn-normal ms-3">
                    check out
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="col-sm-12">
              <div>
                <div className="col-sm-12 empty-cart-cls text-center">
                  <img src={`static/images/icon-empty-cart.png`} className="img-fluid mb-4" alt="" />
                  <h3>
                    <strong>Your Cart is Empty</strong>
                  </h3>
                  <h4>Explore more shortlist some items.</h4>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CartPage;
