import React, { useContext } from "react";
import { NextPage } from "next";
import Slider from "react-slick";
import { Media } from "reactstrap";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { CurrencyContext } from "../../../helpers/currency/CurrencyContext";

const GET_PRODUCTS = gql`
  query getProducts($type: CategoryType, $limit: Int!) {
    products(type: $type, limit: $limit) {
      items {
        id
        title
        collection {
          collectionName
        }
      }
    }
  }
`;

const GET_COLLECTION = gql`
  query getCollection($collection: String) {
    collection(collec: $collection) {
      id
      title
      price
      discount
      images {
        image_id
        id
        alt
        src
      }
    }
  }
`;

var bestSellerSetting = {
  dots: false,
  infinite: false,
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

const HotDeal: NextPage = () => {
  const currencyContext = useContext(CurrencyContext);
  const { selectedCurr } = currencyContext;
  const collection = [];
  var { loading, data } = useQuery(GET_PRODUCTS, {
    variables: {
      type: "ALL",
      limit: 235,
    },
  });
  var { data: dataR } = useQuery(GET_COLLECTION, {
    variables: {
      collection: "new products",
    },
  });
  {
    data &&
      data.products.items.map((item: any) => {
        item.collection.map((i) => {
          const index = collection.indexOf(i.collectionName);
          if (index === -1) collection.push(i.collectionName);
        });
      });
  }

  return (
    <Slider {...bestSellerSetting}>
      {collection.slice(0, 4).map((c, i) => (
        <div key={i}>
          <div className="media-banner border-0">
            <div className="media-banner-box">
              <div className="media-heading">
                <h5>{c}</h5>
              </div>
            </div>

            {dataR &&
              !loading &&
              dataR.collection.slice(0, 4).map((item, i) => (
                <div key={i}>
                  <div className="media-banner-box">
                    <div className="media">
                      <Media src={`/images/${item.images[0] ? item.images[0].src : "pro3/3.jpg"}`} width="80" height="80" className="img-fluid " alt="banner" />
                      <div className="media-body">
                        <div className="media-contant">
                          <div>
                            <div className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <p>{item.title}</p>
                            <h6>
                              {" "}
                              {selectedCurr.symbol}
                              {((item.price - item.price * (item.discount / 100)) * selectedCurr.value).toFixed(2)}{" "}
                              <span>
                                {selectedCurr.symbol}
                                {(item.price * selectedCurr.value).toFixed(2)}
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media-banner-box">
                    <div className="media">
                      <Media src={`/images/${item.images[0] ? item.images[0].src : "pro3/3.jpg"}`} width="80" height="80" className="img-fluid " alt="banner" />
                      <div className="media-body">
                        <div className="media-contant">
                          <div>
                            <div className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <p>{item.title}</p>
                            <h6>
                              {" "}
                              {selectedCurr.symbol}
                              {((item.price - item.price * (item.discount / 100)) * selectedCurr.value).toFixed(2)}{" "}
                              <span>
                                {selectedCurr.symbol}
                                {(item.price * selectedCurr.value).toFixed(2)}
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media-banner-box">
                    <div className="media">
                      <Media src={`/images/${item.images[0] ? item.images[0].src : "pro3/3.jpg"}`} width="80" height="80" className="img-fluid " alt="banner" />
                      <div className="media-body">
                        <div className="media-contant">
                          <div>
                            <div className="rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <p>{item.title}</p>
                            <h6>
                              {" "}
                              {selectedCurr.symbol}
                              {((item.price - item.price * (item.discount / 100)) * selectedCurr.value).toFixed(2)}{" "}
                              <span>
                                {selectedCurr.symbol}
                                {(item.price * selectedCurr.value).toFixed(2)}
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              ))}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HotDeal;
