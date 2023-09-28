import React from "react";
import { NextPage } from "next";
import { Row, Col, Container, Media, Input } from "reactstrap";

const ContactUS: NextPage = () => {
  return (
    <>
      <section className="contact-banner">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col lg="8" md="8" sm='10' xs='12'>
              <div className="input-group p-1 bg-white rounded-5">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white border-0" style={{ marginLeft: '2px' }}>
                    <i className="fa fa-envelope-o" style={{ fontSize: '20px' }}></i>
                  </span>
                </div>
                <Input type="text" className="form-control bg-white border-0 rounded-3" placeholder="write your email here" />
                <div className="input-group-prepend ">
                  <span className="input-group-text telly bg-white border-0">
                    <i className="fa fa-telegram" style={{ fontSize: '20px' }}></i>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section >
    </>
  );
};

export default ContactUS;
