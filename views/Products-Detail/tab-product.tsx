import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Form, Input, Label } from "reactstrap";

const TabProduct: React.FC = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <section className="tab-product tab-exes creative-card creative-inner mb-0">
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
                Video
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
              <div className="single-product-tables">
                <table>
                  <tbody>
                    <tr>
                      <td>Febric</td>
                      <td>Chiffon</td>
                    </tr>
                    <tr>
                      <td>Color</td>
                      <td>Red</td>
                    </tr>
                    <tr>
                      <td>Material</td>
                      <td>Crepe printed</td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td>Length</td>
                      <td>50 Inches</td>
                    </tr>
                    <tr>
                      <td>Size</td>
                      <td>S, M, L .XXL</td>
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
  );
};

export default TabProduct;
