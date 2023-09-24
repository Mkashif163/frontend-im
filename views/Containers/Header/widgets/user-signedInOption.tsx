import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { toast } from "react-toastify";
import styles from "./UserSignInOption.module.css";
import { useRouter } from "next/router";

const UserSignedInOption: NextPage = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true); // Replace with your authentication state logic
  const router = useRouter();

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    router.push("/");
    // Perform any additional logout actions if needed
    // For example, you can redirect the user to the login page
    // or clear user-related state.

    // Display a logout success message using toast or any other method
    toast.success("You have been logged out successfully!");
  };

  // Use useEffect to respond to changes in the userLoggedIn state
  useEffect(() => {
    // Check if the user is logged in or not based on your logic
    // Replace the following line with your authentication check logic
    const isUserLoggedIn = localStorage.getItem("token") !== null;

    // Update the userLoggedIn state
    setUserLoggedIn(isUserLoggedIn);

    // Perform any additional actions based on the user's login state
    if (!isUserLoggedIn) {
      // For example, you can clear user-related data or redirect the user
    }
  }, [userLoggedIn]); // Add any dependencies here that need to trigger the effect

  return (
    <>
      <li className="mobile-user onhover-dropdown mt-2">
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>
            <i className="icon-user"></i>
          </button>
          <div className={styles.dropdownContent}>
            <span className="text-center">
              <p>Welcome to</p>
              <p>
                <span className="text-primary fw-bold">Industry</span>{" "}
                <span className="text-danger fw-bold">Mall</span>!
              </p>
            </span>
            {userLoggedIn ? (
              <>
                <a href="#">Manage My Account</a>
                <a href="#">My Orders</a>
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              </>
            ) : (
              <span>
                <a
                  href="/pages/account/register"
                  className=" text-white m-0 p-1 d-flex justify-content-center test"
                  id="test"
                >
                  <button className="btn btn-danger btn-sm">Register</button>
                </a>
                <span>&nbsp;</span>
                <a
                  href="/pages/account/login"
                  className="text-white m-0 p-1 d-flex justify-content-center test"
                >
                  <button className="btn btn-primary btn-sm">Login In</button>
                </a>
              </span>
              // <a href="/pages/account/login">
              //   <button className="btn btn-sm btn-primary ">Login</button>
              //   <button className="btn btn-sm btn-primary ">SignUp</button>
              // </a>
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default UserSignedInOption;
