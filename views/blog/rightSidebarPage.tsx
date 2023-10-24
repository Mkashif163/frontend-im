import React from "react";
import { NextPage } from "next";
import { Row, Col } from "reactstrap";
import BlogPage from "./common/blogPage";
import MediaPage from "./common/mediaPage";
import Link from "next/link";
import { useState, useRef } from "react";
import Slider from "react-slick";

const RightSidebarPage: NextPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sliderRef = useRef();

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5, // Number of categories to show at a time
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 5, // Number of categories to show on mobile screens
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 4, // Number of categories to show on mobile screens
        },
      },
      {
        breakpoint: 425, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Number of categories to show on mobile screens
        },
      },
      {
        breakpoint: 375, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Number of categories to show on mobile screens
        },
      },
      {
        breakpoint: 320, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Number of categories to show on mobile screens
        },
      },
    ],
  };

  const groupProjectsByCategory = (projects) => {
    return projects.reduce((grouped, project) => {
      if (!grouped[project.categoryName]) {
        grouped[project.categoryName] = [];
      }
      grouped[project.categoryName].push(project);
      return grouped;
    }, {});
  };

  const groupedProjects = groupProjectsByCategory(projects);

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.categoryName === selectedCategory);

  return (
    <div className="bg-light">
      <h3 className="text-center">Latest News</h3>

      {/* <!-- section start --> */}
      <section className="section-big-py-space blog-page ratio2_3">
        <div className="custom-container">
          {/* <!-- Top News Start--> */}
          <div className="top-news">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 tn-left">
                  <div className="tn-img">
                    <img
                      className="blog-tn-img"
                      src="/blog-page-assets/img/top-news-1.jpg"
                    />
                    <div className="tn-content">
                      <div className="tn-content-inner">
                        <a className="tn-date" href="">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </a>
                        <a className="tn-title" href="">
                          Lorem ipsum dolor sit amet adipiscing elit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 tn-right">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="tn-img">
                        <img
                          className="blog-tn-img"
                          src="/blog-page-assets/img/top-news-2.jpg"
                        />
                        <div className="tn-content">
                          <div className="tn-content-inner">
                            <a className="tn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="tn-title" href="">
                              Integer faucibus pharetra odio
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tn-img">
                        <img
                          className="blog-tn-img"
                          src="/blog-page-assets/img/top-news-3.jpg"
                        />
                        <div className="tn-content">
                          <div className="tn-content-inner">
                            <a className="tn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="tn-title" href="">
                              Nulla vitae pharetra ligula
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tn-img">
                        <img
                          className="blog-tn-img"
                          src="/blog-page-assets/img/top-news-4.jpg"
                        />
                        <div className="tn-content">
                          <div className="tn-content-inner">
                            <a className="tn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="tn-title" href="">
                              Ut ac euismod tellus a blandit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="tn-img">
                        <img
                          className="blog-tn-img"
                          src="/blog-page-assets/img/top-news-5.jpg"
                        />
                        <div className="tn-content">
                          <div className="tn-content-inner">
                            <a className="tn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="tn-title" href="">
                              Cras ac egestas sem nec euismod
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Top News End--> */}

          {/* <!-- Category News Start--> */}
          <div className="cat-news">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex justify-content-between">
                    <h3 className="text-dark">
                      <i className="fas fa-align-justify"></i>&nbsp;Sports
                    </h3>
                    <p className="fs-4 ms-3">country</p>
                    <p className="fs-4 ms-3">city</p>
                    <p className="fs-4 ms-3">state</p>
                    <p className="fs-4 ms-3">province</p>
                    <p className="fs-4 ms-3">bike</p>
                    <span>
                      <button
                        type="button"
                        className="btn btn-sm quantity-right-plus border me-1 mt-1"
                        data-type="plus"
                        data-field=""
                      >
                        <i className="ti-angle-left"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm quantity-right-plus border ms-1 mt-1"
                        data-type="plus"
                        data-field=""
                      >
                        <i className="ti-angle-right"></i>
                      </button>
                    </span>
                  </div>
                  <div className="row cn-slider">
                    <div className="col-md-6">
                      <div className="cn-img">
                        <img
                          className="blog-cn-img"
                          src="/blog-page-assets/img/cat-news-1.jpg"
                        />
                        <div className="cn-content">
                          <div className="cn-content-inner">
                            <a className="cn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="cn-title" href="">
                              Cras sed semper puru vitae lobortis velit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cn-img">
                        <img
                          className="blog-cn-img"
                          src="/blog-page-assets/img/cat-news-2.jpg"
                        />
                        <div className="cn-content">
                          <div className="cn-content-inner">
                            <a className="cn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="cn-title" href="">
                              Vestibulum ante ipsum primis
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cn-img">
                        <img
                          className="blog-cn-img"
                          src="/blog-page-assets/img/cat-news-3.jpg"
                        />
                        <div className="cn-content">
                          <div className="cn-content-inner">
                            <a className="cn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="cn-title" href="">
                              Sed quis convallis lacus
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h2>
                    <i className="fas fa-align-justify"></i>Technology
                  </h2>
                  <div className="row cn-slider">
                    <div className="col-md-6">
                      <div className="cn-img">
                        <img
                          className="blog-cn-img"
                          src="/blog-page-assets/img/cat-news-4.jpg"
                        />
                        <div className="cn-content">
                          <div className="cn-content-inner">
                            <a className="cn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="cn-title" href="">
                              Vivamus vel felis nec magna
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cn-img">
                        <img
                          className="blog-cn-img"
                          src="/blog-page-assets/img/cat-news-5.jpg"
                        />
                        <div className="cn-content">
                          <div className="cn-content-inner">
                            <a className="cn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="cn-title" href="">
                              Phasellus vitae fermentum est
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cn-img">
                        <img
                          className="blog-cn-img"
                          src="/blog-page-assets/img/cat-news-6.jpg"
                        />
                        <div className="cn-content">
                          <div className="cn-content-inner">
                            <a className="cn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="cn-title" href="">
                              Aenean ut varius dui
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Category News End--> */}

          {/* <!-- Category News Start--> */}
          <div className="cat-news">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <h2>
                    <i className="fas fa-align-justify"></i>Business
                  </h2>
                  <div className="row cn-slider">
                    <div className="col-md-6">
                      <div className="cn-img">
                        <img
                          className="blog-cn-img"
                          src="/blog-page-assets/img/cat-news-7.jpg"
                        />
                        <div className="cn-content">
                          <div className="cn-content-inner">
                            <a className="cn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="cn-title" href="">
                              Interdum et malesuada fames ac ante
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cn-img">
                        <img
                          className="blog-cn-img"
                          src="/blog-page-assets/img/cat-news-8.jpg"
                        />
                        <div className="cn-content">
                          <div className="cn-content-inner">
                            <a className="cn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="cn-title" href="">
                              Mauris non ligula eget ante sagittis
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cn-img">
                        <img
                          className="blog-cn-img"
                          src="/blog-page-assets/img/cat-news-9.jpg"
                        />
                        <div className="cn-content">
                          <div className="cn-content-inner">
                            <a className="cn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="cn-title" href="">
                              Integer non nunc nec nulla aliquet
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h2>
                    <i className="fas fa-align-justify"></i>Entertainment
                  </h2>
                  <div className="row cn-slider">
                    <div className="col-md-6">
                      <div className="cn-img">
                        <img
                          className="blog-cn-img"
                          src="/blog-page-assets/img/cat-news-10.jpg"
                        />
                        <div className="cn-content">
                          <div className="cn-content-inner">
                            <a className="cn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="cn-title" href="">
                              Ut laoreet justo non ornare
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cn-img">
                        <img
                          className="blog-cn-img"
                          src="/blog-page-assets/img/cat-news-11.jpg"
                        />
                        <div className="cn-content">
                          <div className="cn-content-inner">
                            <a className="cn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="cn-title" href="">
                              Proin a nulla ut enim feugiat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="cn-img">
                        <img
                          className="blog-cn-img"
                          src="/blog-page-assets/img/cat-news-12.jpg"
                        />
                        <div className="cn-content">
                          <div className="cn-content-inner">
                            <a className="cn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <a className="cn-title" href="">
                              Sed mauris sem sollicitudin at neque
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Category News End--> */}

          {/* <!-- Main News Start--> */}
          <div className="main-news">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-12">
                      <h2>
                        <i className="fas fa-align-justify"></i>Latest News
                      </h2>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mn-img">
                            <img
                              className="blog-mn-img"
                              src="/blog-page-assets/img/latest-news.jpg"
                            />
                          </div>
                          <div className="mn-content">
                            <a className="mn-title" href="">
                              Cras commodo sem ut porta laoreet
                            </a>
                            <a className="mn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vivamus sed porta dui. className aptent
                              taciti sociosqu ad litora torquent per conubia
                              nostra inceptos...
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mn-list">
                            <div className="mn-img">
                              <img
                                className="blog-mn-img"
                                src="/blog-page-assets/img/latest-news.jpg"
                              />
                            </div>
                            <div className="mn-content">
                              <a className="mn-title" href="">
                                Pellentesque sit amet rutrum lacus
                              </a>
                              <a className="mn-date" href="">
                                <i className="far fa-clock"></i>05-Feb-2020
                              </a>
                            </div>
                          </div>
                          <div className="mn-list">
                            <div className="mn-img">
                              <img
                                className="blog-mn-img"
                                src="/blog-page-assets/img/latest-news.jpg"
                              />
                            </div>
                            <div className="mn-content">
                              <a className="mn-title" href="">
                                Proin id pretium orci, quis rhoncus eros
                              </a>
                              <a className="mn-date" href="">
                                <i className="far fa-clock"></i>05-Feb-2020
                              </a>
                            </div>
                          </div>
                          <div className="mn-list">
                            <div className="mn-img">
                              <img
                                className="blog-mn-img"
                                src="/blog-page-assets/img/latest-news.jpg"
                              />
                            </div>
                            <div className="mn-content">
                              <a className="mn-title" href="">
                                Curabitur viverra scelerisque tempor
                              </a>
                              <a className="mn-date" href="">
                                <i className="far fa-clock"></i>05-Feb-2020
                              </a>
                            </div>
                          </div>
                          <div className="mn-list">
                            <div className="mn-img">
                              <img
                                className="blog-mn-img"
                                src="/blog-page-assets/img/latest-news.jpg"
                              />
                            </div>
                            <div className="mn-content">
                              <a className="mn-title" href="">
                                Integer nec lorem facilisis interdum lorem non
                              </a>
                              <a className="mn-date" href="">
                                <i className="far fa-clock"></i>05-Feb-2020
                              </a>
                            </div>
                          </div>
                          <div className="mn-list">
                            <div className="mn-img">
                              <img
                                className="blog-mn-img"
                                src="/blog-page-assets/img/latest-news.jpg"
                              />
                            </div>
                            <div className="mn-content">
                              <a className="mn-title" href="">
                                Interdum et malesuada fames
                              </a>
                              <a className="mn-date" href="">
                                <i className="far fa-clock"></i>05-Feb-2020
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <h2>
                        <i className="fas fa-align-justify"></i>Popular News
                      </h2>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mn-img">
                            <img
                              className="blog-mn-img"
                              src="/blog-page-assets/img/popular-news.jpg"
                            />
                          </div>
                          <div className="mn-content">
                            <a className="mn-title" href="">
                              Phasellus gravida metus vitae laoreet aliquam
                            </a>
                            <a className="mn-date" href="">
                              <i className="far fa-clock"></i>05-Feb-2020
                            </a>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vivamus sed porta dui. className aptent
                              taciti sociosqu ad litora torquent per conubia
                              nostra inceptos...
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mn-list">
                            <div className="mn-img">
                              <img
                                className="blog-mn-img"
                                src="/blog-page-assets/img/popular-news.jpg"
                              />
                            </div>
                            <div className="mn-content">
                              <a className="mn-title" href="">
                                Nullam risus ante sempe
                              </a>
                              <a className="mn-date" href="">
                                <i className="far fa-clock"></i>05-Feb-2020
                              </a>
                            </div>
                          </div>
                          <div className="mn-list">
                            <div className="mn-img">
                              <img
                                className="blog-mn-img"
                                src="/blog-page-assets/img/popular-news.jpg"
                              />
                            </div>
                            <div className="mn-content">
                              <a className="mn-title" href="">
                                Pellentesque ultrices quam id ipsum tempor
                              </a>
                              <a className="mn-date" href="">
                                <i className="far fa-clock"></i>05-Feb-2020
                              </a>
                            </div>
                          </div>
                          <div className="mn-list">
                            <div className="mn-img">
                              <img
                                className="blog-mn-img"
                                src="/blog-page-assets/img/popular-news.jpg"
                              />
                            </div>
                            <div className="mn-content">
                              <a className="mn-title" href="">
                                Nam ex magna, commodo sed turpis rutrum
                              </a>
                              <a className="mn-date" href="">
                                <i className="far fa-clock"></i>05-Feb-2020
                              </a>
                            </div>
                          </div>
                          <div className="mn-list">
                            <div className="mn-img">
                              <img
                                className="blog-mn-img"
                                src="/blog-page-assets/img/popular-news.jpg"
                              />
                            </div>
                            <div className="mn-content">
                              <a className="mn-title" href="">
                                Aliquam condimentum metus
                              </a>
                              <a className="mn-date" href="">
                                <i className="far fa-clock"></i>05-Feb-2020
                              </a>
                            </div>
                          </div>
                          <div className="mn-list">
                            <div className="mn-img">
                              <img
                                className="blog-mn-img"
                                src="/blog-page-assets/img/popular-news.jpg"
                              />
                            </div>
                            <div className="mn-content">
                              <a className="mn-title" href="">
                                Ut ornare rutrum ligula erat volutpat
                              </a>
                              <a className="mn-date" href="">
                                <i className="far fa-clock"></i>05-Feb-2020
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="sidebar">
                    <div className="sidebar-widget">
                      <div className="col-md-12">
                        <h2>
                          <i className="fas fa-align-justify"></i>Latest News
                        </h2>
                        <div className="row">
                          <div className="col">
                            <div className="mn-img">
                              <img
                                className="blog-mn-img"
                                src="/blog-page-assets/img/latest-news.jpg"
                              />
                            </div>
                            <div className="mn-content">
                              <a className="mn-title" href="">
                                Cras commodo sem ut porta laoreet
                              </a>
                              <a className="mn-date" href="">
                                <i className="far fa-clock"></i>05-Feb-2020
                              </a>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vivamus sed porta dui.
                                className aptent taciti sociosqu ad litora
                                torquent per conubia nostra inceptos...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="sidebar-widget">
                      <div className="col-md-12">
                        <h2>
                          <i className="fas fa-align-justify"></i>Latest News
                        </h2>
                        <div className="row">
                          <div className="col">
                            <div className="mn-img">
                              <img
                                className="blog-mn-img"
                                src="/blog-page-assets/img/latest-news.jpg"
                              />
                            </div>
                            <div className="mn-content">
                              <a className="mn-title" href="">
                                Cras commodo sem ut porta laoreet
                              </a>
                              <a className="mn-date" href="">
                                <i className="far fa-clock"></i>05-Feb-2020
                              </a>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vivamus sed porta dui.
                                className aptent taciti sociosqu ad litora
                                torquent per conubia nostra inceptos...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Main News End--> */}
        </div>
      </section>
    </div>
  );
};

export default RightSidebarPage;
