import React from "react";
import { NextPage } from "next";
import { Row, Col, Container, Media } from "reactstrap";
import Slider from "react-slick";

var settings = {
  autoplay: true,
  autoplaySpeed: 3500,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
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

interface BrandList {
  brands:any,
}
const Suplier: NextPage<BrandList> = (brands) => {
  const brandList = brands.brands;

  function transformImageUrl(apiImageUrl) {
    if (apiImageUrl) {
      return `${process.env.NEXT_PUBLIC_BACKEND_URL}/${apiImageUrl.replace(/ /g, '%20')}`;
    }
    return ''; // Handle the case where apiImageUrl is not defined
  }
  return (
    <>
    <div className="custom-container">
      <div className="container-brands slide-6 no-arrow">
              <Slider {...settings}>
                {brandList.map((data, i) => (
                    <div className="category-contain" key={i}>
                
                        <div className="img-wrapper">
                          <Media src={transformImageUrl(data.logo)} alt="category" className="img-fluid brands-img" />
                        </div>
                        {/* <div>
                          <div className="btn-rounded">{data.category}</div>
                </div> */}
                    </div>
                ))}
              </Slider>
      </div>
    </div>
    </>
  );
};


export default Suplier;
// export {Supplier};
