import React, { useContext, useState } from "react";
import { NextPage } from "next";
import firebase from "../../../../config/base";
import { Label, Input, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import { CartContext } from "helpers/cart/cart.context";

const UserProfile: NextPage = () => {
  const { emptyCart } = useContext(CartContext);
  const [openAccount, setOpenAccount] = useState(false);
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test@123");
  const [user, setUser] = useState("");
  const signout = () => {
    firebase.signOut().then(() => {
      emptyCart();
      setUser("");
      setOpenAccount(!openAccount);
    });
    // router.push("/pages/account/login");
  };

  const loginAuth = async (email, password) => {
    try {
      await firebase.signInWithEmailAndPassword(email, password).then(function () {
        setUser(firebase.currentUser.email);
        setOpenAccount(!openAccount);
      });
    } catch (error) {
      setTimeout(() => {
        toast.error("error", error);
      }, 200);
    }
  };
  return (
    <>
      <li className="mobile-user onhover-dropdown" onClick={() => setOpenAccount(!openAccount)}>
        <a href="#">
          <i className="icon-user"></i>
        </a>
      </li>

      <div id="myAccount" className={`add_to_cart right account-bar ${openAccount ? "open-side" : ""}`}>
        <a href="#" className="overlay" onClick={() => setOpenAccount(!openAccount)}></a>
        <div className="cart-inner">
          <>
            <div className="cart_top">
              <h3>my account</h3>
              <div className="close-cart">
                <a href="#" onClick={() => setOpenAccount(!openAccount)}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <Form className="userForm">
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="text" disabled={user ? true : false} className="form-control d-inherit" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="review">Password</Label>
                <Input
                  type="password"
                  disabled={user ? true : false}
                  className="form-control d-inherit"
                  id="review"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                {!user ? (
                  <a href="#" className="btn btn-rounded btn-block" onClick={() => loginAuth(email, password)}>
                    Login
                  </a>
                ) : (
                  <a href="#" className="btn btn-rounded btn-block" onClick={signout}>
                    Logout
                  </a>
                )}
              </FormGroup>
              {!user && (
                <FormGroup>
                  <h5 className="forget-class">
                    <a href="/pages/account/forget-password" className="d-block">
                      forget password?
                    </a>
                  </h5>
                  <h6 className="forget-class">
                    <a href="/pages/account/register" className="d-block">
                      new to store? Signup now
                    </a>
                  </h6>
                </FormGroup>
              )}
            </Form>
          </>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
