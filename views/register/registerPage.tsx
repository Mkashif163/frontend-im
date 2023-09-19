import React, { useState } from "react";
import { NextPage } from "next";
import { Label, Input, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage: NextPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    c_password: "",
    gender: "",
  });

  const [token, setToken] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://18.235.14.45/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;

        setToken(token);

        toast.success("Registration successful!", {
          position: "top-right",
          autoClose: 3000,
        });
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
                        value={formData.first_name}
                        onChange={handleChange}
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
                        value={formData.last_name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.password}
                        onChange={handleChange}
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
                        value={formData.c_password}
                        onChange={handleChange}
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
                        value={formData.gender}
                        onChange={handleChange}
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
