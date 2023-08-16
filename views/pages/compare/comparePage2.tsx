import React from "react";
import { NextPage } from "next";
import { Media, Row, Col } from "reactstrap";
import Slider from "react-slick";
import Breadcrumb from "../../Containers/Breadcrumb";

var settings = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
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
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface compares {
  img: string;
  pro_name: string;
  price: string;
  desc: string;
  brand: string;
  size: string;
  color: string;
  material: string;
  available: string;
  btn: string;
}

interface compareProps {
  compare: compares;
}

const compareData = [
  {
    img: "/images/product-sidebar/001.jpg",
    pro_name: "slim fit shirt",
    price: "$555",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    brand: "Zara",
    size: "XL, L, M, S, XS",
    color: "Red , Blue , Pink",
    material: "cotton",
    available: "In stock",
    btn: "Shop Now",
  },
  {
    img: "/images/product-sidebar/001.jpg",
    pro_name: "slim fit shirt",
    price: "$555",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    brand: "Zara",
    size: " S, XS",
    color: "Red , Blue ",
    material: "cotton",
    available: "In stock",
    btn: "Shop Now",
  },
  {
    img: "/images/product-sidebar/001.jpg",
    pro_name: "slim fit shirt",
    price: "$555",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    brand: "Zara",
    size: "XL, L, XS",
    color: "Red , Blue , Pink",
    material: "cotton",
    available: "In stock",
    btn: "Shop Now",
  },
  {
    img: "/images/product-sidebar/001.jpg",
    pro_name: "slim fit shirt",
    price: "$555",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    brand: "Zara",
    size: "XL, S, XS",
    color: "Red , Blue , Pink",
    material: "cotton",
    available: "In stock",
    btn: "Shop Now",
  },
  {
    img: "/images/product-sidebar/001.jpg",
    pro_name: "slim fit shirt",
    price: "$555",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    brand: "Zara",
    size: "XL, L, M ",
    color: "Red , Blue , Pink",
    material: "cotton",
    available: "In stock",
    btn: "Shop Now",
  },
  {
    img: "/images/product-sidebar/001.jpg",
    pro_name: "slim fit shirt",
    price: "$555",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    brand: "Zara",
    size: "XL, L, M, S, XS",
    color: "Red , Blue , Pink",
    material: "cotton",
    available: "In stock",
    btn: "Shop Now",
  },
];

const CompareList: React.FC<compareProps> = ({ compare }) => {
  return (
    <div>
      <div className="compare-part">
        <button type="button" className="close-btn">
          <span aria-hidden="true">×</span>
        </button>
        <div className="img-secton">
          <div>
            <Media src={compare.img} className="img-fluid  bg-img" alt="" />
          </div>
          <a href="#">
            <h5>{compare.pro_name}</h5>
          </a>
          <h5>{compare.price}</h5>
        </div>
        <div className="detail-part">
          <div className="title-detail">
            <h5>discription</h5>
          </div>
          <div className="inner-detail">
            <p>{compare.desc} </p>
          </div>
        </div>
        <div className="detail-part">
          <div className="title-detail">
            <h5>Brand Name</h5>
          </div>
          <div className="inner-detail">
            <p>{compare.brand}</p>
          </div>
        </div>
        <div className="detail-part">
          <div className="title-detail">
            <h5>size</h5>
          </div>
          <div className="inner-detail">
            <p>{compare.size}</p>
          </div>
        </div>
        <div className="detail-part">
          <div className="title-detail">
            <h5>color</h5>
          </div>
          <div className="inner-detail">
            <p>{compare.color}</p>
          </div>
        </div>
        <div className="detail-part">
          <div className="title-detail">
            <h5>material</h5>
          </div>
          <div className="inner-detail">
            <p>{compare.material}</p>
          </div>
        </div>
        <div className="detail-part">
          <div className="title-detail">
            <h5>availability</h5>
          </div>
          <div className="inner-detail">
            <p>{compare.available}</p>
          </div>
        </div>
        <div className="btn-part">
          <a href="#" className="btn btn-normal">
            {compare.btn}
          </a>
        </div>
      </div>
    </div>
  );
};
const ComparePage2: NextPage = () => {
  return (
    <>
      {/* <!-- breadcrumb start --> */}
      <Breadcrumb title="compare-2" parent="home" />
      {/* <!-- breadcrumb End --> */}

      {/* <!-- section start --> */}
      <section className="compare-section section-big-py-space ratio_asos bg-light">
        <div className="custom-container">
          <Row>
            <Col xs="12">
              <Slider className="slide-4 no-arrow" {...settings}>
                {compareData.map((data, i) => (
                  <CompareList compare={data} key={i} />
                ))}
              </Slider>
            </Col>
          </Row>
        </div>
      </section>
      {/* <!-- Section ends --> */}
    </>
  );
};

export default ComparePage2;
