import React, { useState, useEffect } from "react";
import { Col, Row, Media } from "reactstrap";
import Slider from "react-slick";
import ProductDetail from "./product-detail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown, faFilePdf, faHeadset } from "@fortawesome/free-solid-svg-icons";

interface ProductSlickProps {
  item: any;
  bundle: boolean;
  swatch: boolean;
}

const ProductSlick: React.FC<ProductSlickProps> = ({ item, bundle, swatch }) => {
  const [state, setState] = useState({ nav1: null, nav2: null });
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  const data = item[0];

  const slider1 = React.useRef<Slider>();
  const slider2 = React.useRef<Slider>();

  useEffect(() => {
    // Simulate an API call with setTimeout
    setTimeout(() => {
      setIsLoading(false); // Set loading to false when data is fetched
    }, 2000); // Adjust the time accordingly based on your API response time

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
      {isLoading ? ( // Show loader when data is fetching
        <div className="d-flex justify-content-center">
          <button className="btn btn-dark" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>
        </div>
      ) : (
        data && (
          <>
            <Col lg="5">
              <Slider className="product-slick" asNavFor={nav2} ref={(slider) => (slider1.current = slider)}>
                {data &&
                  data.product_images.map((img: any, i: any) => {
                    return (
                      <div key={i}>
                        <Media src={img.url} alt="" className="img-fluid  image_zoom_cls-0" />
                      </div>
                    );
                  })}
              </Slider>
              <Row>
                <Col>
                  <div style={{ width: "500px" }}>
                    <Slider
                      className="slider-nav"
                      asNavFor={nav1}
                      ref={(slider) => (slider2.current = slider)}
                      slidesToShow={3}
                      swipeToSlide={true}
                      focusOnSelect={true}
                      arrows={false}
                      adaptiveHeight={true}
                    >
                      {data &&
                        data.product_images.map((img: any, i: any) => {
                          return (
                            <div key={i}>
                              <Media src={img.url} alt="" className="img-fluid  image_zoom_cls-0" />
                            </div>
                          );
                        })}
                    </Slider>
                  </div>
                </Col>
                <Col>
                  <div className="support-div w-100">
                    <div className="product-contact">
                      <FontAwesomeIcon icon={faHeadset} size="2xl" />
                      <h6>support</h6>
                    </div>
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
              <ProductDetail item={item} changeColorVar={changeColorVar} bundle={bundle} swatch={swatch} totalReview={0} offers={0} />
            </Col>
          </>
        )
      )}
    </>
  );
};

export default ProductSlick;
