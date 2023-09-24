import React, { useState } from "react";
import { NextPage } from "next";
import { Input, Label, Row, Col, Form, FormGroup } from "reactstrap";
import Breadcrumb from "../../Containers/Breadcrumb";

const Profile: NextPage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      {/* <!-- personal detail section start --> */}
      <section className="contact-page register-page section-big-py-space bg-light">
        <div className="custom-container">
          <Row className="row">
            <Col lg="6">
              <h3 className="mb-3">PERSONAL DETAIL</h3>
              <Form className="theme-form">
                <div className="form-row row">
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="name">First Name</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Your name"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="last-name"
                        placeholder="Last Name"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="username">Username</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter Your username"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <div>
                      <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          required
                          disabled={!isEditing}
                        />
                      </FormGroup>
                    </div>
                  </Col>
                  <Col md="6">
                    <div>
                      <FormGroup>
                        <Label htmlFor="website">Website</Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="website"
                          placeholder="Website"
                          required
                          disabled={!isEditing}
                        />
                      </FormGroup>
                    </div>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="CompanyName"
                        placeholder="Company Name"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="contactNumber">Contact number</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="contactNumber"
                        placeholder="Enter your Contact number"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="mobileNumber">Moible number</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="mobileNumber"
                        placeholder="Enter your Mobile number"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="password"
                        placeholder="Enter your Password"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    {isEditing ? (
                      <button
                        className="btn btn-sm btn-normal mb-lg-5 mt-3"
                        onClick={handleSaveClick}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="btn btn-sm btn-normal mb-lg-5 mt-3"
                        onClick={handleEditClick}
                      >
                        Edit
                      </button>
                    )}
                  </Col>
                </div>
              </Form>
            </Col>
            <Col lg="6">
              <h3 className="mb-3 spc-responsive">SHIPPING ADDRESS</h3>
              <Form className="theme-form">
                <div className="form-row row">
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="homePloat">flat / plot</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="homePloat"
                        placeholder="Flat / Plot"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Address"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="zipCode">Zip Code *</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="zipCode"
                        placeholder="Zip Code"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6" className="select_input">
                    <FormGroup>
                      <Label>Country *</Label>
                      <select className="form-control" disabled={!isEditing}>
                        <option value="India">Pakistan</option>
                        <option value="UAE">UAE</option>
                        <option value="U.K">U.K</option>
                        <option value="US">US</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="City"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="regionState">Region/State *</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="regionState"
                        placeholder="Region/state"
                        required
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    {isEditing ? (
                      <button
                        className="btn btn-sm btn-normal mb-lg-5"
                        onClick={handleSaveClick}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="btn btn-sm btn-normal mb-lg-5"
                        onClick={handleEditClick}
                      >
                        Edit
                      </button>
                    )}
                  </Col>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
      {/* <!-- Section ends --> */}
    </>
  );
};

export default Profile;
