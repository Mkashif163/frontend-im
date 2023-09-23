import React, { useState } from "react";
import { NextPage } from "next";
import { Media, Row, Col } from "reactstrap";

const OrderComponent = () => {
  return (
    <>
      <div className="bg-light">
        <section className="cart-section order-history section-big-py-space">
          <div className="custom-container">
            <div className="table-responsive">
              <table className="table cart-table">
                <thead>
                  <tr className="table-head">
                    <th className="col">Order #</th>
                    <th className="col">Product Image</th>
                    <th className="col">Product Name</th>
                    <th className="col">Model No.</th>
                    <th className="col">Order Placed On</th>
                    <th className="col">Shipping Date</th>
                    <th className="col">Supplier Store Name (Profile Link)</th>
                    <th className="col">Quantity</th>
                    <th className="col">Price</th>
                    <th className="col">Grand Total</th>
                    <th className="col">RETURN / REFUND</th>
                    <th className="col">Write a Review</th>
                    <th className="col">Status</th>
                    <th className="col">Action Buttons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      <span className="dark-data">15454841</span>{" "}
                    </td>
                    <td>
                      <a href="#">
                        <Media
                          src="/images/product-sidebar/001.jpg"
                          alt="product"
                          className="img-fluid"
                        />
                      </a>
                    </td>
                    <td>
                      <a href="#">cotton shirt</a>
                    </td>
                    <td>
                      <h4>
                        {" "}
                        <span className="dark-data">15454841</span> <br />
                      </h4>
                    </td>
                    <td>
                      <span>14 january 2023</span>
                    </td>
                    <td>
                      <span className="dark-data">Delivered</span> (jul 01,
                      2019)
                    </td>
                    <td>
                      <p>store name</p>
                      <a href="#">store link</a>
                    </td>
                    <td>
                      <p>3</p>
                    </td>
                    <td>
                      <h4 className="td-color">$63.00</h4>
                    </td>
                    <td>
                      <h4 className="td-color">$80.00</h4>
                    </td>
                    <td className="col">RETURN / REFUND</td>
                    <td className="col">Write a Review</td>
                    <td className="col">Status</td>
                    <td>
                      <a href="#" className="btn btn-sm btn-primary">Status</a>
                      <span className="me-2 ms-2">|</span>
                      <a href="#" className="btn btn-sm btn-info text-white">
                        Invoice
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Row className="cart-buttons">
              <Col xs="8" className="pull-right">
                <a href="" className="btn btn-normal btn-sm">
                  show all orders
                </a>
              </Col>
            </Row>
          </div>
        </section>
        {/* <!--section end--> */}
      </div>
    </>
  );
};

export default OrderComponent;
