import React from "react";
import { Row } from "reactstrap";
import { NextPage } from "next";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import ThumbnailLeftSlick from "../../views/Products-Detail/thumbnail-left-slick";

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

const ThumbnailLeftPage: NextPage = () => {
  var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: 1,
    },
  });
  return (
    <div className="collection-wrapper">
      <div className="custom-container">
        {data && !loading && (
          <Row className="left-slick">
            <ThumbnailLeftSlick item={data.product} />
          </Row>
        )}
      </div>
    </div>
  );
};

export default ThumbnailLeftPage;
