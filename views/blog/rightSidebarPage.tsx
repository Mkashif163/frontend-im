import React from "react";
import { NextPage } from "next";
import { Row, Col } from "reactstrap";
import BlogPage from "./common/blogPage";
import MediaPage from "./common/mediaPage";
import Link from "next/link";

const RightSidebarPage: NextPage = () => {
  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-6 p-1">
          <img
            className="img-fluid"
            src="../images/dummy.jpg"
            alt="dummy image"
          />
        </div>
        <div className="col-6 p-1">
          <img
            style={{ height: "33%", width: "100%", objectFit: "cover" }}
            src="../images/dummy.jpg"
            alt="dummy image"
          />
          <span className="d-flex mt-3">
            <img
              style={{ height: "50%", width: "50%", objectFit: "cover" }}
              src="../images/dummy.jpg"
              alt="dummy image"
            />{" "}
            <img
              style={{ height: "50%", width: "50%", objectFit: "cover" }}
              src="../images/dummy.jpg"
              alt="dummy image"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebarPage;
