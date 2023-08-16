import React, { useContext } from "react";
import { NextPage } from "next";
import MenuBar from "../Header/widgets/menu-bar";
import { MenuContext } from "helpers/menu/MenuContext";

const HorizaontalMenu: NextPage = () => {
  const menuContext = useContext(MenuContext);
  const { menuResponsive, setMenuResponsive } = menuContext;
  return (
    <>
      <div
        className={`menu-overlay ${menuResponsive ? "active" : ""}`}
        onClick={() => {
          setMenuResponsive(!menuResponsive);
          document.body.style.overflow = "visible";
        }}></div>
      <div className="menu-block">
        <nav id="main-nav">
          <div
            className="toggle-nav"
            onClick={() => {
              setMenuResponsive(!menuResponsive);
              document.body.style.overflow = "hidden";
            }}>
            <i className="fa fa-bars sidebar-bar"></i>
          </div>
          <ul id="main-menu" className={`sm pixelstrap sm-horizontal ${menuResponsive ? "menu-open" : ""}`}>
            <MenuBar />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HorizaontalMenu;
