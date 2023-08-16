import React, { Fragment, useState } from "react";
import data from "../../data/masonry.json";
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Masonry from "react-masonry-css";
import { NextPage } from "next";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

interface MasonryGridProps {
  cols: any;
  masonryGrid: number;
  fluid?: boolean;
}
const categories = ["all", "fashion", "bags", "shoes", "watch", "electronic"];

const MasonryGrid: NextPage<MasonryGridProps> = ({ cols, masonryGrid, fluid }) => {
  const breakpointColumnsObj = {
    default: masonryGrid,
    500: 1,
  };
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <section className="filter-section bg-light">
        <div className="title6 bg-light">
          <h4>portfolio</h4>
        </div>
        <Container fluid={fluid}>
          <Row className="color-tab">
            <Col>
              <div className="filter-container isotopeFilters">
                <Nav tabs>
                  {categories.map((category, i) => (
                    <NavItem key={i} className="filter-button project_button">
                      <NavLink
                        className={activeTab === category ? "active" : ""}
                        onClick={() => {
                          setActiveTab(category);
                        }}>
                        {category.toUpperCase()}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="portfolio-section portfolio-padding pt-0 port-col zoom-gallery bg-light">
        <Container fluid={fluid}>
          <Row className="isotopeContainer portfolio-3">
            <TabContent activeTab={activeTab}>
              <Gallery>
                <TabPane tabId={activeTab}>
                  <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid masonry-with-dec " columnClassName="my-masonry-grid_column">
                    {data &&
                      data.all.map((item: any, i: any) => (
                        <Fragment key={i}>
                          {activeTab !== "all" ? (
                            item.type === activeTab && (
                              <div className={cols}>
                                <div className="overlay">
                                  <div>
                                    <Item original={`/images/${item.img}`}>
                                      {({ ref, open }) => <img onClick={open} ref={ref as React.MutableRefObject<HTMLImageElement>} src={`/images/${item.img}`} alt="portfolio-image" />}
                                    </Item>
                                  </div>
                                </div>
                              </div>
                            )
                          ) : (
                            <div className={cols}>
                              <div className="overlay">
                                <div>
                                  {/* <div className="overlay-background"><i className="ti-plus"></i></div> */}
                                  <Item original={`/images/${item.img}`}>
                                    {({ ref, open }) => <img onClick={open} ref={ref as React.MutableRefObject<HTMLImageElement>} src={`/images/${item.img}`} alt="portfolio-image" />}
                                  </Item>
                                </div>
                              </div>
                            </div>
                          )}
                        </Fragment>
                      ))}
                  </Masonry>
                </TabPane>
              </Gallery>
            </TabContent>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MasonryGrid;
