import React from "react";
import { NextPage } from "next";
import { Col, Media } from "reactstrap";

interface recent {
  img: string;
  date: string;
  hits: string;
}

interface blogProps {
  blog: recent;
}

interface populars {
  date: string;
  title: string;
  hits: string;
  desc: string;
}

interface popularProp {
  popular: populars;
}

const popularData = [
  {
    date: "03-may",
    title: "Injected humour the like",
    hits: "0 hits",
    desc: "it look like readable English. Many desktop publishing text.",
  },
  {
    date: "03-may",
    title: "Injected humour the like",
    hits: "0 hits",
    desc: "it look like readable English. Many desktop publishing text.",
  },
  {
    date: "03-may",
    title: "Injected humour the like",
    hits: "0 hits",
    desc: "it look like readable English. Many desktop publishing text.",
  },
  {
    date: "03-may",
    title: "Injected humour the like",
    hits: "0 hits",
    desc: "it look like readable English. Many desktop publishing text.",
  },
  {
    date: "03-may",
    title: "Injected humour the like",
    hits: "0 hits",
    desc: "it look like readable English. Many desktop publishing text.",
  },
];

const recentData = [
  {
    img: "/images/blog/1.jpg",
    date: "25 Dec 2023",
    hits: "0 hits",
  },
  {
    img: "/images/blog/2.jpg",
    date: "25 Dec 2023",
    hits: "0 hits",
  },
  {
    img: "/images/blog/3.jpg",
    date: "25 Dec 2023",
    hits: "0 hits",
  },
  {
    img: "/images/blog/4.jpg",
    date: "25 Dec 2023",
    hits: "0 hits",
  },
  {
    img: "/images/blog/5.jpg",
    date: "25 Dec 2023",
    hits: "0 hits",
  },
];

const RecentList: NextPage<blogProps> = ({ blog }) => {
  return (
    <li>
      <div className="media">
        <Media className="img-fluid " src={blog.img} alt="Generic placeholder image" />
        <div className="media-body align-self-center">
          <h6>{blog.date}</h6>
          <p>{blog.hits}</p>
        </div>
      </div>
    </li>
  );
};

const PopularList: React.FC<popularProp> = ({ popular }) => {
  return (
    <li>
      <div className="media">
        <div className="blog-date">
          <span>{popular.date}</span>
        </div>
        <div className="media-body align-self-center">
          <h6>{popular.title}</h6>
          <p>{popular.hits}</p>
        </div>
      </div>
      <p>{popular.desc}</p>
    </li>
  );
};

const Blog: NextPage = () => {
  return (
    <>
      <Col xl="3" lg="4" md="5">
        <div className="blog-sidebar">
          <div className="theme-card">
            <h4>Recent Blog</h4>
            <ul className="recent-blog">
              {recentData.map((data, i) => (
                <RecentList blog={data} key={i} />
              ))}
            </ul>
          </div>
          <div className="theme-card">
            <h4>Popular Blog</h4>
            <ul className="popular-blog">
              {popularData.map((data, i) => (
                <PopularList popular={data} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Blog;
