import React, { useState, useEffect, useRef } from "react";
import { Col, Media, Row } from "reactstrap";
import Slider from "react-slick";
import ProductDetail from "./product-detail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowDown,
  faFilePdf,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image"; // Import next/image

interface ProductSlickProps {
  item: any;
  bundle: boolean;
  swatch: boolean;
}

const ProductSlick: React.FC<ProductSlickProps> = ({
  item,
  bundle,
  swatch,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState({ nav1: null, nav2: null });
  const data = item;

  // Create a single ref for the sliders
  const slider1 = React.useRef<Slider>();
  const slider2 = React.useRef<Slider>();

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, [item]);

  const { nav1, nav2 } = state;

  const changeImage = (img_id) => {
    slider1.current.slickGoTo(img_id);
    slider2.current.slickGoTo(img_id);
  };

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [item]);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <button className="btn btn-dark" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      ) : (
        data && (
          <>
            <Col lg="5">
              <Slider className="product-slick" asNavFor={nav2} ref={slider1}>
                {data.product_images.map((img: any, i: any) => (
                  <div
                    key={i}
                    className="image-container"
                    onClick={() => changeImage(i)}
                  >
                    <Image
                      src={img.url}
                      alt=""
                      width={500}
                      height={500}
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                ))}
              </Slider>
              <Row>
                <Col>
                  <div>
                    <Slider
                      className="slider-nav"
                      asNavFor={nav1}
                      ref={slider2}
                      slidesToShow={
                        data.product_images.length < 4
                          ? data.product_images.length
                          : 4
                      }
                      swipeToSlide={true}
                      focusOnSelect={true}
                      arrows={false}
                      infinite={false}
                    >
                      {data.product_images.map((img: any, i: any) => (
                        <div
                          key={i}
                          className="image-container"
                          onClick={() => changeImage(i)}
                        >
                          <Image
                            src={img.url}
                            alt=""
                            width={100}
                            height={100}
                            objectFit="contain"
                            priority
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </Col>
                <Col>
                  <div className="support-div w-100">
                    <Link href="#support">
                      <div className="product-contact">
                        <FontAwesomeIcon icon={faHeadset} size="2xl" />
                        <h6>support</h6>
                      </div>
                    </Link>
                    <div className="product-contact">
                      <FontAwesomeIcon icon={faFileArrowDown} size="2xl" />
                      <h6>Download pdf</h6>
                    </div>
                    <div className="product-contact">
                      <FontAwesomeIcon icon={faFilePdf} size="2xl" />
                      <h6>Detail Document</h6>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="7" className="rtl-text">
              <ProductDetail
                item={item}
                bundle={bundle}
                swatch={swatch}
                totalReview={0}
                offers={0}
                changeColorVar={undefined}
              />
            </Col>
          </>
        )
      )}
    </>
  );
};

export default ProductSlick;
