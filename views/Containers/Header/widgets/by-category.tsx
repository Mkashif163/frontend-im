import React, { useContext, useState } from "react";
import { NextPage } from "next";
import { Media } from "reactstrap";
import { useTranslation } from "react-i18next";
import { MenuContext } from "helpers/menu/MenuContext";

interface byCategory {
  category: boolean;
}
const ByCategory: NextPage<byCategory> = ({ category }) => {
  const [showState, setShowState] = useState(category || false);
  const { t } = useTranslation();
  const menuContext = useContext(MenuContext);
  const { leftMenu, setLeftMenu } = menuContext;
  return (
    <>
      <div className="nav-block" onClick={() => setShowState(!showState)}>
        <div className="nav-left">
          <nav className="navbar" data-toggle="collapse" data-target="#navbarToggleExternalContent">
            <button className="navbar-toggler" type="button" onClick={() => setShowState(!showState)}>
              <span className="navbar-icon">
                <i className="fa fa-arrow-down"></i>
              </span>
            </button>
            <h5 className="mb-0  text-white title-font"> {t("shopByCategory")}</h5>
          </nav>
          <div className={`collapse  nav-desk ${showState ? "show" : ""}`} id="navbarToggleExternalContent">
            <a
              href="#"
              onClick={() => {
                setLeftMenu(!leftMenu);
                document.body.style.overflow = "visible";
              }}
              className={`overlay-cat ${leftMenu ? "showoverlay" : ""}`}></a>
            <ul className={`nav-cat title-font ${leftMenu ? "openmenu" : ""}`}>
              <li
                className="back-btn"
                onClick={() => {
                  setLeftMenu(!leftMenu);
                  document.body.style.overflow = "visible";
                }}>
                <a>
                  <i className="fa fa-angle-left"></i>Back
                </a>
              </li>
              <li>
                <a href="/collections/leftsidebar?category=FASHION">
                  <Media src="/images/layout-1/nav-img/01.png" alt="category-product" className="img-fluid" />
                  FASHION
                </a>
              </li>
              <li>
                <a href="/collections/leftsidebar?category=ELECTRONIC">
                  <Media src="/images/layout-1/nav-img/02.png" alt="category-product" className="img-fluid" />
                  ELECTRONIC
                </a>
              </li>
              <li>
                <a href="/collections/leftsidebar?category=PETS">
                  <Media src="/images/layout-1/nav-img/03.png" alt="category-product" className="img-fluid" />
                  PETS
                </a>
              </li>
              <li>
                <a href="/collections/leftsidebar?category=FLOWER">
                  <Media src="/images/layout-1/nav-img/04.png" alt="category-product" className="img-fluid" /> FLOWER
                </a>
              </li>
              <li>
                <a href="/collections/leftsidebar?category=FURNITURE">
                  <Media src="/images/layout-1/nav-img/05.png" alt="category-product" className="img-fluid" />
                  FURNITURE
                </a>
              </li>
              <li>
                <a href="/collections/leftsidebar?category=BEAUTY">
                  <Media src="/images/layout-1/nav-img/06.png" alt="category-product" className="img-fluid" />
                  BEAUTY
                </a>
              </li>
              <li>
                <a href="/collections/leftsidebar?category=VEGETABLES">
                  <Media src="/images/layout-1/nav-img/07.png" alt="category-product" className="img-fluid" />
                  VEGETABLES
                </a>
              </li>
              <li>
                <a href="/collections/leftsidebar?category=JEWELLWEY">
                  <Media src="/images/layout-1/nav-img/08.png" alt="category-product" className="img-fluid" />
                  JEWELLWEY
                </a>
              </li>
              <li>
                <a href="/collections/leftsidebar?category=BAGS">
                  <Media src="/images/layout-1/nav-img/09.png" alt="category-product" className="img-fluid" /> BAGS
                </a>
              </li>
              <li>
                <a href="/collections/leftsidebar?category=WATCH">
                  <Media src="/images/layout-1/nav-img/10.png" alt="category-product" className="img-fluid" /> WATCH
                </a>
              </li>
              <li>
                <a href="/collections/leftsidebar?category=TOOLS">
                  <Media src="/images/layout-1/nav-img/11.png" alt="category-product" className="img-fluid" /> TOOLS
                </a>
              </li>
              <li>
                <a href="/collections/leftsidebar?category=KIDS">
                  <Media src="/images/layout-1/nav-img/12.png" alt="category-product" className="img-fluid" /> KIDS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ByCategory;
