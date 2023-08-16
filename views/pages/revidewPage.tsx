import React from "react";
import { NextPage } from "next";
import { Container, Row, Col, Media } from "reactstrap";
import Breadcrumb from "../../views/Containers/Breadcrumb";

interface reviews {
  img: string;
  name: string;
  desc: string;
  date: string;
}

interface reviewProps {
  review: reviews;
}

const reviewData = [
    {
        img: "/images/avtar/1.jpg",
        name: "John Martin",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        date: "(21 Jannuary 2022 at 9:29AM )",
    },
    {
        img: "/images/avtar/2.jpg",
        name: "John Martin",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        date: "(21 Jannuary 2022 at 9:29AM )",
    },
    {
        img: "/images/avtar/3.jpg",
        name: "John Martin",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        date: "(21 Jannuary 2022 at 9:29AM )",
    },
    {
        img: "/images/avtar/1.jpg",
        name: "John Martin",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        date: "(21 Jannuary 2022 at 9:29AM )",
    },
    {
        img: "/images/avtar/2.jpg",
        name: "John Martin",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        date: "(21 Jannuary 2022 at 9:29AM )",
    },
    {
        img: "/images/avtar/3.jpg",
        name: "John Martin",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        date: "(21 Jannuary 2022 at 9:29AM )",
    },
];

const ReviewList: React.FC<reviewProps> = ({ review }) => {
  return (
    <Col lg="4" md="6">
      <div className="review-box">
        <Media className="img-fluid " src={review.img} alt="review" />
        <h5>{review.name}</h5>
        <ul className="rating-star">
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-star" aria-hidden="true"></i>
          </li>
        </ul>
        <div className="review-message">
          <p>{review.desc}</p>
        </div>
        <h6>{review.date}</h6>
      </div>
    </Col>
  );
};

const ReviewPage: NextPage = () => {
  return (
    <div className="bg-light">
      {/* <!-- breadcrumb start --> */}
      <Breadcrumb title="Review" parent="home" />
      {/* <!-- breadcrumb End --> */}

      {/* <!--review start--> */}
      <section className="review section-big-py-space">
        <Container>
          <Row className="review-block">
            {reviewData.map((review, i) => (
              <ReviewList review={review} key={i} />
            ))}
          </Row>
        </Container>
      </section>
      {/* <!--review end--> */}
    </div>
  );
};

export default ReviewPage;
