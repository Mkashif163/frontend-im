import React from "react";
import { NextPage } from "next";
import { Media, Row, Col } from "reactstrap";
import Breadcrumb from "../../views/Containers/Breadcrumb";

const OrderHistoryPage: NextPage = () => {
  return (
    <div className="bg-light">
      {/* <!-- breadcrumb start --> */}
      <Breadcrumb title="order history" parent="home" />
      {/* <!-- breadcrumb End --> */}

      {/* <!--section start--> */}
      <section className="cart-section order-history section-big-py-space">
        <div className="custom-container">
          <Row>
            <Col sm="12">
              <table className="table cart-table table-responsive-xs">
                <thead>
                  <tr className="table-head">
                    <th scope="col">product</th>
                    <th scope="col">description</th>
                    <th scope="col">price</th>
                    <th scope="col">detail</th>
                    <th scope="col">status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="#">
                        <Media src="/images/product-sidebar/001.jpg" alt="product" className="img-fluid" />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        order no: <span className="dark-data">15454841</span> <br />
                        cotton shirt
                      </a>
                      <div className="mobile-cart-content row">
                        <div className="col-xs-3 col-3">
                          <div className="qty-box">
                            <div className="input-group">
                              <input type="text" name="quantity" className="form-control input-number" defaultValue="1" />
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-3 col-3">
                          <h4 className="td-color">$63.00</h4>
                        </div>
                        <div className="col-xs-3 col-3">
                          <h2 className="td-color">
                            <a href="#" className="icon">
                              <i className="ti-close"></i>
                            </a>
                          </h2>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h4>$63.00</h4>
                    </td>
                    <td>
                      <span>Size: L</span>
                      <br />
                      <span>Quntity: 1</span>
                    </td>
                    <td>
                      <div className="responsive-data">
                        <h4 className="price">$63.00</h4>
                        <span>Size: L</span>|<span>Quntity: 1</span>
                      </div>
                      <span className="dark-data">Delivered</span> (jul 01, 2019)
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <a href="#">
                        <Media src="/images/product-sidebar/002.jpg" alt="product" className="  img-fluid" />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        order no: <span className="dark-data">15454841</span> <br />
                        cotton shirt
                      </a>
                      <div className="mobile-cart-content row">
                        <div className="col-xs-3 col-3">
                          <div className="qty-box">
                            <div className="input-group">
                              <input type="text" name="quantity" className="form-control input-number" defaultValue="1" />
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-3 col-3">
                          <h4 className="td-color">$63.00</h4>
                        </div>
                        <div className="col-xs-3 col-3">
                          <h2 className="td-color">
                            <a href="#" className="icon">
                              <i className="ti-close"></i>
                            </a>
                          </h2>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h4>$63.00</h4>
                    </td>
                    <td>
                      <span>Size: L</span>
                      <br />
                      <span>Quntity: 1</span>
                    </td>
                    <td>
                      <div className="responsive-data">
                        <h4 className="price">$63.00</h4>
                        <span>Size: L</span>|<span>Quntity: 1</span>
                      </div>
                      <span className="dark-data">Delivered</span> (jul 01, 2019)
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>
                      <a href="#">
                        <Media src="/images/product-sidebar/001.jpg" alt="product" className="  img-fluid" />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        order no: <span className="dark-data">15454841</span> <br />
                        cotton shirt
                      </a>
                      <div className="mobile-cart-content row">
                        <div className="col-xs-3 col-3">
                          <div className="qty-box">
                            <div className="input-group">
                              <input type="text" name="quantity" className="form-control input-number" defaultValue="1" />
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-3 col-3">
                          <h4 className="td-color">$63.00</h4>
                        </div>
                        <div className="col-xs-3 col-3">
                          <h2 className="td-color">
                            <a href="#" className="icon">
                              <i className="ti-close"></i>
                            </a>
                          </h2>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h4>$63.00</h4>
                    </td>
                    <td>
                      <span>Size: L</span>
                      <br />
                      <span>Quntity: 1</span>
                    </td>
                    <td>
                      <div className="responsive-data">
                        <h4 className="price">$63.00</h4>
                        <span>Size: L</span>|<span>Quntity: 1</span>
                      </div>
                      <span className="dark-data">Delivered</span> (jul 01, 2019)
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          <Row className="cart-buttons">
            <Col xs="12" className="pull-right">
              <a href="#" className="btn btn-normal btn-sm">
                show all orders
              </a>
            </Col>
          </Row>
        </div>
      </section>
      {/* <!--section end--> */}
    </div>
  );
};

export default OrderHistoryPage;
