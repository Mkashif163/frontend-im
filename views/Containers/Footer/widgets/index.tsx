import React, { useState } from "react";
import { Row, Col, Container, Media, Input } from "reactstrap";
import CustomDropDown from "./CustomDropdown";
// import Seller from "./Views/Containers/Footer/widgets/Seller";
const dropDownProfile = () => {
  const [openProfile, setOpenProfile] = useState(false);
}
type FooterSectionProps = {
  layoutLogo: string;
};
// dropdown options
const options = [
  "INDUSTRY MALL(Pvt)Ltd",
  "INDUSTRY MALL LLC",
  "INDUSTRY MALL WLL",
];
const FooterSection: React.FC<FooterSectionProps> = ({ layoutLogo }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <footer className="footer-2">
      <Container>
        <Row className="row">
          <Col xs="12">
            <div className="footer-main-contian">
              <Row>
                <Col lg="16" md="16">
                  <div className="footer-right">
                    <Row className="row">
                      <Col lg="12" md="12">
                        <div className="subscribe-section">
                          <div className="row align-items-center">
                            <div className="col-lg-2">
                              <div className="subscribe-block">
                                <div className="subscrib-contant">
                                  <h4>subscribe</h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-10">
                              <div className="subscribe-block">
                                <div className="subscrib-contant">
                                  <div className="input-group">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">
                                        <i className="fa fa-envelope-o" style={{ fontSize: '18px' }}></i>
                                      </span>
                                    </div>
                                    <Input type="text" className="form-control" placeholder="your email" />
                                    <div className="input-group-prepend">
                                      <span className="input-group-text telly">
                                        <i className="fa fa-telegram" style={{ fontSize: '18px' }}></i>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg="12" md="16">
                        <div className="account-right">
                          <div className="row">
                            <div className="col-md-2">
                              <div className="footer-box">
                                <div className="footer-title" style={{ fontSize: '10px' }}>
                                  <h5>For Seller</h5>
                                </div>
                                <div className="footer-contant">
                                    {/* <Link href="/Views/Containers/Footer/widgets/Seller">
  <a style={{ fontSize: '12px' }}>How to become a seller?</a>
</Link> */}
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray' }}>How to become a Seller?</a><br/>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>How to post a product?</a><br/>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>How to become a verified Supplier?</a><br/>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>How to become a trusted Suppliers?</a><br/>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>How to give a discount on Product?</a><br/>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="footer-box">
                                <div className="footer-title" style={{ fontSize: '10px' }}>
                                  <h5>For Buyer</h5>
                                </div>
                                <div className="footer-contant">
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray' }}>How to Buy?</a><br/>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>How to get discount?</a><br/>
                                      <a href="#" style={{ fontSize: '12px', color: 'gray' }}>How to get in touch with Supplier?</a><br/>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>We have trusted Suppliers?</a><br/>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>We have verified Suppliers?</a><br/>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="footer-box footer-contact-box">
                                <div className="footer-title" style={{ fontSize: '10px' }}>
                                  <h5>Customer Services</h5>
                                </div>
                                <div className="footer-contant">
                                      {/* <i className="fa fa-file-contract" style={{ fontSize: '16px' }}></i> */}
                                      <span className="footer-contant" style={{ fontSize: '12px' }}>
                                        All Terms & Conditions
                                      </span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px', color: 'gray' }}>Member Signing up</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px', color: 'gray' }}>Buying and Selling Advertisement</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>Confidential & Personals</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>Warrenty</span><br/>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="footer-box footer-contact-box">
                                <div className="footer-title" style={{ fontSize: '10px' }}>
                                  <h5>Dispute & Resolution</h5>
                                </div>
                                <div className="footer-contant">
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray' }}>Payments Resolution</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px', color: 'gray' }}>Orders Resolution</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}> Shipment Resolution</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>Taxes Resolution</span><br/>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="footer-box footer-contact-box">
                                <div className="footer-title" style={{ fontSize: '10px' }}>
                                  <h5>Dispute & Resolution</h5>
                                </div>
                                <div className="footer-contant">
                                      <span className="footer-contant" style={{ fontSize: '12px' }}>
                                        Also available on Android</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray' }}>Also available on IOS</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray' }}>Latest News</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray' }}>Support 24/7</span><br/>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="footer-box footer-contact-box">
                                <div className="footer-title" style={{ fontSize: '10px' }}>
                                  <span className="footer-contant" style={{ fontSize: '14px' }}>
                                    <CustomDropDown
                                      options={options}
                                      onSelect={handleSelect}
                                    />
                                  </span>
                                  <p>{selectedOption}</p>
                                </div>
                                <div className="footer-contant">
                                      <i className="fa fa-map-marker" style={{ fontSize: '16px' }}></i>
        <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>big deal store demo store</span><br/>
                                      <i className="fa fa-phone" style={{ fontSize: '16px' }}></i>
    <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>call us: 123-456-7898</span><br/>
                                      <i className="fa fa-envelope-o" style={{ fontSize: '16px' }}></i>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray' }}>email us: support@bigdeal.com</span><br/>
                                      <i className="fa fa-fax" style={{ fontSize: '16px' }}></i>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>fax 123456</span><br/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <br></br>
                      <br></br>
                      <div style={{ marginTop: '12px' }}></div>
                      <Col lg="12" md="12">
                        <div className="account-right">
                          <div className="row">
                            <div className="col-md-2">
                              <div className="footer-box">
                                <div className="footer-title" style={{ fontSize: '10px' }}>
                                  <h5>Contact Us</h5>
                                </div>
                                <div className="footer-contant" style={{ fontSize: '12px' }}>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>Who we are</a><br/>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>Industry Mall Training Institute (IMTI)</a><br/>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>Why Trust on Industry Mall</a><br/>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>Our key Features</a><br/>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="footer-box">
                                <div className="footer-title" style={{ fontSize: '10px' }}>
                                  <h5>Our key Features</h5>
                                </div>
                                <div className="footer-contant">
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>We are specific in Industrial Sectors</a><br/>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>Connect wholesalers | Industrials directly</a><br/>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>Competitive price </a><br/>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>Regular discounted price </a><br/>
                                      <a href="#" style={{ fontSize: '12px' , color: 'gray'}}>User friendly payment method </a><br/>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="footer-box footer-contact-box">
                                <div className="footer-title" style={{ fontSize: '10px' }}>
                                  <h5>Member Signing up</h5>
                                </div>
                                <div className="footer-contant">
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>Member’s undertakings</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '10px' , color: 'gray'}}>When you agreed terms & conditions </span><br/>
                                      <span className="footer-contant" style={{ fontSize: '10px' , color: 'gray'}}>Agreed all rules & regulations</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>Being a member liability</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '10px' , color: 'gray'}}>Member’s undertakings | Breach of Contract</span><br/>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="footer-box footer-contact-box">
                                <div className="footer-title" style={{ fontSize: '10px' }}>
                                  <h5>Advertisements</h5>
                                </div>
                                <div className="footer-contant">
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>Buying Advertisements</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>Selling Advertisements</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>Store Exception Advertisements</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>All Advertisements</span><br/>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="footer-box footer-contact-box">
                                <div className="footer-title" style={{ fontSize: '10px' }}>
                                  <h5>Information</h5>
                                </div>
                                <div className="footer-contant">
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>Confidential Information</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>Personal Information</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>Confidential and Personal</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' , color: 'gray'}}>Other Declarations</span><br/>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="footer-box footer-contact-box">
                                <div className="footer-title" style={{ fontSize: '10px' }}>
                                  <h5>Payment Methods</h5>
                                </div>
                                <div className="footer-contant">
                                      <span className="footer-contant" style={{ fontSize: '12px' }}>
                                        Secure Payment Integrations
                                      </span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' }}>VISA Card</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' }}>Master Card</span><br/>
                                      <span className="footer-contant" style={{ fontSize: '12px' }}>Direct Bank Transfer</span><br/>
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
      <Col xs="12">
        <Col lg="4" md="12">
          <div className="footer-detail" style={{ marginTop: '12px', gap: '20%' }}>
            <ul className="list-inline d-flex justify-content-center">
              <li className="list-inline-item mx-4">
                <div className="footer-logo">
                  <a href="#">
                    <Media src={`/images/layout-2/logo/im-logo.png`} width="150px" className="img-fluid" alt="logo" style={{ marginLeft: '0%', gap: '20%' }} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg="7">
          <div className="footer-detail">
            <ul className="list-inline d-flex justify-content-center mr-20">
              <li className="list-inline-item mx-2">
                <div className="logo-container">
                  <a href="#">
                    <Media src="/images/layout-1/pay/1.png" width="40px" className="img-fluid" alt="pay" style={{ marginLeft: '340px', gap: '20%' }} />
                  </a>
                </div>
              </li>
              <li className="list-inline-item mx-2">
                <div className="logo-container">
                  <a href="#">
                    <Media src="/images/layout-1/pay/2.png" width="40px" className="img-fluid" alt="pay" style={{ marginLeft: '120px', gap: '20%' }} />
                  </a>
                </div>
              </li>
              <li className="list-inline-item mx-2">
                <div className="logo-container">
                  <a href="#">
                    <Media src="/images/layout-1/pay/3.png" width="40px" className="img-fluid" alt="pay" style={{ marginLeft: '100px', gap: '20%' }} />
                  </a>
                </div>
              </li>
              <li className="list-inline-item mx-2">
                <div className="logo-container">
                  <a href="#">
                    <Media src="/images/layout-1/pay/4.png" width="40px" className="img-fluid" alt="pay" style={{ marginLeft: '100px', gap: '20%' }} />
                  </a>
                </div>
              </li>
              <li className="list-inline-item mx-2">
                <div className="logo-container">
                  <a href="#">
                    <Media src="/images/layout-1/pay/5.png" width="40px" className="img-fluid" alt="pay" style={{ marginLeft: '100px', gap: '20%' }} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Col>

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
                  <ul className="social" style={{ fontSize: '18px' }}>
                    <li>
                      <a href="#" style={{ fontSize: '18px' }}>
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: '18px' }}>
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: '18px' }}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: '18px' }}>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ fontSize: '18px' }}>
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
                  <span className="footer-contant" style={{ fontSize: '16px' }}>2022 - 23 </span>copy right by Saliha Kazmi powered by Saiha Kazmi
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