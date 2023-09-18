import React, { useState, CSSProperties } from 'react';

interface CustomDropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const dropdownStyle: CSSProperties = {
    position: 'relative',
  };

  const toggleButtonStyle: CSSProperties = {
    backgroundColor: '#fff',
    padding: '10px',
    cursor: 'pointer',
    border: 'none',
  };

  const menuStyle: CSSProperties = {
    display: isOpen ? 'block' : 'none',
    position: 'relative',
    top: '100%',
    left: '0',
    margin: '0',
    padding: '0',
    textDecoration:'none',
    textDecorationColor: '#f8f8f8',
  };

  const menuItemStyle: CSSProperties = {
    padding: '10px',
    cursor: 'pointer',
  };

  const menuItemHoverStyle: CSSProperties = {
    backgroundColor: '#f8f8f8',
  };

  const getFlagIconWithLink = (option: string) => {
    switch (option) {
      case 'INDUSTRY MALL(Pvt)Ltd':
        return (
          <a href="#" style={{ fontSize: '10px', color: 'gray' }}>
            INDUSTRY MALL(Pvt)Ltd 
            <img src="/images/icon/pakistan_flag_labels_03_64.png" width="30px" alt="Flag" />
          </a>
        );
      case 'INDUSTRY MALL LLC':
        return (
          <a href="#" style={{ fontSize: '10px' , color: 'gray', }}>
            INDUSTRY MALL LLC
            <img src="/images/icon/united_states_of_america_square_icon_64.png" width="30px" alt="Flag" />
          </a>
        );
      case 'INDUSTRY MALL WLL':
        return (
          <a href="#" style={{ fontSize: '10px'  , color: 'gray',}}>
            INDUSTRY MALL WLL
            <img src="/images/icon/united_arab_emirates_rectangular_icon_with_shadow_64.png" width="30px" alt="Flag" />
          </a>
        );
      default:
        return '';
    }
  };

  return (
    <div style={dropdownStyle}>
      <button className="fw-bold" style={toggleButtonStyle} onClick={toggleDropdown}>
        {selectedOption || 'INDUSTRY MALL (Pvt.) Ltd'}
      </button>
      {isOpen && (
        <div style={menuStyle}>
          {options?.map((option) => (
            <div
              key={option}
              style={{ ...menuItemStyle, ...(selectedOption === option ? menuItemHoverStyle : {}) }}
              onClick={() => handleOptionClick(option)}
            >
              {getFlagIconWithLink(option)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
