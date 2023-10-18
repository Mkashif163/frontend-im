import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Form, Input, Label } from "reactstrap";


interface ProductDeskProps {
  item: any;
}

const TabProduct: React.FC<ProductDeskProps> = ({ item }) => {
  const [activeTab, setActiveTab] = useState("1");

  const product = item;
  const percentages = [16, 19, 69, 42, 59];

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
                    // onMouseEnter={(e) => {
                    //   e.currentTarget.style.transform = 'scale(1.2)';
                    // }}
                    // onMouseLeave={(e) => {
                    //   e.currentTarget.style.transform = 'scale(1)';
                    // }}
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
                <br />
                <h6 className="text-center" style={{ fontSize: "14px" }}>Star Rating</h6>
                <br />

                <div className="mod-rating">
                  <div className="content">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="summary">
                          <div className="score">
                            <span className="score-average">4.8</span>
                            <span className="score-max">/5</span>
                          </div>
                          <div className="average">
                            <div className="container-star" style={{ width: "166.25px", height: "33.25px" }}>
                              {[...Array(5)].map((_, starIndex) => (
                                <img
                                  key={starIndex}
                                  className="star"
                                  src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                                  style={{ width: "33.25px", height: "33.25px" }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="custom-container">
                          <div className="detail" style={{ float: "left" }}>
                            <ul>
                              {percentages.map((percent, index) => (
                                <li key={index}>
                                  <div className="stars-and-progress" style={{ display: "flex", alignItems: "center" }}>
                                    <div className="container-star" style={{ width: "166.25px", height: "33.25px", display: "inline-block" }}>
                                      {[...Array(5)].map((_, starIndex) => (
                                        <img
                                          key={starIndex}
                                          className="star"
                                          src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                                          style={{ width: "15.96px", height: "15.96px" }}
                                        />
                                      ))}
                                    </div>
                                    <div className="progress-wrap" style={{ marginLeft: "12px" }}>
                                      <div className="pdp-review-progress" style={{ position: "relative", width: "100px", height: "20px", backgroundColor: "goldenrod" }}>
                                        <div className="bar bg" style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "0", right: "0", height: "4px" }}></div>
                                        <div className="bar fg" style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", width: "91.204%", height: "4px" }}></div>
                                      </div>
                                    </div>
                                    &nbsp; &nbsp; <span className="percent">{percent}</span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mod-reviews">
                  <br />
                  <h6 className="text-center" style={{ fontSize: "14px" }}>PRODUCT REVIEWS</h6>
                  <div className="item">
                    <div className="top">
                      <div className="container-star starCtn left" style={{ width: '83.125px', height: '16.625px' }}>
                        <div className="middle">
                          <span className="product-id" style={{ fontSize: "14px" }}><b>Motors</b></span>
                        </div>
                        <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                        <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                        <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                        <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                        <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                      </div>
                      <span className="title-right" style={{ paddingLeft: "90%" }}>5 months ago</span>
                    </div><br />
                    <div className="content">
                      I am very delighted and happy to buy this watch. I hope the watch should be very helpful and strong to withstand all kinds of hard times.</div>

                    <div className="products gap-5">
                      <img style={{ width: "80px", height: "70px", borderRadius: "50px", paddingRight: "15px" }} src="/images/layout-2/rounded-cat/12.jpeg"></img>
                      <img style={{ width: "80px", height: "70px", paddingRight: "15px" }} src="/images/layout-2/rounded-cat/12.jpeg"></img>
                      <img style={{ width: "80px", height: "70px", paddingRight: "15px" }} src="/images/layout-2/rounded-cat/12.jpeg"></img>
                      <img style={{ width: "80px", height: "70px", paddingRight: "15px" }} src="/images/layout-2/rounded-cat/12.jpeg"></img>
                    </div>
                    <div className="content">
                      I am very delighted and happy to buy this logo. </div>
                    <i className='fa fa-thumbs-up' style={{ fontSize: "24px" }}></i>
                    <span className="">4</span>
                  </div>
                  <br />
                  <br />
                  <div className="top">
                    <div className="container-star starCtn left" style={{ width: '83.125px', height: '16.625px' }}>
                      <div className="middle">
                        <span className="product-id" style={{ fontSize: "14px" }}><b>Technical</b></span>
                      </div> 
                      <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                      <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                      <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                      <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                      <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                    </div>
                    <span className="title-right" style={{ paddingLeft: "90%" }}>5 months ago</span>
                  </div><br />
                  <div className="content">
                    I am very delighted and happy to buy this watch. I hope the watch should be very helpful and strong to withstand all kinds of hard times.</div>

                  <div className="products gap-5">
                    <img style={{ width: "80px", height: "70px", borderRadius: "50px", paddingRight: "15px" }} src="/images/layout-2/rounded-cat/10.jpeg"></img>
                    <img style={{ width: "80px", height: "70px", paddingRight: "15px" }} src="/images/layout-2/rounded-cat/10.jpeg"></img>
                    <img style={{ width: "80px", height: "70px", paddingRight: "15px" }} src="/images/layout-2/rounded-cat/10.jpeg"></img>
                    <img style={{ width: "80px", height: "70px", paddingRight: "15px" }} src="/images/layout-2/rounded-cat/10.jpeg"></img>
                  </div>
                  <div className="content">
                    I am very delighted and happy to buy this logo. </div>
                  <i className='fa fa-thumbs-up' style={{ fontSize: "24px" }}></i>
                  <span className="">3</span>
                </div>
                <br />
                <br />
                <div className="top">
                  <div className="container-star starCtn left" style={{ width: '83.125px', height: '16.625px' }}>
                    <div className="middle">
                      <span className="product-id" style={{ fontSize: "14px" }}><b>Vfds</b></span>
                    </div>
                    <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                    <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                    <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                    <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                    <img className="star" src="//laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" style={{ width: '16.625px', height: '16.625px' }} />
                  </div>
                  <span className="title-right" style={{ paddingLeft: "90%" }}>5 months ago</span>
                </div><br />
                <div className="content">
                  I am very delighted and happy to buy this watch. I hope the watch should be very helpful and strong to withstand all kinds of hard times.</div>

                <div className="products gap-5">
                  <img style={{ width: "80px", height: "70px", borderRadius: "50px", paddingRight: "15px" }} src="/images/layout-2/rounded-cat/11.jpeg"></img>
                  <img style={{ width: "80px", height: "70px", paddingRight: "15px" }} src="/images/layout-2/rounded-cat/11.jpeg"></img>
                  <img style={{ width: "80px", height: "70px", paddingRight: "15px" }} src="/images/layout-2/rounded-cat/11.jpeg"></img>
                  <img style={{ width: "80px", height: "70px", paddingRight: "15px" }} src="/images/layout-2/rounded-cat/11.jpeg"></img>
                </div>
                <div className="content">
                  I am very delighted and happy to buy this logo. </div>
                <i className='fa fa-thumbs-up' style={{ fontSize: "24px" }}></i>
                <span className="">2</span>
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
