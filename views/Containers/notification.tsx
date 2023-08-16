import React from "react";
import { NextPage } from "next";

const Notification: NextPage = () => {
  return (
    // <!-- notification product -->
    <div className="product-notification" id="dismiss">
      <span className="close" aria-hidden="true">
        ×
      </span>
      <div className="media">
        <img className="me-2" src="/images/layout-1/product/5.jpg" alt="Generic placeholder image" />
        <div className="media-body">
          <h5 className="mt-0 mb-1">Latest trending</h5>
          Cras sit amet nibh libero, in gravida nulla.
        </div>
      </div>
    </div>
  );
};

export default Notification;
