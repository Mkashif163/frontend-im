import React from "react";
import { Row } from "reactstrap";
import { NextPage } from "next";
import ProductSlick from "../../views/Products-Detail/product-slick";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

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

const ImageSwatchPage: NextPage = () => {
  var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: 1,
    },
  });

  return (
    <div className="collection-wrapper">
      {data && data.product && !loading ? (
        <div className="custom-container">
          <Row>
            <ProductSlick item={data.product} bundle={true} swatch={true} />
          </Row>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageSwatchPage;
