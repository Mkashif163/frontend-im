import React from "react";
import { NextPage } from "next";
import { Container, Row, Col } from "reactstrap";
import Breadcrumb from "../../views/Containers/Breadcrumb";

interface products {
  img1: string;
  img2: string;
  title: string;
  price: string;
  discount: string;
}

interface productsProps {
  product: products;
}

const productData = [
  {
    img1: "/images/layout-2/product/1.jpg",
    img2: "/images/layout-2/product/a1.jpg",
    title: "reader will be distracted.",
    price: "$ 56.21",
    discount: "$ 24.05",
  },
  {
    img1: "/images/layout-2/product/2.jpg",
    img2: "/images/layout-2/product/a2.jpg",
    title: "reader will be distracted.",
    price: "$ 56.21",
    discount: "$ 24.05",
  },
  {
    img1: "/images/layout-2/product/3.jpg",
    img2: "/images/layout-2/product/a3.jpg",
    title: "reader will be distracted.",
    price: "$ 56.21",
    discount: "$ 24.05",
  },
  {
    img1: "/images/layout-2/product/4.jpg",
    img2: "/images/layout-2/product/a4.jpg",
    title: "reader will be distracted.",
    price: "$ 56.21",
    discount: "$ 24.05",
  },
  {
    img1: "/images/layout-2/product/5.jpg",
    img2: "/images/layout-2/product/a5.jpg",
    title: "reader will be distracted.",
    price: "$ 56.21",
    discount: "$ 24.05",
  },
  {
    img1: "/images/layout-2/product/6.jpg",
    img2: "/images/layout-2/product/a6.jpg",
    title: "reader will be distracted.",
    price: "$ 56.21",
    discount: "$ 24.05",
  },
  {
    img1: "/images/layout-2/product/7.jpg",
    img2: "/images/layout-2/product/a7.jpg",
    title: "reader will be distracted.",
    price: "$ 56.21",
    discount: "$ 24.05",
  },
  {
    img1: "/images/layout-2/product/8.jpg",
    img2: "/images/layout-2/product/a8.jpg",
    title: "reader will be distracted.",
    price: "$ 56.21",
    discount: "$ 24.05",
  },
];

const ProductList: React.FC<productsProps> = ({ product }) => {
  return (
    <Col xl="3" md="4" sm="6">
      <div className="product">
        <div className="product-box">
          <div className="product-imgbox">
            <div className="product-front">
              <img src={product.img1} className="img-fluid  " alt="product" />
            </div>
            <div className="product-back">
              <img src={product.img2} className="img-fluid  " alt="product" />
            </div>
          </div>
          <div className="product-detail detail-center ">
            <div className="detail-title">
              <div className="detail-left">
                <div className="rating-star">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <a href="">
                  <h6 className="price-title">{product.title}</h6>
                </a>
              </div>
              <div className="detail-right">
                <div className="check-price">{product.price}</div>
                <div className="price">
                  <div className="price">{product.discount}</div>
                </div>
              </div>
            </div>
            <div className="icon-detail">
              <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                <i className="ti-bag"></i>
              </button>
              <a href="" title="Add to Wishlist">
                <i className="ti-heart" aria-hidden="true"></i>
              </a>
              <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                <i className="ti-search" aria-hidden="true"></i>
              </a>
              <a href="#" title="Compare">
                <i className="fa fa-exchange" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

const SearchPage: NextPage = () => {
  return (
    <>
      {/* <!-- breadcrumb start --> */}
      <Breadcrumb title="search" parent="home" />
      {/* <!-- breadcrumb End --> */}

      {/* <!--section start--> */}
      <section className="authentication-page section-big-pt-space bg-light">
        <div className="custom-containe">
          <section className="search-block">
            <Container>
              <Row>
                <Col lg="6" className="offset-lg-3">
                  <form className="form-header">
                    <div className="input-group">
                      <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Search Products......" />
                      <div className="input-group-append">
                        <button className="btn btn-normal">
                          <i className="fa fa-search"></i>Search
                        </button>
                      </div>
                    </div>
                  </form>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </section>
      {/* <!-- section end --> */}

      <section className="section-big-py-space ratio_asos bg-light">
        <div className="custom-container">
          <div className="row search-product related-pro1">
            {productData.map((product, i) => (
              <ProductList product={product} key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
