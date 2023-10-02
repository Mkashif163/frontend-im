import React from "react";
import { NextPage } from "next";
import { Input, Label, Row, Col, Form, FormGroup } from "reactstrap";

type Props = {
  userData: any;
};

const Address: NextPage<Props> = ({userData}) => {
  return (
    <>
      {/* <!-- personal deatail section start --> */}
      <section className="contact-page register-page section-big-py-space bg-light">
        <div className="custom-container">
          <Row className="row">
            <Col lg="6">
              <h3 className="mb-3">ADDRESS DETAIL</h3>
              <Form className="theme-form">
                <div className="form-row row">
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="name">First Name</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Your name"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="email">Last Name</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="last-name"
                        placeholder="Last Name"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="review">Phone number</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="review"
                        placeholder="Enter your number"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <div>
                      <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          required
                        />
                      </FormGroup>
                    </div>
                  </Col>
                </div>
                {/* update */}
                <div className="form-row row mt-3">
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="home-ploat">flat / plot</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="home-ploat"
                        placeholder="company name"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="address-two">Address *</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="address-two"
                        placeholder="Address"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="zip-code">Zip Code *</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="zip-code"
                        placeholder="zip-code"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6" className="select_input">
                    <FormGroup>
                      <Label>Country *</Label>
                      <select className="form-control">
                        <option value="Pakistan">Pakistan</option>
                        <option value="UAE">UAE</option>
                        <option value="U.K">U.K</option>
                        <option value="US">US</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="City"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="region-state">Region/State *</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="region-state"
                        placeholder="Region/state"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <button
                      className="btn btn-sm btn-normal mb-lg-5"
                      type="submit"
                    >
                      Save setting
                    </button>
                  </Col>
                </div>
              </Form>
            </Col>
            <Col lg="6">
              <h3 className="mb-3 spc-responsive">SAVED ADDRESS</h3>
              <>
                {/* ================= */}
                <section className="contact-page register-page section-big-py-space bg-light">
                  <div className="custom-container">
                    <Row className="row">
                      <Col lg="12">
                        <div className="theme-form">
                          <div>
                            <Label>
                              Full Name:{" "}
                              <span className="fw-normal">{userData.first_name} {userData.last_name}</span>
                            </Label>
                          </div>
                          <div>
                            <Label>
                              Flat / Plot:{" "}
                              <span className="fw-normal">N/A</span>
                            </Label>
                          </div>
                          <div>
                            <Label>
                              Address:{" "}
                              <span className="fw-normal">
                                N/A
                              </span>
                            </Label>
                          </div>
                          <div>
                            <Label>
                              Zip Code: <span className="fw-normal">N/A</span>
                            </Label>
                          </div>
                          <div>
                            <Label>
                              Country:{" "}
                              <span className="fw-normal">Pakistan</span>
                            </Label>
                          </div>
                          <div>
                            <Label>
                              City: <span className="fw-normal">Lahore</span>
                            </Label>
                          </div>
                          <div>
                            <Label>
                              Region/State:{" "}
                              <span className="fw-normal">Punjab</span>
                            </Label>
                          </div>
                          <div>
                            <Label>
                              Phone Number:{" "}
                              <span className="fw-normal">{userData.phone}</span>
                            </Label>
                          </div>
                          <div>
                            <Label>
                              Email:{" "}
                              <span className="fw-normal">{userData.email}</span>
                            </Label>
                          </div>
                          <div>
                            <Label>
                              Address:{" "}
                              <span className="fw-normal">
                                Apt 4B, Street Name
                              </span>
                            </Label>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </section>
              </>
            </Col>
          </Row>
        </div>
      </section>
      {/* <!-- Section ends --> */}
    </>
  );
};

export default Address;
