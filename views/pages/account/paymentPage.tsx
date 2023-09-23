import React from "react";
import { NextPage } from "next";
import { Input, Label, Row, Col, Form, FormGroup } from "reactstrap";
import Breadcrumb from "../../Containers/Breadcrumb";

const PaymentMethod: NextPage = () => {
  return (
    <>
      <section className="contact-page register-page section-big-py-space bg-light">
        <div className="custom-container">
          <Row className="row">
            <Col lg="6">
              <h3 className="mb-3">PAYMENT METHOD</h3>
              <Form className="theme-form">
                {/* Input fields for payment method details */}
                <div className="form-row row">
                  <Col md="8">
                    <FormGroup>
                      <Label htmlFor="methodType">Payment Method Type</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="methodType"
                        placeholder="Enter Method Type"
                        required
                      />
                    </FormGroup>
                  </Col>
                  {/* Add more input fields for payment method details */}
                  {/* ... */}
                  <Col md="12">
                    <button
                      className="btn btn-sm btn-normal mb-lg-5"
                      type="submit"
                    >
                      Save Payment Method
                    </button>
                  </Col>
                </div>
              </Form>
            </Col>
            <Col lg="6">
              <h3 className="mb-3 spc-responsive">SAVED PAYMENT METHODS</h3>
              <>
                {/* Display the saved payment methods here */}
                <section className="contact-page register-page section-big-py-space bg-light">
                  <div className="custom-container">
                    <Row className="row">
                      <Col lg="12">
                        <div className="theme-form">
                          <div>
                            <Label>
                              Payment Method Type:{" "}
                              <span className="fw-normal">Credit Card</span>
                            </Label>
                          </div>
                          {/* Add more payment method details as needed */}
                          {/* ... */}
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
    </>
  );
};

export default PaymentMethod;
