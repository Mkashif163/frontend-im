import React, { useContext, useState } from "react";
import { NextPage } from "next";
import { Collapse } from "reactstrap";
import { FilterContext } from "helpers/filter/filter.context";

const Sidebar: NextPage = () => {
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const toggleBrand = () => setIsBrandOpen(!isBrandOpen);
  const filterContext = useContext(FilterContext);
  const { setFilterOpen, filterOpen } = filterContext;

  return (
    <div className="collection-filter-block creative-card creative-inner">
      <div className="collection-mobile-back">
        <span className="filter-back" onClick={() => setFilterOpen(!filterOpen)}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
          back
        </span>
      </div>
      <div className="collection-collapse-block border-0 open">
        <h3 className="collapse-block-title" onClick={toggleBrand}>
          brand
        </h3>
        <Collapse isOpen={isBrandOpen}>
          <div className="collection-collapse-block-content">
            <div className="collection-brand-filter">
              <ul className="category-list">
                <li>
                  <a href="#">clothing</a>
                </li>
                <li>
                  <a href="#">bags</a>
                </li>
                <li>
                  <a href="#">footwear</a>
                </li>
                <li>
                  <a href="#">watches</a>
                </li>
                <li>
                  <a href="#">accessories</a>
                </li>
              </ul>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Sidebar;
