import React, { Fragment, useContext } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import TopBar from "./widgets/TopBar";
import UserProfile from "./widgets/user-profile";
import Whishlist from "./widgets/whishlist";
import ShoppingCart from "./widgets/shopping-cart";
import ByCategory from "./widgets/by-category";
import Search from "./widgets/search";
import ContactUs from "./widgets/contact-us";
import Gift from "./widgets/gift";
import { NextPage } from "next";
import HorizaontalMenu from "../Menu/horizontal";
import MobileSearch from "./widgets/mobile-search";
import MobileSetting from "./widgets/mobile-setting";
import { MenuContext } from "helpers/menu/MenuContext";

interface header {
  cartPopupPosition: string;
  display: string;
  category: boolean;
  categoryHeaderClass: string;
  layoutLogo: string;
}

const Header: NextPage<header> = ({ cartPopupPosition, display, category, categoryHeaderClass, layoutLogo }) => {
  const menuContext = useContext(MenuContext);
  const { setLeftMenu, leftMenu } = menuContext;
  return (
    <Fragment>
      <header>
        <div className="mobile-fix-option"></div>
        <TopBar />
        <div className="layout-header1">
          <Container>
            <Row>
              <Col md="12">
                <div className="main-menu-block">
                  <div className="menu-left">
                    <div
                      className="sm-nav-block"
                      onClick={() => {
                        setLeftMenu(!leftMenu);
                        document.body.style.overflow = "hidden";
                      }}>
                      <span className="sm-nav-btn">
                        <i className="fa fa-bars"></i>
                      </span>
                    </div>
                    <div className="brand-logo">
                      <a href="#">
                        <Media src={`/images/${layoutLogo}/logo/logo.png`} className="img-fluid" alt="logo-header" />
                      </a>
                    </div>
                  </div>
                  <div className="menu-right">
                    <div className="toggle-block">
                      <HorizaontalMenu />
                    </div>
                    <div>
                      <div className="icon-nav">
                        <ul>
                          <UserProfile />
                          <Whishlist />
                          <MobileSearch />
                          <MobileSetting />
                        </ul>
                        <ShoppingCart position={cartPopupPosition} cartDisplay={display} layout="layout2" />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={`category-header ${categoryHeaderClass}`}>
          <div className="custom-container">
            <Row>
              <Col>
                <div className="navbar-menu">
                  <div className="category-left">
                    <ByCategory category={category} />
                    <Search />
                  </div>
                  <div className="category-right">
                    <ContactUs spanClass="" />
                    <Gift />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
