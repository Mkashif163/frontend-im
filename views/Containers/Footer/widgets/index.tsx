import React from "react";
import { Row, Col, Container, Media, Input } from "reactstrap";

type FooterSectionProps = {
  layoutLogo: string;
};

const FooterSection: React.FC<FooterSectionProps> = ({ layoutLogo }) => {
  return (
    <footer className="footer-2">
      <Container>
        <Row className="row">
          <Col xs="12">
            <div className="footer-main-contian">
              <Row>
                <Col lg="4" md="12">
                  <div className="footer-left">
                    <div className="footer-logo">
                      <Media src={`/images/${layoutLogo}/logo/logo.png`} className="img-fluid  " alt="logo" />
                    </div>
                    <div className="footer-detail">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                        McClintock,
                      </p>
                      <ul className="paymant-bottom">
                        <li>
                          <a href="#">
                            <Media src="/images/layout-1/pay/1.png" className="img-fluid" alt="pay" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Media src="/images/layout-1/pay/2.png" className="img-fluid" alt="pay" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Media src="/images/layout-1/pay/3.png" className="img-fluid" alt="pay" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Media src="/images/layout-1/pay/4.png" className="img-fluid" alt="pay" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Media src="/images/layout-1/pay/5.png" className="img-fluid" alt="pay" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col lg="8" md="12">
                  <div className="footer-right">
                    <Row className="row">
                      <Col md="12">
                        <div className="subscribe-section">
                          <div className="row">
                            <div className="col-md-5 ">
                              <div className="subscribe-block">
                                <div className="subscrib-contant ">
                                  <h4>subscribe to newsletter</h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7 ">
                              <div className="subscribe-block">
                                <div className="subscrib-contant">
                                  <div className="input-group">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        <i className="fa fa-envelope-o"></i>
                                      </span>
                                    </div>
                                    <Input type="text" className="form-control" placeholder="your email" />
                                    <div className="input-group-prepend">
                                      <span className="input-group-text telly">
                                        <i className="fa fa-telegram"></i>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="account-right">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="footer-box">
                                <div className="footer-title">
                                  <h5>my account</h5>
                                </div>
                                <div className="footer-contant">
                                  <ul>
                                    <li>
                                      <a href="#">about us</a>
                                    </li>
                                    <li>
                                      <a href="#">contact us</a>
                                    </li>
                                    <li>
                                      <a href="#">terms & conditions</a>
                                    </li>
                                    <li>
                                      <a href="#">returns & exchanges</a>
                                    </li>
                                    <li>
                                      <a href="#">shipping & delivery</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="footer-box">
                                <div className="footer-title">
                                  <h5>quick link</h5>
                                </div>
                                <div className="footer-contant">
                                  <ul>
                                    <li>
                                      <a href="#">store location</a>
                                    </li>
                                    <li>
                                      <a href="#"> my account</a>
                                    </li>
                                    <li>
                                      <a href="#"> orders tracking</a>
                                    </li>
                                    <li>
                                      <a href="#"> size guide</a>
                                    </li>
                                    <li>
                                      <a href="#">FAQ </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="footer-box footer-contact-box">
                                <div className="footer-title">
                                  <h5>contact us</h5>
                                </div>
                                <div className="footer-contant">
                                  <ul className="contact-list">
                                    <li>
                                      <i className="fa fa-map-marker"></i>
                                      <span>
                                        big deal store demo store <br /> <span> india-3654123</span>
                                      </span>
                                    </li>
                                    <li>
                                      <i className="fa fa-phone"></i>
                                      <span>call us: 123-456-7898</span>
                                    </li>
                                    <li>
                                      <i className="fa fa-envelope-o"></i>
                                      <span>email us: support@bigdeal.com</span>
                                    </li>
                                    <li>
                                      <i className="fa fa-fax"></i>
                                      <span>fax 123456</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="app-link-block  bg-transparent">
        <Container>
          <Row>
            <div className="app-link-bloc-contain app-link-bloc-contain-1">
              <div className="app-item-group">
                <div className="app-item">
                  <Media src="/images/layout-1/app/1.png" className="img-fluid" alt="app-banner" />
                </div>
                <div className="app-item">
                  <Media src="/images/layout-1/app/2.png" className="img-fluid" alt="app-banner" />
                </div>
              </div>
              <div className="app-item-group ">
                <div className="social-block">
                  <h6>follow us</h6>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-rss"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div className="sub-footer">
        <Container>
          <Row>
            <Col xs="12">
              <div className="sub-footer-contain">
                <p>
                  <span>2022 - 23 </span>copy right by themeforest powered by pixelstrap
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default FooterSection;
