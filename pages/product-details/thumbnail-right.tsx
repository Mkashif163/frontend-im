import React from "react";
import { Row } from "reactstrap";
import { NextPage } from "next";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Breadcrumb from "../../views/Containers/Breadcrumb";
import Layout1 from "../../views/layouts/layout1";
import RelatedProducts from "../../views/Products-Detail/related products";
import ThumbnailRightSlick from "../../views/Products-Detail/thumbnail-right-slick";

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

const ThumbnailRight: NextPage = () => {
  const { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: 1,
    },
  });

  return (
    <div className="b-g-light">
      <Layout1>
        <Breadcrumb title="Thumbnail Right" parent="product" />
        <section className="section-big-pt-space bg-light">
          <div className="collection-wrapper">
            {data && data.product && !loading ? (
              <div className="custom-container">
                <Row className="left-slick">
                  <ThumbnailRightSlick item={data.product} />
                </Row>
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
        <RelatedProducts />
      </Layout1>
    </div>
  );
};

export default ThumbnailRight;
