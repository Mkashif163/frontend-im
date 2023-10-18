import React, { useState, useContext } from "react";
import Link from "next/link";
import data from "../../../../data/menu.json";
import { NextPage } from "next";
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
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutSideClick(false);
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
            }}
          >
            Back<i className="fa fa-angle-right ps-2" aria-hidden="true"></i>
          </div>
        </li>
      )}

      <li className="mega home">
        <Link href="/">
          <a className="dark-menu-item has-submenu">Home</a>
        </Link>
        <span
          className={`sub-arrow ${
            (path === "/Layouts/layout3" || mobileSize) &&
            (isOpen ? "minus" : "plus")
          }`}
        ></span>
      </li>

      <li className="mega home">
        <a
          href="/collections/leftsidebar"
          className="dark-menu-item has-submenu"
        >
          Shop
        </a>
        <span
          className={`sub-arrow ${
            (path === "/Layouts/layout3" || mobileSize) &&
            (isOpen ? "minus" : "plus")
          }`}
        ></span>
      </li>
      <li className="mega home">
        <Link href="product-details/913">
          <a className="dark-menu-item has-submenu">Product</a>
        </Link>
        <span
          className={`sub-arrow ${
            (path === "/Layouts/layout3" || mobileSize) &&
            (isOpen ? "minus" : "plus")
          }`}
        ></span>
      </li>
      <li className="mega home">
        <Link href="features/portfolio/mesonary-grid-4">
          <a className="dark-menu-item has-submenu">Features</a>
        </Link>
        <span
          className={`sub-arrow ${
            (path === "/Layouts/layout3" || mobileSize) &&
            (isOpen ? "minus" : "plus")
          }`}
        ></span>
      </li>
      <li className="mega home">
        <Link href="/blog/right-sidebar">
          <a className="dark-menu-item has-submenu">Blog</a>
        </Link>
        <span
          className={`sub-arrow ${
            (path === "/Layouts/layout3" || mobileSize) &&
            (isOpen ? "minus" : "plus")
          }`}
        ></span>
      </li>
      {menuData.map((menuItem, i) => {
        return (
          // Main Menu title
          <li key={i} className={` ${menuItem.megaMenu ? "mega" : ""}`}>
            {(menuItem.type === "sub" || menuItem.megaMenu) &&
              menuItem.children && (
                <a
                  className="dark-menu-item has-submenu"
                  onClick={() => {
                    setIsComponentVisible(true);
                    setIsOpen(menuItem.title !== isOpen && menuItem.title);
                  }}
                >
                  {t(menuItem.title)}
                  <span
                    className={`${menuItem.title === "product"} sub-arrow ${
                      (path === "/Layouts/layout3" || mobileSize) &&
                      (isOpen === menuItem.title ? "minus" : "plus")
                    }`}
                  ></span>
                </a>
              )}

            {/* Submenu */}
            {menuItem.children && !menuItem.megaMenu && (
              <ul
                ref={ref}
                className={`submenu ${
                  isComponentVisible && isOpen === menuItem.title
                    ? "d-block submenu"
                    : ""
                }`}
              >
                {menuItem.children.map((childrenItem: any, index: any) => (
                  <li
                    key={index}
                    className={`${
                      childrenItem.children ? "submenuTitle " : ""
                    }`}
                  >
                    {childrenItem.type === "sub" && (
                      <a
                        onClick={() => {
                          setIsComponentVisible(true);
                          setIsSubNavOpen(
                            childrenItem.title === isSubNavOpen
                              ? false
                              : childrenItem.title
                          );
                        }}
                      >
                        {childrenItem.title}
                        <span
                          className={`sub-arrow ${
                            (path === "/Layouts/layout3" || mobileSize) &&
                            (isSubNavOpen === childrenItem.title
                              ? "minus"
                              : "plus")
                          }`}
                        ></span>
                      </a>
                    )}
                    {childrenItem.type === "link" && (
                      <Link href={`${childrenItem.path}`}>
                        <a>{childrenItem.title}</a>
                      </Link>
                    )}

                    {childrenItem.children && (
                      <ul
                        className={`submenuContent 
                      ${
                        path !== "/Layouts/layout3" &&
                        isComponentVisible &&
                        mobileSize &&
                        isSubNavOpen === childrenItem.title
                          ? "d-block"
                          : path === "/Layouts/layout3" &&
                            isComponentVisible &&
                            isSubNavOpen === childrenItem.title
                          ? "d-block"
                          : ""
                      }`}
                      >
                        {childrenItem.children.map(
                          (childrenSubItem: any, key: any) => (
                            <li key={key}>
                              {childrenSubItem.type === "link" && (
                                <Link href={`${childrenSubItem.path}`}>
                                  <a className="sub-menu-title">
                                    {childrenSubItem.title}
                                  </a>
                                </Link>
                              )}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
};

export default MenuBar1;
