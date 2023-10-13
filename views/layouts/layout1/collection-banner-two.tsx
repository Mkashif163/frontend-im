import React from "react";
import { NextPage } from "next";
import { Row, Col, Media } from "reactstrap";
import Link from "next/link";


interface Banners {
  banner: string;
}



const CollectionBannerList = ({ banner }) => {
  function transformImageUrl(apiImageUrl) {
    return `${process.env.NEXT_PUBLIC_BACKEND_URL}/${apiImageUrl.replace(/ /g, '%20')}`;
  }
  const apiImageUrl = banner;
  const transformedImageUrl = transformImageUrl(apiImageUrl);  
  return (
    <Col>
      <div className="collection-banner-main banner-5 p-center">
        <div className="collection-img" style={{width:"100%"}}>
          <Media src={transformedImageUrl} className="bg-img  " style={{width:"100%"}} alt="banner" />
        </div>
      </div>
    </Col>
  );
};

const CollectionBannerTwo: React.FC<Banners> = ({banner}) => {
  return (
    <section className="collection-banner section-pb-space ">
      <div className="custom-container">
        <Row>
            <CollectionBannerList banner={banner} />
        </Row>
      </div>
    </section>
  );
};

export default CollectionBannerTwo;
