import axios from 'axios';
import { NextPage } from 'next';
import Layout1 from 'views/layouts/layout1';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  Collapse,
  Row,
  Col,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { useApiData } from "helpers/data/DataContext";

// Define the interface for the API response
interface TermCondition {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

// Define the interface for the API response containing terms and conditions
interface TermsCon {
  terms_and_conditions: TermCondition[];
}

const LeftSidebar: NextPage = () => {
  const [termsAndConditions, setTermsAndConditions] = useState<TermCondition[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentComponent, setCurrentComponent] = useState<string>('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Assuming useApiData provides the data from your API
  const apiData = useApiData() as TermsCon;

  useEffect(() => {
    // Make an API request to fetch data
    axios.get('http://18.235.14.45/api/homeapi')
      .then((response) => {
        const apiData = response.data as TermsCon;
        setTermsAndConditions(apiData.terms_and_conditions);
      })
      .catch((error) => {
        console.error('API request failed:', error);
      });
  }, []);
  let filteredTerms: TermCondition[] = [];

  if (currentComponent === 'For Seller') {
    filteredTerms = termsAndConditions.filter(
        (term) => term.id >= 11 && term.id <= 15
    );
  } 
  if(currentComponent === 'For Buyer') {
    filteredTerms = termsAndConditions.filter(
        (term) => term.id >= 16 && term.id <= 20
    );
  } 
  if(currentComponent === 'CUSTOMER SERVICES') {
    filteredTerms = termsAndConditions.filter(
        (term) => term.id >= 11 && term.id <= 15
    );
  } 
  if(currentComponent === 'DISPUTE & RESOLUTION') {
    filteredTerms = termsAndConditions.filter(
        (term) => term.id >= 25 && term.id <= 29
    );
  } 
  if(currentComponent === 'SUPPORT') {
    filteredTerms = termsAndConditions.filter(
        (term) => term.id >= 30 && term.id <= 33
    );
  } 
  if(currentComponent === 'CONTACT US') {
    filteredTerms = termsAndConditions.filter(
        (term) => term.id >= 34 && term.id <= 37
    );
  } 
  if(currentComponent === 'OUR KEY FEATURES') {
    filteredTerms = termsAndConditions.filter(
        (term) => term.id >= 38 && term.id <= 42
    );
  } 
  if(currentComponent === 'MEMBER SIGNING UP') {
    filteredTerms = termsAndConditions.filter(
        (term) => term.id >= 43 && term.id <= 47
    );
  }
  if(currentComponent === 'ADVERTISEMENTS') {
    filteredTerms = termsAndConditions.filter(
        (term) => term.id >= 48 && term.id <= 51
    );
  }  
  if(currentComponent === 'INFORMATION') {
    filteredTerms = termsAndConditions.filter(
        (term) => term.id >= 52 && term.id <= 55
    );
  } 
  if(currentComponent === 'PAYMENT METHODS') {
    filteredTerms = termsAndConditions.filter(
        (term) => term.id >= 56 && term.id <= 59
    );
  } 
  return (
    <Layout1>
    <section className="section-big-py-space bg-light">
      <div className="custom-container">
        <Row>
          <Col lg="2" className="m-0 p-0">
            <div
              className="account-sidebar"
              onClick={() => {
                setIsOpen(true);
                setCurrentComponent('FOR SELLER');
                setExpandedId(null);
              }}
            >
              <a className="popup-btn">FOR SELLER</a>
            </div>
            <div
              className={`dashboard-left`}
              style={{
                left: isOpen ? '0px' : '',
              }}
            > 
              <div className="block-content">
                <ul>
                <li
className={
  currentComponent === 'FOR SELLER'
    ? 'active'
    : ''
}
onClick={() => {
  setCurrentComponent('FOR SELLER');
  setExpandedId(null);
}}
>
<a href="#">FOR SELLER</a>
</li>

                  <li
                    className={
                      currentComponent === 'FOR BUYER' ? 'active' : ''
                    }
                    onClick={() => {
                      setCurrentComponent('FOR BUYER');
                      setExpandedId(null); 
                    }}
                  >
                    <a href="#">FOR BUYER</a>
                  </li>
                  <li
                    className={currentComponent === 'CUSTOMER SERVICES' ? 'active' : ''}
                    onClick={() => {
                      setCurrentComponent('CUSTOMER SERVICES');
                      setExpandedId(null);
                    }}
                  >
                    <a href="#">CUSTOMER SERVICES</a>
                  </li>
                  <li
                    className={
                      currentComponent === 'DISPUTE&RESOLUTION' ? 'active' : ''
                    }
                    onClick={() => {
                      setCurrentComponent('DISPUTE&RESOLUTION');
                      setExpandedId(null);
                    }}
                  >
                    <a href="#">DISPUTE&RESOLUTION</a>
                  </li>
                  <li
                    className={
                      currentComponent === 'SUPPORT' ? 'active' : ''
                    }
                    onClick={() => {
                      setCurrentComponent('SUPPORT');
                      setExpandedId(null);
                    }}
                  >
                    <a href="#">SUPPORT</a>
                  </li>
                  <li
                    className={
                      currentComponent === 'CONTACT US' ? 'active' : ''
                    }
                    onClick={() => {
                      setCurrentComponent('CONTACT US');
                      setExpandedId(null);
                    }}
                  >
                    <a href="#">CONTACT US</a>
                  </li>
                  <li
                    className={
                      currentComponent === 'OUR KEY FEATURES' ? 'active' : ''
                    }
                    onClick={() => {
                      setCurrentComponent('OUR KEY FEATURES');
                      setExpandedId(null);
                    }}
                  >
                    <a href="#">OUR KEY FEATURES</a>
                  </li>
                  <li
                    className={currentComponent === 'MEMBER SIGNING UP' ? 'active' : ''}
                    onClick={() => {
                      setCurrentComponent('MEMBER SIGNING UP');
                      setExpandedId(null);
                    }}
                  >
                    <a href="#">MEMBER SIGNING UP</a>
                  </li>
                  <li
                    className={
                      currentComponent === 'ADVERTISEMENTS' ? 'active' : ''
                    }
                    onClick={() => {
                      setCurrentComponent('ADVERTISEMENTS');
                      setExpandedId(null);
                    }}
                  >
                    <a href="#">ADVERTISEMENTS</a>
                  </li>
                  <li
                    className={
                      currentComponent === 'INFORMATION' ? 'active' : ''
                    }
                    onClick={() => {
                      setCurrentComponent('INFORMATION');
                      setExpandedId(null);
                    }}
                  >
                    <a href="#">INFORMATION</a>
                  </li>
                  <li
                    className={
                      currentComponent === 'PAYMENT METHOD' ? 'active' : ''
                    }
                    onClick={() => {
                      setCurrentComponent('PAYMENT METHOD');
                      setExpandedId(null);
                    }}
                  >
                    <a href="#">PAYMENT METHOD</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="10">
<div className="dashboard-right">
  {filteredTerms.length > 0 ? (
    <div className="accordion" id="accordionExample">
      {filteredTerms.slice(0, 3).map((term) => (
        <div key={term.id} style={{ marginBottom: '20px' }}>
          <Card>
            <CardHeader
              onClick={() => {
                if (expandedId === term.id) {
                  setExpandedId(null);
                } else {
                  setExpandedId(term.id);
                }
              }}
            >
              <strong>
                <span className="text-black" style={{ textAlign: 'left', float: 'left' }}>
                  {term.title}
                </span>
              </strong>
              <div style={{ width: '200%', display: 'block' }}>
                <FontAwesomeIcon
                  icon={expandedId === term.id ? faCaretUp : faCaretDown}
                  className="dropdown-icon text-dark"
                  style={{ float: 'right' }}
                />
              </div>
            </CardHeader>
            <Collapse
              isOpen={expandedId === term.id}
              id={`collapse${term.id}`}
              aria-labelledby={`heading${term.id}`}
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p>{term.description}</p>
              </div>
            </Collapse>
          </Card>
        </div>
      ))}
    </div>
  ) : (
    <div>No filtered terms available.</div>
  )}
</div>
</Col>

        </Row>
      </div>
    </section>
  </Layout1>
  );
};

export default LeftSidebar;
