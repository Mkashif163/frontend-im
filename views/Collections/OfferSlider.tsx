import { NextPage } from "next";
import Slider from "react-slick";
import { Media } from "reactstrap";

var OfferSetting = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const offerdata = [
  {
    image: "001.jpg",
    title: "Slim Fit Cotton Shirt",
    price: "$500.00",
  },
  {
    image: "003.jpg",
    title: "Slim Fit Silk T-Shirt",
    price: "$400.00",
  },
];
const OfferSlider: NextPage = () => (
  <div className="theme-card creative-card creative-inner">
    <h5 className="title-border"></h5>
    <div className="offer-slider slide-1">
      <Slider {...OfferSetting}>
        {offerdata.map((offer, i) => (
          <div key={i}>
            <div className="media">
              <a href="">
                <Media className="img-fluid " src={`/images/product-sidebar/${offer.image}`} alt="" />
              </a>
              <div className="media-body align-self-center">
                <div className="rating">
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                </div>
                <a href="#">
                  <h6>{offer.title}</h6>
                </a>
                <h4>{offer.price}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
);

export default OfferSlider;
