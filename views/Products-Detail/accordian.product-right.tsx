import { WishlistContext } from "helpers/wishlist/wish.context";

import React, { useState } from "react";
import { Row, Col, Card, Collapse } from "reactstrap";

interface ProductRightProps {
  item: any;
}
const AccordianDescription: React.FC<ProductRightProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDetail, setIsDetail] = useState(false);
  const [isReview, setIsReview] = useState(false);

  const { addToWish } = React.useContext(WishlistContext);
  return (
    <div className="product-right product-description-box">
      <h2>{item.title}</h2>
      <div className="rating three-star mb-2">
        <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
      </div>
      <div className="product-icon mb-3">
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
        <div className="d-inline-block">
          <button className="wishlist-btn" onClick={() => addToWish(item)}>
            <i className="fa fa-heart"></i>
            <span className="title-font">Add To WishList</span>
          </button>
        </div>
      </div>
      <Row className="product-accordion">
        <Col sm="12">
          <div className="accordion theme-accordion" id="accordionExample">
            <Card>
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn btn-link" type="button" onClick={() => setIsOpen(!isOpen)}>
                    product description
                  </button>
                </h5>
              </div>
              <Collapse isOpen={isOpen} aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                  <p>{item.description}</p>
                  <div className="single-product-tables detail-section">
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
                </div>
              </Collapse>
            </Card>
            <Card>
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" onClick={() => setIsDetail(!isDetail)}>
                    details
                  </button>
                </h5>
              </div>
              <Collapse isOpen={isDetail} id="collapseTwo" aria-labelledby="headingTwo">
                <div className="card-body">
                  <div className="mt-2 text-center">
                    <iframe src="https://www.youtube.com/embed/BUWzX78Ye_8" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                  </div>
                </div>
              </Collapse>
            </Card>
            <Card>
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" onClick={() => setIsReview(!isReview)}>
                    review
                  </button>
                </h5>
              </div>
              <Collapse id="collapseThree" isOpen={isReview}>
                <div className="card-body">
                  <p>no reviews yet</p>
                </div>
              </Collapse>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AccordianDescription;
