import React, { useState } from "react";
import { NextPage } from "next";

type PropsUser = {
  userData :any;
}

const DashboardComponent: NextPage<PropsUser> = ({userData}) => {
  return (
    <>
      <div className="Account-right">
        <div className="Account">
          <div className="page-title">
            <h2 className="text-center">My Dashboard</h2>
            <h4>Profile</h4>
          </div>
          <div className="welcome-msg">
            <p>Hi, {userData.first_name} {userData.last_name}</p>
            <p>
              My Account Dashboard, you have the ability to view a snapshot of
              your recent account activity and update your account information.
              Select a link below to view or edit information.
            </p>
          </div>
          <div className="box-account box-info">
            <div className="box-head">
              <h2 className="text-center">Account Information</h2>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>First Name</h3>
                  </div>
                  <div className="box-content">
                    <h6>{userData.first_name}</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Last Name</h3>
                  </div>
                  <div className="box-content">
                    <p>{userData.last_name}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Company Name</h3>
                  </div>
                  <div className="box-content">
                    <h6>Digit Automation</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>E-mail</h3>
                  </div>
                  <div className="box-content">
                    <p>{userData.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Website</h3>
                  </div>
                  <div className="box-content">
                    <h6>Industry MALL</h6>
                  </div>
                </div>
              </div> */}
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Address</h3>
                  </div>
                  <div className="box-content">
                    <p>{userData.address ? userData.address : "N/A"}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Contact Number</h3>
                  </div>
                  <div className="box-content">
                    <h6>{userData.phone}</h6>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="row">
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Gender</h3>
                  </div>
                  <div className="box-content">
                    <h6>{userData.gender}</h6>
                  </div>
                </div>
              </div>
              {/* <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Password</h3>
                  </div>
                  <div className="box-content">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                  
                    />
                    <h6>
                      <a href="#">Reset Password</a>
                    </h6>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
