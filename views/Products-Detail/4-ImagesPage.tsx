import React from "react";
import { NextPage } from "next";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { Row, Col } from "reactstrap";
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

const FourImagePage: NextPage = () => {
  var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: 2,
    },
  });

  return (
    <>
      <div className="collection-wrapper">
        {data && data.product && !loading && (
          <div className="custom-container">
            <Row>
              <Col lg="5">
                <div className="row product_image_4">
                  {data &&
                    data.product.images.map((img: any, i: any) => {
                      return (
                        <div className="col-6" key={i}>
                          <div>
                            <img src={`/images/${img.src}`} alt="" className="img-fluid" />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </Col>
              <Col lg="7" className="rtl-text">
                <ProductDetail item={data.product} changeColorVar={null} swatch={false} bundle={false} />
              </Col>
            </Row>
          </div>
        )}
      </div>
    </>
  );
};

export default FourImagePage;
