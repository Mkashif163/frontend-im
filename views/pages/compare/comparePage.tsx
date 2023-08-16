import React from "react";
import { NextPage } from "next";
import { Row, Col, Media, Input, Button, Table } from "reactstrap";
import Breadcrumb from "../../Containers/Breadcrumb";
import { CompareContext } from "../../../helpers/compare/compare.context";
import { CartContext } from "helpers/cart/cart.context";

const Compare: NextPage = () => {
  const { compareItems, removeFromComapre } = React.useContext(CompareContext);
  const { addToCart } = React.useContext(CartContext);

  return (
    <>
      {/* // <!-- breadcrumb start --> */}
      <Breadcrumb title="compare" parent="home" />
      {/* // <!-- breadcrumb End --> */}

      {/* // <!-- section start --> */}
      <section className="compare-padding section-big-py-space bg-light">
        <div className="custom-container">
          <Row>
            <Col sm="12">
              {compareItems && compareItems.length >= 0 ? (
                <div className="compare-page">
                  <div className="table-wrapper table-responsive">
                    <Table>
                      <thead>
                        <tr className="th-compare">
                          <td>Action</td>
                          {compareItems.map((item, i) => (
                            <td className="item-row" key={i}>
                              <Button type="button" className="remove-compare" onClick={() => removeFromComapre(item)}>
                                Remove
                              </Button>
                            </td>
                          ))}
                        </tr>
                      </thead>
                      <tbody id="table-compare">
                        <tr>
                          <th className="product-name">Product Name</th>
                          {compareItems.map((item, i) => (
                            <td className="item-row" key={i}>
                              {item.title}
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <th className="product-name">Product Image</th>
                          {compareItems.map((item, i) => (
                            <td className="item-row" key={i}>
                              <Media src={`/images/${item.images[0].src}`} alt="product" className="featured-image" />
                              <div className="product-price product_price">
                                <strong>On Sale: </strong>
                                <span>$89,00</span>
                              </div>
                              <form className="variants clearfix">
                                <Input type="hidden" />
                                <Button
                                  title="Add to Cart"
                                  className="add-to-cart btn btn-normal"
                                  onClick={() => {
                                    addToCart(item);
                                  }}>
                                  Add to Cart
                                </Button>
                              </form>
                              <p className="grid-link__title hidden">Cut Dress</p>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <th className="product-name">Product Description</th>
                          {compareItems.map((item, i) => (
                            <td className="item-row" key={i}>
                              <p className="description-compare">{item.description}</p>
                            </td>
                          ))}
                        </tr>
                        <tr>
                          <th className="product-name">Availability</th>
                          {compareItems.map((item, i) => (
                            <td className="available-stock" key={i}>
                              <p>Available In stock</p>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
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
            </Col>
          </Row>
        </div>
      </section>
      {/* <!-- Section ends --> */}
    </>
  );
};

export default Compare;
