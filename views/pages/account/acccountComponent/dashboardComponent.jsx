import React, { useState } from "react";


const DashboardComponent = () => {
  return (
    <>
      <div className="Account-right">
        <div className="Account">
          <div className="page-title">
            <h2 className="text-center">My Dashboard</h2>
            <h4>Profile</h4>
          </div>
          <div className="welcome-msg">
            <p>Hi, Saliha Kazmi</p>
            <p>
              My Account Dashboard, you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit
              information.
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
                    <a href="#">Edit</a>
                  </div>
                  <div className="box-content">
                    <h6>Saliha</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Last Name</h3>
                    <a href="#">Edit</a>
                  </div>
                  <div className="box-content">
                    <p>Kazmi</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Company Name</h3>
                    <a href="#">Edit</a>
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
                    <a href="#">Edit</a>
                  </div>
                  <div className="box-content">
                    <p>Kazmi123@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Website</h3>
                    <a href="#">Edit</a>
                  </div>
                  <div className="box-content">
                    <h6>Industry MALL</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Address</h3>
                    <a href="#">Edit</a>
                  </div>
                  <div className="box-content">
                    <p>Wapda Town, E-Block #74</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Contact Number</h3>
                    <a href="#">Edit</a>
                  </div>
                  <div className="box-content">
                    <h6>0321-6656589</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Mobile Number</h3>
                    <a href="#">Edit</a>
                  </div>
                  <div className="box-content">
                    <p>0306-5151694</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Username</h3>
                    <a href="#">Edit</a>
                  </div>
                  <div className="box-content">
                    <h6>Saliha10</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="box">
                  <div className="box-title">
                    <h3>Password</h3>
                    <a href="#">Edit</a>
                  </div>
                  <div className="box-content">
                  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""/>
                    <h6><a href="#">Reset Password</a></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
