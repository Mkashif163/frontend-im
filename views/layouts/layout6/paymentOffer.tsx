import React from "react";
import { NextPage } from "next";
import { Row, Col, Media } from "reactstrap";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  centerPadding: "15px",
  responsive: [
    {
      breakpoint: 1470,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const CategoryList = [
  {
    img: "/images/layout-6/payment-offer/1.png",
    offerAmt: "$200",
    title: "OUR FEATURED OFFERS",
    subTitle: "shop for",
    amt: "$50",
    code: "citioct",
  },
  {
    img: "/images/layout-6/payment-offer/2.png",
    offerAmt: "$200",
    title: "OUR FEATURED OFFERS",
    subTitle: "shop for",
    amt: "$50",
    code: "citioct",
  },
  {
    img: "/images/layout-6/payment-offer/1.png",
    offerAmt: "$200",
    title: "OUR FEATURED OFFERS",
    subTitle: "shop for",
    amt: "$50",
    code: "citioct",
  },
  {
    img: "/images/layout-6/payment-offer/2.png",
    offerAmt: "$200",
    title: "OUR FEATURED OFFERS",
    subTitle: "shop for",
    amt: "$50",
    code: "citioct",
  },
  {
    img: "/images/layout-6/payment-offer/1.png",
    offerAmt: "$200",
    title: "OUR FEATURED OFFERS",
    subTitle: "shop for",
    amt: "$50",
    code: "citioct",
  },
  {
    img: "/images/layout-6/payment-offer/2.png",
    offerAmt: "$200",
    title: "OUR FEATURED OFFERS",
    subTitle: "shop for",
    amt: "$50",
    code: "citioct",
  },
];

const PaymentOffer: NextPage = () => {
  return (
    <>
      <section className="section-pt-space">
        <div className="custom-container">
          <Row>
            <Col xs="12" className="pe-0">
              <div className="slide-5 no-arrow">
                <Slider {...settings}>
                  {CategoryList.map((data, i) => (
                    <div key={i}>
                      <div className="paymant-offer-mian">
                        <div>
                          <Media src={data.img} alt="Generic placeholder image" />
                          <h2>{data.offerAmt}</h2>
                          <h3>{data.title}</h3>
                          <h4>
                            {data.subTitle} <span>{data.amt}</span>
                          </h4>
                          <div className="payment-cod">
                            code <span> &nbsp; : &nbsp; {data.code}</span>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default PaymentOffer;
