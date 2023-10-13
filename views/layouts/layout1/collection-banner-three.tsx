import React from "react";
import { Col, Row, Media } from "reactstrap";

interface CollectionBannerProps {
  ban1: any;
  ban2: any;
  ban3:any
}


const CollectionBannerList= ({ banner }) => {
  function transformImageUrl(apiImageUrl) {
    return `${process.env.NEXT_PUBLIC_BACKEND_URL}/${apiImageUrl.replace(/ /g, '%20')}`;
  }
  const apiImageUrl = banner;
  const transformedImageUrl = transformImageUrl(apiImageUrl);
  return (
    <Col md="4">
      <div className="collection-banner-main banner-1 p-left ">
        <div className="collection-img ">
          <Media src={transformedImageUrl} className="img-fluid bg-img" style={{objectFit:"cover"}} alt="banner" />
        </div>
      </div>
    </Col>
  );
};

const CollectionBannerThree: React.FC<CollectionBannerProps> = ({ban1,ban2,ban3}) => {
  return (
    <section className="collection-banner section-pt-space b-g-white ">
        <div className="custom-container">
          <Row className="collection2">
            <CollectionBannerList banner={ban1} />
            <CollectionBannerList banner={ban2} />
            <CollectionBannerList banner={ban3} />
          </Row>
        </div>
      </section>
  );
};

export default CollectionBannerThree;
