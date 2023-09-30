import React, { Fragment, useContext, useEffect, useState } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import TopBar from "./widgets/TopBar";
import Search from "./widgets/search";
import ShoppingCart from "./widgets/shopping-cart";
import UserOptions from "./widgets/user-signedInOption";
import WishList from "./widgets/whishlist";
import { NextPage } from "next";
import MobileSearch from "./widgets/mobile-search";
import MobileSetting from "./widgets/mobile-setting";
import { MenuContext } from "helpers/menu/MenuContext";
import { useApiData } from "helpers/data/DataContext";
interface header {
  cartPopupPosition: string;
  display: string;
  category: any;
  layoutLogo: string;
}

interface ApiData {
  menus: {
    [menuKey: string]: {
      categories: {
        id: number;
        sub_categories: {
          id: number;
          name: string;
          products: any[]; // Define the actual product type
        }[];
      }[];
    };
  };
}


const Header: NextPage<header> = ({
  cartPopupPosition,
  display,
  category,
  layoutLogo,
}) => {
  const menuContext = useContext(MenuContext);
  const [userLoggedOut, setUserLoggedOut] = useState(false);
  const apiData = useApiData() as ApiData; // Use the context hook to access apiData
  const [products, setProducts] = useState([]);

  const { setLeftMenu, leftMenu } = menuContext;
  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300) {
      if (window.innerWidth < 581)
        document.getElementById("stickyHeader").classList.remove("sticky");
      else document.getElementById("stickyHeader").classList.add("sticky");
    } else document.getElementById("stickyHeader").classList.remove("sticky");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (userLoggedOut) {
      setUserLoggedOut(false);
    }
  }, [userLoggedOut]);


  useEffect(() => {
    const allProducts = [];

    // Check if apiData and apiData.menus exist before proceeding
    if (apiData && apiData.menus) {
      // Loop through each menu
      for (const menuName in apiData.menus) {
        // Check if categories exist for the current menu
        if (apiData.menus[menuName].categories) {
          // Loop through each category in the current menu
          for (const category of apiData.menus[menuName].categories) {
            // Check if sub_categories exist for the current category
            if (category.sub_categories) {
              // Loop through each sub_category in the current category
              for (const subCategory of category.sub_categories) {
                // Check if products exist for the current sub_category
                if (subCategory.products) {
                  // Loop through each product in the current sub_category and add it to allProducts
                  for (const product of subCategory.products) {
                    allProducts.push(product);
                  }
                }
              }
            }
          }
        }
      }
    }

    // Set the productsData state with all fetched products
    setProducts(allProducts);
}, [apiData]);

  return (
    <Fragment>
      <header id="stickyHeader">
        <div className="mobile-fix-option"></div>
        <TopBar />
        <div className="layout-header2">
          <Container>
            <Row>
              <Col md="12">
                <div className="main-menu-block">
                  <div
                    onClick={() => {
                      setLeftMenu(!leftMenu);
                      document.body.style.overflow = "hidden";
                    }}
                    className="sm-nav-block"
                  >
                    <span className="sm-nav-btn">
                      <i className="fa fa-bars"></i>
                    </span>
                  </div>
                  <div className="logo-block">
                    <a href="/#">
                      <Media
                        src={`/images/layout-2/logo/im-logo.png`}
                        className="img-fluid logo"
                        width="150px"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <Search products={products}/>
                  <ShoppingCart
                    position={cartPopupPosition}
                    cartDisplay={display}
                    layout="layout2"
                  />
                  {/* israr */}
                  <div className="category-header-2" id="user-wish">
                    <div>
                      <Row>
                        <Col>
                          <div className="navbar-menu">
                            <div className="category-left">
                              <div className="icon-block mt-3 ">
                                <ul>
                                  <span className="ms-2 d-flex">
                                    {/* <User /> */}
                                    <UserOptions />
                                    <WishList />
                                    <MobileSearch />
                                    <MobileSetting />
                                  </span>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Nav bar */}
        {/* commented by israr */}
        {/* <div className="category-header-2">
          <div className="custom-container">
            <Row>
              <Col>
                <div className="navbar-menu">
                  <div className="category-left">
                    <Category category={category} />
                    <HorizaontalMenu />
                    <div className="icon-block">
                      <ul>
                        <User />
                        <WishList />
                        <MobileSearch />
                        <MobileSetting />
                      </ul>
                    </div>
                  </div>
                  <div className="category-right">
                    <ContactUs spanClass="" />
                    <Gift />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div> */}

        {/* Nav bar end */}
      </header>
    </Fragment>
  );
};
export default Header;
