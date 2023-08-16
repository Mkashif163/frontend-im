import React from "react";
import { NextPage } from "next";
import { Row } from "reactstrap";
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

const AccordianPage: NextPage = () => {
  var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: 1,
    },
  });

  return (
    <div className="collection-wrapper">
      {data && !loading && data.product ? (
        <div className="custom-container">
          <Row>
            <AccordianSlick item={data.product} accordian={true} thumbnail={false} />
          </Row>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AccordianPage;
