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
}

const Sidebar: NextPage<SideBarProps> = ({ sub_cat }) => {
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

  // useEffect(() => {
  //   router.push(`${window.location.pathname}`, undefined, {
  //     shallow: true,
  //   });
  // }, [selectedCategory, selectedPrice, selectedBrands, selectedColor]);
  const handleSubClick = (id)=>{
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
                              <div className="p-2 ">
                              <li className="font-weight-bold" onClick={() => handleSubClick(subCategory.id)}>{subCategory.name}</li>
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
              {[
                "BCST",
                "ROCKWELL",
                "SUPCON",
                "TRITECH",
                "VENAS",
                "WEG",
                "WESDOM"
              ].map((brand, i) => (
                <div
                  className="custom-control custom-checkbox collection-filter-checkbox"
                  key={`brand-${i}`}
                >
                  <Input
                    checked={selectedBrands.includes(brand)}
                    onChange={() => {
                      handleBrands(brand);
                    }}
                    type="checkbox"
                    className="custom-control-input"
                    id={brand}
                  />
                  <label className="custom-control-label">{brand}</label>
                </div>
              ))}
            </div>
          </div>
        </Collapse>
      </div>
      {/* <!-- color filter start here --> */}
      {/* {!data || !data.getColors || data.getColors.colors.length === 0 || loading ? (
        loading && <h4>Loading</h4>
      ) : (
        <div className="collection-collapse-block open">
          <h3 className="collapse-block-title" onClick={toggleColor}>
            colors
          </h3>
          <Collapse isOpen={isColorOpen}>
            <div className="collection-collapse-block-content">
              <div className="color-selector">
                <ul>
                  {data.getColors.colors.map((color: string, i: number) => (
                    <li
                      className={`${color} ${selectedColor === color ? "active" : ""}`}
                      onClick={() => {
                        setSelectedColor(color);
                      }}
                      key={i}></li>
                  ))}
                </ul>
              </div>
            </div>
          </Collapse>
        </div>
      )} */}
      {/* <!-- price filter start here --> */}
      <div className="collection-collapse-block border-0 open">
        <h3 className="collapse-block-title" onClick={togglePrice}>
          price
        </h3>
        <Collapse isOpen={isPriceOpen}>
          <div className="collection-collapse-block-content">
            <div className="collection-brand-filter">
              <div className="custom-control custom-checkbox collection-filter-checkbox">
                <Input
                  onClick={() => setSelectedPrice({ min: 0, max: 100 })}
                  type="radio"
                  name="price-filter"
                  className="custom-control-input"
                  id="hundred"
                  checked={radioChecked === 1}
                  onChange={() => setRadioChecked(1)}
                />
                <Label className="custom-control-label">$0 - $100</Label>
              </div>
              <div className="custom-control custom-checkbox collection-filter-checkbox">
                <Input
                  onClick={() => setSelectedPrice({ min: 100, max: 200 })}
                  type="radio"
                  name="price-filter"
                  className="custom-control-input"
                  id="twohundred"
                  checked={radioChecked === 2}
                  onChange={() => setRadioChecked(2)}
                />
                <Label className="custom-control-label">$100 - $200</Label>
              </div>
              <div className="custom-control custom-checkbox collection-filter-checkbox">
                <Input
                  onClick={() => setSelectedPrice({ min: 200, max: 300 })}
                  type="radio"
                  name="price-filter"
                  className="custom-control-input"
                  id="threehundred"
                  checked={radioChecked === 3}
                  onChange={() => setRadioChecked(3)}
                />
                <Label className="custom-control-label">$200 - $300</Label>
              </div>
              <div className="custom-control custom-checkbox collection-filter-checkbox">
                <Input
                  onClick={() => setSelectedPrice({ min: 300, max: 400 })}
                  type="radio"
                  name="price-filter"
                  className="custom-control-input"
                  id="fourhundred"
                  checked={radioChecked === 4}
                  onChange={() => setRadioChecked(4)}
                />
                <Label className="custom-control-label">$300 - $400</Label>
              </div>
              <div className="custom-control custom-checkbox collection-filter-checkbox">
                <Input
                  onClick={() => setSelectedPrice({ min: 400, max: 1000 })}
                  type="radio"
                  name="price-filter"
                  className="custom-control-input"
                  id="fourhundredabove"
                  checked={radioChecked === 5}
                  onChange={() => setRadioChecked(5)}
                />
                <Label className="custom-control-label">$400 above</Label>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Sidebar;
