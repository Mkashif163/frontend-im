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
                  Specification
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
              </TabPane>
              <TabPane tabId="2">
                <h5 className="mt-5 text-align-center">Specification</h5>
                <div className="single-product-tables" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}>

                  <table
                    style={{
                      borderCollapse: 'collapse',
                      width: '80%',
                      transition: 'transform 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <tbody>
                      <tr style={{ border: '1px solid #ccc' }}>
                        <td style={{ backgroundColor: '#f2f2f2', padding: '5px', border: '1px solid #ccc' }}>
                          <strong>Sku</strong>
                        </td>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>{product.sku}</td>
                      </tr>
                      <tr style={{ border: '1px solid #ccc' }}>
                        <td style={{ backgroundColor: '#f2f2f2', padding: '5px', border: '1px solid #ccc' }}>
                          <strong>Weight</strong>
                        </td>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>{product.weight} {product.weight_unit}</td>
                      </tr>
                      <tr style={{ border: '1px solid #ccc' }}>
                        <td style={{ backgroundColor: '#f2f2f2', padding: '5px', border: '1px solid #ccc' }}>
                          <strong>Dimensions ({product.m_unit})</strong>
                        </td>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>
                          <div>
                            <strong>Width:</strong> {product.width}
                          </div>
                          <div>
                            <strong>Height:</strong> {product.height}
                          </div>
                        </td>
                      </tr>
                      <tr style={{ border: '1px solid #ccc' }}>
                        <td style={{ backgroundColor: '#f2f2f2', padding: '5px', border: '1px solid #ccc' }}>
                          <strong>Slug</strong>
                        </td>
                        <td style={{ padding: '5px', border: '1px solid #ccc' }}>{product.slug}</td>
                      </tr>
                    </tbody>
                  </table>
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
