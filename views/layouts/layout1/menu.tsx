import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Menu = () => {
  const [menuData, setMenuData] = useState([]);

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
      <div className="custom-menus bg-white mb-3">
        <span className="custom-input-group-text">
          <span className="fw-bold m-2">
            <FontAwesomeIcon icon={faBars} size="xl" /> <span> <h4>Our Menu & Categories</h4></span> 
          </span>
        </span>
        {Object.keys(menuData).map((menuKey, index) => (
          <DropdownButton
            key={index}
            drop="end"
            className='custom-dropdown-menu'
            title={
              <div className="custom-text-black">
                <div>
                  {menuData[menuKey].menu_name.substring(0, 23)}
                  {menuData[menuKey].menu_name.length > 25 ? '...' : ''}
                </div>
              </div>
            }
          >
            {menuData[menuKey].categories?.map((category, categoryIndex) => (
              <div key={categoryIndex} className="custom-side-menu-category">
                <Dropdown.Header className="custom-dropdown-menu-heading">
                  {category.name}
                </Dropdown.Header>
                {category.sub_categories?.map((subcategory, subcategoryIndex) => (
                  <Dropdown.Item key={subcategoryIndex} href={subcategory.link}>
                    {subcategory.name}
                  </Dropdown.Item>
                ))}
              </div>
            ))}
          </DropdownButton>
        ))}
      </div>
    </div>
  );
};

export default Menu;