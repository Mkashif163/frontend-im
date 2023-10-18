import { NextPage } from "next";
import React from "react";
import Slider from "react-slick";
import { Media } from "reactstrap";
import Image from "next/image";
import Link from "next/link";

interface NewProductData {
  item: any;
}

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

const NewProduct: React.FC<NewProductData> = ({ item }) => {
  return (
    <>
      {item && (
        <div className="theme-card creative-card creative-inner">
          <h5 className="title-border">new product</h5>
          <div className="offer-slider slide-1">
            <Slider {...bestSellerSetting}>
              <div>
                <div className="media">
                  <a href="">
                    <Image className="img-fluid " src={item.url} alt="" />
                  </a>
                  <div className="media-body align-self-center">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <Link href="/collections/no-sidebar">
                      <a>
                        <h6>{item.name}</h6>
                      </a>
                    </Link>
                    <h4>{item.new_sale_price}</h4>
                  </div>
                </div>
              </div>
              <div>
                <div className="media">
                  <a href="">
                    <Image className="img-fluid " src={item.url} alt="" />
                  </a>
                  <div className="media-body align-self-center">
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <Link href="/collections/no-sidebar">
                      <a>
                        <h6>{item.name}</h6>
                      </a>
                    </Link>
                    <h4>{item.new_sale_price}</h4>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};

export default NewProduct;
