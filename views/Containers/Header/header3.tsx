import React, { Fragment, useContext } from "react";
import { Row, Col, Media } from "reactstrap";
import TopBar from "./widgets/TopBar";
import UserProfile from "./widgets/user-profile";
import Whishlist from "./widgets/whishlist";
import ShoppingCart from "./widgets/shopping-cart";
import ByCategory from "./widgets/by-category";
import Search from "./widgets/search";
import Gift from "./widgets/gift";
import { MenuContext } from "../../../helpers/menu/MenuContext";
import VerticalMenu from "../Menu/vertical";
import MobileSearch from "./widgets/mobile-search";
import MobileSetting from "./widgets/mobile-setting";

type HeaderProps = {
  cartPopupPosition: string;
  display: string;
  category: boolean;
};

const Header: React.FC<HeaderProps> = ({ cartPopupPosition, display, category }) => {
  const menuContext = useContext(MenuContext);
  const { menuResponsive, setMenuResponsive, setLeftMenu, leftMenu } = menuContext;
  return (
    <Fragment>
      <header>
        <div className="mobile-fix-option"></div>
        <TopBar />
        <div className="layout-header3">
          <div className="custom-container">
            <Row>
              <Col>
                <div className="main-menu">
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
                    <ByCategory category={category} />
                    <div className="logo-block">
                      <a className="#">
                        <Media src="/images/layout-3/logo/logo.png" className="img-fluid  " alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="menu-right">
                    <div className="menu-nav">
                      <span className="toggle-nav-desc">
                        <i
                          className="fa fa-bars"
                          onClick={() => {
                            setMenuResponsive(!menuResponsive);
                            document.body.style.overflow = "hidden";
                          }}></i>
                      </span>
                      <VerticalMenu />
                    </div>
                    <Search />
                    <div className="icon-block">
                      <ul>
                        <UserProfile />
                        <Whishlist />
                        <ShoppingCart position={cartPopupPosition} cartDisplay={display} layout="layout3" />
                        <MobileSearch />
                        <MobileSetting />
                      </ul>
                    </div>
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
