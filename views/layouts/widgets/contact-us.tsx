import React from "react";
import { NextPage } from "next";
import { Row, Col, Container, Media } from "reactstrap";

const ContactUS: NextPage = () => {
  return (
    <>
      <section className="contact-banner">
        <Container>
          <Row>
            <Col>
              <div className="contact-banner-contain">
                <div className="contact-banner-img">
                  <Media src="/images/layout-1/call-img.png" className="img-fluid" alt="call-banner" />
                </div>
                <div>
                  <h3>if you have any question please call us</h3>
                </div>
                <div>
                  <h2>123-456-7890</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUS;
