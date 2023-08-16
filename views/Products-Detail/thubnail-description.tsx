import { WishlistContext } from "helpers/wishlist/wish.context";

import React from "react";
import { Form, Media } from "reactstrap";

interface ProductRightProps {
  item: any;
}
const ThubnailDescription: React.FC<ProductRightProps> = ({ item }) => {
  const { addToWish } = React.useContext(WishlistContext);

  return (
    <>
      <div className="product-right product-description-box">
        <h2>{item.title}</h2>
        <div className="border-product">
          <h6 className="product-title">product details</h6>
          <p>{item.description}</p>
        </div>
        <div className="single-product-tables border-product detail-section">
          <table>
            <tbody>
              <tr>
                <td>Febric:</td>
                <td>Chiffon</td>
              </tr>
              <tr>
                <td>Color:</td>
                <td>Red</td>
              </tr>
              <tr>
                <td>Material:</td>
                <td>Crepe printed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-product">
          <h6 className="product-title">share it</h6>
          <div className="product-icon">
            <ul className="product-social">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-rss"></i>
                </a>
              </li>
            </ul>
            <Form className="d-inline-block">
              <button className="wishlist-btn" onClick={() => addToWish(item.product)}>
                {" "}
                <i className="fa fa-heart"></i>
                <span className="title-font">Add To WishList</span>
              </button>
            </Form>
          </div>
        </div>
        <div className="border-product">
          <h6 className="product-title">100% SECURE PAYMENT</h6>
          <div className="payment-card-bottom">
            <ul>
              <li>
                <a href="#">
                  <Media src="/images/layout-1/pay/1.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Media src="/images/layout-1/pay/2.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Media src="/images/layout-1/pay/3.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Media src="/images/layout-1/pay/4.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Media src="/images/layout-1/pay/1.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThubnailDescription;
