import React, { useState } from "react";
import { Col, Row, Media } from "reactstrap";
import Slider from "react-slick";
import ProductDetail from "./product-detail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

interface ProductSlickProps {
  item: any;
  bundle: boolean;
  swatch: boolean;
}

const productImages = [
  { img: "/images/layout-2/product/1.jpg", category: "Flower" },
  { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
  { img: "/images/layout-2/product/3.jpg", category: "Bag" },
  { img: "/images/layout-2/product/4.jpg", category: "Tools" },
  { img: "/images/layout-2/product/5.jpg", category: "Grocery" },
  { img: "/images/layout-2/product/6.jpg", category: "Camera" },
  { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
  { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
  { img: "/images/layout-2/product/9.jpg", category: "cardigans" },
];
const ProductSlick: React.FC<ProductSlickProps> = ({ item, bundle, swatch }) => {
  const [state, setState] = useState({ nav1: null, nav2: null });

  const slider1 = React.useRef<Slider>();
  const slider2 = React.useRef<Slider>();

  React.useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, [item]);
  const { nav1, nav2 } = state;
  const changeColorVar = (img_id) => {
    slider1.current.slickGoTo(img_id);
  };
  return (
    <>
      <Col lg="5">
        <Slider className="product-slick" asNavFor={nav2} ref={(slider) => (slider1.current = slider)}>
          {item &&
            productImages.map((img: any, i: any) => {
              return (
                <div key={i}>
                  <Media src={img.img} alt="" className="img-fluid  image_zoom_cls-0" />
                </div>
              );
            })}
        </Slider>
        <Row>
          <Col>
            <Slider className="slider-nav" asNavFor={nav1} ref={(slider) => (slider2.current = slider)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true} arrows={false} adaptiveHeight={true}>
              {item &&
                 productImages.map((img: any, i: any) => {
                  return (
                    <div key={i}>
                      <Media src={img.img} alt="" className="img-fluid  image_zoom_cls-0" />
                    </div>
                  );
                })}
            </Slider>
          </Col>
          <Col>
          <div className="contanier">
            <div className="product-contact">
            <FontAwesomeIcon icon={faHeadset} size="2xl" />
            </div>
            <div className="product-contact"></div>
            <div className="product-contact"></div>
            <div className="product-contact"></div>
          </div>
          </Col>
        </Row>
      </Col>
      <Col lg="7" className="rtl-text">
        <ProductDetail item={item} changeColorVar={changeColorVar} bundle={bundle} swatch={swatch} totalReview={0} offers={0} />
      </Col>
    </>
  );
};

export default ProductSlick;
