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
                <NavLink className={activeTab === "3" ? "active" : ""} onClick={() => setActiveTab("3")}>
                  Write Review
                  <div className="material-border"></div>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="nav-material" activeTab={activeTab}>
              <TabPane tabId="1">
                <p className="ps-0">
                  {product.description}
                </p>
                <div className="single-product-tables">
                  <table>
                    <tbody>
                      <tr>
                        <td>Sku</td>
                        <td>{product.sku}</td>
                      </tr>
                      {/* <tr>
                        <td>Color</td>
                        <td>{product.colors}</td>
                      </tr> */}
                      <tr>
                        <td>Weight {product.weight_unit}</td>
                        <td>{product.weight} {product.weight_unit}</td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr>
                        <td>Dimensions ({product.m_unit})</td>
                        <td>Width: {product.width}</td>
                        <td>Hieght: {product.height}</td>
                      </tr>
                      <tr>
                        <td>slug</td>
                        <td>{product.slug}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="mt-3 text-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/BUWzX78Ye_8" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
              </TabPane>
              <TabPane tabId="3">
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
            </TabContent>
          </Col>
        </Row>
      </section>
      }
    </>
  );
};

export default TabProduct;
