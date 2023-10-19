import React, { useState } from "react";
import { Row, Col, Container, Media, Input } from "reactstrap";
import CustomDropDown from "./CustomDropdown";
import Link from "next/link";

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
                          <a className="footer-link text-secondary">
                            How to become a Seller?
                          </a>
                        </Link>
                      </li>
                      <br />
                      <li className="mb-1">
                        <Link href="/term&conditions/product">
                          <a className="footer-link text-secondary">
                            How to post a product?
                          </a>
                        </Link>
                      </li>
                      <br />
                      <li className="mb-1">
                        <Link
                          href="/term&conditions/supplier"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">
                            How to become a verified Supplier?
                          </a>
                        </Link>
                      </li>
                      <br />
                      <li className="mb-1">
                        <Link
                          href="/term&conditions/trusted"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">
                            How to become a trusted Suppliers?
                          </a>
                        </Link>
                      </li>
                      <br />
                      <li className="mb-1">
                        <Link
                          href="/term&conditions/discount"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">
                            How to give a discount on Product?
                          </a>
                        </Link>
                      </li>
                      <br />
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
                        <Link
                          href="/term&conditions/buy"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">
                            How to Buy?
                          </a>
                        </Link>
                      </li>
                      <br />
                      <li className="mb-1">
                        <Link
                          href="/term&conditions/getdiscount"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">
                            How to get discount?
                          </a>
                        </Link>
                      </li>
                      <br />
                      <li className="mb-1">
                        <Link
                          href="/term&conditions/touch"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">
                            How to get in touch with Supplier?
                          </a>
                        </Link>
                      </li>
                      <br />
                      <li className="mb-1">
                        <Link
                          href="/term&conditions/havetrusted"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">
                            We have trusted Suppliers?
                          </a>
                        </Link>
                      </li>
                      <br />
                      <li className="mb-1">
                        <Link
                          href="/term&conditions/haveverified"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">
                            We have verified Suppliers?
                          </a>
                        </Link>
                      </li>
                      <br />
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
                        <Link
                          href="/term&conditions/term_condition"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">
                            All Terms & Conditions
                          </a>
                        </Link>
                      </li>
                      <br />
                      <li className="mb-1">
                        <Link
                          href="/term&conditions/term_condition"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">
                            Member Signing up
                          </a>
                        </Link>
                      </li>
                      <br />

                      <li className="mb-1">
                        <Link
                          href="/term&conditions/services"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">Services</a>
                        </Link>
                      </li>
                      <br />
                      <li className="mb-1">
                        <Link
                          href="/term&conditions/term_condition"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">Warrenty</a>
                        </Link>
                      </li>
                      <br />
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
                        <Link
                          href="/term&conditions/payment"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">
                            Payments Resolution
                          </a>
                        </Link>
                      </li>
                      <br />
                      <li className="mb-1">
                        <Link
                          href="/term&conditions/term_condition"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">
                            Orders Resolution
                          </a>
                        </Link>
                      </li>
                      <br />
                      <li className="mb-1">
                        <Link
                          href="/term&conditions/term_condition"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">
                            Shipment Resolution
                          </a>
                        </Link>
                      </li>
                      <br />
                      <li className="mb-1">
                        <Link
                          href="/term&conditions/term_condition"
                          className="footer-link"
                        >
                          <a className="footer-link text-secondary">
                            Taxes Resolution
                          </a>
                        </Link>
                      </li>
                      <br />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-12">
                <div className="footer-box footer-contact-box">
                  <div className="footer-title" style={{ fontSize: "10px" }}>
                    <h5>Support</h5>
                  </div>
                  <div className="footer-contant">
                    <li className="mb-1">
                      <Link href="/blog/right-sidebar" className="footer-link">
                        <a className="footer-link text-secondary">
                          Latest News
                        </a>
                      </Link>
                    </li>
                    <br />

                    <li className="mb-1">
                      <Link
                        href="/term&conditions/registration"
                        className="footer-link"
                      >
                        <a className="footer-link text-secondary">
                          Registration Detail
                        </a>
                      </Link>
                    </li>
                    <br />

                    <li className="mb-1">
                      <Link
                        href="/term&conditions/support"
                        className="footer-link"
                      >
                        <a className="footer-link text-secondary">
                          Support 24/7
                        </a>
                      </Link>
                    </li>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-12">
                <div className="footer-box footer-contact-box ">
                  <span className="footer-contant" style={{ fontSize: "18px" }}>
                    <CustomDropDown options={options} onSelect={handleSelect} />
                  </span>
                  <p>{selectedOption}</p>
                  <div className="footer-contant mt-0">
                    <li className="mb-1">
                      <Link href="#" className="footer-link">
                        <a className="footer-link text-secondary">
                          Industry Mall store
                        </a>
                      </Link>
                    </li>
                    <br />
                    <li className="mb-1">
                      <Link href="#" className="footer-link">
                        <a className="footer-link text-secondary">
                          email us: Industrymall@gmail.com
                        </a>
                      </Link>
                    </li>
                    <br />
                    <li className="mb-1">
                      <Link href="#" className="footer-link">
                        <a className="footer-link text-secondary">fax 654321</a>
                      </Link>
                    </li>
                    <br />
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
                          <Link
                            href="/term&conditions/decades"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Who we are
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/identities"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Our Identities
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/imti"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Industry Mall Training Institute (IMTI)
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/industry"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Why Trust on Industry Mall
                            </a>
                          </Link>
                        </li>
                        <br />
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
                          <Link
                            href="/term&conditions/sectors"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              We are specific in Industrial Sectors
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/wholesalers"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Connect wholesalers | Industrials directly
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/competitive"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Competitive price
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/regular"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Regular discounted price
                            </a>
                          </Link>
                        </li>
                        <br />
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
                    <div
                      className="footer-title mb-3"
                      style={{ fontSize: "10px" }}
                    >
                      <h5>Member Signing up</h5>
                    </div>
                    <div className="footer-content">
                      <ul className="list-unstyled">
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/term_condition"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Member’s undertakings
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/term_condition"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              When you agreed terms & conditions
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/term_condition"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Agreed all rules & regulations
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/term_condition"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Being a member liability
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/term_condition"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Breach of Contract
                            </a>
                          </Link>
                        </li>
                        <br />
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                  <div className="footer-box footer-contact-box">
                    <div
                      className="footer-title mb-3"
                      style={{ fontSize: "10px" }}
                    >
                      <h5>Advertisements</h5>
                    </div>
                    <div className="footer-content">
                      <ul className="list-unstyled">
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/term_condition"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Buying Advertisements
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/term_condition"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Selling Advertisements
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/term_condition"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Store Exception Advertisements
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/term_condition"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              All Advertisements
                            </a>
                          </Link>
                        </li>
                        <br />
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                  <div className="footer-box footer-contact-box">
                    <div
                      className="footer-title mb-3"
                      style={{ fontSize: "10px" }}
                    >
                      <h5>Information</h5>
                    </div>
                    <div className="footer-content">
                      <ul className="list-unstyled">
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/term_condition"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Confidential Information
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/term_condition"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Personal Information
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/term_condition"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Confidential and Personal
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link
                            href="/term&conditions/term_condition"
                            className="footer-link"
                          >
                            <a className="footer-link text-secondary">
                              Other Declarations
                            </a>
                          </Link>
                        </li>
                        <br />
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-12">
                  <div className="footer-box footer-contact-box">
                    <div
                      className="footer-title mb-3"
                      style={{ fontSize: "10px" }}
                    >
                      <h5>Payment Methods</h5>
                    </div>
                    <div className="footer-content">
                      <ul className="list-unstyled">
                        <li className="mb-1">
                          <Link href="/term&conditions/term_condition">
                            <a className="footer-link text-secondary">
                              Secure Payment Integrations
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link href="/term&conditions/term_condition">
                            <a className="footer-link text-secondary">
                              VISA Card
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link href="/term&conditions/term_condition">
                            <a className="footer-link text-secondary">
                              Master Card
                            </a>
                          </Link>
                        </li>
                        <br />
                        <li className="mb-1">
                          <Link href="/term&conditions/term_condition">
                            <a className="footer-link text-secondary">
                              Direct Bank Transfer
                            </a>
                          </Link>
                        </li>
                        <br />
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
        <Row
          className="row align-items-center d-flex justify-conytent-center"
          style={{ marginLeft: "6px" }}
        >
          <Col lg="6" md="6" sm="6" xs="6">
            <div
              className="footer-detail"
              style={{ marginTop: "12px", gap: "20%" }}
            >
              <ul className="list-inline d-flex justify-content-center">
                <li className="list-inline-item mx-4">
                  <div className="footer-logo">
                    <a href="#">
                      <Media
                        src={`/images/layout-2/logo/im-logo.png`}
                        width="150px"
                        className="img-fluid"
                        alt="logo"
                        style={{ marginLeft: "0%", gap: "20%" }}
                      />
                    </a>
                  </div>
                </li>
                <br />
              </ul>
            </div>
          </Col>
          <Col lg="6" md="6" sm="6" xs="6">
            <div className="footer-detail d-flex align-items-center gap-3">
              <a href="#">
                <Media
                  src="/images/MasterCard.png"
                  className="img-fluid"
                  alt="Google Play"
                  style={{
                    width: "90px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </a>
              <a href="#">
                <Media
                  src="/images/Visa.png"
                  className="img-fluid"
                  alt="Google Play"
                  style={{
                    width: "90px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
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
                    <Media
                      src="/images/GooglePlay.png"
                      className="img-fluid"
                      alt="Google Play"
                      style={{
                        width: "150px",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </div>
                <div className="app-item">
                  <a href="#" rel="noopener noreferrer">
                    <Media
                      src="/images/AppStore.png"
                      className="img-fluid"
                      alt="App Store"
                      style={{
                        width: "140px",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div className="app-item-group ">
                <div className="social-block">
                  <h5>&nbsp; &nbsp; Follow us</h5>
                  <ul className="social" style={{ fontSize: "18px" }}>
                    <li>
                      <Link href="#" style={{ fontSize: "18px" }}>
                        <i className="fa fa-facebook text-secondary"></i>
                      </Link>
                    </li>
                    <br />
                    <li>
                      <Link href="#" style={{ fontSize: "18px" }}>
                        <i className="fa fa-google-plus text-secondary"></i>
                      </Link>
                    </li>
                    <br />
                    <li>
                      <Link href="#" style={{ fontSize: "18px" }}>
                        <i className="fa fa-twitter text-secondary"></i>
                      </Link>
                    </li>
                    <br />
                    <li>
                      <Link href="#" style={{ fontSize: "18px" }}>
                        <i className="fa fa-instagram text-secondary"></i>
                      </Link>
                    </li>
                    <br />
                    <li>
                      <Link href="#" style={{ fontSize: "18px" }}>
                        <i className="fa fa-rss text-secondary"></i>
                      </Link>
                    </li>
                    <br />
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
                <p
                  style={{
                    fontSize: "16px",
                    color: "#777",
                    marginTop: "20px",
                    textAlign: "center",
                    padding: "10px 0",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  &copy; {new Date().getFullYear()} INDUSTRY MALL. All rights
                  reserved.
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
