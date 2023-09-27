import React, { useContext, useState, useEffect } from "react";
import { NextPage } from "next";
import { Label, Input, Form, FormGroup, Button } from "reactstrap";
import { toast } from "react-toastify";
import { CartContext } from "helpers/cart/cart.context";
import { useRouter } from "next/router";
import Link from "next/link";

const UserSignedInOption: NextPage = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false); // Replace with your authentication state logic
  const router = useRouter();

  const handleLogout = async (e) => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    setUserLoggedIn(false);
    router.push("/");
    // Perform any additional logout actions if needed
    // For example, you can redirect the user to the login page
    // or clear user-related state.

    // Display a logout success message using toast or any other method
    toast.success("You have been Signed out successfully!");
  };

  // Use useEffect to respond to changes in the userLoggedIn state
  useEffect(() => {
    // The effect runs once, during component initialization
    // Check if the user is logged in or not based on your logic
    const isUserLoggedIn = localStorage.getItem("token") !== null;

    // Update the userLoggedIn state based on the check
    setUserLoggedIn(isUserLoggedIn);

    // Perform any additional actions based on the user's login state
    if (!isUserLoggedIn) {
      // For example, you can clear user-related data or redirect the user
    }
  }, []); // Empty dependency array for one-time initialization

  return (
    <>
      <li className="mobile-user onhover-dropdown mt-2">
        <div className="dropdown">
          <button className="dropbtn">
            <i className="icon-user"></i>
          </button>
          <div className="dropdownContent">
            {userLoggedIn ? (
              <>
                <span className="d-flex">
                  <span className="col-2 m-2">
                    <img
                      className={`userImage img-fluid`}
                      src="/images/layout-2/product/4.jpg"
                      alt="image"
                    />
                  </span>
                  <p className="fs-6 ms-2 mt-1">{`Welcome back, username`}</p>
                </span>
                <a href="/" onClick={handleLogout}>
                  <span className="ms-2 text-primary">Sign Out</span>
                </a>
                <hr className="m-2" />
                <span className="myLink">
                  <Link href="/pages/account/dashboard">
                    <span className="ms-2">My Orders</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/dashboard">
                    <span className="ms-2">My Coins</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/dashboard">
                    <span className="ms-2">Message Center</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/dashboard">
                    <span className="ms-2">Payment</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/dashboard">
                    <span className="ms-2">Wish List</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/dashboard">
                    <span className="ms-2">My Favorite Stores</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/dashboard">
                    <span className="ms-2">My Coupons</span>
                  </Link>
                </span>
              </>
            ) : (
              <>
                <span className="text-center">
                  <p className="p-2 fs-6">Welcome to Industry Mall!</p>
                </span>
                <span className="d-flex justify-content-center">
                  <a
                    href="/pages/account/register"
                    className=" text-white m-0 p-0 d-flex justify-content-center test"
                    id="test"
                  >
                    <button className="btn btn-danger btn-sm fw-bold">
                      Register
                    </button>
                  </a>
                  <span className="me-4"></span>
                  <a
                    href="/pages/account/login"
                    className="text-white m-0 p-0 d-flex justify-content-center test"
                  >
                    <button className="btn btn-primary btn-sm fw-bold">
                      Login
                    </button>
                  </a>
                </span>
                <hr className="m-2" />
                <span className="myLink">
                  <Link href="/pages/account/login">
                    <span className="ms-2">My Orders</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/login">
                    <span className="ms-2">My Coins</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/login">
                    <span className="ms-2">Message Center</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/login">
                    <span className="ms-2">Payment</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/login">
                    <span className="ms-2">Wish List</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/login">
                    <span className="ms-2">My favorite Stores</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/login">
                    <span className="ms-2">My Coupons</span>
                  </Link>
                </span>
              </>
              // <Link href="/pages/account/login">
              //   <button className="btn btn-sm btn-primary ">Login</button>
              //   <button className="btn btn-sm btn-primary ">SignUp</button>
              // </Link>
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default UserSignedInOption;
