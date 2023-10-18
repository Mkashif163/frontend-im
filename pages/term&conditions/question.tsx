import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Row, Col } from "reactstrap";
import Link from "next/link";
import Layout1 from "views/layouts/layout1";

type TermCondition = {
  id: number;
  title: string;
  description: string;
};

type Props = {
  termid: any;
};

const Dashboard: NextPage<Props> = ({ termid }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState("dashboard");
  const [termsAndConditions, setTermsAndConditions] = useState<TermCondition[]>([]);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Fetch the terms and conditions from the API
    fetch("http://18.235.14.45/api/homeapi")
      .then((response) => response.json())
      .then((data: { terms_and_conditions: TermCondition[] }) => {
        const termsData = data.terms_and_conditions;
        setTermsAndConditions(termsData);
      })
      .catch((error: Error) => {
        // Handle any errors here
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Layout1>
      <section className="section-big-py-space bg-light">
        <div className="custom-container">
          <Row>
            <Col lg="2" className="m-0 p-0">
              <div>
                <a onClick={toggleSubMenu}>For Seller</a>
                {isOpen && (
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <Link href="#">How to Become a Seller?</Link>
                      </li>
                      <li>
                        <Link href="#">How to Post a Product?</Link>
                      </li>
                      <li>
                        <Link href="#">How to Become a Verified Supplier?</Link>
                      </li>
                      <li>
                        <Link href="#">How to Become a Trusted Supplier?</Link>
                      </li>
                      <li>
                        <Link href="#">How to Give a Discount on Product?</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </Col>
            <Col lg="10">
              <div className="dashboard-right">
                {currentComponent === "dashboard" ? (
                  <div className="dashboard">
                    {/* Your dashboard content */}
                  </div>
                ) : (
                  <div className="text-center">
                    <h2 className="p-5">No term found</h2>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Layout1>
  );
};

export default Dashboard;
