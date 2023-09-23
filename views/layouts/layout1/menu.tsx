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
      <div className="custom-menus mb-3">
        <div className="custom-input-group-text">
          <h4>Our Menu & Categories</h4>
        </div>
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
  );
};

export default Menu;