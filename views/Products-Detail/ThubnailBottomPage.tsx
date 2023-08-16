import React from "react";
import { Row } from "reactstrap";
import { NextPage } from "next";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import AccordianSlick from "../../views/Products-Detail/accordian-slick";

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
const ThubnailBottomPage: NextPage = () => {
  var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: 1,
    },
  });

  return (
    <div className="collection-wrapper thumbnail-bottom">
      <div className="custom-container">
        {data && !loading ? (
          <Row>
            <AccordianSlick item={data.product} accordian={false} thumbnail={true} />
          </Row>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ThubnailBottomPage;
