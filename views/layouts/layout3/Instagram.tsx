import React from "react";
import { NextPage } from "next";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
      },
    },
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const InstagramSection: NextPage = () => (
  <section className="instagram section-pb-space">
    <div className="container-fluid">
      <div className="row">
        <div className="col p-0">
          <div className="insta-contant1 no-arrow">
            <Slider className="slide-7 no-arrow" {...settings}>
              <div>
                <div className="instagram-box">
                  <img src="/images/insta/1.jpg" className="img-fluid" alt="insta" />
                  <div className="insta-cover">
                    <i className="fa fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div>
                <div className="instagram-box">
                  <img src="/images/insta/2.jpg" className="img-fluid" alt="insta" />
                  <div className="insta-cover">
                    <i className="fa fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div>
                <div className="instagram-box">
                  <img src="/images/insta/3.jpg" className="img-fluid" alt="insta" />
                  <div className="insta-cover">
                    <i className="fa fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div>
                <div className="instagram-box">
                  <img src="/images/insta/4.jpg" className="img-fluid" alt="insta" />
                  <div className="insta-cover">
                    <i className="fa fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div>
                <div className="instagram-box">
                  <img src="/images/insta/5.jpg" className="img-fluid" alt="insta" />
                  <div className="insta-cover">
                    <i className="fa fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div>
                <div className="instagram-box">
                  <img src="/images/insta/6.jpg" className="img-fluid" alt="insta" />
                  <div className="insta-cover">
                    <i className="fa fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div>
                <div className="instagram-box">
                  <img src="/images/insta/7.jpg" className="img-fluid" alt="insta" />
                  <div className="insta-cover">
                    <i className="fa fa-instagram"></i>
                  </div>
                </div>
              </div>
              <div>
                <div className="instagram-box">
                  <img src="/images/insta/8.jpg" className="img-fluid" alt="insta" />
                  <div className="insta-cover">
                    <i className="fa fa-instagram"></i>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="insta-sub-contant1">
              <div className="insta-title">
                <h4>
                  <span>#</span>INSTAGRAM
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InstagramSection;
