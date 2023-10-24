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
import { Select } from "@mui/material";
import { toast } from "react-toastify";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface formType {
  firstName: string;
  lastName: string;
  phone: any;
  country: any;
  email: string;
  state: string;
  address: string;
  address2: string;
  city: string;
  pincode: number;
  paymentMethod: string;
}

const CheckoutPage: NextPage = () => {
  const { cartItems, cartTotal, emptyCart } = React.useContext(CartContext);
  const { selectedCurr } = React.useContext(CurrencyContext);
  const { symbol, value } = selectedCurr;
  const [payment, setPayment] = useState("stripe");
  const [formData, setFormData] = useState<formType>({
    firstName: "",
    lastName: "",
    phone: "",
    country: "Pakistan",
    email: "",
    state: "",
    address: "",
    address2: "",
    city: "",
    pincode: 0,
    paymentMethod: "",
  });

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

  const [cardInputs, setCardInputs] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const handleCardInputChange = (field, value) => {
    let regex;

    switch (field) {
      case "cardNumber":
        regex = /^[0-9\s]{0,14}$/; // Only allow digits and spaces
        break;
      case "cardExpiry":
        regex = /^[1-9]{0,4}$/; // Allow MM, MM/YY, or MM/ (month/year)
        break;
      case "cardCVC":
        regex = /^[0-9]{0,3}$/; // Only allow digits
        break;
      default:
        break;
    }

    if (regex.test(value) || value === "") {
      setCardInputs((prevState) => ({ ...prevState, [field]: value }));
    }
  };

  // const onCancel = (data) => {
  //   console.log("The payment was cancelled!", data);
  // };

  // const onError = (err) => {
  //   console.log("Error!", err);
  // };

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

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleComplete = async () => {
    if (formData !== null) {
      const customerId = localStorage.getItem("id");
      // Construct the request payload

      const requestBody = {
        customer_info: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          company: "", // Add the missing field here
          country: formData.country,
          address_01: formData.address,
          address_02: formData.address2, // Add the missing field here
          city: formData.city,
          state: formData.state,
          postal_code: formData.pincode.toString(),
          phone1: formData.phone,
          phone2: "", // Add the missing field here
          email: formData.email,
          comments: "", // Add the missing field here
          payment_method: formData.paymentMethod, // Use the selected payment method
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
          toast.success("Order placed successfully!");
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

  return (
    <>
      {/* <!-- section start --> */}
      <section className="section-big-py-space">
        <div className="custom-container">
          <div className="checkout-page contact-page">
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
                <Form>
                  <Row>
                    <Col lg="6" sm="12" xs="12">
                      <div className="checkout-title">
                        <h3>Shipping Details</h3>
                      </div>
                      <div className="theme-form">
                        <Row className="check-out">
                          <FormGroup className="col-md-6 col-sm-6 col-xs-12">
                            <Label
                              className="d-flex justify-content-start"
                              for="firstName"
                            >
                              First Name
                            </Label>
                            <Input
                              type="text"
                              {...register("firstName", { required: true })}
                              name="firstName"
                              defaultValue=""
                              placeholder=""
                              className={`${
                                errors.firstName ? "error_border" : ""
                              }`}
                              id="firstName"
                              onChange={(e) =>
                                handleInputChange("firstName", e.target.value)
                              }
                            />
                            <span className="error-message">
                              {errors.firstName && "First name is required"}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-md-6 col-sm-6 col-xs-12">
                            <Label
                              for="lastName"
                              className="d-flex justify-content-start"
                            >
                              Last Name
                            </Label>
                            <Input
                              type="text"
                              className={`${
                                errors.lastName ? "error_border" : ""
                              }`}
                              id="lastName"
                              name="lastName"
                              defaultValue=""
                              placeholder=""
                              {...register("lastName", { required: true })}
                              onChange={(e) =>
                                handleInputChange("lastName", e.target.value)
                              }
                            />
                            <span className="error-message">
                              {errors.lastName && "Last name is required"}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-md-6 col-sm-6 col-xs-12">
                            <Label
                              className="d-flex justify-content-start"
                              for="phone"
                            >
                              Phone
                            </Label>
                            <Input
                              type="text"
                              className={`${
                                errors.phone ? "error_border" : ""
                              }`}
                              id="phone"
                              name="phone"
                              defaultValue=""
                              placeholder=""
                              {...register("phone", { pattern: /\d+/ })}
                              onChange={(e) =>
                                handleInputChange("phone", e.target.value)
                              }
                            />
                            <span className="error-message">
                              {errors.phone &&
                                "Please enter a number for phone."}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-md-6 col-sm-6 col-xs-12">
                            <Label
                              className="d-flex justify-content-start"
                              for="email"
                            >
                              Email Address
                            </Label>
                            <Input
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
                              onChange={(e) =>
                                handleInputChange("email", e.target.value)
                              }
                            />
                            <span className="error-message">
                              {errors.email &&
                                "Please enter a proper email address ."}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-md-12 col-sm-12 col-xs-12">
                            <Label
                              className="d-flex justify-content-start"
                              for="country"
                            >
                              Country
                            </Label>
                            <Select
                              labelId="country-label"
                              id="country"
                              name="country"
                              defaultValue="Pakistan" // setting the default value
                              {...register("country", { required: true })}
                              native
                              fullWidth
                              onChange={(e) =>
                                handleInputChange("country", e.target.value)
                              }
                            >
                              <option value="Pakistan">Pakistan</option>
                              <option value="Bahrain">Bahrain</option>
                              <option value="United States">
                                United States
                              </option>
                              <option value="UAE">UAE</option>
                            </Select>
                          </FormGroup>

                          <FormGroup className="col-md-12 col-sm-12 col-xs-12">
                            <Label
                              className="d-flex justify-content-start"
                              for="address"
                            >
                              Address
                            </Label>
                            <Input
                              type="text"
                              name="address"
                              id="address"
                              defaultValue=""
                              placeholder=""
                              className={`${
                                errors.address ? "error_border" : ""
                              }`}
                              {...register("address", {
                                required: true,
                                min: 20,
                                max: 120,
                              })}
                              onChange={(e) =>
                                handleInputChange("address", e.target.value)
                              }
                            />
                            <span className="error-message">
                              {errors.address && "Please write your address."}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-md-12 col-sm-12 col-xs-12">
                            <Label
                              className="d-flex justify-content-start"
                              for="address"
                            >
                              Shipping Address
                            </Label>
                            <Input
                              type="text"
                              name="address2"
                              id="address2"
                              defaultValue=""
                              placeholder=""
                              {...register("address2", {
                                required: true,
                                min: 20,
                                max: 120,
                              })}
                              onChange={(e) =>
                                handleInputChange("address2", e.target.value)
                              }
                            />

                            <span className="error-message">
                              {errors.address2 && "Please write your address."}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-md-12 col-sm-12 col-xs-12">
                            <Label
                              className="d-flex justify-content-start"
                              for="city"
                            >
                              City
                            </Label>
                            <Input
                              type="text"
                              className={`${errors.city ? "error_border" : ""}`}
                              id="city"
                              name="city"
                              defaultValue=""
                              {...register("city", { required: true })}
                              placeholder=""
                              onChange={(e) =>
                                handleInputChange("city", e.target.value)
                              }
                            />
                            <span className="error-message">
                              {errors.city && "Select one city"}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-md-12 col-sm-6 col-xs-12">
                            <Label
                              className="d-flex justify-content-start"
                              for="state"
                            >
                              State
                            </Label>
                            <Input
                              type="text"
                              className={`${
                                errors.state ? "error_border" : ""
                              }`}
                              name="state"
                              {...register("state", { required: true })}
                              onChange={(e) =>
                                handleInputChange("state", e.target.value)
                              }
                              id="state"
                              defaultValue=""
                              placeholder=""
                            />
                            <span className="error-message">
                              {errors.state && "Select one state"}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-md-12 col-sm-6 col-xs-12">
                            <Label
                              className="d-flex justify-content-start"
                              for="pincode"
                            >
                              Postal Code
                            </Label>
                            <Input
                              type="text"
                              name="pincode"
                              className={`${
                                errors.pincode ? "error_border" : ""
                              }`}
                              {...register("pincode", { pattern: /\d+/ })}
                              id="pincode"
                              defaultValue=""
                              placeholder=""
                              onChange={(e) =>
                                handleInputChange("pincode", e.target.value)
                              }
                            />
                            <span className="error-message">
                              {errors.pincode && "Required integer"}
                            </span>
                          </FormGroup>
                          <FormGroup className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Input
                              className="d-flex justify-content-start"
                              type="checkbox"
                              name="shipping-option"
                              id="account-option"
                              onChange={(e) => checkhandle(e.target.value)}
                            />{" "}
                            &ensp;
                            <Label
                              className="d-flex justify-content-start"
                              htmlFor="account-option"
                            >
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
                                Image
                                <span>Total</span>
                                <span>Product</span>
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

                            <ul className="sub-total d-flex justify-content-start">
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

                          {/* {cartTotal !== 0 && (
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
                          )} */}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </FormWizard.TabContent>

              <FormWizard.TabContent title="Order Review" icon="ti-comment-alt">
                {/* step 3 */}
                {/* show form details here in text form in a box here with */}
                <Row>
                  <Col lg="6" sm="12" xs="12">
                    <div className="checkout-details theme-form  section-big-mt-space">
                      <div className="order-box">
                        <div className="title-box">
                          <h3>Billing Details</h3>
                        </div>

                        <ul className="list-group">
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="fw-bold">First Name:</span>
                            <span className="ml-auto">
                              {formData.firstName}
                            </span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="fw-bold">Last Name:</span>
                            <span className="ml-auto">{formData.lastName}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="fw-bold">Phone:</span>
                            <span className="ml-auto">{formData.phone}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="fw-bold">Email:</span>
                            <span className="ml-auto">{formData.email}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="fw-bold">Country:</span>
                            <span className="ml-auto">{formData.country}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="fw-bold">Address:</span>
                            <span className="ml-auto">{formData.address}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="fw-bold">Shipping Address:</span>
                            <span className="ml-auto">{formData.address2}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="fw-bold">City:</span>
                            <span className="ml-auto">{formData.city}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="fw-bold">State:</span>
                            <span className="ml-auto">{formData.state}</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="fw-bold">Postal Code:</span>
                            <span className="ml-auto">{formData.pincode}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6" sm="12" xs="12">
                    <div className="checkout-details">
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

                        {/* {cartTotal !== 0 && (
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
                      )} */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </FormWizard.TabContent>

              <FormWizard.TabContent title="Payment" icon="ti-credit-card">
                <div className="checkout-details theme-form section-big-mt-space">
                  <Row>
                    <Col lg="6" sm="12" xs="12">
                      <div className="checkout-details ">
                        <div className="order-box">
                          <div className="title-box">
                            <h3>Billing Details</h3>
                          </div>

                          <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="fw-bold">First Name:</span>
                              <span className="ml-auto">
                                {formData.firstName}
                              </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="fw-bold">Last Name:</span>
                              <span className="ml-auto">
                                {formData.lastName}
                              </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="fw-bold">Phone:</span>
                              <span className="ml-auto">{formData.phone}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="fw-bold">Email:</span>
                              <span className="ml-auto">{formData.email}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="fw-bold">Country:</span>
                              <span className="ml-auto">
                                {formData.country}
                              </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="fw-bold">Address:</span>
                              <span className="ml-auto">
                                {formData.address}
                              </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="fw-bold">Shipping Address:</span>
                              <span className="ml-auto">
                                {formData.address2}
                              </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="fw-bold">City:</span>
                              <span className="ml-auto">{formData.city}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="fw-bold">State:</span>
                              <span className="ml-auto">{formData.state}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="fw-bold">Postal Code:</span>
                              <span className="ml-auto">
                                {formData.pincode}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>

                    <Col lg="6" sm="12" xs="12">
                      <div className="checkout-details">
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
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Col lg="6" sm="12" xs="12">
                    <FormGroup tag="fieldset">
                      <div className="checkout-title">
                        <h3>Select Payment Method</h3>
                      </div>
                      <FormGroup check>
                        <Label check className="d-flex justify-content-start ">
                          <Input
                            type="radio"
                            name="paymentMethod"
                            value="cod"
                            onChange={(e) =>
                              handleInputChange("paymentMethod", e.target.value)
                            }
                          />
                          Cash on Delivery
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check className="d-flex justify-content-start">
                          <Input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            onChange={(e) =>
                              handleInputChange("paymentMethod", e.target.value)
                            }
                          />
                          Credit/Debit Card
                        </Label>
                      </FormGroup>
                      {/* <FormGroup check>
                <Label check className="d-flex justify-content-start ">
                    <Input type="radio" name="paymentMethod" value="stripe" onChange={(e) => handleInputChange("paymentMethod", e.target.value)}/> 
                    Stripe
                </Label>
            </FormGroup> */}
                    </FormGroup>

                    {formData.paymentMethod === "card" && (
                      <div>
                        <Label
                          for="cardNumber"
                          className="d-flex justify-content-start"
                        >
                          Card Number
                        </Label>
                        <Input
                          type="text"
                          name="cardNumber"
                          id="cardNumber"
                          value={cardInputs.cardNumber}
                          placeholder="1234 1234 1234 1234"
                          onChange={(e) =>
                            handleCardInputChange("cardNumber", e.target.value)
                          }
                        />

                        <Label
                          for="cardExpiry"
                          className="d-flex justify-content-start"
                        >
                          Expiry Date
                        </Label>
                        <Input
                          type="text"
                          name="cardExpiry"
                          id="cardExpiry"
                          value={cardInputs.cardExpiry}
                          placeholder="MM/YY"
                          onChange={(e) =>
                            handleCardInputChange("cardExpiry", e.target.value)
                          }
                        />

                        <Label
                          for="cardCVC"
                          className="d-flex justify-content-start"
                        >
                          CVC
                        </Label>
                        <Input
                          type="text"
                          name="cardCVC"
                          id="cardCVC"
                          value={cardInputs.cardCVC}
                          placeholder="CVC"
                          onChange={(e) =>
                            handleCardInputChange("cardCVC", e.target.value)
                          }
                        />
                      </div>
                    )}
                  </Col>
                </div>
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
