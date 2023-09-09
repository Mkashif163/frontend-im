import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Carousel, CarouselItem, CarouselControl } from "reactstrap";
import ProductBox from "../Product-Box/productbox";
import Slider from "react-slick";
import { CartContext } from "../../../../helpers/cart/cart.context";
import { WishlistContext } from "../../../../helpers/wishlist/wish.context";
import { CompareContext } from "../../../../helpers/compare/compare.context";
import { Skeleton } from "../../../../common/skeleton";

var settings = {
  arrows: true,
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  // responsive: [
  //   {
  //     breakpoint: 1700,
  //     settings: {
  //       slidesToShow: 5,
  //       slidesToScroll: 5,
  //       infinite: true,
  //     },
  //   },
  //   {
  //     breakpoint: 1200,
  //     settings: {
  //       slidesToShow: 4,
  //       slidesToScroll: 4,
  //       infinite: true,
  //     },
  //   },
  //   {
  //     breakpoint: 991,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //     },
  //   },
  //   {
  //     breakpoint: 576,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //     },
  //   },
  // ],
};


type TabProductProps = {
  menuId: number;
  menuName: string;
  effect?: any;
};

const TabProduct: NextPage<TabProductProps> = ({ menuId, menuName, effect }) => {
  const { addToWish } = React.useContext(WishlistContext);
  const { addToCart } = React.useContext(CartContext);
  const { addToCompare } = React.useContext(CompareContext);
  const [activeTab, setActiveTab] = useState("new products");
  const [subCategoriesData, setSubCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);


  useEffect(() => {
    if (subCategoriesData.length > 0) {
      // Set the activeTab to the ID of the first subcategory
      setActiveTab(subCategoriesData[0].id);
    }
  }, [subCategoriesData]);

  useEffect(() => {
    const apiUrl = `http://18.234.66.77/api/sub_categories/${menuId}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Handle the data from the API here
        setSubCategoriesData(data.data); // Assuming data is an array in the response
        console.log("Fetched Data from API:", subCategoriesData);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, [menuId]);

  useEffect(() => {
    const apiUrl = `http://18.234.66.77/api/products/${activeTab}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Store the product data in a state variable
        setProductsData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [activeTab]);

  


  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if (activeIndex === subCategoriesData.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const previous = () => {
    if (activeIndex === 0) {
      setActiveIndex(subCategoriesData.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  console.log("productsData", productsData);
  return (
    <>
      <section className="section-pt-space">
        <div className="custom-container">
          <div className="tab-product-main">
            <div className="tab-prodcut-contain">
              <div className="category-title">
                <h3>{menuName.substring(0,15)}{menuName.length>15 ? "..." : ""}</h3>
              </div>
              <div className="top-bar-product-catogories">
                <Carousel activeIndex={activeIndex} next={next} previous={previous} interval={false}>
                  {subCategoriesData.map((subCategory, i) => (
                    <CarouselItem key={subCategory.id}>
                      <ul className="product-catogories">
                        {subCategoriesData.slice(i, i + 6).map((subCategory) => (
                          <li className="top-catogories">
                            <a
                              className={activeTab === subCategory.id ? "active" : ""}
                              onClick={() => setActiveTab(subCategory.id)}
                            >
                              {subCategory.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </CarouselItem>
                  ))}
                </Carousel>
              </div>
              <div className="view-all d-flex " style={{ marginLeft: "auto" }}>
                <div className="px-2 arrows">
                  <ul className="catogories-arrows">
                    <li>
                      <a className="prev" onClick={previous}>
                        <i className="fa fa-angle-left"></i>
                      </a>
                    </li>
                    <li>
                      <a className="next" onClick={next}>
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="view-akk">
                  <a href="#">View all</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="section-py-space ratio_asos product">
        <div className="custom-container">
          <Row>
            <Col className="pe-0">
              <TabContent activeTab={activeTab}>
                <TabPane tabId={activeTab}>
                  <div className="product product-slide-6 product-m no-arrow">
                    <div >
                      {!subCategoriesData || !subCategoriesData.length ? (
                        <Skeleton />
                      ) : (
                        <Slider {...settings}>
                          {productsData.map((product, i) => (
                            <div key={i}>
                              <ProductBox
                                hoverEffect={effect}
                                product={product} // Pass the product data
                                addCart={(product) => addToCart(product, 1)} // Example: pass the product and quantity
                                addCompare={(product) => addToCompare(product)}
                                addWish={(product) => addToWish(product)}
                              />
                            </div>
                          ))}
                        </Slider>
                      )}
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default TabProduct;
