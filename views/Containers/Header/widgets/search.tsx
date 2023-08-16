import React, { useState } from "react";
import { NextPage } from "next";
import { Input, DropdownToggle, DropdownMenu, InputGroupText, DropdownItem, InputGroup, ButtonDropdown } from "reactstrap";
import { useTranslation } from "react-i18next";

const Search: NextPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  const { t } = useTranslation();

  return (
    <div className="input-block">
      <div className="input-box">
        <form className="big-deal-form">
          <InputGroup>
            <InputGroupText>
              <span className="search">
                <i
                  className="fa 
                       fa-search"></i>
              </span>
            </InputGroupText>
            <Input />
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
              <DropdownToggle key={"search-menu-toggle"} caret>
                {t("All Category")}
              </DropdownToggle>
              <DropdownMenu key={"search-menu"}>
                <DropdownItem>All Category</DropdownItem>
                <DropdownItem>indurstrial</DropdownItem>
                <DropdownItem>sports</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </InputGroup>
        </form>
      </div>
    </div>
  );
};

export default Search;
