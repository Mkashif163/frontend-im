import React, { useState } from "react";
import { NextPage } from "next";
import { Input, Label, Form, Row, Col, FormGroup } from "reactstrap";
import { CartContext } from "../../../helpers/cart/cart.context";
import Breadcrumb from "../../../views/Containers/Breadcrumb";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { CurrencyContext } from "helpers/currency/CurrencyContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface formType {
  firstName: string;
  lastName: string;
  phone: any;
  country: any;
  email: string;
  state: string;
  address: string;
  city: string;
  pincode: number;
}

const CheckoutPage: NextPage = () => {
  const { cartItems, cartTotal, emptyCart } = React.useContext(CartContext);
  const { selectedCurr } = React.useContext(CurrencyContext);
  const { symbol, value } = selectedCurr;
  const [obj, setObj] = useState({});
  const [payment, setPayment] = useState("stripe");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>();

  const router = useRouter();

  const checkhandle = (value) => {
    setPayment(value);
  };

  const onSuccess = (data, actions) => {
    return actions.order.capture().then(() => {
      alert("Order success");
      router.push({
        pathname: "/page/order-success",
      });
    });
  };

  const onSubmit = (data: formType) => {
    if (data !== null) {
      alert("You submitted the form and stuff!");
      localStorage.setItem("order-sucess-items", JSON.stringify(cartItems));
      emptyCart();
      router.push({
        pathname: "/pages/order-success",
      });
    } else {
      console.log(errors);
    }
  };

  const setStateFromInput = (event) => {
    obj[event.target.name] = event.target.value;
    setObj(obj);
  };

  const onCancel = (data) => {
    console.log("The payment was cancelled!", data);
  };

  const onError = (err) => {
    console.log("Error!", err);
  };

  const paypalOptions = {
    clientId: "AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_",
  };

  return (
    <>
      <Breadcrumb title="checkout" parent="home" />
      {/* <!-- section start --> */}
      <section className="section-big-py-space bg-light">
        <div className="custom-container">
          <div className="checkout-page contact-page">
            <div className="checkout-form">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col lg="6" sm="12" xs="12">
                    <div className="checkout-title">
                      <h3>Billing Details</h3>
                    </div>
                    <div className="theme-form">
                      <Row className="check-out ">
                        <FormGroup className="col-md-6 col-sm-6 col-xs-12">
                          <Label>First Name</Label>
                          <input
                            type="text"
                            {...register("firstName", { required: true })}
                            name="firstName"
                            defaultValue=""
                            placeholder=""
                            className={`${errors.firstName ? "error_border" : ""}`}
                            id="firstName"
                          />
                          <span className="error-message">{errors.firstName && "First name is required"}</span>
                        </FormGroup>
                        <FormGroup className="col-md-6 col-sm-6 col-xs-12">
                          <Label>Last Name</Label>
                          <input
                            type="text"
                            className={`${errors.lastName ? "error_border" : ""}`}
                            id="lastName"
                            name="lastName"
                            defaultValue=""
                            placeholder=""
                            {...register("lastName", { required: true })}
                          />
                          <span className="error-message">{errors.lastName && "Last name is required"}</span>
                        </FormGroup>
                        <FormGroup className="col-md-6 col-sm-6 col-xs-12">
                          <Label className="field-label">Phone</Label>
                          <input type="text" className={`${errors.phone ? "error_border" : ""}`} id="phone" name="phone" defaultValue="" placeholder="" {...register("phone", { pattern: /\d+/ })} />
                          <span className="error-message">{errors.phone && "Please enter number for phone."}</span>
                        </FormGroup>
                        <FormGroup className="col-md-6 col-sm-6 col-xs-12">
                          <Label className="field-label">Email Address</Label>
                          <input
                            type="text"
                            className={`${errors.email ? "error_border" : ""}`}
                            name="email"
                            defaultValue=""
                            placeholder=""
                            id="email"
                            {...register("email", {
                              required: true,
                              pattern: /^\S+@\S+$/i,
                            })}
                          />
                          <span className="error-message">{errors.email && "Please enter proper email address ."}</span>
                        </FormGroup>
                        <FormGroup className="col-md-12 col-sm-12 col-xs-12">
                          <Label className="field-label">Country</Label>
                          <select id="country" name="country" {...register("country", { required: true })}>
                            <option>India</option>
                            <option>South Africa</option>
                            <option>United State</option>
                            <option>Australia</option>
                          </select>
                        </FormGroup>
                        <FormGroup className="col-md-12 col-sm-12 col-xs-12">
                          <Label className="field-label">Address</Label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            defaultValue=""
                            placeholder="Street address"
                            className={`${errors.address ? "error_border" : ""}`}
                            {...register("address", {
                              required: true,
                              min: 20,
                              max: 120,
                            })}
                          />
                          <span className="error-message">{errors.address && "Please right your address ."}</span>
                        </FormGroup>
                        <FormGroup className="col-md-12 col-sm-12 col-xs-12">
                          <Label className="field-label">Town/City</Label>
                          <input
                            type="text"
                            className={`${errors.city ? "error_border" : ""}`}
                            id="city"
                            name="city"
                            defaultValue=""
                            {...register("city", { required: true })}
                            placeholder=""
                            onChange={setStateFromInput}
                          />
                          <span className="error-message">{errors.city && "select one city"}</span>
                        </FormGroup>
                        <FormGroup className="col-md-12 col-sm-6 col-xs-12">
                          <Label className="field-label">State / County</Label>
                          <input
                            type="text"
                            className={`${errors.state ? "error_border" : ""}`}
                            name="state"
                            {...register("state", { required: true })}
                            onChange={setStateFromInput}
                            id="state"
                            defaultValue=""
                            placeholder=""
                          />
                          <span className="error-message">{errors.state && "select one state"}</span>
                        </FormGroup>
                        <FormGroup className="col-md-12 col-sm-6 col-xs-12">
                          <Label className="field-label">Postal Code</Label>
                          <input
                            type="text"
                            name="pincode"
                            className={`${errors.pincode ? "error_border" : ""}`}
                            {...register("pincode", { pattern: /\d+/ })}
                            id="pincode"
                            defaultValue=""
                            placeholder=""
                          />
                          <span className="error-message">{errors.pincode && "Required integer"}</span>
                        </FormGroup>
                        <FormGroup className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <Input type="checkbox" name="shipping-option" id="account-option" /> &ensp;
                          <Label htmlFor="account-option">Create An Account?</Label>
                        </FormGroup>
                      </Row>
                    </div>
                  </Col>
                  <Col lg="6" sm="12" xs="12">
                    <div className="checkout-details theme-form  section-big-mt-space">
                      {cartItems && cartItems.length > 0 ? (
                        <div className="order-box">
                          <div className="title-box">
                            <div>
                              Product <span>Total</span>
                            </div>
                          </div>
                          <ul className="qty">
                            {cartItems.map((item, index) => (
                              <li key={index}>
                                {item.title} × {item.qty}{" "}
                                <span>
                                  {symbol}
                                  {item.total * value}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <ul className="sub-total">
                            <li>
                              Subtotal{" "}
                              <span className="count">
                                {symbol}
                                {(cartTotal * value).toFixed(2)}
                              </span>
                            </li>
                            <li>
                              Shipping
                              <div className="shipping">
                                <div className="shopping-option">
                                  <input type="checkbox" name="free-shipping" id="free-shipping" />
                                  <label htmlFor="free-shipping">Free Shipping</label>
                                </div>
                                <div className="shopping-option">
                                  <input type="checkbox" name="local-pickup" id="local-pickup" />
                                  <label htmlFor="local-pickup">Local Pickup</label>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <ul className="total">
                            <li>
                              Total{" "}
                              <span className="count">
                                {symbol}
                                {(cartTotal * value).toFixed(2)}
                              </span>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="payment-box">
                        <div className="upper-box">
                          <div className="payment-options">
                            <ul>
                              <li>
                                <div className="radio-option">
                                  <input type="radio" name="payment-group" id="payment-1" defaultChecked={true} onClick={() => checkhandle("stripe")} />
                                  <label htmlFor="payment-1">
                                    Check Payments<span className="small-text">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="radio-option">
                                  <input type="radio" name="payment-group" id="payment-2" onClick={() => checkhandle("stripe")} />
                                  <label htmlFor="payment-2">
                                    Cash On Delivery<span className="small-text">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span>
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="radio-option paypal">
                                  <input type="radio" name="payment-group" id="payment-3" onClick={() => checkhandle("paypal")} />
                                  <label htmlFor="payment-3">PayPal</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {cartTotal !== 0 && (
                          <div className="text-right">
                            {payment === "stripe" ? (
                              <button type="submit" className="btn-normal btn">
                                Place Order
                              </button>
                            ) : (
                              <PayPalScriptProvider
                                options={{
                                  "client-id": paypalOptions.clientId,
                                  components: "buttons",
                                }}>
                                <PayPalButtons forceReRender={[cartTotal]} onInit={onSuccess} onError={onError} onApprove={onSuccess} onCancel={onCancel} />
                              </PayPalScriptProvider>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- section end --> */}
    </>
  );
};

export default CheckoutPage;
