import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Row, Col, Button } from "reactstrap";
import DashboardComponent from "./acccountComponent/dashboardComponent";
import OrderComponent from "views/pages/account/acccountComponent/orderComponent";
import CartPage from "./cartPage";
import WishListPage from "views/pages/account/WishListPage";
import ReviewPage from "../revidewPage";
import ForgetPassword from "./forgetPasswordPage";
import Profile from "./profilePage";
import Address from "./addressPage";
import PaymentMethod from "./paymentPage";
import Link from "next/link";
import axios from "axios";
import OrderHistoryPage from "../orderHistory";


type Props = {
  userId: any,
}

const Dashboard: NextPage<Props> = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData , setUserData] = useState({});
  const [currentComponent, setCurrentComponent] = useState("dashboard");


  useEffect(() => {
      // Fetch user data from the API
      axios.get(`http://18.235.14.45/api/profile/${userId}`)
        .then((response) => {
            setUserData(response.data.success);
        })
        .catch((error) => {
          // Handle request error
          console.error("Error fetching user data:", error);
        });
    }
  , [userId]);

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
                {userId ? <div className="dashboard">
                  {currentComponent === "dashboard" && <DashboardComponent userData = {userData}/>}
                  {currentComponent === "order" && <OrderHistoryPage />}
                  {currentComponent === "cart" && <CartPage />}
                  {currentComponent === "wishlist" && <WishListPage />}
                  {currentComponent === "reviews" && <ReviewPage userData={userData}/>}
                  {currentComponent === "changePassword" && <ForgetPassword />}
                  {currentComponent === "profile" && <Profile userData={userData}/>}
                  {currentComponent === "address" && <Address userData={userData}/>}
                  {currentComponent === "payment" && <PaymentMethod userData={userData}/>}
                </div> : <div className="text-center">
                  <h2 className="p-5">Please Login or Signup First 😴</h2>
                  <div className="pb-5">
                    <Link href="/pages/account/login">
                      <Button className="m-2" color="btn btn-rounded">Login</Button>
                    </Link>
                    <Link href="/pages/account/register">
                      <Button className="m-2" color="btn  btn-rounded btn-outline">Signup</Button>
                    </Link>
                  </div>
                </div>
                }
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
