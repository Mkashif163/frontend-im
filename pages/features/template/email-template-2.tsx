import Image from "next/image";
import React from "react";
import { Table } from "reactstrap";

const EmailTemplate2 = () => (
  <>
    <Table borderless className="email-template-table" cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td>
            <Table align="center" bordered cellPadding="0" cellSpacing="0" width="100%">
              <tbody>
                <tr className="header" style={{ backgroundColor: "t" }}>
                  <td align="left" valign="top">
                    <Image src="/images/layout-2/logo/logo.png" alt="" className="main-logo" />
                  </td>
                  <td className="menu" align="right">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Whishlist</a>
                      </li>
                      <li>
                        <a href="#">my cart</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table className="slider" align="center" bordered cellPadding="0" cellSpacing="0" width="100%">
              <tbody>
                <tr>
                  <th style={{ backgroundColor: "#11bfff", padding: "30px", width: "60%" }}>
                    <Table bordered cellPadding="0" cellSpacing="0" width="100%">
                      <tbody>
                        <tr>
                          <td style={{ color: "#ffffff", fontSize: "16px", lineHeight: "20px", textTransform: "uppercase", textAlign: "left", paddingBottom: "5px" }}>New Color</td>
                        </tr>
                        <tr>
                          <td
                            className="h2-white left pb20"
                            style={{
                              color: "#ffffff",
                              fontFamily: "'Roboto', sans-serif",
                              fontSize: "52px",
                              lineHeight: "58px",
                              textTransform: "uppercase",
                              fontWeight: "bold",
                              textAlign: "left",
                              paddingBottom: "20px",
                            }}>
                            new <br />
                            season
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p style={{ fontSize: "13px", color: "#4e54cb", textAlign: "left" }}>We are committed to your satisfaction with every order.</p>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table>
                      <tbody>
                        <tr>
                          <td
                            className="text-button white-button"
                            style={{
                              fontSize: "14px",
                              lineHeight: "18px",
                              textAlign: "center",
                              textTransform: "uppercase",
                              padding: "10px",
                              background: "#ffffff",
                              color: "#f54084",
                              fontWeight: "bold",
                            }}>
                            <a href="#" target="_blan" style={{ color: "#4e54cb", textDecoration: "none" }}>
                              <span style={{ color: "#f1415e", textDecoration: "none" }}>shop now</span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </th>
                  <th align="center">
                    <Image src="/images/email-temp/e-2-slider.jpg" alt="" style={{ marginBottom: "-5px" }} />
                  </th>
                </tr>
              </tbody>
            </Table>
            <Table align="center" bordered cellPadding="0" cellSpacing="0" width="100%" style={{ marginTop: "30px" }}>
              <tbody>
                <tr>
                  <td align="center">
                    <Table align="center" bordered className="display-width-inner" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: "450px" }}>
                      <tbody>
                        <tr>
                          <td align="center" style={{ width: "40%" }}>
                            <Image src="/images/email-temp/10.jpg" alt="" style={{ width: "225px", marginBottom: "-4px" }} />
                          </td>
                          <td align="center" style={{ backgroundColor: "#fafafa", width: "60%" }}>
                            <h3 style={{ margin: "0" }}>Product One</h3>
                            <div style={{ color: "#E01931", fontWeight: "normal", fontSize: "16px", lineHeight: "27px", letterSpacing: "1px", margin: "4px" }}>
                              <span
                                style={{ color: "#666666", fontWeight: "normal", fontSize: "15px", lineHeight: "25px", letterSpacing: "1px;" }}
                                className="txt-price1"
                                data-color="Price1"
                                data-size="Price1"
                                data-min="10"
                                data-max="35">
                                $25.00
                              </span>
                              <span className="txt-price2">&nbsp;&nbsp;&nbsp;</span>$20.90
                            </div>
                            <div style={{ padding: "15px 0px", textTransform: "uppercase", fontSize: "11px", letterSpacing: "1px" }}>
                              <a href="#" style={{ color: "#ffffff", textDecoration: "none", background: "#000", padding: "8px 12px" }}>
                                SHOP NOW
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table align="center" bordered className="display-width-inner" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: "450px" }}>
                      <tbody>
                        <tr>
                          <td align="center" style={{ backgroundColor: "#fafafa", width: "60%" }}>
                            <h3 style={{ margin: "0" }}>Product One</h3>
                            <div style={{ color: "#E01931", fontWeight: "normal", fontSize: "16px", lineHeight: "27px", letterSpacing: "1px", margin: "4px" }}>
                              <span
                                style={{ color: "#666666", fontSize: "15px", lineHeight: "25px", letterSpacing: "1px" }}
                                className="txt-price1"
                                data-color="Price1"
                                data-size="Price1"
                                data-min="10"
                                data-ax="35">
                                $25.00
                              </span>
                              <span className="txt-price2">&nbsp;&nbsp;&nbsp;</span>$20.90
                            </div>
                            <div style={{ padding: "15px 0px", textTransform: "uppercase", fontSize: "11px", letterSpacing: "1px" }}>
                              <a href="#" style={{ color: "#ffffff", textDecoration: "none", background: "#000", padding: "8px 12px" }}>
                                SHOP NOW
                              </a>
                            </div>
                          </td>
                          <td align="center" style={{ width: "40%" }}>
                            <Image src="/images/email-temp/11.jpg" alt="" style={{ width: "225px", marginBottom: "-4px" }} />
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <Table align="center" bordered className="display-width-inner" cellPadding="0" cellSpacing="0" width="100%" style={{ maxWidth: "450px" }}>
                      <tbody>
                        <tr>
                          <td align="center" style={{ width: "40%" }}>
                            <Image src="/images/email-temp/12.jpg" alt="" style={{ width: "225px", marginBottom: "-4px" }} />
                          </td>
                          <td align="center" style={{ backgroundColor: "#fafafa", width: "60%" }}>
                            <h3 style={{ margin: "0" }}>Product One</h3>
                            <div style={{ color: "#E01931", fontSize: "16px", lineHeight: "27px", letterSpacing: "1px", margin: "4px" }}>
                              <span
                                style={{ color: "#666666", fontSize: "15px", lineHeight: "25px", letterSpacing: "1px;" }}
                                className="txt-price1"
                                data-color="Price1"
                                data-size="Price1"
                                data-min="10"
                                data-max="35">
                                $25.00
                              </span>
                              <span className="txt-price2">&nbsp;&nbsp;&nbsp;</span>$20.90
                            </div>
                            <div style={{ padding: "15px 0px", textTransform: "uppercase", fontSize: "11px", letterSpacing: "1px" }}>
                              <a href="#" style={{ color: "#ffffff", textDecoration: "none", background: "#000", padding: "8px 12px" }}>
                                SHOP NOW
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table align="center" bordered cellPadding="0" cellSpacing="0" width="100%" style={{ marginTop: "30px" }}>
              <thead>
                <tr>
                  <td>
                    <h4 className="title" style={{ width: "100%", textAlign: "center", marginTop: "50px" }}>
                      trending product
                    </h4>
                    <p style={{ margin: "0" }}>GET EVEN 25% OFF DISCOUNT</p>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="product-box hover">
                      <div className="product border-theme br-0">
                        <Image src="/images/email-temp/13.jpg" alt="product" style={{ width: "100%" }} />
                      </div>
                      <div className="product-info">
                        <a href="#">
                          <h6>When an unknown.</h6>
                        </a>
                        <h4>$45.00</h4>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="product-box hover">
                      <div className="product border-theme br-0">
                        <Image src="/images/email-temp/14.jpg" alt="product" style={{ width: "100%" }} />
                      </div>
                      <div className="product-info">
                        <div className="rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <a href="#">
                          <h6>When an unknown.</h6>
                        </a>
                        <h4>$45.00</h4>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table bordered cellPadding="0" cellSpacing="0" align="center" style={{ marginTop: "30px" }}>
              <tbody>
                <tr className="add-with-banner">
                  <td>
                    <a href="#">
                      <Image src="/images/email-temp/banner.jpg" alt="product" style={{ width: "100%" }} />
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table bordered cellPadding="0" cellSpacing="0" align="center" style={{ marginTop: "30px" }}>
              <tbody>
                <tr>
                  <td>
                    <Image src="/images/email-temp/banner-2.jpg" alt="" style={{ width: "100%" }} />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table className="main-bg-light text-center" align="center" bordered cellPadding="0" cellSpacing="0" width="100%" style={{ marginTop: "30px" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "30px" }}>
                    <div>
                      <h4 className="title" style={{ margin: "0" }}>
                        Follow us
                      </h4>
                    </div>
                    <Table bordered cellPadding="0" cellSpacing="0" className="footer-social-icon text-center" align="center" style={{ marginTop: "20px" }}>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <Image src="/images/email-temp/facebook.png" alt="" />
                            </a>
                          </td>
                          <td>
                            <a href="#">
                              <Image src="/images/email-temp/youtube.png" alt="" />
                            </a>
                          </td>
                          <td>
                            <a href="#">
                              <Image src="/images/email-temp/twitter.png" alt="" />
                            </a>
                          </td>
                          <td>
                            <a href="#">
                              <Image src="/images/email-temp/gplus.png" alt="" />
                            </a>
                          </td>
                          <td>
                            <a href="#">
                              <Image src="/images/email-temp/linkedin.png" alt="" />
                            </a>
                          </td>
                          <td>
                            <a href="#">
                              <Image src="/images/email-temp/pinterest.png" alt="" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <div style={{ borderTop: "1px solid #ddd", margin: "20px auto 0" }}></div>
                    <Table bordered cellPadding="0" cellSpacing="0" width="100%" style={{ margin: "20px auto 0" }}>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#" style={{ fontSize: "13px" }}>
                              Want to change how you receive these emails?
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p style={{ fontSize: "13px", margin: "0" }}>2022 - 23 Copy Right by Themeforest powerd by Pixel Strap</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" style={{ fontSize: "13px", margin: "0", textDecoration: "underline" }}>
                              Unsubscribe
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
              </tbody>
            </Table>
          </td>
        </tr>
      </tbody>
    </Table>
    <style global jsx>
      {`
        body {
          text-align: center;
          margin: 20px auto;
          width: 650px;
          font-family: "Open Sans", sans-serif;
          background-color: #e2e2e2;
          display: block;
        }
        .headerTable {
          text-align: center;
        }
        .email-template-table {
          background-color: #f8f9fa;
          box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353);
          border: 0;
          align: center;
          width: 100%;
        }

        .main-logo {
          width: 180px;
          padding: 10px 20px;
        }

        .menu {
          width: 100%;
          align: right;
          display: inline;
          text-decoration: unset;
        }
        .menu a {
          text-transform: capitalize;
          font-size: 16px;
          margin-right: 15px;
          text-decoration: none;
        }
        .menu li a {
          color: #444;
        }
        .title {
          text-align: center;
          color: #444444;
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 0;
          padding-bottom: 0;
          text-transform: capitalize;
          display: inline-block;
          line-height: 1;
        }
        .header li {
          align: left;
          vertical-align: top;
        }
      `}
    </style>
  </>
);

export default EmailTemplate2;
