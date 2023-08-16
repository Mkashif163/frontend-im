import React from "react";
import { gql } from "@apollo/client";
import { NextPage } from "next";
import { useQuery } from "@apollo/client";
import ProductBox from "../Product-Box/productbox2";
import Slider from "react-slick";
import { CartContext } from "../../../../helpers/cart/cart.context";
import { WishlistContext } from "../../../../helpers/wishlist/wish.context";
import { Row, Col } from "reactstrap";
import { Skeleton } from "../../../../common/skeleton";
import { CompareContext } from "helpers/compare/compare.context";

var settings = {
  arrows: true,
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const GET_COLLECTION = gql`
  query getCollection($collection: String) {
    collection(collec: $collection) {
      id
      title
      description
      type
      brand
      category
      price
      new
      sale
      discount
      stock
      variants {
        id
        sku
        size
        color
        image_id
      }
      images {
        image_id
        id
        alt
        src
      }
    }
  }
`;

interface trendingProps {
  type: string;
}

const TrendingOffer: NextPage<trendingProps> = ({ type }) => {
  const { addToWish } = React.useContext(WishlistContext);
  const { addToCart } = React.useContext(CartContext);
  const { addToCompare } = React.useContext(CompareContext);

  var { loading: specialLoading, data: dataR } = useQuery(GET_COLLECTION, {
    variables: {
      collection: "special products",
    },
  });

  var prod = [];

  if (dataR && dataR.collection && dataR.collection.length > 0 && !specialLoading) {
    prod.push(dataR.collection.filter((item) => item.type === type));
  }

  return (
    <>
      <div className="title4 section-my-space">
        <h4>
          trending <span>product</span>
        </h4>
      </div>
      <section className=" product  section-big-pb-space">
        <div className="custom-container  addtocart_count ">
          <Row>
            <Col className="pe-0">
              <div className="product-slide-6 no-arrow">
                {!dataR || !dataR.collection || dataR.collection.length === 0 || specialLoading ? (
                  <Skeleton />
                ) : (
                  <Slider {...settings}>
                    {dataR &&
                      prod.map((item: any) =>
                        item.map((itm: any, i: any) => {
                          return (
                            <div key={i}>
                              <ProductBox newLabel={itm.new} {...itm} item={itm} addCart={() => addToCart(itm)} addCompare={() => addToCompare(itm)} addWish={() => addToWish(itm)} />
                            </div>
                          );
                        }),
                      )}
                  </Slider>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default TrendingOffer;
