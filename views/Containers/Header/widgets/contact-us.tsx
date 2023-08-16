import React from "react";
import { NextPage } from "next";

interface contactProps {
  spanClass: string;
}
const ContactUs: NextPage<contactProps> = ({ spanClass }) => {
  return (
    <div className={`d-xxl-flex d-none ${spanClass !== "contact-item" ? "contact-block" : ""}`}>
      <div className="d-flex">
        <i className="fa fa-volume-control-phone"></i>
        <span className={spanClass}>
          call us<span>123-456-76890</span>
        </span>
      </div>
    </div>
  );
};

export default ContactUs;
