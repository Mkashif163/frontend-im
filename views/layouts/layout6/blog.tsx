import React from "react";
import { NextPage } from "next";
import Slider from "react-slick";
import { Row, Col, Media } from "reactstrap";
var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface blog {
  img1: string;
  title1: string;
  subTitle: string;
  btn: string;
  btn1: string;
  day: string;
  month: string;
}

interface blogProps {
  blog: blog;
}

const blogsList = [
  {
    img1: "/images/layout-6/blog/1.jpg",
    title1: "Proin sit amet libero",
    day: "12",
    month: "Nov",
    btn: "comants",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.",
    btn1: "Donec lacinia",
  },
  {
    img1: "/images/layout-6/blog/2.jpg",
    title1: "Proin sit amet libero",
    day: "12",
    month: "Nov",
    btn: "comants",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.",
    btn1: "Donec lacinia",
  },
  {
    img1: "/images/layout-6/blog/3.jpg",
    title1: "Proin sit amet libero",
    day: "12",
    month: "Nov",
    btn: "comants",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.",
    btn1: "Donec lacinia",
  },
  {
    img1: "/images/layout-6/blog/4.jpg",
    title1: "Proin sit amet libero",
    day: "12",
    month: "Nov",
    btn: "comants",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.",
    btn1: "Donec lacinia",
  },
  {
    img1: "/images/layout-6/blog/2.jpg",
    title1: "Proin sit amet libero",
    day: "12",
    month: "Nov",
    btn: "comants",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.",
    btn1: "Donec lacinia",
  },
];

const BlogList: React.FC<blogProps> = ({ blog }) => {
  return (
    <div>
      <div className="blog-contain">
        <div className="blog-img">
          <Media src={blog.img1} alt="blog" className="img-fluid w-100" />
        </div>
        <div className="blog-details-2">
          <h4>{blog.title1} </h4>
          <p>{blog.subTitle}</p>
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-user-md"></i>
                {blog.btn1}
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-comments"></i>
                {blog.btn}
              </a>
            </li>
          </ul>
        </div>
        <div className="blog-label1">
          {blog.day} <br />
          {blog.month}
        </div>
      </div>
    </div>
  );
};



const Blogs: NextPage = () => {
  return (
    <>
      <div className="title4 section-my-space mt-0">
        <h4>
          letest <span>blog</span>
        </h4>
      </div>
      <section className="blog section-big-mb-space mb--5 ">
        <div className="custom-container">
          <Row>
            <Col className="pe-0">
              <div className="blog-slide-4 no-arrow">
                <Slider {...settings}>
                  {blogsList.map((blog, i) => (
                    <BlogList blog={blog} key={i} />
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Blogs;
