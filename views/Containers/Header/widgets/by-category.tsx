import React, { useContext, useEffect, useState } from "react";
import { NextPage } from "next";
import { useTranslation } from "react-i18next";
import { MenuContext } from "helpers/menu/MenuContext";

interface byCategory {
  category: [];
}
const ByCategory: NextPage<byCategory> = ({ category }) => {
  const [showState, setShowState] = useState(category || false);
  const [categoryData, setCategoryData] = useState([]);
  const { t } = useTranslation();
  const menuContext = useContext(MenuContext);
  const { leftMenu, setLeftMenu } = menuContext;

  useEffect(() => {
    fetch("http://18.234.66.77/api/menus")
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, []);

  const [subCategories, setSubCategories] = useState({});

  // Function to fetch subcategories for a category
  const fetchSubCategories = async (menuId) => {
    const response = await fetch(`http://18.234.66.77/api/categories/${menuId}`);
    const data = await response.json();
    setSubCategories(prev => ({ ...prev, [menuId]: data.data }));
  }

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
              <li className="back-btn" onClick={() => {
                setLeftMenu(!leftMenu);
                document.body.style.overflow = "visible";
              }}>
                <a>
                  <i className="fa fa-angle-left"></i>Back
                </a>
              </li>
              {categoryData.map((category) => (
                <li
                  key={category.id}
                  onMouseEnter={() => fetchSubCategories(category.id)}
                  onMouseLeave={() => setSubCategories({ ...subCategories, [category.id]: [] })} // Hide subcategories on mouse leave
                >
                  <a href={`/collections/leftsidebar?category=${category.name}`}>
                    <span>{category.name}</span>
                  </a>
                  {/* Subcategories show karega agar woh fetch hui hain */}
                  {subCategories[category.id] &&
                    <ul className="text-primary">
                      {subCategories[category.id].map(sub => (
                        <li key={sub.id}>
                          <a href={`/collections/leftsidebar?subCategory=${sub.name}`}>
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ByCategory;
