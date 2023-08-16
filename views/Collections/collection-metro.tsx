import React from "react";
import Masonry from "react-masonry-css";
import { Media, Row, Col } from "reactstrap";

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
              <Media src={product.img} className="img-fluid  " alt="product" />
            </div>
            <div className="product-icon">
              <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                <i className="ti-bag"></i>
              </button>
              <a href="#" title="Add to Wishlist">
                <i className="ti-heart" aria-hidden="true"></i>
              </a>
              <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                <i className="ti-search" aria-hidden="true"></i>
              </a>
              <a href="#" title="Compare">
                <i className="ti-reload" aria-hidden="true"></i>
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

const CollectionMetro: React.FC = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="page-main-content">
      <div className="top-banner-wrapper">
        <a href="#">
          <Media src="/images/category/1.jpg" className="img-fluid  w-100" alt="category" />
        </a>
        <div className="top-banner-content small-section pb-0">
          <h4>fashion</h4>
          <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
            was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="collection-product-wrapper">
        <div className="section-big-pt-space portfolio-section portfolio-padding metro-section port-col">
          <Row className="isotopeContainer metro-block">
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
              <Col xl="6" md="6" sm="12">
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

export default CollectionMetro;
