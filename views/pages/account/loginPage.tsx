import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Breadcrumb from "../../Containers/Breadcrumb";
import { Row, Col, Input, Label } from "reactstrap";
import { useRouter } from "next/router";
import firebase from "../../../config/base";
import { toast } from "react-toastify";

const Login: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test@123");
  const [name, setName] = useState(localStorage.getItem("Name"));

  useEffect(() => {
    localStorage.setItem("Name", name);
  }, [name]);

  const loginAuth = async (email, password) => {
    try {
      await firebase.signInWithEmailAndPassword(email, password).then(function () {
        setName("Emay Walter");
        setTimeout(() => {
          router.push(`/pages/account/checkout`);
        }, 200);
      });
    } catch (error) {
      setTimeout(() => {
        toast.error("error", error);
      }, 200);
    }
  };

  return (
    <>
      {/* <!-- breadcrumb start --> */}
      <Breadcrumb title="login" parent="home" />
      {/* <!-- breadcrumb End --> */}

      {/* <!--section start--> */}
      <section className="login-page section-big-py-space bg-light">
        <div className="custom-container">
          <Row className="row">
            <Col xl="4" lg="6" md="8" className="offset-xl-4 offset-lg-3 offset-md-2">
              <div className="theme-card">
                <h3 className="text-center">Login</h3>
                <form className="theme-form">
                  <div className="form-group">
                    <Label htmlFor="email">Email</Label>
                    <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="review">Password</Label>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="review" placeholder="Enter your password" required />
                  </div>
                  <a href="#" className="btn btn-normal" onClick={() => loginAuth(email, password)}>
                    Login
                  </a>
                  <a className="float-end txt-default mt-2" href="/pages/account/forget-password" id="fgpwd">
                    Forgot your password?
                  </a>
                </form>
                <p className="mt-3">Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                <a href="/pages/account/register" className="txt-default pt-3 d-block">
                  Create an Account
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* <!--Section ends--> */}
    </>
  );
};

export default Login;
