import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Label, Input, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import router from "next/router";

const RegisterPage: NextPage = () => {


  const [first_name, setFirtName] = useState("")
  const [last_name, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [c_password, setCpassword] = useState("")
  const [gender, setGGender] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form data to be sent
    const formData = {
      "first_name": first_name,
      "last_name": last_name,
      "email": email,
      "phone_number": phone,
      "password": password,
      "c_password": c_password,
      "gender": gender,
    };

    try { 
      const response = await axios.post("http://18.235.14.45/api/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200 && response.data.success) {
        // Store the token and user ID in localStorage
        localStorage.setItem('token', response.data.success.token);
        localStorage.setItem('customer_id', response.data.customer_id);

        // Redirect to the dashboard page
        router.push("/pages/account/dashboard");
      } else {
        toast.error("Registration failed. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Network error. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    // Check if the token is available in localStorage
    const token = localStorage.getItem("token");
    
    if (token) {
      // Token is available, redirect to the dashboard
      router.push("/pages/account/dashboard");
    }
  }, []);


  return (

    <>
      <ToastContainer />
      <section className="login-page section-big-py-space bg-light">
        <div className="custom-container">
          <Row className="row">
            <Col lg="4" className="offset-lg-4">
              <div className="theme-card">
                <h3 className="text-center">Create account</h3>
                <Form className="theme-form" onSubmit={handleSubmit}>
                  <div className="form-row row">
                    <FormGroup className="col-md-12">
                      <Label htmlFor="first_name">First Name</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="first_name"
                        name="first_name"
                        placeholder="First Name"
                        required
                        value={first_name}
                        onChange={(e) => { setFirtName(e.target.value) }}
                      />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                      <Label htmlFor="last_name">Last Name</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        placeholder="Last Name"
                        required
                        value={last_name}
                        onChange={(e) => { setLastName(e.target.value) }}
                      />
                    </FormGroup>
                  </div>
                  <div className="form-row row">
                    <FormGroup className="col-md-12">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="phone_number">Phone Number</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="phone_number"
                        name="phone_number"
                        placeholder="Enter your Phone Number"
                        required
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value) }}
                      />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                      />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                      <Label htmlFor="c_password">Confirm Password</Label>
                      <Input
                        type="password"
                        className="form-control"
                        id="c_password"
                        name="c_password"
                        placeholder="Enter your password"
                        required
                        value={c_password}
                        onChange={(e) => { setCpassword(e.target.value) }}
                      />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                      <Label htmlFor="gender">Gender</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="gender"
                        name="gender"
                        placeholder="Gender"
                        required
                        value={gender}
                        onChange={(e) => { setGGender(e.target.value) }}
                      />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                      <Button className="btn btn-normal" type="submit">
                        Sign Up
                      </Button>
                    </FormGroup>
                  </div>
                  <div className="form-row row">
                    <Col md="12">
                      <p>
                        Have you already an account?{" "}
                        <a href="/pages/account/login" className="txt-default">
                          Click here to Login
                        </a>
                      </p>
                    </Col>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
