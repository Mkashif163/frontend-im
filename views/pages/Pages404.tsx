import React from "react";
import { NextPage } from "next";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

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
                <Link href="/">
                  <a className="btn btn-normal">back to home</a>
                </Link>
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
