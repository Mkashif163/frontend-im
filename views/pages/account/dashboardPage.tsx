import React, { useState } from "react";
import { NextPage } from "next";
import { Row, Col } from "reactstrap";
import DashboardComponent from "views/pages/account/acccountComponent/dashboardComponent";
import OrderComponent from "views/pages/account/acccountComponent/orderComponent";
import CartPage from "./cartPage";
import WishListPage from "views/pages/account/WishListPage";
import ReviewPage from "../revidewPage";
import ForgetPassword from "./forgetPasswordPage";
import Profile from "./profilePage";
import Address from "./addressPage";
import PaymentMethod from "./paymentPage";
import { useRouter } from "next/router";
import Link from "next/link";

const Dashboard: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("dashboard");

  return (
    <>
      <section className="section-big-py-space bg-light">
        <div className="custom-container">
          <Row>
            <Col lg="2" className="m-0 p-0">
              <div
                className="account-sidebar"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <a className="popup-btn">my account</a>
              </div>
              <div
                className={`dashboard-left`}
                style={{
                  left: isOpen ? "0px" : "",
                }}
              >
                <div className="collection-mobile-back">
                  <span
                    className="filter-back"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <i className="fa fa-angle-left" aria-hidden="true"></i> back
                  </span>
                </div>
                <div className="block-content ">
                  <ul>
                    <li
                      className={
                        currentComponent === "dashboard" ? "active" : ""
                      }
                      onClick={() => {
                        setCurrentComponent("dashboard");
                      }}
                    >
                      <Link href={""}>Dashboard</Link>
                    </li>
                    <li
                      className={currentComponent === "order" ? "active" : ""}
                      onClick={() => {
                        setCurrentComponent("order");
                      }}
                    >
                      <Link href={""}>My Orders</Link>
                    </li>
                    {/* Updated "Account" Link with sub-items */}
                    <li
                      className={currentComponent === "account" ? "active" : ""}
                    >
                      <div className="dropdown">
                        <span
                          className={
                            currentComponent === "dashboard" ? "active" : ""
                          }
                          onClick={() => {
                            setCurrentComponent("dashboard");
                          }}
                        >
                          <Link href={""}>Account</Link>
                        </span>{" "}
                        <ul className="submenu">
                          <li
                            className={
                              currentComponent === "profile" ? "active" : ""
                            }
                            onClick={() => {
                              setCurrentComponent("profile");
                            }}
                          >
                            <Link href={""}>Profile</Link>
                          </li>
                          <li
                            className={
                              currentComponent === "address" ? "active" : ""
                            }
                            onClick={() => {
                              setCurrentComponent("address");
                            }}
                          >
                            <Link href={""}>Address</Link>
                          </li>
                          <li
                            className={
                              currentComponent === "payment" ? "active" : ""
                            }
                            onClick={() => {
                              setCurrentComponent("payment");
                            }}
                          >
                            <Link href={""}>Payment Method</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* Continue with the other list items */}
                    <li
                      className={
                        currentComponent === "wishlist" ? "active" : ""
                      }
                      onClick={() => {
                        setCurrentComponent("wishlist");
                      }}
                    >
                      <Link href={""}>Wishlist</Link>
                    </li>
                    <li
                      className={currentComponent === "cart" ? "active" : ""}
                      onClick={() => {
                        setCurrentComponent("cart");
                      }}
                    >
                      <Link href={""}>Cart</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="10">
              <div className="dashboard-right">
                <div className="dashboard">
                  {currentComponent === "dashboard" && <DashboardComponent />}
                  {currentComponent === "order" && <OrderComponent />}
                  {currentComponent === "cart" && <CartPage />}
                  {currentComponent === "wishlist" && <WishListPage />}
                  {currentComponent === "reviews" && <ReviewPage />}
                  {currentComponent === "changePassword" && <ForgetPassword />}
                  {currentComponent === "profile" && <Profile />}
                  {currentComponent === "address" && <Address />}
                  {currentComponent === "payment" && <PaymentMethod />}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* <!-- section end --> */}
    </>
  );
};

export default Dashboard;
