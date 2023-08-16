import React from "react";
import { Row, Col } from "reactstrap";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Sticky from "react-sticky-el";
import ProductDetail from "./product-detail";

const GET_SINGLE_PRODUCTS = gql`
  query getProducts($id: Float!) {
    product(id: $id) {
      id
      title
      description
      type
      brand
      category
      price
      new
      sale
      discount
      stock
      variants {
        id
        sku
        size
        color
        image_id
      }
      images {
        alt
        src
      }
    }
  }
`;

const StickySubPage: React.FC = () => {
  var { data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: 1,
    },
  });

  return (
    <div className="collection-wrapper">
      <div className="custom-container">
        <Row className="block">
          <Col lg="5">
            <Row>
              <Col className="product_img_scroll image-scroll">
                <div>
                  {data &&
                    data.product.images.map((img: any, i: any) => {
                      return (
                        <div className="col-12" key={i}>
                          <div>
                            <img src={`/images/${img.src}`} alt="" className="img-fluid" />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </Col>
            </Row>
          </Col>
          {data && (
            <Col lg="7" className="rtl-text">
              <Sticky boundaryElement=".block" style={{ position: "relative" }} hideOnBoundaryHit={false}>
                <ProductDetail item={data.product} bundle={false} swatch={false} changeColorVar={null} />
              </Sticky>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};

export default StickySubPage;
