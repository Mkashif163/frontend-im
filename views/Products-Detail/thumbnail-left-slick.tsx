import React, { useState } from "react";
import { Col, Row, Media } from "reactstrap";
import Slider from "react-slick";
import AccordianForm from "./accordian.form";
import AccordianDescription from "./accordian.product-right";

interface ThumbnailLeftSlickProps {
  item: any;
}

const ThumbnailLeftSlick: React.FC<ThumbnailLeftSlickProps> = ({ item }) => {
  const [state, setState] = useState({ nav1: null, nav2: null });

  const slider1 = React.useRef<Slider>();
  const slider2 = React.useRef<Slider>();
  var setting1 = {
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          slidesToShow: 3,
        },
      },
    ],
  };
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
      <Col lg="1" sm="2" xs="12">
        <Row>
          <Col>
            <Slider className="slider-right-nav" {...setting1} asNavFor={nav2} ref={(slider) => (slider1.current = slider)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true} vertical={true}>
              {item &&
                item?.images?.map((img: any, i: any) => {
                  return (
                    <div key={i}>
                      <Media src={`/images/${img.src}`} alt="" className="img-fluid image_zoom_cls-0" />
                    </div>
                  );
                })}
            </Slider>
          </Col>
        </Row>
      </Col>
      <Col lg="3" sm="10" xs="12" className="order-up">
        <Slider className="product-slick" asNavFor={nav1} ref={(slider) => (slider2.current = slider)}>
          {item &&
            item?.images?.map((img: any, i: any) => {
              return (
                <div key={i}>
                  <Media src={`/images/${img.src}`} alt="/images/pro3/3.jpg" className="img-fluid  image_zoom_cls-0" />
                </div>
              );
            })}
        </Slider>
      </Col>
      <Col lg="4">
        <AccordianDescription item={item} />
      </Col>
      <Col lg="4">
        <AccordianForm item={item} changeColorVar={changeColorVar} />
      </Col>
    </>
  );
};

export default ThumbnailLeftSlick;
