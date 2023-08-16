import React, { useState } from "react";
import { NextPage } from "next";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from "reactstrap";

const VerticalTabProduct: NextPage = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <section className="tab-product tab-exes vertical-tab">
      <div className="custom-container">
        <Row className="tab-border">
          <Col xl="2">
            <Nav tabs className="nav nav-tabs nav-material flex-column nav-border" id="top-tab" role="tablist">
              <NavItem>
                <NavLink className={activeTab === "1" ? "active" : ""} onClick={() => setActiveTab("1")}>
                  Description
                  <div className="material-border"></div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === "2" ? "active" : ""} onClick={() => setActiveTab("2")}>
                  Reviews
                  <div className="material-border"></div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === "3" ? "active" : ""} onClick={() => setActiveTab("3")}>
                  Product tags
                  <div className="material-border"></div>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col xl="10">
            <TabContent className="nav-material" activeTab={activeTab}>
              <TabPane tabId="1">
                <p className="ps-0 pt-1">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&#39;`s standard dummy text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </p>
              </TabPane>
              <TabPane tabId="2">
                <p className="ps-0 pt-1">No Reviews yet...</p>
              </TabPane>
              <TabPane tabId="3">
                <p className="ps-0 pt-1">black, block1, blue, cotton, purple, skirts, top, under-100, versace, woman</p>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default VerticalTabProduct;
