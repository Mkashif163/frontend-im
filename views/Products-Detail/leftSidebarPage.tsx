import React, { useContext, useEffect } from "react";
import { NextPage } from "next";
import { Row, Col } from "reactstrap";
import Sidebar from "../../views/Products-Detail/sidebar";
import ProductService from "../../views/Products-Detail/product-service";
import NewProduct from "../Collections/NewProduct";
import TabProduct from "../../views/Products-Detail/tab-product";
import ProductSlick from "../../views/Products-Detail/product-slick";
import { FilterContext } from "helpers/filter/filter.context";
import CustomerMessageForm from "./CustomerMessageForm";

interface LeftSidebar {
  pathId: any;
}



const LeftSidebarPage: NextPage<LeftSidebar> = ({ pathId }) => {
  const filterContext = useContext(FilterContext);
  const { filterOpen, setFilterOpen } = filterContext;
  const [product, setProduct] = React.useState<any>({});
  
  useEffect(() => {
    const apiUrl = `http://18.234.66.77/api/single-product/${pathId}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Handle the data from the API here
        setProduct(data.data); // Assuming data is an array in the response
        console.log("Fetched Data from API:", setProduct);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, [pathId]);
  
  return (
    <div className="collection-wrapper">
      {product && (
        <div className="custom-container">
          <Row>
            <Col
              sm="3"
              className="collection-filter"
              style={{
                left: filterOpen ? "-15px" : "",
              }}>
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
                <ProductSlick item={product} bundle={false} swatch={false} />
              </Row>
              <TabProduct  item={product}/>
              <CustomerMessageForm/>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default LeftSidebarPage;
