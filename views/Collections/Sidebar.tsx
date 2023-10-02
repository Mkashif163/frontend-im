import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { NextPage } from "next";
import { Input, Label, Collapse } from "reactstrap";
import { FilterContext } from "../../helpers/filter/filter.context";
import { useRouter } from "next/router";
import { useApiData } from "helpers/data/DataContext";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Accordion from 'react-bootstrap/Accordion';

type SideBarProps = {
  sub_cat: number;
  brand: any;
  priceRange: {
    min: number;
    max: number;
  };
};

interface ApiData {
  menus: {
    [menuName: string]: {
      categories: {
        id: number;
        name: string;
        sub_categories: {
          id: number;
          name: string;
          products: any[]; // Define the type for products
        }[];
      }[];
    };
  };
  // Add other properties if needed
}

const colors = [
  { id: '1', name: 'Red', value: '#FF0000' },
  { id: '2', name: 'Blue', value: '#0000FF' },
  { id: '3', name: 'LightYellow', value: '#FFFFE0' },
  { id: '4', name: 'Yellow', value: '#FFFF00' },
  { id: '5', name: 'DarkGreen', value: '#006400' },
  { id: '6', name: 'White', value: '#FFFFFF' },
  { id: '7', name: 'Orange', value: '#FF6600' },
  { id: '8', name: 'Brown', value: '#964B00' },
  { id: '9', name: 'Black', value: '#000000' },
  { id: '10', name: 'Blue', value: '#007FFF' },
  { id: '11', name: 'Ivory', value: '#FFFFF0' },
  { id: '12', name: 'Purple', value: '#A020F0' },
  { id: '13', name: 'Khaki', value: '#C3B091' },
  { id: '14', name: 'Pink', value: '#FFC0CB' },
  { id: '15', name: 'Gold', value: '#FFD700' },
  { id: '16', name: 'Olive', value: '#808000' },
  { id: '17', name: 'Cyan', value: '#00FFFF' },
  { id: '18', name: 'Silver', value: '#C0C0C0' },
  { id: '19', name: 'Gray', value: '#808080' },
  { id: '20', name: 'Silver', value: '#C0C0C0' },
  { id: '21', name: 'Navy', value: '#000080' },
  { id: '22', name: 'AntiqueWhite', value: '#FAF9F6' },
];

const Sidebar: NextPage<SideBarProps> = ({ sub_cat, brand, priceRange }) => {
  const {
    handleBrands,
    selectedBrands,
    selectedColor,
    setSelectedColor,
    setSelectedPrice,
    setSelectedBrands,
    setSelectedCategory,
    selectedCategory,
    selectedPrice,
    leftSidebarOpen,
    setLeftSidebarOpen,
  } = useContext(FilterContext);

  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const toggleBrand = () => setIsBrandOpen(!isBrandOpen);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const toggleColor = () => setIsColorOpen(!isColorOpen);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const togglePrice = () => setIsPriceOpen(!isPriceOpen);
  const [radioChecked, setRadioChecked] = useState(null);
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(null); // Track the active tab

  const handleSubClick = (id) => {
    setSelectedCategory(id);
    router.push(`${window.location.pathname}?sub_category=${id}`, undefined, {
      shallow: true,
    });
    setActiveTab(id); // Set the active tab when clicked
  }

  useEffect(() => {
    const { min, max } = selectedPrice;

    if (min === 0 && max === 100) setRadioChecked(1);
    else if (min === 100 && max === 200) setRadioChecked(2);
    else if (min === 200 && max === 300) setRadioChecked(3);
    else if (min === 300 && max === 400) setRadioChecked(4);
    else if (min === 400) setRadioChecked(5);
    else setRadioChecked(null);
  }, [router.query.pricemin, selectedPrice]);

  const resetFilter = () => {
    setSelectedBrands([]);
    setSelectedColor("");
    setSelectedPrice({ min: 0, max: 500 });
    setRadioChecked(null);
  };

  const apiData = useApiData() as ApiData;

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setSelectedPrice({ min: newValue[0], max: newValue[1] });
};

const valueText = (value: number) => `$${value}`;

  return (
    <div className="collection-filter-block creative-card creative-inner category-side">
      {/* brand filter start */}
      <div className="collection-mobile-back">
        <span className="filter-back" onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}>
          <i className="fa fa-angle-left" aria-hidden="true"></i> back
        </span>
      </div>
      {/* price filter start here */}
      <div className="collection-collapse-block open">
        <h3 className="collapse-block-title mt-0" onClick={toggleCategory} style={styles.toggleTitle}>
          Our Menu & Categories
        </h3>
        <Accordion defaultActiveKey="0" flush>
          {apiData &&
            Object.entries(apiData.menus).map(([menuName, menu], menuIndex) => (
              <Accordion.Item key={menuName} eventKey={menuIndex.toString()}>
                <Accordion.Header>{menuName}</Accordion.Header>
                <Accordion.Body>
                  <Accordion defaultActiveKey="0" flush>
                    {menu.categories.map((category) => (
                      <Accordion.Item key={category.id} eventKey={category.id.toString()}>
                        <Accordion.Header onClick={() => {
                           router.push(`${window.location.pathname}?category=${category.id}`, undefined, {
                            shallow: true,
                          });
                        }}>{category.name}</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            {category.sub_categories.map((subCategory) => (
                              <div
                                className={`p-2 ${subCategory.id === activeTab ? "active" : ""}`}
                                onClick={() => handleSubClick(subCategory.id)}
                                style={subCategory.id === activeTab ? styles.activeLi : styles.li}
                              >
                                <li className={`font-weight-bold ${subCategory.id === activeTab ? "active" : ""}`}>
                                  {subCategory.name}
                                </li>
                              </div>
                            ))}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>
            ))}
        </Accordion>
      </div>

      <div className="collection-collapse-block open">
        <h3 className="collapse-block-title mt-0" onClick={toggleBrand} style={styles.toggleTitle}>
          brand
        </h3>
        <Collapse isOpen={isBrandOpen}>
          <div className="collection-collapse-block-content">
            <div className="collection-brand-filter">
              {brand.map((brand) => (
                <div
                  className="custom-control custom-checkbox collection-filter-checkbox"
                  key={brand.id}
                >
                  <Input
                    checked={selectedBrands.includes(brand.brand_name)}
                    onChange={() => {
                      handleBrands(brand.brand_name);
                    }}
                    type="checkbox"
                    className="custom-control-input"
                    id={brand.id}
                  />
                  <label className="custom-control-label">{brand.brand_name}</label>
                </div>
              ))}
            </div>
          </div>
        </Collapse>
      </div>

      {/* color filter start here */}
      <div className="collection-collapse-block open">
        <h3 className="collapse-block-title" onClick={toggleColor} style={styles.toggleTitle}>
          Colors
        </h3>
        <Collapse isOpen={isColorOpen}>
          <div className="collection-collapse-block-content">
            <div className="color-selector">
              <ul>
                {colors.map((color) => (
                  <li
                    key={color.id}
                    className={`color-swatch ${selectedColor === color.value ? "active" : ""}`}
                    onClick={() => setSelectedColor(color.value)}
                    style={{
                      backgroundColor: color.value,
                      ...styles.colorLi,
                    }}
                  >
                    {/* {color.name} */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Collapse>
      </div>
      {/* price filter start here */}
      <div className="collection-collapse-block border-0 open">
        <h3 className="collapse-block-title" onClick={togglePrice} style={styles.toggleTitle}>
          Price Range
        </h3>
        <Collapse isOpen={isPriceOpen}>
          <div className="collection-collapse-block-content">
            <div className="collection-brand-filter">
                <Box sx={{ width: 300 }}>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={[selectedPrice.min, selectedPrice.max]}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valueText}
                        min={priceRange.min}
                        max={priceRange.max}
                        step={10}
                    />
                </Box>

                <p className="mb-0">
                    Price Range: ${selectedPrice.min} - ${selectedPrice.max}
                </p>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

const styles = {
  toggleTitle: {
    cursor: "pointer",
  },
  activeLi: {
    backgroundColor: "#007bff",
    color: "#fff",
  },
  li: {
    backgroundColor: "#fff", // Change to your preferred background color
    color: "#000", // Change to your preferred text color
    cursor: "pointer",
  },
  colorLi: {
    cursor: "pointer",
  },
};

export default Sidebar;
