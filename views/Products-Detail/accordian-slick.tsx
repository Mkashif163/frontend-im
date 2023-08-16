import React, { useState } from "react";
import { Col, Row, Media } from "reactstrap";
import Slider from "react-slick";
import AccordianDescription from "../../views/Products-Detail/accordian.product-right";
import AccordianForm from "../../views/Products-Detail/accordian.form";
import ThubnailDescription from "./thubnail-description";

interface ProductSlickProps {
  item: any;
  accordian: boolean;
  thumbnail: boolean;
}

const AccordianSlick: React.FC<ProductSlickProps> = ({ item, accordian, thumbnail }) => {
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
      <Col lg="4">
        <Slider className="product-slick" asNavFor={nav2} ref={(slider) => (slider1.current = slider)}>
          {item &&
            item.images.map((img: any, i: any) => {
              return (
                <div key={i}>
                  <Media src={`/images/${img.src}`} alt="" className="img-fluid  image_zoom_cls-0" />
                </div>
              );
            })}
        </Slider>
        <Row>
          <Col>
            <Slider className="slider-nav" asNavFor={nav1} ref={(slider) => (slider2.current = slider)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true}>
              {item &&
                item.images.map((img: any, i: any) => {
                  return (
                    <div key={i}>
                      <Media src={`/images/${img.src}`} alt="" className="img-fluid  image_zoom_cls-0" />
                    </div>
                  );
                })}
            </Slider>
          </Col>
        </Row>
      </Col>
      <Col lg="4">
        {accordian ? <AccordianDescription item={item} /> : ""}
        {thumbnail ? <ThubnailDescription item={item} /> : ""}
      </Col>
      <Col lg="4">
        <AccordianForm item={item} changeColorVar={changeColorVar} />
      </Col>
    </>
  );
};

export default AccordianSlick;
