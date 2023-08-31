import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Form, Input, Label } from "reactstrap";

function CustomerMessageForm() {
  return (
    <>
    <section className="tab-product tab-exes creative-card creative-inner mb-0">
      <Row>
        <Col sm="12" lg="12">
              <Form>
                <div className="form-row row">
                <Col md="12">
                    <Label htmlFor="review">Message:</Label>
                    <textarea className="form-control" rows={4} placeholder="Write Your Testimonial Here" id="exampleFormControlTextarea1"></textarea>
                  </Col>
                  <Col md="6">
                    <Label htmlFor="name">Product name:</Label>
                    <Input type="text" className="form-control" id="Product name" placeholder="Enter Your name" required />
                  </Col>
                  <Col md="6">
                    <Label htmlFor="email">Model:</Label>
                    <Input type="text" className="form-control" id="Model" placeholder="Model" required />
                  </Col>
                  <Col md="6">
                    <Label htmlFor="name">Brand</Label>
                    <Input type="text" className="form-control" id="Brand" placeholder="Enter Brand name" required />
                  </Col>
                  <Col md="6">
                    <Label htmlFor="email">MOQ</Label>
                    <Input type="text" className="form-control" id="MOQ" placeholder="MOQ" required />
                  </Col>

                  <Col md="6">
                    <Label htmlFor="name">Company</Label>
                    <Input type="text" className="form-control" id="Company" placeholder="Enter Company Name" required />
                  </Col>
                  <Col md="6">
                    <Label htmlFor="email">Address</Label>
                    <Input type="text" className="form-control" id="Address" placeholder="Address" required />
                  </Col>

                  <Col md="12">
                    <Label htmlFor="review">Review Title</Label>
                    <Input type="text" className="form-control" id="Review Title" placeholder="Enter your Review Title" required />
                  </Col>
                  
                  <Col md="12">
                    <button className="btn btn-normal my-2 rounded" type="submit">
                      Submit YOur Review
                    </button>
                  </Col>
                </div>
              </Form>
        </Col>
      </Row>
    </section>
    </>
  )
}

export default CustomerMessageForm