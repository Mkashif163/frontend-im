import React, { useContext, useState } from "react";
import { NextPage } from "next";
// import { Media } from "reactstrap";
import { useTranslation } from "react-i18next";
import { MenuContext } from "helpers/menu/MenuContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding , faShip, faGear ,faScrewdriverWrench ,} from '@fortawesome/free-solid-svg-icons'


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
                <div className="catogory-main-items">
                  {/* <Media src="https://static.thenounproject.com/png/2327734-200.png" alt="category-product" className="img-fluid w-10" /> */}
                  <FontAwesomeIcon icon={faBuilding} size="lg"/>
                  Programmable Controlers
                </div>
              </li>
              <li>
                <div className="catogory-main-items">
                  {/* <Media src="/images/layout-1/nav-img/01.png" alt="category-product" className="img-fluid" /> */}
                  <FontAwesomeIcon icon={faShip} size="lg"/>
                  Drives
                </div>
              </li>
              <li>
                <div className="catogory-main-items">
                  {/* <Media src="/images/layout-1/nav-img/01.png" alt="category-product" className="img-fluid" /> */}
                  <FontAwesomeIcon icon={faGear} size="lg"/>
                  Industrial Solutions
                </div>
              </li>
              <li>
                <div className="catogory-main-items">
                  {/* <Media src="/images/layout-1/nav-img/01.png" alt="category-product" className="img-fluid" /> */}
                  <FontAwesomeIcon icon={faScrewdriverWrench} size="lg"/>
                  Electric & Mechanical
                </div>
              </li>
              <li>
                <div className="catogory-main-items">
                  {/* <Media src="/images/layout-1/nav-img/01.png" alt="category-product" className="img-fluid" /> */}
                  <FontAwesomeIcon icon={faBuilding} size="lg"/>
                  Industrial Lights & Valves
                </div>
              </li>
              <li>
                <div className="catogory-main-items">
                  {/* <Media src="/images/layout-1/nav-img/01.png" alt="category-product" className="img-fluid" /> */}
                  <FontAwesomeIcon icon={faBuilding} size="lg"/>
                  Refurbished
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ByCategory;
