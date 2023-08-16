import { NextPage } from "next";
import Slider from "react-slick";
import { Media } from "reactstrap";

var bestSellerSetting = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const NewProduct: NextPage = () => (
  <div className="theme-card creative-card creative-inner">
    <h5 className="title-border">new product</h5>
    <div className="offer-slider slide-1">
      <Slider {...bestSellerSetting}>
        <div>
          <div className="media">
            <a href="">
              <Media className="img-fluid " src="/images/product-sidebar/001.jpg" alt="" />
            </a>
            <div className="media-body align-self-center">
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <a href="/collections/no-sidebar">
                <h6>Slim Fit Cotton Shirt</h6>
              </a>
              <h4>$500.00</h4>
            </div>
          </div>
          <div className="media">
            <a href="">
              <Media className="img-fluid " src="/images/product-sidebar/002.jpg" alt="" />
            </a>
            <div className="media-body align-self-center">
              <div className="rating">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
              </div>
              <a href="#">
                <h6>Slim Fit Cotton Shirt</h6>
              </a>
              <h4>$500.00</h4>
            </div>
          </div>
          <div className="media ">
            <a href="">
              <Media className="img-fluid " src="/images/product-sidebar/003.jpg" alt="" />
            </a>
            <div className="media-body align-self-center">
              <div className="rating">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
              </div>
              <a href="#">
                <h6>Slim Fit Cotton Shirt</h6>
              </a>
              <h4>$500.00</h4>
            </div>
          </div>
        </div>
        <div>
          <div className="media">
            <a href="">
              <Media className="img-fluid " src="/images/product-sidebar/003.jpg" alt="" />
            </a>
            <div className="media-body align-self-center">
              <div className="rating">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
              </div>
              <a href="#">
                <h6>Slim Fit Cotton Shirt</h6>
              </a>
              <h4>$500.00</h4>
            </div>
          </div>
          <div className="media">
            <a href="">
              <Media className="img-fluid " src="/images/product-sidebar/001.jpg" alt="" />
            </a>
            <div className="media-body align-self-center">
              <div className="rating">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
              </div>
              <a href="#">
                <h6>Slim Fit Cotton Shirt</h6>
              </a>
              <h4>$500.00</h4>
            </div>
          </div>
          <div className="media">
            <a href="">
              <Media className="img-fluid " src="/images/product-sidebar/002.jpg" alt="" />
            </a>
            <div className="media-body align-self-center">
              <div className="rating">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
              </div>
              <a href="#">
                <h6>Slim Fit Cotton Shirt</h6>
              </a>
              <h4>$500.00</h4>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  </div>
);

export default NewProduct;
