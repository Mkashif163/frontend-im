import React, { useContext } from "react";
import { NextPage } from "next";
import MenuBar from "../Header/widgets/menu-bar";
import { MenuContext } from "../../../helpers/menu/MenuContext";

const VerticalMenu: NextPage = () => {
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
      <nav id="main-nav">
        <ul id="main-menu" className={`sm pixelstrap desc-horizontal sm-vertical sm-blue ${menuResponsive ? "menu-open" : ""}`}>
          <li>
            <div
              className="desc-back text-right"
              onClick={() => {
                setMenuResponsive(false);
                document.body.style.overflow = "visible";
              }}>
              Back<i className="fa fa-angle-right ps-2" aria-hidden="true"></i>
            </div>
          </li>
          <MenuBar />
        </ul>
      </nav>
    </>
  );
};

export default VerticalMenu;
