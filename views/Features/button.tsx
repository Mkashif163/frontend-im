import React from "react";
import { NextPage } from "next";
import { Container, Row, Col } from "reactstrap";

const Button: NextPage = () => {
  return (
    //breadcrubs
    <div className="bg-light">
      {/* <!-- title start--> */}
      <div className="title6">
        <h4>button normal</h4>
      </div>
      {/* // <!--title end--> */}

      {/* // <!--button section start--> */}
      <section className="section-big-py-space">
        <Container>
          <Row>
            <Col sm="4" className="text-center">
              <a className="btn btn-rounded">Shop Now</a>
            </Col>
            <Col sm="4" className="text-center">
              <a className="btn btn-white">Shop Now</a>
            </Col>
            <Col sm="4" className="text-center">
              <a className="btn btn-normal ">Shop Now</a>
            </Col>
          </Row>
        </Container>
      </section>
      {/* // <!--button section end--> */}

      {/* <!-- title start--> */}
      <div className="title6">
        <h4>button outline</h4>
      </div>
      {/* <!--title end--> */}

      {/* <!--button section start--> */}
      <section className="section-big-py-space">
        <Container>
          <Row>
            <Col sm="4" className="text-center">
              <a className="btn btn-rounded btn-outline">Shop Now</a>
            </Col>
            <Col sm="4" className="text-center">
              <a className="btn btn-white btn-outline">Shop Now</a>
            </Col>
            <Col sm="4" className="text-center">
              <a className="btn btn-normal btn-outline">Shop Now</a>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <!--button section end--> */}

      {/* <!-- title start--> */}
      <div className="title6">
        <h4>button block</h4>
      </div>
      {/* <!--title end--> */}

      {/* <!--button section start--> */}
      <section className="section-big-py-space">
        <Container>
          <Row>
            <Col sm="4" className="text-center">
              <a className="btn btn-rounded btn-block ">
                <i></i> Shop Now
              </a>
            </Col>
            <Col sm="4" className="text-center">
              <a className="btn btn-white btn-block">Shop Now</a>
            </Col>
            <Col sm="4" className="text-center">
              <a className="btn btn-normal btn-block">Shop Now</a>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <!--button section end--> */}

      {/* <!-- title start--> */}
      <div className="title6">
        <h4>load with button</h4>
      </div>
      {/* <!--title end--> */}

      {/* <!--button section start--> */}
      <section className="section-big-py-space">
        <Container>
          <Row>
            <Col sm="4" className="text-center">
              <a className="btn btn-rounded ">
                <i className="fa fa-circle-o-notch fa-spin me-2"></i>loading
              </a>
            </Col>
            <Col sm="4" className="text-center">
              <a className="btn btn-white ">
                <i className="fa fa-circle-o-notch fa-spin me-2"></i>loading
              </a>
            </Col>
            <Col sm="4" className="text-center">
              <a className="btn btn-normal ">
                <i className="fa fa-circle-o-notch fa-spin me-2"></i>loading
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <!--button section end--> */}
    </div>
  );
};

export default Button;
