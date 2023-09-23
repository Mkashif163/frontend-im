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
    img2: "/images/layout-2/slider/s1.jpg",
    title1: "Valves",
    title2: "Lights",
    subTitle1: "Upto 20% off", // Updated
    subTitle2: "Switchgear & Industrial Automation", // Updated
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-2/slider/s2.jpg",
    img2: "/images/layout-2/slider/s2.jpg",
    title1: "big",
    title2: "Sale",
    subTitle1: "Upto 25% off", // Updated
    subTitle2: "LED Explosion Proof Light", // Updated
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-2/slider/s3.jpg",
    img2: "/images/layout-2/slider/s3.jpg",
    title1: "camera",
    title2: "Sale",
    subTitle1: "Upto 20% off", // Updated
    subTitle2: "Electric Industrial Motors", // Updated
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-2/slider/s4.jpg",
    img2: "/images/layout-2/slider/s4.jpg",
    title1: "ALL",
    title2: "Sale",
    subTitle1: "Upto 15% off", // Updated
    subTitle2: "Industrial Valves", // Updated
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
  {
    img1: "/images/layout-2/slider/s5.jpg",
    img2: "/images/layout-2/slider/s5.jpg",
    title1: "weekend",
    title2: "Offers",
    subTitle1: "Upto 20% off (VFD)", // Updated
    subTitle2: "Energy-efficient solution", // Updated
    category: "ELECTRONICS",
    btn: "Shop Now",
  },
];

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
      <div className='d-flex gap-3'>
        <div className=''>
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
                    {/* <div>
                      <Media
                        src={menuData[menuKey].menu_image}
                        alt={menuData[menuKey].menu_name}
                        className="img-fluid"
                      />
                    </div> */}
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
                <Carousel.Caption>
                  <div className="slider-banner-contain">
                    <div className="transparent-bg">
                      <h1>
                        {banner.title1}
                        <span>{banner.title2}</span>
                      </h1>
                      <h4>{banner.subTitle1}</h4>
                      <h2>{banner.subTitle2}</h2>
                      <Link
                        href={{
                          pathname: "/collections/leftsidebar/",
                          query: {
                            category: banner.category,
                          },
                        }}>
                        <a className="btn btn-normal">{banner.btn}</a>
                      </Link>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Menu;