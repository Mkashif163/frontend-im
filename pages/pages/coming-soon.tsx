import React from "react";
import { NextPage } from "next";
import { Media, Container, Row, Col } from "reactstrap";

const ComingSoon: NextPage = () => {
  return (
    <>
      <div className="template-password">
        <Container>
          <div id="container" className="text-center">
            <div>
              <div id="login">
                <div>
                  <div className="logo mb-4">
                    <a href="#">
                      <Media middle src="/images/layout-2/logo/logo.png" alt="logo" className="img-fluid" />
                    </a>
                  </div>
                  <h2 className="mb-3">Will be Opening Soon!</h2>
                </div>
                <Row>
                  <Col sm="12">
                    <form action="#" className="theme-form">
                      <Col md="12" className="mt-2">
                        <h3>Enter Your Email: </h3>
                      </Col>
                      <div className="form-row row">
                        <Col md="12">
                          <input type="password" name="password" id="password" className="form-control" />
                        </Col>
                        <Col md="12">
                          <div className="actions">
                            <button type="submit" className="btn btn-normal">
                              notify me
                            </button>
                          </div>
                        </Col>
                      </div>
                    </form>
                  </Col>
                </Row>
                <div id="footer" className="mt-4">
                  <div id="owner">
                    Are you the store owner? <a href="#">Log in here</a> or <a href="#">change your password settings</a>
                  </div>
                </div>
              </div>
              <div id="powered">
                <p>© 2021, Powered by Bigdeal.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ComingSoon;
