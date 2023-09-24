import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
import { Media } from 'reactstrap';

const banners = [
  {
    img1: "/images/layout-2/slider/s1.jpg",
  },
  {
    img1: "/images/layout-2/slider/s2.jpg",
  },
  {
    img1: "/images/layout-2/slider/s3.jpg",
  },
  {
    img1: "/images/layout-2/slider/s4.jpg",
  },
  {
    img1: "/images/layout-2/slider/s5.jpg",
  },
];

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenMenuIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenMenuIndex(null);
  };

  useEffect(() => {
    axios
      .get('http://18.235.14.45/api/homeapi')
      .then((response) => {
        setMenuData(response.data.menus);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
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
                  src={banner.img1}
                  alt={`Banner ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className='menu-banners'>
          <div className='m-banner'>

          </div>
          <div className='m-banner'>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;