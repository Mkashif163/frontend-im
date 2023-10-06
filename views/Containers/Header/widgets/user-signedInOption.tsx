import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const UserSignedInOption: NextPage = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false); // Replace with your authentication state logic
  const router = useRouter();

  const handleLogout = async (e) => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    setUserLoggedIn(false);
    router.push("/");
    toast.success("You have been Signed out successfully!");
  };

  const userId = localStorage.getItem("id");

  const [userData, setUserData] = useState({});

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
                  <span className="col-8 my-3 mx-2">
                    <h5 style={{ color: "#0272BC" }}>{userData.first_name} {userData.last_name}</h5>
                  </span>
                  <span className="col-3 m-2">
                    <FontAwesomeIcon icon={faUser} className="mx-2" size="2xl" style={{ color: "#0272BC" }} />
                  </span>
                </span>
                <a href="/" onClick={handleLogout}>
                  <span className="btn-sm btn btn-outline-primary">Sign Out</span>
                </a>
                <hr className="m-2" />
                <span className="myLink">
                  <Link href="/pages/order-history">
                    <span className="ms-2">My Orders</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/dashboard">
                    <span className="ms-2">Payment</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/wishlist">
                    <span className="ms-2">Wish List</span>
                  </Link>
                </span>
                <span className="myLink mb-1">
                  <Link href="/pages/account/cart">
                    <span className="ms-2">My Cart</span>
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
                    <button className="btn btn-outline-success btn-sm fw-bold">
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
                  <Link href="/pages/account/dashboard">
                    <span className="ms-2">My Orders</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/dashboard">
                    <span className="ms-2">Payment</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/wishlist">
                    <span className="ms-2">Wish List</span>
                  </Link>
                </span>
                <span className="myLink">
                  <Link href="/pages/account/cart">
                    <span className="ms-2">My Cart</span>
                  </Link>
                </span>
              </>
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default UserSignedInOption;
