import React from "react";
import Masonry from "react-masonry-css";
import { Row, Col } from "reactstrap";

interface products {
  img: string;
  title: string;
  price: string;
}

interface productProps {
  product: products;
}

const productData = [
  {
    img: "/images/metro/1.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$500.00",
  },
  {
    img: "/images/metro/2.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$500.00",
  },
  {
    img: "/images/metro/3.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$500.00",
  },
  {
    img: "/images/metro/4.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$500.00",
  },
  {
    img: "/images/metro/7.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$500.00",
  },
  {
    img: "/images/metro/6.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$500.00",
  },
  {
    img: "/images/metro/9.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$500.00",
  },
  {
    img: "/images/metro/12.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$500.00",
  },
  {
    img: "/images/metro/10.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$500.00",
  },
  {
    img: "/images/metro/15.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$500.00",
  },
  {
    img: "/images/metro/16.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$500.00",
  },
  {
    img: "/images/metro/13.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$500.00",
  },
];

const ProductList: React.FC<productProps> = ({ product }) => {
  return (
    <div className="isotopeSelector">
      <div className="product">
        <div className="product-box">
          <div className="product-imgbox">
            <div className="product-front">
              <img src={product.img} className="img-fluid  " alt="product" />
            </div>
            <div className="product-icon">
              <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                <i className="ti-bag"></i>
              </button>
              <a href="javascript(0)" title="Add to Wishlist">
                <i className="ti-heart" aria-hidden="true"></i>
              </a>
              <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                <i className="ti-search" aria-hidden="true"></i>
              </a>
              <a href="#" title="Compare">
                <i className="fa fa-exchange" aria-hidden="true"></i>
              </a>
            </div>
            <div className="product-detail">
              <a href="#">
                <h6>{product.title}</h6>
              </a>
              <h4>{product.price}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CollectionFullWidth: React.FC = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="page-main-content">
      <div className="collection-product-wrapper">
        <div className="section-big-pt-space portfolio-section portfolio-padding metro-section port-col">
          <Row className="isotopeContainer  metro-block">
            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid masonry-with-dec" columnClassName="my-masonry-grid_column">
              {productData.map((data, i) => (
                <ProductList product={data} key={i} />
              ))}
            </Masonry>
          </Row>
        </div>
        <div className="product-pagination mt-0">
          <div className="theme-paggination-block">
            <Row>
              <Col xl="6" md="6" sm="12">
                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">
                          <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        </span>{" "}
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">
                          <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </span>{" "}
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </Col>
              <Col x1="6" md="6" sm="12">
                <div className="product-search-count-bottom">
                  <h5>Showing Products 1-24 of 10 Result</h5>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionFullWidth;
