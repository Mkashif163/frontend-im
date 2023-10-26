import axios from 'axios';
import { NextPage } from 'next';
import Layout1 from 'views/layouts/layout1';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  Collapse,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { useApiData } from "helpers/data/DataContext";


interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FaqDropdown: NextPage = () => {
  const [faqData, setFaqData] = useState<FAQ[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentComponent, setCurrentComponent] = useState<string>('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://18.235.14.45/api/homeapi'
        );
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        const data = response.data;
        const termsData = data.help_center;
        setFaqData(termsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  let filteredTerms: FAQ[] = [];

  if (currentComponent === 'Awaiting Order Arrival') {
    filteredTerms = faqData.filter(
        (term) => term.id >= 1 && term.id <= 3
    );
  } 
  if(currentComponent === 'Aftersales') {
    filteredTerms = faqData.filter(
        (term) => term.id >= 4 && term.id <= 7
    );
  } if (currentComponent === 'Refund') {
    filteredTerms = faqData.filter(
        (term) => term.id >= 8 && term.id <= 10
    );
  } if (currentComponent === 'Ordering & Payment') {
    filteredTerms = faqData.filter(
        (term) => term.id >= 11 && term.id <= 20
    );
  } if (currentComponent === 'Account Management') {
    filteredTerms = faqData.filter(
        (term) => term.id >= 21 && term.id <= 25
    );
  } if (currentComponent === 'Promotions & coupons') {
    filteredTerms = faqData.filter(
        (term) => term.id >= 26 && term.id <= 28
    );
  } if (currentComponent === 'Product Management') {
    filteredTerms = faqData.filter(
        (term) => term.id >= 29 && term.id <= 31
    );
  } if (currentComponent === 'Feedback') {
    filteredTerms = faqData.filter(
        (term) => term.id >= 32 && term.id <= 33
    );
  } if (currentComponent === 'Contact Information') {
    filteredTerms = faqData.filter(
        (term) => term.id >= 34 && term.id <= 35
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
                  setCurrentComponent('Awaiting Order Arrival');
                  setExpandedId(null);
                }}
              >
                <a className="popup-btn">Awaiting Order Arrival</a>
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
    currentComponent === 'Awaiting Order Arrival'
      ? 'active'
      : ''
  }
  onClick={() => {
    setCurrentComponent('Awaiting Order Arrival');
    setExpandedId(null);
  }}
>
  <a href="#">Awaiting Order Arrival</a>
</li>

                    <li
                      className={
                        currentComponent === 'Aftersales' ? 'active' : ''
                      }
                      onClick={() => {
                        setCurrentComponent('Aftersales');
                        setExpandedId(null); 
                      }}
                    >
                      <a href="#">Aftersales</a>
                    </li>
                    <li
                      className={currentComponent === 'Refund' ? 'active' : ''}
                      onClick={() => {
                        setCurrentComponent('Refund');
                        setExpandedId(null);
                      }}
                    >
                      <a href="#">Refund</a>
                    </li>
                    <li
                      className={
                        currentComponent === 'Ordering & Payment' ? 'active' : ''
                      }
                      onClick={() => {
                        setCurrentComponent('Ordering & Payment');
                        setExpandedId(null);
                      }}
                    >
                      <a href="#">Ordering & Payment</a>
                    </li>
                    <li
                      className={
                        currentComponent === 'Account Management' ? 'active' : ''
                      }
                      onClick={() => {
                        setCurrentComponent('Account Management');
                        setExpandedId(null);
                      }}
                    >
                      <a href="#">Account Management</a>
                    </li>
                    <li
                      className={
                        currentComponent === 'Promotions & Coupons' ? 'active' : ''
                      }
                      onClick={() => {
                        setCurrentComponent('Promotions & Coupons');
                        setExpandedId(null);
                      }}
                    >
                      <a href="#">Promotions & coupons</a>
                    </li>
                    <li
                      className={
                        currentComponent === 'Product Management' ? 'active' : ''
                      }
                      onClick={() => {
                        setCurrentComponent('Product Management');
                        setExpandedId(null);
                      }}
                    >
                      <a href="#">Product Management</a>
                    </li>
                    <li
                      className={currentComponent === 'Feedback' ? 'active' : ''}
                      onClick={() => {
                        setCurrentComponent('Feedback');
                        setExpandedId(null);
                      }}
                    >
                      <a href="#">Feedback</a>
                    </li>
                    <li
                      className={
                        currentComponent === 'Contact Information' ? 'active' : ''
                      }
                      onClick={() => {
                        setCurrentComponent('Contact Information');
                        setExpandedId(null);
                      }}
                    >
                      <a href="#">Contact Information</a>
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
                    {term.question}
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
                  <p>{term.answer}</p>
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

export default FaqDropdown;
