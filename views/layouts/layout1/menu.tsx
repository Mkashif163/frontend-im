import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Carousel from "react-bootstrap/Carousel";
import { Media } from "reactstrap";
import { useRouter } from "next/router";

type MenuProps = {
  meneData: any;
};

const Menu = ({ meneData }: MenuProps) => {
  const router = useRouter();
  const [menuData, setMenuData] = useState([]);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [banners, setBanners] = useState([]);

  const handleMouseEnter = (index) => {
    setOpenMenuIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenMenuIndex(null);
  };

  function transformImageUrl(apiImageUrl) {
    return `http://18.235.14.45${apiImageUrl.replace(/ /g, "%20")}`;
  }

  const handleClick = (id) => (e) => {
    e.preventDefault();
    window.location.href = `/collections/leftsidebar?sub_category=${id}`;
  };

  useEffect(() => {
    setMenuData(meneData.menus);
    setBanners(meneData.banners);
  }, []);

  return (
    <div className="container">
      <div className="row pb-4 pb-md-0">
        <div className="col-md-4 pb-4">
          <div className="custom-menus mb-3" onMouseLeave={handleMouseLeave}>
            <div className="custom-input-group-text">
              <h4>Our Menu & Categories</h4>
            </div>
            {Object.keys(menuData).map((menuKey, index) => (
              <Dropdown
                key={index}
                drop="end"
                show={openMenuIndex === index}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <Dropdown.Toggle
                  id={`menu-dropdown-${index}`}
                  className="custom-toggle-button"
                >
                  {menuData[menuKey].menu_name}
                </Dropdown.Toggle>
                <Dropdown.Menu className="side-menu-box">
                  {menuData[menuKey].categories?.map(
                    (category, categoryIndex) => (
                      <div
                        className="custom-side-menu-category"
                        key={categoryIndex}
                      >
                        <Dropdown.Item href={category.link}>
                          <h5>{category.name}</h5>
                        </Dropdown.Item>
                        {category.sub_categories?.map(
                          (subcategory, subcategoryIndex) => (
                            <Dropdown.Item
                              key={subcategoryIndex}
                              href={subcategory.link}
                              onClick={handleClick(subcategory.id)}
                            >
                              {subcategory.name}
                            </Dropdown.Item>
                          )
                        )}
                      </div>
                    )
                  )}
                </Dropdown.Menu>
              </Dropdown>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <Carousel>
            {banners.map((banner, index) => (
              <Carousel.Item key={index}>
                <Media
                  className="d-block w-100"
                  src={transformImageUrl(banner.image)}
                  alt={`Banner ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-2">
          <Media
            className="d-block w-100 b-img h-100"
            src="/images/layout-2/slider/nextimg.jpeg"
            alt="Banner 1"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
