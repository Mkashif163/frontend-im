import { Col, Row } from "reactstrap";
import { NextPage } from "next";
import Sidebar from "./Sidebar";
import NewProduct from "./NewProduct";
import Collection from "./Collection";
import { FilterContext } from "helpers/filter/filter.context";
import { useContext, useEffect, useState } from "react";
import { useApiData } from "helpers/data/DataContext";


type LeftSidebarCollectionProps = {
  sub_cat: number;
};

const LeftSidebarCollection:NextPage<LeftSidebarCollectionProps> = ({sub_cat}) => {
  const { leftSidebarOpen } = useContext(FilterContext);
  const [subCategoryProducts, setSubCategoryProducts] = useState([]);
  
  const apiData = useApiData();

  useEffect(() => {
    if (apiData && apiData.menus) {
        // Iterate through each menu
        for (const menuName in apiData.menus) {
            const menu = apiData.menus[menuName];
            // Iterate through each category in the menu
            for (const category of menu.categories) {
                // Iterate through each sub-category in the category
                for (const subCat of category.sub_categories) {
                    
                    // Check if sub-category ID matches
                    if (subCat.id === +sub_cat) {
                        setSubCategoryProducts(subCat.products);
                        break;
                    }
                }
            }
        }
    }
}, [apiData, sub_cat]);

console.log(subCategoryProducts);
  return (
    <Row>
      <Col
        sm="3"
        style={{
          left: leftSidebarOpen ? "-15px" : "",
        }}
        id="filter"
        className="collection-filter category-page-side">
        <div className="sticky-sidebar">
          <Sidebar  sub_cat={sub_cat}/>
          <NewProduct item={undefined}/>
          <div className="collection-sidebar-banner">
            <a href="#">
              <img src="/images/category/side-banner.png" className="img-fluid " alt="" />
            </a>
          </div>
        </div>
      </Col>
      {/* Collection */}
      <Collection products={subCategoryProducts} cols="col-xl-3 col-md-4 col-6 col-grid-box" layoutList="" />
    </Row>
  );
};

export default LeftSidebarCollection;
