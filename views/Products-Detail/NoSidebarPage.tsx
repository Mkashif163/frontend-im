import React from "react";
import { NextPage } from "next";
import { Row } from "reactstrap";
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

const NoSidebarPage: NextPage = () => {
  var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: 1,
    },
  });

  return (
    <div className="bg-light section-big-pt-space section-big-pb-space">
    <div className="collection-wrapper">
      {data && !loading && data.product && (
        <div className="custom-container">
          <Row>
            <ProductSlick item={data.product} bundle={false} swatch={false} />
          </Row>
        </div>
      )}
    </div>
    </div>
    );
};

export default NoSidebarPage;
