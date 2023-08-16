import React, { useState, useContext } from "react";
import Link from "next/link";
import data from "../../../../data/menu.json";
import { NextPage } from "next";
import { Media, Col, Row, Container } from "reactstrap";
import { MenuContext } from "../../../../helpers/menu/MenuContext";
import { useTranslation } from "react-i18next";
import useOutSideClick from "utils/outSideClick";
import useMobileSize from "utils/isMobile";

type MenuBarState = {
  menuData?: any[];
};

const MenuBar1: NextPage<MenuBarState> = ({ menuData = data }) => {
  const menuContext = useContext(MenuContext);
  const { setMenuResponsive } = menuContext;
  const { ref, isComponentVisible, setIsComponentVisible } = useOutSideClick(false);
  const mobileSize = useMobileSize();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState();
  const [isSubNavOpen, setIsSubNavOpen] = useState();
  const path = window.location.pathname;

  return (
    <>
      {path !== "/Layouts/layout3" && (
        <li>
          <div
            className="mobile-back text-right"
            onClick={() => {
              setMenuResponsive(false);
              document.body.style.overflow = "visible";
            }}>
            Back<i className="fa fa-angle-right ps-2" aria-hidden="true"></i>
          </div>
        </li>
      )}
      {menuData.map((menuItem, i) => {
        return (
          // Main Menu title
          <li key={i} className={` ${menuItem.megaMenu ? "mega" : ""}`}>
            {(menuItem.type === "sub" || menuItem.megaMenu) && menuItem.children && (
              <a
                className="dark-menu-item has-submenu"
                onClick={() => {
                  setIsComponentVisible(true);
                  setIsOpen(menuItem.title !== isOpen && menuItem.title);
                }}>
                {t(menuItem.title)}
                <span className={`sub-arrow ${(path === "/Layouts/layout3" || mobileSize) && (isOpen === menuItem.title ? "minus" : "plus")}`}></span>
              </a>
            )}

            {/* MEGHA MENU For Feature and Product  */}
            {menuItem.megaMenu && (
              <ul
                ref={ref}
                className={`mega-menu full-mega-menu submenu ${isComponentVisible && isOpen === menuItem.title ? "d-block" : ""} ${menuItem.title === "features" ? "feature-mega-menu" : ""}`}>
                {
                  <Container>
                    <Row>
                      {menuItem.children.map((megaMenuItem: any, i: any) => {
                        return (
                          <Col className={`mega-box submenu`} key={i}>
                            <div className="link-section">
                              <div className="menu-title">
                                <h5>{megaMenuItem.title}</h5>
                              </div>
                              <div className="menu-content">
                                <ul>
                                  {megaMenuItem.children.map((subMegaMenuItem: any, i: any) => {
                                    return (
                                      <li key={i}>
                                        <Link href={`${subMegaMenuItem.path}`}>
                                          <a>{subMegaMenuItem.title}</a>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                          </Col>
                        );
                      })}

                      {/* For showing image in megamenu */}
                      {menuItem.title === "features" ? (
                        <Col className="mega-box product ">
                          <div className="mega-img">
                            <Media src="/images/mega-banner.jpg" alt="menu-banner" className="img-fluid" />
                          </div>
                        </Col>
                      ) : (
                        <Row className="menu-banner">
                          <Col lg="6">
                            <div>
                              <Media src="/images/menu-banner1.jpg" alt="menu-banner" className="img-fluid" />
                            </div>
                          </Col>
                          <Col lg="6">
                            <div>
                              <Media src="/images/menu-banner2.jpg" alt="menu-banner" className="img-fluid" />
                            </div>
                          </Col>
                        </Row>
                      )}
                    </Row>
                  </Container>
                }
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
};

export default MenuBar1;
