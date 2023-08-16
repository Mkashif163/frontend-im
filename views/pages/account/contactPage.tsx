import React from "react";
import { NextPage } from "next";
import Breadcrumb from "../../../views/Containers/Breadcrumb";
import { Input, Row, Col, Form, FormGroup, Label } from "reactstrap";

const Contact: NextPage = () => {
  return (
    <>
      <Breadcrumb title="contact" parent="home" />

      {/* <!--section start--> */}
      <section className="contact-page section-big-py-space bg-light">
        <div className="custom-container">
          <h3 className="text-center mb-3">Get in touch</h3>
          <Row className="section-big-pb-space g-4">
            <Col xl="6">
              <Form className="theme-form">
                <div className="form-row row">
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="name">First Name</Label>
                      <Input type="text" className="form-control" id="name" placeholder="Enter Your name" required />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="email">Last Name</Label>
                      <Input type="text" className="form-control" id="last-name" placeholder="Last Name" required />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="review">Phone number</Label>
                      <Input type="text" className="form-control" id="review" placeholder="Enter your number" required />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="email">Email</Label>
                      <Input type="text" className="form-control" id="email" placeholder="Email" required />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <div>
                      <Label htmlFor="review">Write Your Message</Label>
                      <textarea className="form-control" placeholder="Write Your Message" id="exampleFormControlTextarea1"></textarea>
                    </div>
                  </Col>
                  <Col md="12">
                    <button className="btn btn-normal" type="submit">
                      Send Your Message
                    </button>
                  </Col>
                </div>
              </Form>
            </Col>
            <Col xl="6" className="map">
              <div className="theme-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321"
                  allowFullScreen></iframe>
              </div>
            </Col>
          </Row>
          <Row></Row>
        </div>
      </section>
      {/* <!--Section ends--> */}
    </>
  );
};

export default Contact;
