import React from "react";
import { NextPage } from "next";
import { Input, Container, Row, Col, Card, Form, FormGroup } from "reactstrap";
import Breadcrumb from "../../Containers/Breadcrumb";

const ForgetPassword: NextPage = () => {
  return (
    <>
      <Breadcrumb title="Forget Password" parent="home" />
      <section className="login-page pwd-page section-big-py-space bg-light">
        <Container>
          <Row>
            <Col lg="6" className="offset-lg-3">
              <Card className="theme-card border-0">
                <h3>Forget Your Password</h3>
                <Form className="theme-form">
                  <div className="form-row row justify-content-center">
                    <Col className="p-0" md="12">
                      <FormGroup>
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <Input type="text" className="form-control" id="email" placeholder="Enter Your Email" required />
                      </FormGroup>
                    </Col>
                    <a href="#" className="btn btn-normal">
                      Submit
                    </a>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ForgetPassword;
