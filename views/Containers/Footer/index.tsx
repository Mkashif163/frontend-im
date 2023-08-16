import React, { Fragment } from "react";
import FooterSection from "./widgets";

type FooterProps = {
  layoutLogo: string;
};

const Footer: React.FC<FooterProps> = ({ layoutLogo }) => {
  return (
    <Fragment>
      <FooterSection layoutLogo={layoutLogo} />
    </Fragment>
  );
};
export default Footer;
