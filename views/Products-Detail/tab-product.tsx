import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Form, Input, Label } from "reactstrap";


interface ProductDeskProps {
  item: any;
}

const TabProduct: React.FC<ProductDeskProps> = ({ item }) => {
  const [activeTab, setActiveTab] = useState("1");

  const product = item;

  return (
    <>
      {product && <section className="tab-product tab-exes creative-card creative-inner mb-0">
        <Row>
          <Col sm="12" lg="12">
            <Nav tabs className="nav-material" id="top-tab" role="tablist">
              <NavItem>
                <NavLink className={activeTab === "1" ? "active" : ""} onClick={() => setActiveTab("1")}>
                  Description
                  <div className="material-border"></div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === "2" ? "active" : ""} onClick={() => setActiveTab("2")}>
                  Write Review
                  <div className="material-border"></div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === "3" ? "active" : ""} onClick={() => setActiveTab("3")}>
                  Specification
                  <div className="material-border"></div>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="nav-material" activeTab={activeTab}>
              <TabPane tabId="1">
                <p className="ps-0">
                  {product.description}
                </p>
              </TabPane>
              <TabPane tabId="2">
                <Form>
                  <div className="form-row row">
                    <Col md="12">
                      <div className="media">
                        <Label className="mb-0">Rating</Label>
                        <div className="media-body ms-3">
                          <div className="rating three-star">
                            <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md="6">
                      <Label htmlFor="name">Name</Label>
                      <Input type="text" className="form-control" id="name" placeholder="Enter Your name" required />
                    </Col>
                    <Col md="6">
                      <Label htmlFor="email">Email</Label>
                      <Input type="text" className="form-control" id="email" placeholder="Email" required />
                    </Col>
                    <Col md="12">
                      <Label htmlFor="review">Review Title</Label>
                      <Input type="text" className="form-control" id="review" placeholder="Enter your Review Subjects" required />
                    </Col>
                    <Col md="12">
                      <Label htmlFor="review">Review Title</Label>
                      <textarea className="form-control" rows={4} placeholder="Write Your Testimonial Here" id="exampleFormControlTextarea1"></textarea>
                    </Col>
                    <Col md="12">
                      <button className="btn btn-normal" type="submit">
                        Submit YOur Review
                      </button>
                    </Col>
                  </div>
                </Form>
              </TabPane>
              <TabPane tabId="3">
                <div className="single-product-tables container-fluid">
                  {/* Heading */}
                  <div className="row mb-4">
                    <div className="col-12 text-center">
                      <h5>Specification of {product.name}</h5>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="row">
                    <div className="col-md-8 offset-md-2"> {/* This will center the table with a width of 8/12 of the parent */}
                      <table className="table table-bordered w-100">
                        <tbody>
                          <tr>
                            <th scope="row">Sku</th>
                            <td>{product.sku}</td>
                          </tr>
                          <tr>
                            <th scope="row">Color</th>
                            <td>{product.colors}</td>
                          </tr>
                          <tr>
                            <th scope="row">Weight {product.weight_unit}</th>
                            <td>{product.weight} {product.weight_unit}</td>
                          </tr>
                          <tr>
                            <th scope="row">Dimensions ({product.m_unit})</th>
                            <td>Width: {product.width}</td>
                          </tr>
                          <tr>
                            <th scope="row">Height</th>
                            <td>{product.height}</td>
                          </tr>
                          <tr>
                            <th scope="row">Slug</th>
                            <td>{product.slug}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </TabPane>

            </TabContent>
          </Col>
        </Row>
      </section>
      }
    </>
  );
};

export default TabProduct;
