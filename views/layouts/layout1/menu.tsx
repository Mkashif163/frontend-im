import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Carousel from 'react-bootstrap/Carousel';
import { Media } from 'reactstrap';


type MenuProps = {
  meneData: any;
};

const Menu = ({ meneData }: MenuProps) => {
  const [menuData, setMenuData] = useState([]);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [banners , setBanners] = useState([])

  const handleMouseEnter = (index) => {
    setOpenMenuIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenMenuIndex(null);
  };

  function transformImageUrl(apiImageUrl) {
    return `http://18.235.14.45${apiImageUrl.replace(/ /g, '%20')}`;
  }
  

  useEffect(() => {
    setMenuData(meneData.menus);
    setBanners(meneData.banners);
  }, []);

  return (
    <div className="custom-container">
      <div className='d-flex gap-3'>
        <div className=''>
          <div className="custom-menus mb-3" onMouseLeave={handleMouseLeave}>
            <div className="custom-input-group-text">
              <h4>Our Menu & Categories</h4>
            </div>
            {Object.keys(menuData).map((menuKey, index) => (
              <DropdownButton
                key={index}
                drop="end"
                className='custom-dropdown-menu'
                show={openMenuIndex === index} // Control the visibility of the dropdown menu for this menu item
                title={
                  <div
                    className="custom-text-black"
                    onMouseEnter={() => handleMouseEnter(index)} // Set the index when mouse enters
                  >
                    <div>
                      {menuData[menuKey].menu_name.substring(0, 23)}
                      {menuData[menuKey].menu_name.length > 25 ? '...' : ''}
                    </div>
                  </div>
                }
              >
                <div className='side-menu-box'>
                  {menuData[menuKey].categories?.map((category, categoryIndex) => (
                    <div className="custom-side-menu-category">
                      <Dropdown.Item key={categoryIndex} href={category.link}>
                        <h5>{category.name}</h5>
                      </Dropdown.Item>
                      {category.sub_categories?.map((subcategory, subcategoryIndex) => (
                        <Dropdown.Item key={subcategoryIndex} href={subcategory.link}>
                          {subcategory.name}
                        </Dropdown.Item>
                      ))}
                    </div>
                  ))}
                </div>
              </DropdownButton>
            ))}
          </div>
        </div>
        <div className='slider-top w-50'>
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
        <div className='menu-banners'>
          <Media
            className="d-block w-100 b-img"
            src='/images/layout-2/slider/nextimg.jpeg'
            alt="Banner 1"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;