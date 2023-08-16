import React from "react";
import { NextPage } from "next";
import Slider from "react-slick";
import { Row, Col } from "reactstrap";
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
  date: string;
  subTitle: string;
  btn: string;
}

interface blogProps {
  blog: blog;
}

const blogsList = [
  {
    img1: "/images/layout-5/blog/2.jpg",
    title1: "Latest News Post",
    date: "12/2/2021",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.",
    btn: "read more",
  },
  {
    img1: "/images/layout-5/blog/3.jpg",
    title1: "Latest News Post",
    date: "12/2/2021",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.",
    btn: "read more",
  },
  {
    img1: "/images/layout-5/blog/4.jpg",
    title1: "Latest News Post",
    date: "12/2/2021",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.",
    btn: "read more",
  },
  {
    img1: "/images/layout-5/blog/5.jpg",
    title1: "Latest News Post",
    date: "12/2/2021",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.",
    btn: "read more",
  },
  {
    img1: "/images/layout-5/blog/2.jpg",
    title1: "Latest News Post",
    date: "12/2/2021",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.",
    btn: "read more",
  },
];

const BlogList: React.FC<blogProps> = ({ blog }) => {
  return (
    <div>
      <div className="blog-contain">
        <div className="blog-img">
          <img src={blog.img1} alt="blog" className="img-fluid   " />
        </div>
        <div className="blog-details">
          <h4>{blog.title1}</h4>
          <p>{blog.subTitle}</p>
          <span>
            <a href="/blog/blog-details">{blog.btn}</a>
          </span>
        </div>
        <div className="blog-label">
          <p>{blog.date}</p>
        </div>
      </div>
    </div>
  );
};

const Blogs: NextPage = () => {
    return (
        <>
            <section className="blog">
                <div className="custom-container">
                    <Row>
                        <Col xs="12">
                            <div className="title3">
                                <h4>recent blog post</h4>
                            </div>
                        </Col>
                        <Col xs="12">
                            <div className="blog-slide-4 no-arrow">
                                <Slider {...settings}>
                                    {blogsList.map((blog, i) =>
                                        <BlogList blog={blog} key={i} />,
                                    )}
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
