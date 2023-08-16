/* eslint-disable no-var */

import React, { useState } from "react";
import { NextPage } from "next";
import { Row, Col, Button, Spinner, Media } from "reactstrap";
import ContentLoader from "react-content-loader";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import ProductBox from "../layouts/widgets/Product-Box/productbox";
import CollectionBanner from "./CollectionBanner";
import SidebarPopupPage from "./sidebar-popup-page";
import { FilterContext } from "../../helpers/filter/filter.context";

const PostLoader = () => (
  <ContentLoader height={350} width={245} speed={2}>
    <rect x="2" y="2" rx="0" ry="0" width="240" height="197" />
    <rect x="15" y="220" rx="0" ry="0" width="140" height="25" />
    <rect x="15" y="254" rx="0" ry="0" width="65" height="15" />
    <rect x="15" y="300" rx="0" ry="0" width="67" height="20" />
    <rect x="170" y="300" rx="0" ry="0" width="60" height="20" />
  </ContentLoader>
);

const GET_PRODUCTS = gql`
  query getProducts($type: CategoryType!) {
    products(type: $type) {
      total
      hasMore
      items {
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
        variants {
          id
          sku
          size
          color
          image_id
        }
        images {
          image_id
          id
          alt
          src
        }
      }
    }
  }
`;
type CollectionProps = {
  cols: any;
  layoutList: string;
};

const CollectionPopup: NextPage<CollectionProps> = ({ cols, layoutList }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { selectedCategory, selectedBrands, selectedColor, selectedPrice, sidebarpopup, setSidebarpopup } = React.useContext(FilterContext);
  const [grid, setGrid] = useState(cols);
  const [layout, setLayout] = useState(layoutList);

  var { data, loading, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      type: selectedCategory,
      priceMax: selectedPrice.max,
      priceMin: selectedPrice.min,
      color: selectedColor,
      brand: selectedBrands,
      sortBy: "ASC_ORDER",
      indexFrom: 0,
      limit: 10,
    },
  });

  const handlePagination = () => {
    setIsLoading(true);
    fetchMore({
      variables: {
        indexFrom: data.products.items.length,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        setIsLoading(false);
        return {
          products: {
            __typename: prev.products.__typename,
            total: prev.products.total,
            items: [...prev.products.items, ...fetchMoreResult.products.items],
            hasMore: fetchMoreResult.products.hasMore,
          },
        };
      },
    });
  };
  return (
    <Col className="collection-content">
      <div className="page-main-content">
        <Row>
          <Col sm="12">
            {/* Collection Banner */}
            <CollectionBanner />
            <div className="collection-product-wrapper">
              <div className="product-top-filter">
                <Row>
                  <Col>
                    <div className="popup-filter">
                      <div className="sidebar-popup" onClick={() => setSidebarpopup(!sidebarpopup)}>
                        <a className="popup-btn">filter products</a>
                      </div>
                      <div className={`open-popup ${sidebarpopup ? "open" : ""} `}>
                        <SidebarPopupPage />
                      </div>
                      <div className="collection-view">
                        <ul>
                          <li
                            onClick={() => {
                              setLayout("");
                              setGrid("col-lg-3");
                            }}>
                            <i className="fa fa-th grid-layout-view"></i>
                          </li>
                          <li
                            onClick={() => {
                              setLayout("list-view");
                              setGrid("col-lg-12");
                            }}>
                            <i className="fa fa-list-ul list-layout-view"></i>
                          </li>
                        </ul>
                      </div>
                      <div className="collection-grid-view" style={layout === "list-view" ? { opacity: 0 } : { opacity: 1 }}>
                        <ul>
                          <li onClick={() => setGrid("col-lg-6")}>
                            <Media src="/images/category/icon/2.png" alt="" className="product-2-layout-view" />
                          </li>
                          <li onClick={() => setGrid("col-lg-4")}>
                            <Media src="/images/category/icon/3.png" alt="" className="product-3-layout-view" />
                          </li>
                          <li onClick={() => setGrid("col-lg-3")}>
                            <Media src="/images/category/icon/4.png" alt="" className="product-4-layout-view" />
                          </li>
                        </ul>
                      </div>
                      <div className="product-page-per-view">
                        <select>
                          <option value="High to low">24 Products Par Page</option>
                          <option value="Low to High">50 Products Par Page</option>
                          <option value="Low to High">100 Products Par Page</option>
                        </select>
                      </div>
                      <div className="product-page-filter">
                        <select>
                          <option value="High to low">Sorting items</option>
                          <option value="Low to High">50 Products</option>
                          <option value="Low to High">100 Products</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Product Grid */}
              <div className={`product-wrapper-grid ${layout}`}>
                <Row>
                  {/* Product Box */}
                  {!data || !data.products || !data.products.items || data.products.items.length === 0 || loading ? (
                    <>
                      <PostLoader />
                      <PostLoader />
                      <PostLoader />
                    </>
                  ) : (
                    data &&
                    data.products.items.map((item: any, i: any) => (
                      <div className={grid} key={i}>
                        <div className="product">
                          <div>
                            <ProductBox newLabel={item.new} {...item} layout={layout} />
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </Row>
              </div>
              {/* Pagination */}
              <div className="product-pagination loadmore-pagination">
                <div className="theme-paggination-block">
                  <Row>
                    <Col xl="12" md="12" sm="12">
                      {data && data.products.hasMore && (
                        <Button onClick={() => handlePagination()}>
                          {isLoading && (
                            <Spinner size="sm" color="light">
                              {" "}
                            </Spinner>
                          )}
                          Load More
                        </Button>
                      )}
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CollectionPopup;
