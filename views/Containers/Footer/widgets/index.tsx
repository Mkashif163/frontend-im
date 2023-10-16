import React, { useState } from "react";
import { Row, Col, Container, Media, Input } from "reactstrap";
import CustomDropDown from "./CustomDropdown";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';



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
    <footer className="footer-2  mt-4">
      <div className="custom-container">
        <Row className="row align-items-center">
          <div className="account-right">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-12">
                <div className="footer-box mb-5">
                  <div className="footer-title">
                    <h5 className="mb-3">For Seller</h5>
                  </div>
                  <div className="footer-content">
                    <ul className="list-unstyled">
                      <li className="mb-1">
                        <Link href="/term&conditions/seller">
                          <a className="footer-link" style={{ color: 'gray' }}>How to become a Seller?</a>
                        </Link>
                      </li><br />
                      <li className="mb-1">
                        <a href="/term&conditions/product" className="footer-link" style={{ color: 'gray' }}>How to post a product?</a>
                      </li><br />
                      <li className="mb-1">
                        <a href="/term&conditions/supplier" className="footer-link" style={{ color: 'gray' }}>How to become a verified Supplier?</a>
                      </li><br />
                      <li className="mb-1">
                        <a href="/term&conditions/trusted" className="footer-link" style={{ color: 'gray' }}>How to become a trusted Suppliers?</a>
                      </li><br />
                      <li className="mb-1">
                        <a href="/term&conditions/discount" className="footer-link" style={{ color: 'gray' }}>How to give a discount on Product?</a>
                      </li><br />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-12">
                <div className="footer-box mb-5">
                  <div className="footer-title">
                    <h5 className="mb-3">For Buyer</h5>
                  </div>
                  <div className="footer-content">
                    <ul className="list-unstyled">
                      <li className="mb-1">
                        <a href="/term&conditions/buy" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>How to Buy?</a>
                      </li><br />
                      <li className="mb-1">
                        <a href="/term&conditions/getdiscount" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>How to get discount?</a>
                      </li><br />
                      <li className="mb-1">
                        <a href="/term&conditions/touch" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>How to get in touch with Supplier?</a>
                      </li><br />
                      <li className="mb-1">
                        <a href="/term&conditions/havetrusted" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>We have trusted Suppliers?</a>
                      </li><br />
                      <li className="mb-1">
                        <a href="/term&conditions/haveverified" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>We have verified Suppliers?</a>
                      </li><br />
                    </ul>
                  </div>
                </div>

              </div>
              <div className="col-lg-2 col-md-4 col-sm-12">
                <div className="footer-box footer-contact-box mb-5">
                  <div className="footer-title">
                    <h5 className="mb-3">Customer Services</h5>
                  </div>
                  <div className="footer-content">
                    <ul className="list-unstyled">
                      <li className="mb-1">
                        <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                          All Terms & Conditions
                        </a>
                      </li><br />
                      <li className="mb-1">
                        <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                          Member Signing up
                        </a>
                      </li><br />

                      <li className="mb-1">
                        <a href="/term&conditions/services" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                          Services
                        </a>
                      </li><br />
                      <li className="mb-1">
                        <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                          Warrenty
                        </a>
                      </li><br />
                    </ul>
                  </div>
                </div>


              </div>
              <div className="col-lg-2 col-md-4 col-sm-12">
                <div className="footer-box footer-contact-box mb-5">
                  <div className="footer-title">
                    <h5 className="mb-3">Dispute & Resolution</h5>
                  </div>
                  <div className="footer-content">
                    <ul className="list-unstyled">
                      <li className="mb-1">
                        <a href="/term&conditions/payment" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                          Payments Resolution
                        </a>
                      </li><br />
                      <li className="mb-1">
                        <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                          Orders Resolution
                        </a>
                      </li><br />
                      <li className="mb-1">
                        <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                          Shipment Resolution
                        </a>
                      </li><br />
                      <li className="mb-1">
                        <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                          Taxes Resolution
                        </a>
                      </li><br />
                    </ul>
                  </div>
                </div>

              </div>
              <div className="col-lg-2 col-md-4 col-sm-12">
                <div className="footer-box footer-contact-box">
                  <div className="footer-title" style={{ fontSize: '10px' }}>
                    <h5>Support</h5>
                  </div>
                  <div className="footer-contant">
                    <li className="mb-1">
                      <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                        Latest News
                      </a>
                    </li><br />

                    <li className="mb-1">
                      <a href="/term&conditions/registration" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                        Registration Detail
                      </a>
                    </li><br />

                    <li className="mb-1">
                      <a href="/term&conditions/support" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                        Support 24/7
                      </a>
                    </li><br />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-12">
                <div className="footer-box footer-contact-box ">
                  <span className="footer-contant" style={{ fontSize: '18px' }}>
                    <CustomDropDown
                      options={options}
                      onSelect={handleSelect}
                    />
                  </span>
                  <p>{selectedOption}</p>
                  <div className="footer-contant mt-0">
                    <li className="mb-1">
                      <a href="#" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                        big deal store demo store
                      </a>
                    </li><br /><li className="mb-1">
                      <a href="#" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                        Email us: industrymall@gmail.com
                      </a>
                    </li><br /><li className="mb-1">
                      <a href="#" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                        fax 654321
                      </a>
                    </li><br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row className="row align-items-center">
          <Col lg="12" md="12">
            <div className="account-right">
              <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-12">
                  <div className="footer-box mb-5">
                    <div className="footer-title mb-3">
                      <h5>Contact Us</h5>
                    </div>
                    <div className="footer-content">
                      <ul className="list-unstyled">
                        <li className="mb-1">
                          <a href="/term&conditions/decades" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Who we are
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/identities" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Our Identities
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/imti" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Industry Mall Training Institute (IMTI)
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/industry" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Why Trust on Industry Mall
                          </a>
                        </li><br />

                      </ul>
                    </div>
                  </div>

                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                  <div className="footer-box mb-5">
                    <div className="footer-title mb-3">
                      <h5>Our Key Features</h5>
                    </div>
                    <div className="footer-content">
                      <ul className="list-unstyled">
                        <li className="mb-1">
                          <a href="/term&conditions/sectors" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            We are specific in Industrial Sectors
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/wholesalers" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Connect wholesalers | Industrials directly
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/competitive" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Competitive price
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/regular" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Regular discounted price
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            User-friendly payment method
                          </a>
                        </li><br />
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                  <div className="footer-box footer-contact-box">
                    <div className="footer-title mb-3" style={{ fontSize: '10px' }}>
                      <h5>Member Signing up</h5>
                    </div>
                    <div className="footer-content">
                      <ul className="list-unstyled">
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Member’s undertakings
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            When you agreed terms & conditions
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Agreed all rules & regulations
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Being a member liability
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Breach of Contract
                          </a>
                        </li><br />
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                  <div className="footer-box footer-contact-box">
                    <div className="footer-title mb-3" style={{ fontSize: '10px' }}>
                      <h5>Advertisements</h5>
                    </div>
                    <div className="footer-content">
                      <ul className="list-unstyled">
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Buying Advertisements
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Selling Advertisements
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Store Exception Advertisements
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            All Advertisements
                          </a>
                        </li><br />
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                  <div className="footer-box footer-contact-box">
                    <div className="footer-title mb-3" style={{ fontSize: '10px' }}>
                      <h5>Information</h5>
                    </div>
                    <div className="footer-content">
                      <ul className="list-unstyled">
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Confidential Information
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Personal Information
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Confidential and Personal
                          </a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition" className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Other Declarations
                          </a>
                        </li><br />
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                  <div className="footer-box footer-contact-box">
                    <div className="footer-title mb-3" style={{ fontSize: '10px' }}>
                      <h5>Payment Methods</h5>
                    </div>
                    <div className="footer-content">
                      <ul className="list-unstyled">
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition"><span className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>
                            Secure Payment Integrations
                          </span></a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition"> <span className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>VISA Card</span></a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition"> <span className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>Master Card</span></a>
                        </li><br />
                        <li className="mb-1">
                          <a href="/term&conditions/term_condition"><span className="footer-link" style={{ fontSize: '12px', color: 'gray' }}>Direct Bank Transfer</span></a>
                        </li><br />
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Container>
        <Row className="row align-items-center d-flex justify-conytent-center" style={{ marginLeft: '6px' }}>
          <Col lg="6" md='6' sm='6' xs='6'>
            <div className="footer-detail" style={{ marginTop: '12px', gap: '20%' }}>
              <ul className="list-inline d-flex justify-content-center">
                <li className="list-inline-item mx-4">
                  <div className="footer-logo">
                    <a href="#">
                      <Media src={`/images/layout-2/logo/im-logo.png`} width="150px" className="img-fluid" alt="logo" style={{ marginLeft: '0%', gap: '20%' }} />
                    </a>
                  </div>
                </li><br />
              </ul>
            </div>
          </Col>
          <Col lg="6" md='6' sm='6' xs='6'>
            <div className="footer-detail d-flex align-items-center gap-3">
              <a href="#">
                <Media src="/images/MasterCard.png" className="img-fluid" alt="Google Play" style={{ width: '90px', height: 'auto', objectFit: 'contain' }} />
              </a>
              <a href="#">
                <Media src="/images/Visa.png" className="img-fluid" alt="Google Play" style={{ width: '90px', height: 'auto', objectFit: 'contain' }} />
              </a>
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
                  <a href="#" rel="noopener noreferrer">
                    <Media src="/images/GooglePlay.png" className="img-fluid" alt="Google Play" style={{ width: '150px', height: 'auto', objectFit: 'contain' }} />
                  </a>
                </div>
                <div className="app-item">
                  <a href="#" rel="noopener noreferrer">
                    <Media src="/images/AppStore.png" className="img-fluid" alt="App Store" style={{ width: '140px', height: 'auto', objectFit: 'contain' }} />
                  </a>
                </div>
              </div>

              <div className="app-item-group ">
                <div className="social-block">
                  <h5>&nbsp; &nbsp; Follow us</h5>
                  <ul className="social" style={{ fontSize: '18px' }}>
                    <li>
                      <a href="#" style={{ fontSize: '18px' }}>
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li><br />
                    <li>
                      <a href="#" style={{ fontSize: '18px' }}>
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li><br />
                    <li>
                      <a href="#" style={{ fontSize: '18px' }}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li><br />
                    <li>
                      <a href="#" style={{ fontSize: '18px' }}>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li><br />
                    <li>
                      <a href="#" style={{ fontSize: '18px' }}>
                        <i className="fa fa-rss"></i>
                      </a>
                    </li><br />
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
              <div className="">
                <p style={{ fontSize: '16px', color: '#777', marginTop: '20px', textAlign: 'center', padding: '10px 0', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                  &copy; {new Date().getFullYear()} INDUSTRY MALL. All rights reserved.
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