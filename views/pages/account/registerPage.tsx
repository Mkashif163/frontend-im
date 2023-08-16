import React from "react";
import { NextPage } from "next";
import { Label, Input, Row, Col, Form, FormGroup } from "reactstrap";
import Breadcrumb from "../../Containers/Breadcrumb";

const RegisterPage: NextPage = () => {
  return (
    <>
      <Breadcrumb title="Register" parent="home" />
      {/* <!--section start--> */}
      <section className="login-page section-big-py-space bg-light">
        <div className="custom-container">
          <Row className="row">
            <Col lg="4" className="offset-lg-4">
              <div className="theme-card">
                <h3 className="text-center">Create account</h3>
                <Form className="theme-form">
                  <div className="form-row row">
                    <FormGroup className="col-md-12">
                      <Label htmlFor="email">First Name</Label>
                      <Input type="text" className="form-control" id="fname" placeholder="First Name" required />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                      <Label htmlFor="review">Last Name</Label>
                      <Input type="text" className="form-control" id="lname" placeholder="Last Name" required />
                    </FormGroup>
                  </div>
                  <div className="form-row row">
                    <FormGroup className="col-md-12">
                      <Label htmlFor="email">email</Label>
                      <Input type="text" className="form-control" id="email" placeholder="Email" required />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                      <Label htmlFor="review">Password</Label>
                      <Input type="password" className="form-control" id="review" placeholder="Enter your password" required />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                      <a href="#" className="btn btn-normal">
                        create Account
                      </a>
                    </FormGroup>
                  </div>
                  <div className="form-row row">
                    <Col md="12">
                      <p>
                        Have you already account?{" "}
                        <a href="/pages/account/login" className="txt-default">
                          click
                        </a>{" "}
                        here to &nbsp;
                        <a href="/pages/account/login" className="txt-default">
                          Login
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
      {/* <!--Section ends--> */}
    </>
  );
};

export default RegisterPage;
