import React, { useState } from "react";
import { NextPage } from "next";
import { Input, Label, Row, Col, Form, FormGroup } from "reactstrap";
import axios from "axios";

type Props = {
  userData: any;
};

const Profile: NextPage<Props> = ({ userData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(userData.first_name || "N/A");
  const [lastName, setLastName] = useState(userData.last_name || "N/A");
  const [phone, setPhone] = useState(userData.phone || "N/A");
  const [address, setAddress] = useState(userData.address || "N/A");
  const [zipcode, setZipcode] = useState(userData.zipcode || "N/A");
  const [city, setCity] = useState(userData.city || "N/A");
  const [country, setCountry] = useState(userData.country || "N/A");


  const handleSaveClick = async () => {
    event.preventDefault();
    if (isEditing) {
      // Construct the payload
      const payload = {
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        address: address,
        zipcode: zipcode,
        city: city,
        country: country
      };

      try {
        const response = await axios.post("https://18.235.14.45/api/update-profile", payload);
        if (response.status === 200) {
          console.log("Profile updated successfully");
        } else {
          console.log("Error updating profile");
        }
      } catch (error) {
        console.error("There was an error updating the profile:", error);
      }
    }
    setIsEditing(false);
  };
  const handleEditClick = () => {
    event.preventDefault();
    setIsEditing(true);
  };

  return (
    <>
      {/* <!-- personal detail section start --> */}
      <section className="contact-page register-page section-big-py-space bg-light">
        <div className="custom-container">
          <Row className="row">
            <Col lg="12">
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
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="email">Last Name</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="last-name"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="review">Phone number</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="review"
                        placeholder="Enter your number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="email">Address</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="review">Zip Code</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="review"
                        placeholder="Enter your zip code"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="email">city</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter your city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        disabled={!isEditing}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label htmlFor="review">Country</Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="review"
                        placeholder="Enter your country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
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

          </Row>
        </div>
      </section>
      {/* <!-- Section ends --> */}
    </>
  );
};

export default Profile;
