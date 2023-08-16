import React from "react";
import { NextPage } from "next";
import { Container, Row, Col } from "reactstrap";

const Page404: NextPage = () => {
  return (
    <>
      {/* <!-- section start --> */}
      <section className="p-0 bg-light">
        <Container>
          <Row>
            <Col sm="12">
              <div className="error-section">
                <h1>404</h1>
                <h2>page not found</h2>
                <a href="/" className="btn btn-normal">
                  back to home
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <!-- Section ends --> */}
    </>
  );
};

export default Page404;
