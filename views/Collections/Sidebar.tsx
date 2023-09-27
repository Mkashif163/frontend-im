import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { NextPage } from "next";
import { Input, Label, Collapse } from "reactstrap";
import { FilterContext } from "../../helpers/filter/filter.context";
import { useRouter } from "next/router";
import { useApiData } from "helpers/data/DataContext";
import Accordion from 'react-bootstrap/Accordion';



type SideBarProps = {
  sub_cat: number;
  brand: any;
  priceRange: {
    min: number;
    max: number;
  };
};



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

  const handleSubClick = (id) => {
    setSelectedCategory(id);
    router.push(`${window.location.pathname}?sub_category=${id}`, undefined, {
      shallow: true,
    });
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
  const apiData = useApiData();

  return (
    <div className="collection-filter-block creative-card creative-inner category-side">
      {/* <!-- brand filter start --> */}
      <div className="collection-mobile-back">
        <span className="filter-back" onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}>
          <i className="fa fa-angle-left" aria-hidden="true"></i> back
        </span>
      </div>
      {/* <!-- price filter start here --> */}
      <div className="collection-collapse-block open">
        <h3 className="collapse-block-title mt-0" onClick={toggleCategory}>
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
                        <Accordion.Header>{category.name}</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            {category.sub_categories.map((subCategory) => (
                              <div className={`p-2 ${subCategory.id === sub_cat ? "active" : ""}`} onClick={() => handleSubClick(subCategory.id)}>
                                <li className="font-weight-bold">{subCategory.name}</li>
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
        <h3 className="collapse-block-title mt-0" onClick={toggleBrand}>
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

      {/* <!-- color filter start here --> */}
      <div className="collection-collapse-block open">
        <h3 className="collapse-block-title" onClick={toggleColor}>
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
                    style={{ backgroundColor: color.value }}
                  >
                    {/* {color.name} */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Collapse>
      </div>
      {/* <!-- price filter start here --> */}
      <div className="collection-collapse-block border-0 open">
        <h3 className="collapse-block-title" onClick={togglePrice}>
          Price Range
        </h3>
        <Collapse isOpen={isPriceOpen}>
          <div className="collection-collapse-block-content">
            <div className="collection-brand-filter">
              <input
                type="range"
                min={priceRange.min}
                max={priceRange.max}
                step="10"
                value={selectedPrice.max}
                onChange={(e) => {
                  setSelectedPrice({ min: selectedPrice.min, max: parseInt(e.target.value) });
                }}
                className="custom-range"
              />


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

export default Sidebar;
