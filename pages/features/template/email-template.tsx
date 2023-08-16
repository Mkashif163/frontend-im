import React from "react";
import { Table } from "reactstrap";
import Link from "next/link";
import Image from "next/image";

const EmailTemplate = () => (
  <>
    <Table borderless className="email-template-table" cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td>
            <Table className="headerTable" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr className="header">
                  <td>
                    <Image alt="" src="/images/layout-2/logo/logo.png" className="main-logo" />
                  </td>
                  <td className="menu">
                    <ul>
                      <li>
                        <Link href="/">
                          <a href="#">Home</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a href="#">Contact</a>
                        </Link>
                      </li>
                      <li>
                        <a href="#">Whishlist</a>
                      </li>
                      <li>
                        <a href="#">my cart</a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table align="center" cellPadding="0" cellSpacing="0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <Image src="/images/email-temp/1.jpg" alt="" style={{ width: "100%;" }} />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table cellPadding="0" cellSpacing="0" width="100%" style={{ marginTop: "30px;" }}>
              <tbody>
                <tr className="add-with-banner">
                  <td>
                    <a href="#">
                      <Image alt="" src="/images/email-temp/6.jpg" style={{ width: "100%;" }} />
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <Image alt="" src="/images/email-temp/5.jpg" style={{ width: "100%;" }} />
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table className="main-bg-light" cellPadding="0" cellSpacing="0" width="100%" style={{ marginTop: "40px" }}></Table>
            <Table cellPadding="0" cellSpacing="0" width="100%">
              <tbody>
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <a href="#">
                      <Image alt="" src="/images/email-temp/cosmetic.jpg" style={{ width: "100%" }} />
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
            <h4 className="title" style={{ textAlign: "center" }}>
              Additional 50% Off
            </h4>
            <h5 style={{ textAlign: "center", margin: "10px", color: "#777" }}>On clothes for kids,women & Mens Wear</h5>
            <Table align="center" cellPadding="0" cellSpacing="0" width="100%" style={{ marginTop: "30px" }}>
              <tbody>
                <tr>
                  <td>
                    <div className="product-box hover">
                      <div className="product border-theme br-0">
                        <Image src="/images/email-temp/pro-1.jpg" alt="product" style={{ width: "170px" }} />
                      </div>
                      <div className="product-info">
                        <a href="#" style={{ textAlign: "center" }}>
                          <h6 style={{ textAlign: "center" }}>When an unknown.</h6>
                        </a>
                        <h4 style={{ textAlign: "center" }}>$45.00</h4>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="product-box hover">
                      <div className="product border-theme br-0">
                        <Image src="/images/email-temp/pro-2.jpg" alt="product" style={{ width: "170px" }} className="img-fluid " />
                      </div>
                      <div className="product-info">
                        <div className="rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <a href="#" style={{ textAlign: "center" }}>
                          <h6 style={{ textAlign: "center" }}>When an unknown.</h6>
                        </a>
                        <h4 style={{ textAlign: "center" }}>$45.00</h4>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="product-box hover">
                      <div className="product border-theme br-0">
                        <Image src="/images/email-temp/pro-3.jpg" alt="product" style={{ width: "170px" }} className="img-fluid " />
                      </div>
                      <div className="product-info">
                        <div className="rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <a href="#" style={{ textAlign: "center" }}>
                          <h6 style={{ textAlign: "center" }}>When an unknown.</h6>
                        </a>
                        <h4 style={{ textAlign: "center" }}>$45.00</h4>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table className="main-bg-light text-center" align="center" cellPadding="0" cellSpacing="0" width="100%" style={{ marginTop: "30px" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "30px" }}>
                    <div>
                      <h4 className="title" style={{ margin: "0", textAlign: "center" }}>
                        Follow us
                      </h4>
                    </div>
                    <Table cellPadding="0" cellSpacing="0" className="footer-social-icon text-center" align="center" style={{ width: "auto", marginTop: "20px;" }}>
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
                    <Table cellPadding="0" cellSpacing="0" width="100%" style={{ margin: "20px auto 0" }}>
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
        .table td {
          padding: 0;
          text-align: right;
          vertical-align: top;
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

export default EmailTemplate;
