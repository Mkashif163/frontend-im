import React, { useContext, useEffect, useState } from "react";
import { NextPage } from "next";
import { Row, Col, Spinner, Button } from "reactstrap";
import ProductBox from "../layouts/widgets/Product-Box/productbox";
import CollectionBanner from "./CollectionBanner";
import { FilterContext } from "../../helpers/filter/filter.context";
import { CartContext } from "../../helpers/cart/cart.context";
import { WishlistContext } from "../../helpers/wishlist/wish.context";
import { Skeleton } from "../../common/skeleton";
import { CompareContext } from "helpers/compare/compare.context";





type CollectionProps = {
  cols: any;
  layoutList: string;
};


const Collection: NextPage<CollectionProps> = ({ cols, layoutList }) => {
  const { selectedCategory, selectedBrands, selectedColor, selectedPrice, setSelectedColor, setSelectedBrands, setLeftSidebarOpen, leftSidebarOpen } = useContext(FilterContext);
  const { addToCart } = React.useContext(CartContext);
  const { addToWish } = React.useContext(WishlistContext);
  const { addToCompare } = React.useContext(CompareContext);
  const [grid, setGrid] = useState(cols);
  const [sortBy, setSortBy] = useState("ASC_ORDER");
  const [pageLimit, setPageLimit] = useState(10);
  const [layout, setLayout] = useState(layoutList);
  const [isLoading, setIsLoading] = useState(false);
  const [allProductData, setAllProductData] = useState([])

  const handlePagination = () => {
    setIsLoading(true);
    setTimeout(
      () =>
        fetchMore({
          variables: {
            indexFrom: allProductData.length,
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
        }),
      1000,
    );
  };
  const removeBrand = (val) => {
    const temp = [...selectedBrands];
    temp.splice(selectedBrands.indexOf(val), 1);
    setSelectedBrands(temp);
  };

  const removeColor = () => {
    setSelectedColor("");
  };

  useEffect(() => {
    fetch("http://18.234.66.77/api/products")
      .then(response => response.json())
      .then(data => setAllProductData(data[0]))
      .catch(error => console.log(error))
  })

  console.log(allProductData)

  return (
    <Col className="collection-content">
      <div className="page-main-content">
        <Row>
          <Col sm="12">
            {/* Collection Banner */}
            <CollectionBanner />
            <div className="collection-product-wrapper">
              <Row>
                <Col xs="12">
                  <ul className="product-tags">
                    {!!selectedBrands.length &&
                      selectedBrands.map((brand, i) => (
                        <li className="me-1" key={i}>
                          <a className="filter_tag">
                            {brand}
                            <i className="ti-close" onClick={() => removeBrand(brand)}></i>
                          </a>
                        </li>
                      ))}
                    {!!selectedColor.length && (
                      <li className="me-1">
                        {selectedColor && (
                          <a className="filter_tag">
                            {selectedColor}
                            <i className="ti-close" onClick={removeColor}></i>
                          </a>
                        )}
                      </li>
                    )}
                  </ul>
                </Col>
              </Row>
              <div className="product-top-filter">
                <Row>
                  <Col xs="12">
                    <div className="filter-main-btn">
                      <span
                        className="filter-btn"
                        onClick={() => {
                          setLeftSidebarOpen(!leftSidebarOpen);
                        }}>
                        <i className="fa fa-filter" aria-hidden="true"></i> Filter
                      </span>
                    </div>
                  </Col>
                  <Col xs="12">
                    <div className="product-filter-content">
                      <div className="search-count">
                        <h5>{allProductData ? `Showing Products 1-${allProductData.length} ` : "loading"} Result</h5>
                      </div>
                      <div className="collection-view">
                        <ul>
                          <li
                            onClick={() => {
                              setLayout("");
                              setGrid(cols);
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
                            <img src="/images/category/icon/2.png" alt="" className="product-2-layout-view" />
                          </li>
                          <li onClick={() => setGrid("col-lg-4")}>
                            <img src="/images/category/icon/3.png" alt="" className="product-3-layout-view" />
                          </li>
                          <li onClick={() => setGrid("col-lg-3")}>
                            <img src="/images/category/icon/4.png" alt="" className="product-4-layout-view" />
                          </li>
                        </ul>
                      </div>
                      <div className="product-page-per-view">
                        <select onChange={(e) => setPageLimit(parseInt(e.target.value))}>
                          <option value="10">10 Products Par Page</option>
                          <option value="15">15 Products Par Page</option>
                          <option value="20">20 Products Par Page</option>
                        </select>
                      </div>
                      <div className="product-page-filter">
                        <select onChange={(e) => setSortBy(e.target.value)}>
                          <option value="ASC_ORDER">Sorting items</option>
                          <option value="HIGH_TO_LOW">High To Low</option>
                          <option value="LOW_TO_HIGH">Low To High</option>
                          <option value="NEWEST">Newest</option>
                          <option value="ASC_ORDER">Asc Order</option>
                          <option value="DESC_ORDER">Desc Order</option>
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
                  {!allProductData || allProductData.length === 0 ? (
                    allProductData && allProductData.length === 0 ? (
                      <Col xs="12">
                        <div>
                          <div className="col-sm-12 empty-cart-cls text-center">
                            <img src={`/images/empty-search.jpg`} className="img-fluid mb-4" alt="" />
                            <h3>
                              <strong>Your Cart is Empty</strong>
                            </h3>
                            <h4>Explore more shortlist some items.</h4>
                          </div>
                        </div>
                      </Col>
                    ) : (
                      <>
                        <Skeleton />
                      </>
                    )
                  ) : (
                    allProductData &&
                    allProductData.map((product, i) => (
                      <div className={grid} key={i}>
                        <div className="product">
                          <div>
                            <ProductBox
                            hoverEffect={true}
                              product={product} // Pass the product data
                              addCart={(product) => addToCart(product, 1)} // Example: pass the product and quantity
                              addCompare={(product) => addToCompare(product)}
                              addWish={(product) => addToWish(product)} />
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </Row>
              </div>
              {/* Pagination */}
              {/* <div className="product-pagination loadmore-pagination">
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
              </div> */}
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Collection;
function fetchMore(arg0: { variables: { indexFrom: any; }; updateQuery: (prev: any, { fetchMoreResult }: { fetchMoreResult: any; }) => any; }): void {
  throw new Error("Function not implemented.");
}

