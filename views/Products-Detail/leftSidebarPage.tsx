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
  product: any;
}



const LeftSidebarPage: NextPage<LeftSidebar> = ({ product }) => {
  const filterContext = useContext(FilterContext);
  const { filterOpen, setFilterOpen } = filterContext;
  const [productData, setProduct] = React.useState<any>({});
  
  useEffect(() => {
    setProduct(product);
  }, [product]);
  
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
              {/* <NewProduct  item={productData}/> */}
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
                <ProductSlick item={productData} bundle={false} swatch={false} />
              </Row>
              <TabProduct  item={productData}/>
              <CustomerMessageForm/>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default LeftSidebarPage;
