import React, { useState } from "react";
import { NextPage } from "next";
import { Input, Label, Form, Row, Col, FormGroup } from "reactstrap";
import { CartContext } from "../../../helpers/cart/cart.context";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { CurrencyContext } from "../../../helpers/currency/CurrencyContext";
import Link from "next/link";
import ShoppingCart from "./checkoutWizard/shopingCart";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

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

  const onSubmit = async (data: formType) => {
    if (data !== null) {
      const customerId = localStorage.getItem("id");

      // Construct the request payload
      const requestBody = {
        customer_info: {
          first_name: data.firstName,
          last_name: data.lastName,
          company: "", // Add the missing field here
          country: data.country,
          address_01: data.address,
          address_02: "", // Add the missing field here
          city: data.city,
          state: data.state,
          postal_code: data.pincode.toString(),
          phone1: data.phone,
          phone2: "", // Add the missing field here
          email: data.email,
          comments: "", // Add the missing field here
          payment_method: payment, // Use the selected payment method
          shipping: "Standard", // You can modify this as needed
          id: customerId,
          total_purchase: cartTotal, // Use the total cart amount
          total_price: calculateCartTotal().toFixed(2), // Calculate and use the total cart price
        },
        products: cartItems.map((item) => ({
          product_id: item.id, // Use the product id from your cartItems
          quantity: item.qty,
          p_price: item.selectedPrice, // Use the selected price from your cartItems
          p_vendor_id: item.created_by, // Use the vendor id from your cartItems
        })),
      };

      try {
        // Send the POST request to the checkout API
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/checkout`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (response.ok) {
          alert("Order successfully placed!");
          localStorage.setItem("order-sucess-items", JSON.stringify(cartItems));
          emptyCart();
          router.push({
            pathname: "/pages/order-success",
          });
        } else {
          console.error("Error placing the order:", response.statusText);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
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

  // const paypalOptions = {
  //   clientId: "AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_",
  // };

  // Calculate the total price for each product based on quantity and condition
  const calculateProductTotal = (item) => {
    const selectedPrice =
      item.condition === "New"
        ? item.new_sale_price
        : item.refurnished_sale_price;
    return selectedPrice * item.qty;
  };

  // Calculate the overall cart total
  const calculateCartTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + calculateProductTotal(item),
      0
    );
  };
  const handleComplete = () => {
    // You can handle form completion logic here
    // For instance, you may want to redirect the user, show a message, etc.
    console.log("Checkout Completed");
  };

  return (
    <>
      {/* <!-- section start --> */}
      <section className="section-big-py-space">
        <div className="custom-container">
          <div className="checkout-page contact-page">
            <div>show wizard steps here and use other div below as steps</div>
            <FormWizard onComplete={handleComplete}>
              {/* Step 1: Shopping Cart */}
              <FormWizard.TabContent
                title="Shopping Cart"
                icon="ti-shopping-cart"
              >
                <ShoppingCart />
              </FormWizard.TabContent>

              <FormWizard.TabContent
                title="Billing Details"
                icon="ti-credit-card"
              >
                {/* step 2  note submite the form in step 3 not here*/}
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
                              className={`${
                                errors.firstName ? "error_border" : ""
                              }`}
                              id="firstName"
                            />
                            <span className="error-message">
                              {errors.firstName && "First name is required"}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-md-6 col-sm-6 col-xs-12">
                            <Label>Last Name</Label>
                            <input
                              type="text"
                              className={`${
                                errors.lastName ? "error_border" : ""
                              }`}
                              id="lastName"
                              name="lastName"
                              defaultValue=""
                              placeholder=""
                              {...register("lastName", { required: true })}
                            />
                            <span className="error-message">
                              {errors.lastName && "Last name is required"}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-md-6 col-sm-6 col-xs-12">
                            <Label className="field-label">Phone</Label>
                            <input
                              type="text"
                              className={`${
                                errors.phone ? "error_border" : ""
                              }`}
                              id="phone"
                              name="phone"
                              defaultValue=""
                              placeholder=""
                              {...register("phone", { pattern: /\d+/ })}
                            />
                            <span className="error-message">
                              {errors.phone && "Please enter number for phone."}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-md-6 col-sm-6 col-xs-12">
                            <Label className="field-label">Email Address</Label>
                            <input
                              type="text"
                              className={`${
                                errors.email ? "error_border" : ""
                              }`}
                              name="email"
                              defaultValue=""
                              placeholder=""
                              id="email"
                              {...register("email", {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                              })}
                            />
                            <span className="error-message">
                              {errors.email &&
                                "Please enter proper email address ."}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-md-12 col-sm-12 col-xs-12">
                            <Label className="field-label">Country</Label>
                            <select
                              id="country"
                              name="country"
                              {...register("country", { required: true })}
                            >
                              <option>Pakistan</option>
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
                              className={`${
                                errors.address ? "error_border" : ""
                              }`}
                              {...register("address", {
                                required: true,
                                min: 20,
                                max: 120,
                              })}
                            />
                            <span className="error-message">
                              {errors.address && "Please right your address ."}
                            </span>
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
                            <span className="error-message">
                              {errors.city && "select one city"}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-md-12 col-sm-6 col-xs-12">
                            <Label className="field-label">
                              State / County
                            </Label>
                            <input
                              type="text"
                              className={`${
                                errors.state ? "error_border" : ""
                              }`}
                              name="state"
                              {...register("state", { required: true })}
                              onChange={setStateFromInput}
                              id="state"
                              defaultValue=""
                              placeholder=""
                            />
                            <span className="error-message">
                              {errors.state && "select one state"}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-md-12 col-sm-6 col-xs-12">
                            <Label className="field-label">Postal Code</Label>
                            <input
                              type="text"
                              name="pincode"
                              className={`${
                                errors.pincode ? "error_border" : ""
                              }`}
                              {...register("pincode", { pattern: /\d+/ })}
                              id="pincode"
                              defaultValue=""
                              placeholder=""
                            />
                            <span className="error-message">
                              {errors.pincode && "Required integer"}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Input
                              type="checkbox"
                              name="shipping-option"
                              id="account-option"
                            />{" "}
                            &ensp;
                            <Label htmlFor="account-option">
                              Create An Account?
                            </Label>
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
                                <>
                                  <Link href={`/product-details/${item.id}`}>
                                    <li key={index}>
                                      <img
                                        src={item.url}
                                        alt={item.name.substring(0, 9)}
                                        width="100px"
                                      />
                                      <span>
                                        {item.name} × {item.qty}{" "}
                                      </span>
                                      <span>
                                        {symbol}
                                        {calculateProductTotal(item).toFixed(2)}
                                      </span>
                                    </li>
                                  </Link>
                                </>
                              ))}
                            </ul>

                            <ul className="sub-total">
                              <li>
                                Subtotal{" "}
                                <span className="count">
                                  {symbol}
                                  {calculateCartTotal().toFixed(2)}
                                </span>
                              </li>
                              <li>
                                Shipping
                                <div className="shipping">
                                  {/* ...Your shipping options */}
                                </div>
                              </li>
                            </ul>
                            <ul className="total">
                              <li>
                                Total{" "}
                                <span className="count">
                                  {symbol}
                                  {calculateCartTotal().toFixed(2)}
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
                              {/* ...Your payment options */}
                            </div>
                          </div>

                          {cartTotal !== 0 && (
                            <div className="text-right">
                              {payment === "stripe" ? (
                                <button
                                  type="submit"
                                  className="btn-normal btn"
                                >
                                  Place Order
                                </button>
                              ) : (
                                <></>
                                // <PayPalScriptProvider
                                //   options={{
                                //     "client-id": paypalOptions.clientId,
                                //     components: "buttons",
                                //   }}>
                                //   <PayPalButtons
                                //     forceReRender={[calculateCartTotal()]}
                                //     onInit={onSuccess}
                                //     onError={onError}
                                //     onApprove={onSuccess}
                                //     onCancel={onCancel}
                                //   />
                                // </PayPalScriptProvider>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </FormWizard.TabContent>
              <FormWizard.TabContent title="Order Review" icon="ti-comment-alt">
                {/* step 3 */}
                {/* show form details here in text form in a box here with */}
                
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
                            <>
                              <Link href={`/product-details/${item.id}`}>
                                <li key={index}>
                                  <img
                                    src={item.url}
                                    alt={item.name.substring(0, 9)}
                                    width="100px"
                                  />
                                  <span>
                                    {item.name} × {item.qty}{" "}
                                  </span>
                                  <span>
                                    {symbol}
                                    {calculateProductTotal(item).toFixed(2)}
                                  </span>
                                </li>
                              </Link>
                            </>
                          ))}
                        </ul>

                        <ul className="sub-total">
                          <li>
                            Subtotal{" "}
                            <span className="count">
                              {symbol}
                              {calculateCartTotal().toFixed(2)}
                            </span>
                          </li>
                          <li>
                            Shipping
                            <div className="shipping">
                              {/* ...Your shipping options */}
                            </div>
                          </li>
                        </ul>
                        <ul className="total">
                          <li>
                            Total{" "}
                            <span className="count">
                              {symbol}
                              {calculateCartTotal().toFixed(2)}
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
                          {/* ...Your payment options */}
                        </div>
                      </div>

                      {cartTotal !== 0 && (
                        <div className="text-right">
                          {payment === "stripe" ? (
                            <button type="submit" className="btn-normal btn">
                              Place Order
                            </button>
                          ) : (
                            <></>
                            // <PayPalScriptProvider
                            //   options={{
                            //     "client-id": paypalOptions.clientId,
                            //     components: "buttons",
                            //   }}>
                            //   <PayPalButtons
                            //     forceReRender={[calculateCartTotal()]}
                            //     onInit={onSuccess}
                            //     onError={onError}
                            //     onApprove={onSuccess}
                            //     onCancel={onCancel}
                            //   />
                            // </PayPalScriptProvider>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Col>
              </FormWizard.TabContent>
              <FormWizard.TabContent title="Order Successful" icon="ti-check">
                <div>Order successful!</div>
              </FormWizard.TabContent>
            </FormWizard>
          </div>
        </div>
      </section>
      {/* <!-- section end --> */}
    </>
  );
};

export default CheckoutPage;
