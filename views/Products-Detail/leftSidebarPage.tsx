import React, { useContext } from "react";
import { NextPage } from "next";
import { Row, Col } from "reactstrap";
import Sidebar from "../../views/Products-Detail/sidebar";
import ProductService from "../../views/Products-Detail/product-service";
import NewProduct from "../Collections/NewProduct";
import TabProduct from "../../views/Products-Detail/tab-product";
import ProductSlick from "../../views/Products-Detail/product-slick";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { FilterContext } from "helpers/filter/filter.context";

interface LeftSidebar {
  pathId: any;
}

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

const LeftSidebarPage: NextPage<LeftSidebar> = ({ pathId }) => {
  const filterContext = useContext(FilterContext);
  const { filterOpen, setFilterOpen } = filterContext;
  var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: parseInt(pathId),
    },
  });
  return (
    <div className="collection-wrapper">
      {data && data.product && !loading && (
        <div className="custom-container">
          <Row>
            <Col
              sm="3"
              className="collection-filter"
              style={{
                left: filterOpen ? "-15px" : "",
              }}>
              <Sidebar />
              <ProductService />
              <NewProduct />
            </Col>
            <Col sm="12" lg="9" xs="12">
              <Row>
                <Col xl="12">
                  <div className="filter-main-btn mb-sm-4">
                    <span className="filter-btn" onClick={() => setFilterOpen(!filterOpen)}>
                      <i className="fa fa-filter" aria-hidden="true"></i> filter
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <ProductSlick item={data.product} bundle={false} swatch={false} />
              </Row>
              <TabProduct />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default LeftSidebarPage;
