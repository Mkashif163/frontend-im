import React from "react";
import { NextPage } from "next";
import { Input } from "reactstrap";

const ImageGroup: NextPage = () => (
  <div className="border-product pb-0">
    <h6 className="product-title">Frequently bought together</h6>
    <div className="bundle">
      <div className="bundle_img">
        <div className="img-box">
          <a href="#">
            <img src="/images/product-sidebar/001.jpg" alt="" className="img-fluid" />
          </a>
        </div>
        <span className="plus">+</span>
        <div className="img-box">
          <a href="#">
            <img src="/images/product-sidebar/001.jpg" alt="" className="img-fluid" />
          </a>
        </div>
        <span className="plus">+</span>
        <div className="img-box">
          <a href="#">
            <img src="/images/product-sidebar/001.jpg" alt="" className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="bundle_detail">
        <div className="theme_checkbox">
          <label>
            this product: WOMEN PINK SHIRT <span className="price_product">$55</span>
            <Input type="checkbox" defaultChecked={false} />
            <span className="checkmark"></span>
          </label>
          <label>
            black long skirt <span className="price_product">$20</span>
            <Input type="checkbox" defaultChecked={false} />
            <span className="checkmark"></span>
          </label>
          <label>
            women heeled boots <span className="price_product">$15</span>
            <Input type="checkbox" defaultChecked={true} />
            <span className="checkmark"></span>
          </label>
          <a href="#" className="btn btn-normal btn-xs">
            buy this bundle
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ImageGroup;
