import React from "react";
import { NextPage } from "next";
import { Row, Col, Media } from "reactstrap";

interface medias {
  img: string;
  date: string;
  desc1: string;
  post: string;
  hits: string;
  comment: string;
  desc2: string;
}

interface mediaProps {
  media: medias;
}

const mediaData = [
    {
        img: "/images/blog/1.jpg",
        date: "26 nov 2022",
        desc1: "you how all this mistaken idea of denouncing pleasure and praising pain was born.",
        post: "Admin",
        hits: "5 hits",
        comment: "10 Comment",
        desc2: "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    },
    {
        img: "/images/blog/1.jpg",
        date: "26 nov 2022",
        desc1: "you how all this mistaken idea of denouncing pleasure and praising pain was born.",
        post: "Admin",
        hits: "5 hits",
        comment: "10 Comment",
        desc2: "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    },
    {
        img: "/images/blog/1.jpg",
        date: "26 nov 2022",
        desc1: "you how all this mistaken idea of denouncing pleasure and praising pain was born.",
        post: "Admin",
        hits: "5 hits",
        comment: "10 Comment",
        desc2: "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    },
    {
        img: "/images/blog/1.jpg",
        date: "26 nov 2022",
        desc1: "you how all this mistaken idea of denouncing pleasure and praising pain was born.",
        post: "Admin",
        hits: "5 hits",
        comment: "10 Comment",
        desc2: "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    },
    {
        img: "/images/blog/1.jpg",
        date: "26 nov 2022",
        desc1: "you how all this mistaken idea of denouncing pleasure and praising pain was born.",
        post: "Admin",
        hits: "5 hits",
        comment: "10 Comment",
        desc2: "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    },
];

const MediaList: React.FC<mediaProps> = ({ media }) => {
  return (
    <Row className="blog-media">
      <Col xl="6">
        <div className="blog-left">
          <a href="#">
            <Media src={media.img} className="img-fluid" alt="" />
          </a>
          <div className="date-label">{media.date}</div>
        </div>
      </Col>
      <Col xl="6">
        <div className="blog-right">
          <div>
            <a href="#">
              <h4>{media.desc1}</h4>
            </a>
            <ul className="post-social">
              <li>Posted By : {media.post}</li>
              <li>
                <i className="fa fa-heart"></i> {media.hits}
              </li>
              <li>
                <i className="fa fa-comments"></i> {media.comment}
              </li>
            </ul>
            <p>{media.desc2}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

const MediaPage: NextPage = () => {
  return (
    <>
      {/* <!--Blog List start--> */}
      {mediaData.map((data, i) => (
        <MediaList media={data} key={i} />
      ))}
      {/* <!--Blog List start--> */}
    </>
  );
};

export default MediaPage;
