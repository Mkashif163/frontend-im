import React, { useContext, useState, useEffect } from "react";
import { NextPage } from "next";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { toast } from "react-toastify";
import { CartContext } from "helpers/cart/cart.context";
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
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            <i className="icon-user"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.ItemText>
              <p>Welcome to</p>
              <p>
                <span className="text-primary fw-bold">Industry</span>{" "}
                <span className="text-danger fw-bold">Mall</span>!
              </p>
            </Dropdown.ItemText>
            {userLoggedIn ? (
              <>
                <Dropdown.Item href="#">Manage My Account</Dropdown.Item>
                <Dropdown.Item href="#">My Orders</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </>
            ) : (
              <>
                <Dropdown.Item>
                  <a
                    href="/pages/account/register"
                    className="text-white m-0 p-1 d-flex justify-content-center test"
                  >
                    <Button variant="danger" size="sm">
                      Register
                    </Button>
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a
                    href="/pages/account/login"
                    className="text-white m-0 p-1 d-flex justify-content-center test"
                  >
                    <Button variant="primary" size="sm">
                      Login In
                    </Button>
                  </a>
                </Dropdown.Item>
              </>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </li>
    </>
  );
};

export default UserSignedInOption;
