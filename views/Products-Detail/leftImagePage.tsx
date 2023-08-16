import React from "react";
import { NextPage } from "next";
import { Row } from "reactstrap";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import LeftImageProductSlick from "../../views/Products-Detail/left-image-slick";

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

const leftImagePage: NextPage = () => {
  var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: 1,
    },
  });

  return (
    <div className="collection-wrapper">
      {data && data.product && !loading && (
        <div className="custom-container">
          <Row className="left-slick">
            <LeftImageProductSlick item={data.product} />
          </Row>
        </div>
      )}
    </div>
  );
};

export default leftImagePage;
