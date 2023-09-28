import React, { useState } from "react";
import {  Row, Col, Form, Input, Label } from "reactstrap";

function CustomerMessageForm() {
  return (
    <>
   <section className="tab-product tab-exes creative-card creative-inner mb-0">
  <Row>
    <Col sm="12" lg="12">
      <Form>
        <div className="form-row row">
          <Col md="12 mt-3">
            <div className="media">
              <Label className="mb-0">Message:</Label>
              <div className="media-body ms-3">
                <textarea className="form-control" rows={4} placeholder="Write Your Testimonial Here" id="exampleFormControlTextarea1"></textarea>
              </div>
            </div>
          </Col>

          <Col md="6 mt-3">
            <Label htmlFor="Product name">Product name:</Label>
            <Input type="text" className="form-control" id="Product name" placeholder="Enter Product name" required />
          </Col>

          <Col md="6 mt-3">
            <Label htmlFor="Model">Model:</Label>
            <Input type="text" className="form-control" id="Model" placeholder="Model" required />
          </Col>

          <Col md="6 mt-3">
            <Label htmlFor="Brand">Brand</Label>
            <Input type="text" className="form-control" id="Brand" placeholder="Enter Brand name" required />
          </Col>

          <Col md="6 mt-3">
            <Label htmlFor="MOQ">MOQ</Label>
            <Input type="text" className="form-control" id="MOQ" placeholder="MOQ" required />
          </Col>

          <Col md="6 mt-3">
            <Label htmlFor="Company">Company</Label>
            <Input type="text" className="form-control" id="Company" placeholder="Enter Company Name" required />
          </Col>

          <Col md="6 mt-3">
            <Label htmlFor="Address">Address</Label>
            <Input type="text" className="form-control" id="Address" placeholder="Address" required />
          </Col>

          <Col md="12 mt-3">
            <Label htmlFor="Review Title">Review Title</Label>
            <Input type="text" className="form-control" id="Review Title" placeholder="Enter your Review Title" required />
          </Col>

          <Col md="12 mt-3" className="mt-3">
            <button className="btn btn-normal" type="submit">
              Submit Your Review
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