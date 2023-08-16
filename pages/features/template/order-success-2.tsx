import React from "react";
import { NextPage } from "next";
import { Table, Media } from "reactstrap";

const OrderSuccess2: NextPage = () => (
  <>
    <Table borderless className="email-template-table" cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td>
            <Table align="left" cellPadding="0" cellSpacing="0" style={{ textAlign: "left" }} width="100%">
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <Media src="/images/email-temp/delivery-2.png" alt="" style={{ marginBottom: "30px" }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style={{ fontSize: "14px" }}>
                      <b>Hi John Doe,</b>
                    </p>
                    <p style={{ fontSize: "14px" }}>Order Is Successfully Processsed And Your Order Is On The Way,</p>
                    <p style={{ fontSize: "14px" }}>Transaction ID : 267676GHERT105467,</p>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table cellPadding="0" cellSpacing="0" align="left" style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}>
              <tbody>
                <tr>
                  <td style={{ backgroundColor: "#fafafa", border: "1px solid #ddd", padding: "15px", letterSpacing: "0.3px", width: "50%" }}>
                    <h5>Your Shipping Address</h5>
                    <p style={{ textAlign: "left", fontWeight: "normal", fontSize: "14px", color: "#000000", lineHeight: "21px", marginTop: "0" }}>
                      268 Cambridge Lane New Albany,
                      <br /> IN 47150268 Cambridge Lane <br />
                      New Albany, IN 47150
                    </p>
                  </td>
                  <td>
                    <Media src="/images/email-temp/space.jpg" alt=" " height="25" width="30" />
                  </td>
                  <td style={{ backgroundColor: "#fafafa", border: "1px solid #ddd", padding: "15px", letterSpacing: "0.3px", width: "50%" }}>
                    <h5>Your Billing Address:</h5>
                    <p style={{ textAlign: "left", fontWeight: "normal", fontSize: "14px", color: "#000000", lineHeight: "21px", marginTop: "0" }}>
                      268 Cambridge Lane New Albany,
                      <br /> IN 47150268 Cambridge Lane <br />
                      New Albany, IN 47150
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table bordered className="order-detail" cellPadding="0" cellSpacing="0" align="left" style={{ width: "100%", marginBottom: "50px" }}>
              <thead>
                <tr className="email-tr">
                  <th>PRODUCT</th>
                  <th style={{ paddingLeft: "15px" }}>DESCRIPTION</th>
                  <th>QUANTITY</th>
                  <th>PRICE </th>
                </tr>
              </thead>
              <tbody>
                <tr className="email-tr">
                  <td>
                    <Media src="/images/email-temp/pro-1.jpg" alt="" width="80" />
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ marginTop: "15px" }}>Three seater Wood Style sofa for Leavingroom </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px", marginBottom: "0px" }}>
                      Size : <span> L</span>{" "}
                    </h5>
                    <h5 style={{ fontSize: "14px", color: "#444", marginTop: "10px" }}>
                      QTY : <span>1</span>
                    </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px" }}>
                      <b>$500</b>
                    </h5>
                  </td>
                </tr>
                <tr className="email-tr">
                  <td>
                    <Media src="/images/email-temp/pro-2.jpg" alt="" width="80" />
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ marginTop: "15px" }}>Three seater Wood Style sofa for Leavingroom </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px", marginBottom: "0px" }}>
                      Size : <span> L</span>{" "}
                    </h5>
                    <h5 style={{ fontSize: "14px", color: "#444", marginTop: "10px" }}>
                      QTY : <span>1</span>
                    </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px" }}>
                      <b>$500</b>
                    </h5>
                  </td>
                </tr>
                <tr className="email-tr">
                  <td>
                    <Media src="/images/email-temp/pro-3.jpg" alt="" width="80" />
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ marginTop: "15px" }}>Three seater Wood Style sofa for Leavingroom </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px", marginBottom: "0px" }}>
                      Size : <span> L</span>{" "}
                    </h5>
                    <h5 style={{ fontSize: "14px", color: "#444", marginTop: "10px" }}>
                      QTY : <span>1</span>
                    </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px" }}>
                      <b>$500</b>
                    </h5>
                  </td>
                </tr>
                <tr className="email-tr">
                  <td>
                    <Media src="/images/email-temp/pro-2.jpg" alt="" width="80" />
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ marginTop: "15px" }}>Three seater Wood Style sofa for Leavingroom </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px", marginBottom: "0px" }}>
                      Size : <span> L</span>{" "}
                    </h5>
                    <h5 style={{ fontSize: "14px", color: "#444", marginTop: "10px" }}>
                      QTY : <span>1</span>
                    </h5>
                  </td>
                  <td valign="top" style={{ paddingLeft: "15px" }}>
                    <h5 style={{ fontSize: "14px", color: "#444", marginTop: "15px" }}>
                      <b>$500</b>
                    </h5>
                  </td>
                </tr>
                <tr className="pad-left-right-space">
                  <td className="m-t-5" colSpan={2} align="left">
                    <p style={{ fontSize: "14px" }}>Subtotal : </p>
                  </td>
                  <td className="m-t-5" colSpan={2} align="right">
                    <b>$2000</b>
                  </td>
                </tr>
                <tr className="pad-left-right-space">
                  <td colSpan={2} align="left">
                    <p style={{ fontSize: "14px" }}>TAX :</p>
                  </td>
                  <td colSpan={2} align="right">
                    <b>$5</b>
                  </td>
                </tr>
                <tr className="pad-left-right-space">
                  <td colSpan={2} align="left">
                    <p style={{ fontSize: "14px" }}>VAT :</p>
                  </td>
                  <td colSpan={2} align="right">
                    <b>$5</b>
                  </td>
                </tr>
                <tr className="pad-left-right-space">
                  <td colSpan={2} align="left">
                    <p style={{ fontSize: "14px" }}>SHIPPING Charge :</p>
                  </td>
                  <td colSpan={2} align="right">
                    <b>$2</b>
                  </td>
                </tr>
                <tr className="pad-left-right-space">
                  <td colSpan={2} align="left">
                    <p style={{ fontSize: "14px" }}>Discount :</p>
                  </td>
                  <td colSpan={2} align="right">
                    <b> $1000</b>
                  </td>
                </tr>
                <tr className="pad-left-right-space ">
                  <td className="m-b-5" colSpan={2} align="left">
                    <p style={{ fontSize: "14px" }}>Total :</p>
                  </td>
                  <td className="m-b-5" colSpan={2} align="right">
                    <b>$2600</b>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table className="main-bg-light text-center top-0" align="center" cellPadding="0" cellSpacing="0" width="100%">
              <tbody>
                <tr>
                  <td style={{ padding: "30px" }}>
                    <div>
                      <h4 className="title" style={{ margin: "0", textAlign: "center" }}>
                        FOLLOW US
                      </h4>
                    </div>
                    <Table cellPadding="0" cellSpacing="0" className="footer-social-icon text-center" align="center" style={{ marginTop: "20px" }}>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">
                              <Media src="/images/email-temp/facebook.png" alt="" />
                            </a>
                          </td>
                          <td>
                            <a href="#">
                              <Media src="/images/email-temp/youtube.png" alt="" />
                            </a>
                          </td>
                          <td>
                            <a href="#">
                              <Media src="/images/email-temp/twitter.png" alt="" />
                            </a>
                          </td>
                          <td>
                            <a href="#">
                              <Media src="/images/email-temp/gplus.png" alt="" />
                            </a>
                          </td>
                          <td>
                            <a href="#">
                              <Media src="/images/email-temp/linkedin.png" alt="" />
                            </a>
                          </td>
                          <td>
                            <a href="#">
                              <Media src="/images/email-temp/pinterest.png" alt="" />
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
                            <p style={{ fontSize: "13px", margin: "0" }}>2023 - 19 Copy Right by Themeforest powerd by Pixel Strap</p>
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

        .email-template-table {
          padding: 0 30px;
          background-color: #f8f9fa;
          box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353);
          width: 100%;
          display: block;
        }
        .email-tr {
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
        }

        .title {
          color: #444444;
          font-size: 22px;
          font-weight: bold;
          padding-bottom: 0;
          text-transform: uppercase;
          display: inline-block;
          line-height: 1;
        }
      `}
    </style>
  </>
);

export default OrderSuccess2;
