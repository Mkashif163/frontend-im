import React, { useState, Fragment } from "react";
import { NextPage } from "next";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { Input, Label, Collapse } from "reactstrap";
import { FilterContext } from "helpers/filter/filter.context";

const GET_BRANDS = gql`
  query getAllBrands {
    getBrands {
      brand
    }
    getColors {
      colors
    }
  }
`;

const SidebarPopupPage: NextPage = () => {
  const { sidebarpopup, setSidebarpopup } = React.useContext(FilterContext);
  var { loading, data } = useQuery(GET_BRANDS);
  const [selectedColor, setSelectedColor] = useState("");
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const toggleBrand = () => setIsBrandOpen(!isBrandOpen);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const toggleColor = () => setIsColorOpen(!isColorOpen);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const togglePrice = () => setIsPriceOpen(!isPriceOpen);

  return (
    <Fragment>
      <div className="collection-filter category-side category-page-side">
        {/* <!-- side-bar colleps block stat --> */}
        <div className="collection-filter-block creative-card creative-inner">
          {/* <!-- mobile back --> */}
          <div className="collection-mobile-back">
            <span className="filter-back" onClick={() => setSidebarpopup(!sidebarpopup)}>
              <i className="fa fa-angle-left" aria-hidden="true"></i> back
            </span>
          </div>
          {/* <!-- brand filter start --> */}
          <div className="collection-collapse-block open">
            <h3 className="collapse-block-title mt-0" onClick={toggleBrand}>
              brand
            </h3>
            <Collapse isOpen={isBrandOpen}>
              <div className="collection-collapse-block-content">
                <div className="collection-brand-filter">
                  {!data || !data.getBrands || data.getBrands.brand.length === 0 || loading ? (
                    <h4>Loading</h4>
                  ) : (
                    data.getBrands.brand.map((brand: string, i: number) => (
                      <div className="custom-control custom-checkbox collection-filter-checkbox" key={`brand-${i}`}>
                        <Input type="checkbox" className="custom-control-input" id="zara" />
                        <label className="custom-control-label">{brand}</label>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </Collapse>
          </div>
          {/* <!-- color filter start here --> */}
          <div className="collection-collapse-block open">
            <h3 className="collapse-block-title" onClick={toggleColor}>
              colors
            </h3>
            <Collapse isOpen={isColorOpen}>
              <div className="collection-collapse-block-content">
                <div className="color-selector">
                  <ul>
                    {!data || !data.getBrands || data.getBrands.brand.length === 0 || loading ? (
                      <h4>Loading</h4>
                    ) : (
                      data.getColors.colors.map((color: string, i: number) => (
                        <li className={`${color} ${selectedColor === color ? "active" : ""}`} onClick={() => setSelectedColor(color)} key={i}></li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </Collapse>
          </div>
          {/* <!-- price filter start here --> */}
          <div className="collection-collapse-block border-0 open">
            <h3 className="collapse-block-title" onClick={togglePrice}>
              price
            </h3>
            <Collapse isOpen={isPriceOpen}>
              <div className="collection-collapse-block-content">
                <div className="collection-brand-filter">
                  <div className="custom-control custom-checkbox collection-filter-checkbox">
                    <Input type="radio" name="price-filter" className="custom-control-input" id="hundred" />
                    <Label className="custom-control-label">$0 - $100</Label>
                  </div>
                  <div className="custom-control custom-checkbox collection-filter-checkbox">
                    <Input type="radio" name="price-filter" className="custom-control-input" id="twohundred" />
                    <Label className="custom-control-label">$100 - $200</Label>
                  </div>
                  <div className="custom-control custom-checkbox collection-filter-checkbox">
                    <Input type="radio" name="price-filter" className="custom-control-input" id="threehundred" />
                    <Label className="custom-control-label">$200 - $300</Label>
                  </div>
                  <div className="custom-control custom-checkbox collection-filter-checkbox">
                    <Input type="radio" name="price-filter" className="custom-control-input" id="fourhundred" />
                    <Label className="custom-control-label">$300 - $400</Label>
                  </div>
                  <div className="custom-control custom-checkbox collection-filter-checkbox">
                    <Input type="radio" name="price-filter" className="custom-control-input" id="fourhundredabove" />
                    <Label className="custom-control-label">$400 above</Label>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SidebarPopupPage;
