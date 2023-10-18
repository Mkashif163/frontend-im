import React, { useState, useContext, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Media,
  Spinner,
} from "reactstrap";
import Slider from "react-slick";
import { CurrencyContext } from "../../../helpers/currency/CurrencyContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useApiData } from "helpers/data/DataContext";
import DisplayItem from "../layout2/DisplayItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
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

interface coupen{
  coupons: any;
}

const chunkArray = (array, size) => {
  const result = [];
  for (let value of array) {
    let lastArray = result[result.length - 1];
    if (!lastArray || lastArray.length === size) {
      result.push([value]);
    } else {
      lastArray.push(value);
    }
  }
  return result;
};

const RatioSquare = () => {
  const currencyContext = useContext(CurrencyContext);
  const { selectedCurr } = currencyContext;
  const [activeTab, setActiveTab] = useState("new products");
  const [selected, setSelected] = useState("motors");
  const [dataR, setDataR] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { addToWish } = useContext(WishlistContext);
  // const { addToCart } = useContext(CartContext);
  // const { addToCompare } = useContext(CompareContext);
  const router = useRouter();

  const handleTabClick = (tabName) => {
    // Update the selected state based on the tab clicked
    setSelected(tabName);
    setLoading(true);
  };
  const apiData = useApiData() as coupen;

  useEffect(() => {
    // console.log("My Api Data For Coupens:::", apiData.coupons);
    if (selected === "lights") {
      setDataR(apiData.coupons); // Assuming data is an array in the response
      setLoading(false);
    } else {
      const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/search/product/${selected}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Handle the data from the API here
          setDataR(data.data); // Assuming data is an array in the response
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
          setLoading(false);
        });
    }
  }, [selected]);

  return (
    <section className='ratio_square'>
      <div className='custom-container  section-pb-space'>
        <div className='b-g-white px-3 pb-3'>
          <Row>
            <Col className='p-0'>
              <div className='theme-tab product'>
                <Nav tabs className='tab-title media-tab'>
                  <NavItem>
                    <NavLink
                      className={activeTab === "featured" ? "active" : ""}
                      onClick={() => {
                        setActiveTab("featured");
                        handleTabClick("motors");
                      }}>
                      Featured
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === "sponserd" ? "active" : ""}
                      onClick={() => {
                        setActiveTab("sponserd");
                        handleTabClick("vfds");
                      }}>
                      Sponserd
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === "onsale" ? "active" : ""}
                      onClick={() => {
                        setActiveTab("onsale");
                        handleTabClick("lights");
                      }}>
                      Coupens
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
              <div className='tab-content-cls'>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId={activeTab}>
                    {loading ? (
                      <div
                        className='d-flex justify-content-center align-items-center'
                        style={{ minHeight: "200px" }}>
                        <Spinner type='grow' color='primary' />
                      </div>
                    ) : selected === "lights" ? (
                      <div className='row d-flex justify-content-center'>
                        <div className='col-lg-6 mb-4 pb-3 pt-0 mt-0'>
                          <div className='single-producty'>
                            <div className='coupens'>
                              <div className='coupens-title'>
                                <FontAwesomeIcon
                                  className='tag'
                                  icon={faTags}
                                  size='xl'
                                />
                                <h6 className='product-title'>
                                  {dataR.length} Offers availble
                                </h6>
                              </div>

                              <div className='offers'>
                                <ul className='Offers-list'>
                                  {dataR.map((offer, index) => (
                                    <li key={index}>
                                      <span className='offer'>
                                        Offer # {index + 1}
                                      </span>
                                      <div className='offer-details'>
                                        <h5>{offer.coupon_title}</h5>
                                        <p>Use code # "{offer.coupon_code}"</p>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      // <Slider {...settings}>
                      //   {chunkArray(dataR, 3).map((chunk, chunkIndex) => (
                      //     <div key={chunkIndex}>
                      //       {chunk.map((item, itemIndex) => (
                      //         <div key={itemIndex}>
                      //           <div className='media-banner media-banner-1 border-0'>
                      //             <div className='media-banner-box'>
                      //               <div className='media gap-2'>
                      //                 <div
                      //                   style={{ width: "200", height: "200" }}>
                      //                   <Link href='#'>{item.coupon_code}</Link>
                      //                 </div>
                      //                 <div className='media-body'>
                      //                   <Link href='#'>
                      //                     <p>{item.coupon_title}</p>
                      //                   </Link>
                      //                   <h6>
                      //                     {selectedCurr.symbol}
                      //                     {item.amount}
                      //                   </h6>
                      //                 </div>
                      //               </div>
                      //             </div>
                      //           </div>
                      //         </div>
                      //       ))}
                      //     </div>
                      //   ))}
                      // </Slider>
                    ) : (
                      <Slider {...settings}>
                        {chunkArray(dataR, 3).map((chunk, chunkIndex) => (
                          <div key={chunkIndex}>
                            {chunk.map((item, itemIndex) => (
                              <div key={itemIndex}>
                                <div className='media-banner media-banner-1 border-0'>
                                  <div className='media-banner-box'>
                                    <div className='media gap-2'>
                                      <div
                                        style={{ width: "200", height: "200" }}>
                                        <Link
                                          href={`/product-details/${item.id}`}>
                                          <img
                                            src={`${
                                              item.url ? item.url : "pro3/3.jpg"
                                            }`}
                                            className='img-fluid object-fit-contain'
                                            alt='banner'
                                          />
                                        </Link>
                                      </div>
                                      <div className='media-body'>
                                        <Link
                                          href={`/product-details/${item.id}`}>
                                          <p>{item.name}</p>
                                        </Link>
                                        <h6>
                                          {selectedCurr.symbol}
                                          {item.new_sale_price}{" "}
                                          <span>
                                            <del>
                                              {selectedCurr.symbol}
                                              {item.new_price}
                                            </del>
                                          </span>
                                        </h6>
                                        <ul className='rating'>
                                          <i className='fa fa-star'></i>
                                          <i className='fa fa-star'></i>
                                          <i className='fa fa-star'></i>
                                          <i className='fa fa-star'></i>
                                          <i className='fa fa-star'></i>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </Slider>
                    )}
                  </TabPane>
                </TabContent>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default RatioSquare;
