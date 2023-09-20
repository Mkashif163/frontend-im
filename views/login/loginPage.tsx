import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Row, Col, Input, Label } from "reactstrap";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const Login: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("mk21@gmail.com");
  const [password, setPassword] = useState("12357890");

  useEffect(() => {
    // Check if the user is already authenticated
    const token = localStorage.getItem("token");

    if (token) {
      // User is authenticated, redirect to the dashboard or another authenticated page
      router.push(`/pages/account/dashboard`);
    }
  }, []);

  const loginAuth = async (email, password) => {
    try {
      // Define the data to be sent in the request body
      const requestData = {
        email: email,
        password: password,
      };

      // Make a POST request to the API endpoint
      const response = await axios.post("http://18.235.14.45/api/login", requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if the login was successful
      if (response.status === 200 && response.data.success) {
        // Store the token and user ID in localStorage
        localStorage.setItem("token", response.data.success.token);
        localStorage.setItem("customer_id", response.data.customer_id);

        // Set the user's name in localStorage
        localStorage.setItem("Name", "Emay Walter");

        // Simulate a delay and then redirect to the dashboard
        setTimeout(() => {
          router.push(`/pages/account/dashboard`);
        }, 200);
      } else {
        toast.error("Login failed. Please check your credentials.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      setTimeout(() => {
        toast.error("Network error. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
        });
      }, 200);
    }
  };

  return (
    <>
      <section className="login-page section-big-py-space">
        <div className="custom-container">
          <Row className="row">
            <Col xl="4" lg="6" md="8" className="offset-xl-4 offset-lg-3 offset-md-2">
              <div className="theme-card bg-light">
                <h3 className="text-center">Login</h3>
                <form className="theme-form">
                  <div className="form-group">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <button type="button" className="btn btn-normal" onClick={() => loginAuth(email, password)}>
                    Login
                  </button>
                  <a className="float-end txt-default mt-2" href="/pages/account/forget-password" id="fgpwd">
                    Forgot your password?
                  </a>
                </form>
                <p className="mt-3">Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                <a href="/pages/account/register" className="txt-default pt-3 d-block">
                  Create an Account
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Login;
