import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Label, Input, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import router from "next/router";

const RegisterPage: NextPage = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [gender, setGender] = useState("Male"); // Default to "Male"
  const [role ,setRole] = useState("customer");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cPasswordError, setCPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [emailError, setEmailError] = useState(""); // Email error state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    let isFormValid = true;

    // Phone validation: must be a number and 11 digits
    if (!/^\d{11}$/.test(phone)) {
      setPhoneError("Phone number must be 11 digits");
      isFormValid = false;
    } else {
      setPhoneError(""); // Clear phone error if valid
    }

    // Password validation: must have 8 characters with alphabets and special characters
    if (!/^(?=.*[A-Za-z])(?=.*[@#$%^&+=!])(?=.{8,})/.test(password)) {
      setPasswordError("Password must have 8 characters with alphabets and special characters");
      isFormValid = false;
    } else {
      setPasswordError(""); // Clear password error if valid
    }

    // Confirm password validation: must match the password
    if (password !== cPassword) {
      setCPasswordError("Passwords do not match");
      isFormValid = false;
    } else {
      setCPasswordError(""); // Clear confirm password error if valid
    }

    // If any validation failed, don't make the API request
    if (!isFormValid) {
      return;
    }

    // Form data to be sent
    const formData = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone,
      password: password,
      c_password: cPassword,
      gender: gender,
      role:role
    };

    // Set loading to true while waiting for the response
    setIsLoading(true);

    try {
      const response = await axios.post("http://18.235.14.45/api/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200 && response.data.success) {
        // Store the token and user ID in localStorage
        // localStorage.setItem("token", response.data.success.token);
        // localStorage.setItem("customer_id", response.data.customer_id);

        // Redirect to the dashboard page
        router.push("/verifyEmail/verfiyEmail");
      } else {
        toast.error("Registration failed. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error && error.response.data.error.email) {
        // Handle email error
        setEmailError(error.response.data.error.email[0]);
      } else {
        toast.error("Network error. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } finally {
      // Set loading to false when the response is received
      setIsLoading(false);
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
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
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
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
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
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError(""); // Clear email error on input change
                        }}
                      />
                      {emailError && <div className="text-danger">{emailError}</div>}
                    </FormGroup>
                    <FormGroup className="col-md-12">
                      <Label htmlFor="phone_number">Phone Number</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="phone_number"
                        name="phone_number"
                        placeholder="Enter your Phone Number"
                        required
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          setPhoneError(""); // Clear phone error on input change
                        }}
                      />
                      {phoneError && <div className="text-danger">{phoneError}</div>}
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
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setPasswordError(""); // Clear password error on input change
                        }}
                      />
                      {passwordError && <div className="text-danger">{passwordError}</div>}
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
                        value={cPassword}
                        onChange={(e) => {
                          setCPassword(e.target.value);
                          setCPasswordError(""); // Clear confirm password error on input change
                        }}
                      />
                      {cPasswordError && <div className="text-danger">{cPasswordError}</div>}
                    </FormGroup>
                    <FormGroup className="col-md-12">
                      <Label htmlFor="gender">Gender</Label>
                      <select
                        id="gender"
                        name="gender"
                        className="form-control"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)} // Update the selected gender
                        required
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </FormGroup>
                    <FormGroup className="col-md-12">
                      <Label htmlFor="role">Signup As Vendor</Label>
                      <select
                        id="role"
                        name="role"
                        className="form-control"
                        value={role}
                        onChange={(e) => setRole(e.target.value)} // Update the selected gender
                        required
                      >
                        <option value="customer">Customer</option>
                        <option value="vendor">Vendor</option>
                      </select>
                    </FormGroup>
                    <FormGroup className="col-md-12">
                      <Button className="btn btn-normal" type="submit" disabled={isLoading}>
                        {isLoading ? "Signing Up..." : "Sign Up"}
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
