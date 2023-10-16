import React from "react";
import { NextPage } from "next";
import Layout1 from "views/layouts/layout1";

const Courses: NextPage = () => {
  return (
    <Layout1>
      <div className="container">
        <div className="row">
          <div className="col-3 mb-3">
            <img className="img-fluid" src="/images/dummy.jpg" alt="appstore" />
          </div>
          <div className="col-3 mb-3">
            <img className="img-fluid" src="/images/dummy.jpg" alt="appstore" />
            <img className="img-fluid" src="/images/dummy.jpg" alt="appstore" />
          </div>
        </div>
      </div>
    </Layout1>
  );
};

export default Courses;
