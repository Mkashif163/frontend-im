import React from "react";
import { Row, Col, Media, Container } from "reactstrap";

const CollectionBannerPage: React.FC = () => (
  <>
    {/* banner 1 */}
    <div className="title6">
      <h4>full banner with text center</h4>
    </div>
    <section className="collection-banner section-big-py-space  bg-light">
      <div className="custom-container">
        <Row>
          <Col>
            <div className="collection-banner-main banner-5 p-center">
              <div className="collection-img">
                <Media src="/images/layout-2/collection-banner/7.jpg" className="bg-img bg-img  " alt="banner" />
              </div>
              <div className="collection-banner-contain ">
                <div className="sub-contain">
                  <h3>save up to 30% off</h3>
                  <h4>
                    women<span>fashion</span>
                  </h4>
                  <div className="shop">
                    <a className="btn btn-normal" href="#">
                      shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>

    {/* banner-2 */}
    <div className="title6">
      <h4>tow banner with text left</h4>
    </div>
    <section className="collection-banner section-big-py-space  bg-light">
      <div className="custom-container">
        <Row className="collection3">
          <Col md="6">
            <div className="collection-banner-main banner-7 p-left">
              <div className="collection-img">
                <Media src="/images/layout-3/collection-banner/6.jpg" className="img-fluid bg-img  " alt="banner" />
              </div>
              <div className="collection-banner-contain ">
                <div>
                  <h3>Video Camera</h3>
                  <h4>O-VIDEO Moldova</h4>
                  <div className="shop">
                    <a href="#">
                      shop now
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="collection-banner-main banner-7 p-left">
              <div className="collection-img">
                <Media src="/images/layout-3/collection-banner/7.jpg" className="img-fluid bg-img  " alt="banner" />
              </div>
              <div className="collection-banner-contain ">
                <div>
                  <h3>Furniture</h3>
                  <h4>Beds & Bedroom</h4>
                  <div className="shop">
                    <a href="#">
                      shop now
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>

    {/* banner-3 */}
    <div className="title6">
      <h4>banner with text-left position left</h4>
    </div>
    <section className="collection-banner section-big-py-space ratio_45 bg-light">
      <Container>
        <Row className="collection">
          <Col md="6">
            <div className="collection-banner-main p-left">
              <div className="collection-img">
                <Media src="/images/layout-1/collection-banner/1.jpg" className="img-fluid bg-img  " alt="banner" />
              </div>
              <div className="collection-banner-contain">
                <div>
                  <h3>vivo</h3>
                  <h4>smart phone</h4>
                  <div className="shop">
                    <a>
                      shop now
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="collection-banner-main p-left">
              <div className="collection-img">
                <Media src="/images/layout-1/collection-banner/2.jpg" className="img-fluid bg-img  " alt="banner" />
              </div>
              <div className="collection-banner-contain">
                <div>
                  <h3>hand</h3>
                  <h4>lether bag</h4>
                  <div className="shop">
                    <a>
                      shop now
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* banner-4 */}
    <div className="title6">
      <h4>three banner with text-right</h4>
    </div>
    <section className="collection-banner section-big-py-space bg-light">
      <div className="custom-container">
        <Row className="collection2">
          <Col md="4">
            <div className="collection-banner-main banner-1  p-right">
              <div className="collection-img">
                <Media src="/images/layout-2/collection-banner/1.jpg" className="img-fluid bg-img  " alt="banner" />
              </div>
              <div className="collection-banner-contain">
                <div>
                  <h3>women</h3>
                  <h4>fashion</h4>
                  <div className="shop">
                    <a>
                      shop now
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="collection-banner-main banner-1 p-right">
              <div className="collection-img">
                <Media src="/images/layout-2/collection-banner/2.jpg" className="img-fluid bg-img  " alt="banner" />
              </div>
              <div className="collection-banner-contain ">
                <div>
                  <h3>camera</h3>
                  <h4>lenses</h4>
                  <div className="shop">
                    <a>
                      shop now
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="collection-banner-main banner-1 p-right">
              <div className="collection-img">
                <Media src="/images/layout-2/collection-banner/3.jpg" className="img-fluid bg-img  " alt="banner" />
              </div>
              <div className="collection-banner-contain ">
                <div>
                  <h3>refrigerator</h3>
                  <h4>lG mini</h4>
                  <div className="shop">
                    <a>
                      shop now
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>

    {/* banner-5 */}
    <div className="title6">
      <h4>three banner with text-left</h4>
    </div>
    <section className="collection-banner section-big-py-space bg-light">
      <Container fluid={true}>
        <Row className="collection2">
          <Col md="4">
            <div className="collection-banner-main p-left">
              <div className="collection-img">
                <Media src="/images/layout-1/collection-banner/3.jpg" className="img-fluid bg-img  " alt="banner" />
              </div>
              <div className="collection-banner-contain">
                <div>
                  <h3>classic</h3>
                  <h4>Wooden Chair</h4>
                  <div className="shop">
                    <a>
                      shop now
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="collection-banner-main p-left">
              <div className="collection-img">
                <Media src="/images/layout-1/collection-banner/4.jpg" className="img-fluid bg-img  " alt="banner" />
              </div>
              <div className="collection-banner-contain">
                <div>
                  <h3>food</h3>
                  <h4>Grocery Items</h4>
                  <div className="shop">
                    <a>
                      shop now
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="collection-banner-main p-left">
              <div className="collection-img">
                <Media src="/images/layout-1/collection-banner/5.jpg" className="img-fluid bg-img  " alt="banner" />
              </div>
              <div className="collection-banner-contain">
                <div>
                  <h3>digital</h3>
                  <h4>cctv camera</h4>
                  <div className="shop">
                    <a>
                      shop now
                      <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* banner-6 */}
    <div className="title6">
      <h4>call to action</h4>
    </div>
    <section className="collection-banner  section-big-py-space bg-light ">
      <div className="custom-container">
        <Row className="collection2">
          <Col lg="4" md="6">
            <Row className="banner-2-padding collection4">
              <Col xs="6">
                <div className="collection-banner-main banner-2">
                  <div className="collection-img">
                    <Media src="/images/layout-3/collection-banner/1.jpg" className="img-fluid bg-img  " alt="banner" />
                  </div>
                  <div className="collection-banner-contain">
                    <div>
                      <h3>washing</h3>
                      <h4>machine</h4>
                      <div className="shop">
                        <a>
                          shop now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs="6">
                <div className="collection-banner-main banner-2">
                  <div className="collection-img">
                    <Media src="/images/layout-3/collection-banner/2.jpg" className="img-fluid bg-img  " alt="banner" />
                  </div>
                  <div className="collection-banner-contain">
                    <div>
                      <h3>canon</h3>
                      <h4>camera</h4>
                      <div className="shop">
                        <a>
                          shop now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="banner-3-padding collection4">
              <Col xs="6">
                <div className="collection-banner-main banner-2">
                  <div className="collection-img">
                    <Media src="/images/layout-3/collection-banner/3.jpg" className="img-fluid bg-img  " alt="banner" />
                  </div>
                  <div className="collection-banner-contain ">
                    <div>
                      <h3>new</h3>
                      <h4>books</h4>
                      <div className="shop">
                        <a>
                          shop now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs="6">
                <div className="collection-banner-main banner-2">
                  <div className="collection-img">
                    <Media src="/images/layout-3/collection-banner/4.jpg" className="img-fluid bg-img  " alt="banner" />
                  </div>
                  <div className="collection-banner-contain ">
                    <div>
                      <h3>boys</h3>
                      <h4>shoes</h4>
                      <div className="shop">
                        <a>
                          shop now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg="4" md="6">
            <Row>
              <Col xs="12">
                <div className="collection-banner-main banner-3 p-center ">
                  <div className="collection-img">
                    <Media src="/images/layout-3/collection-banner/5.jpg" className="img-fluid bg-img  " alt="banner" />
                  </div>
                  <div className="collection-banner-contain  text-center">
                    <div>
                      <h3>apple laptop</h3>
                      <h4>only $999 hurry up!</h4>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg="4" sm="12">
            <Row className="banner-2-padding  collection5 ">
              <Col lg="12" md="6">
                <div className="collection-banner-main banner-4 p-left">
                  <div className="collection-img">
                    <Media src="/images/layout-3/collection-banner/6.jpg" className="img-fluid bg-img  " alt="banner" />
                  </div>
                  <div className="collection-banner-contain ">
                    <div>
                      <h3>lG</h3>
                      <h4>smartwatch</h4>
                      <div className="shop">
                        <a href="#">
                          shop now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="12" md="6">
                <div className="collection-banner-main banner-4 p-left">
                  <div className="collection-img">
                    <Media src="/images/layout-3/collection-banner/7.jpg" className="img-fluid bg-img  " alt="banner" />
                  </div>
                  <div className="collection-banner-contain ">
                    <div>
                      <h3>jewellery</h3>
                      <h4>diamond ring</h4>
                      <div className="shop">
                        <a href="#">
                          shop now
                          <i className="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>

    {/* banner-7 */}
    <div className="title6">
      <h4>only text banner</h4>
    </div>
    <section className="deal-banner ">
      <Container>
        <Row>
          <Col md="12" lg="8">
            <div className="deal-banner-containe ">
              <h2>save up to 30% to 40% off</h2>
              <h1>omg! just look at the great deals!</h1>
            </div>
          </Col>
          <Col md="12" lg="4">
            <div className="deal-banner-containe">
              <div className="deal-btn">
                <a className="btn-white">View more</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* banner-8 */}
    <div className="title6">
      <h4>discount banner</h4>
    </div>
    <section className="discount-banner bg-light section-big-py-space">
      <Container>
        <Row>
          <Col xs="12">
            <div className="discount-banner-contain p-0">
              <h2>Special discout Offer for you</h2>
              <h1>
                every <span> discount </span> we <span> offer is the best in market!</span>
              </h1>
              <div className="rounded-contain">
                <div className="rounded-subcontain">don't just scroll, your friends have already started buying!</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* banner-9 */}
    <div className="title6">
      <h4>contact banner</h4>
    </div>
    <section className="contact-banner  ">
      <Container>
        <Row>
          <Col>
            <div className="contact-banner-contain">
              <div className="contact-banner-img">
                <Media src="/images/layout-1/call-img.png" alt="call-banner" />
              </div>
              <div>
                {" "}
                <h3>if you have any question please call us</h3>
              </div>
              <div>
                <h2>123-456-7890</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);
export default CollectionBannerPage;
