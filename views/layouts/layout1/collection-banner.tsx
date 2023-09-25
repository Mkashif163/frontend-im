import React from "react";
import { NextPage } from "next";
import { Row, Col, Media } from "reactstrap";
import Link from "next/link";

interface CollectionBannerProps {
  banner1: string;
  banner2: string;
  banner3: string;

}


const CollectionBannerList = ({ banner }) => {
  function transformImageUrl(apiImageUrl) {
    return `http://18.235.14.45${apiImageUrl.replace(/ /g, '%20')}`;
  }
  const apiImageUrl = banner;
  const transformedImageUrl = transformImageUrl(apiImageUrl);  
  return (
    <Col md="4">
      <div className="collection-banner-main banner-1  p-right">
        <div className="collection-img">
          <Media src={transformedImageUrl} alt="dsfds" />
        </div>
      </div>
    </Col>
  );
};

const CollectionBanner: NextPage<CollectionBannerProps> = ({banner1,banner2,banner3}) => {

  return (
    <>
      <section className="collection-banner section-pt-space b-g-white ">
        <div className="custom-container">
          <Row className="collection2">
            <CollectionBannerList banner={banner1} />
            <CollectionBannerList banner={banner2} />
            <CollectionBannerList banner={banner3} />
          </Row>
        </div>
      </section>
    </>
  );
};

export default CollectionBanner;
