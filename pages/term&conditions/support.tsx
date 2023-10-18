import React, { useState } from 'react';
import Layout1 from 'views/layouts/layout1';
import { NextPage } from "next";
import { Row, Col } from "reactstrap";
import Link from "next/link";

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    'For Seller',
    'For Buyer',
    'Customer Services',
    'Dispute & Resolution',
    'Support',
    'Contact Us',
    'Our key Features',
    'Member Signing up',
    'Advertisements',
    'Information',
    'Payment Methods',
  ];

  const optionContents = [
    ['How to Become a Seller?', 'How to Post a Product?', 'How to Become a Verified Supplier?', 'How to Become a Trusted Supplier?', 'How to Give a Discount on Product?'],
    ['How to Buy?', 'How to Get Discount?', 'How to Get in Touch with Supplier?', 'We have Trusted Suppliers?', 'We have Verified Suppliers'],
    ['All Terms & Conditions', 'Member Signing up', 'Services', 'Warranty'],
    ['Payments Resolution', 'Orders Resolution', 'Shipment Resolution', 'Taxes Resolution'],
    ['Latest News', 'Registration Detail', 'Support 24/7'],
    ['Our Identities', 'Who we are?', 'Industry Mall Training Institute (IMTI)', 'Why trust on Industry Mall'],
    ['We are specific in industrial sectors.', 'Connect wholesalers | Industrials directly', 'Competitive price', 'Regular discounted price', 'User-friendly payment method'],
    ['Member’s undertakings', 'When you agreed terms & conditions', 'Agreed all rules & regulations', 'Being a member liability', 'Breach of Contract'],
    ['Buying Advertisements', 'Selling Advertisements', 'Store Exception Advertisements', 'All Advertisements'],
    ['Confidential Information', 'Personal Information', 'Confidential & Personal', 'Other declarations'],
    ['Secure Payment Integrations', 'Visa Card', 'Master Card', 'Direct Bank Transfer'],
  ];

  const toggleAccordion = (terms_and_conditions: number) => {
    if (terms_and_conditions === activeIndex) {
      setActiveIndex(null);
      setSelectedOption(null);
    } else {
      setActiveIndex(terms_and_conditions);
      setSelectedOption(options[terms_and_conditions]);
    }
  };

  const renderOptions = options.map((option, terms_and_conditions) => {
    const isActive = terms_and_conditions === activeIndex;
    return (
      <div key={terms_and_conditions} className="accordion-option">
        <div
          onClick={() => toggleAccordion(terms_and_conditions)}
          className={`accordion-title ${isActive ? 'active' : ''}`}
        >
          {option}
        </div>
        {isActive && (
          <div className="accordion-content">
            {optionContents[terms_and_conditions].map((line, lineIndex) => (
              <div key={lineIndex}>{line}</div>
            ))}
          </div>
        )}
      </div>
    );
  });

  return (
    <Layout1>
      <div className='custom-container' style={{ display: 'flex' }}>
        <div className="accordion-box" style={{ width: '240px', flexShrink: 0, alignItems: 'flex-start', cursor: 'pointer'}}>
          <span className='options'>{renderOptions}</span>
        </div>
        <div className='right-box' style={{ backgroundColor: 'lightgray', display: 'flex', width: '100%' }}>
        </div>
      </div>
    </Layout1>
  );
};

export default Accordion;
