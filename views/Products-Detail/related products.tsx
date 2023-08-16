import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import Slider from "react-slick";
import { Row, Col } from "reactstrap";
import ProductBox from "../layouts/widgets/Product-Box/productbox";
import { Skeleton } from "../../common/skeleton";
import { CartContext } from "../../helpers/cart/cart.context";
import { WishlistContext } from "../../helpers/wishlist/wish.context";
import { CompareContext } from "../../helpers/compare/compare.context";

var settings = {
  arrows: false,
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
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

const GET_PRODUCTS = gql`
  query getProducts($type: String!, $id: Int!) {
    relatedProducts(type: $type, id: $id) {
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

const RelatedProducts: NextPage = () => {
  const { addToWish } = React.useContext(WishlistContext);
  const { addToCart } = React.useContext(CartContext);
  const { addToCompare } = React.useContext(CompareContext);
  var { loading, data } = useQuery(GET_PRODUCTS, {
    variables: {
      type: "fashion",
      id: 1,
    },
  });

  return (
    <section className="section-big-py-space  ratio_asos bg-light">
      <div className="custom-container">
        <Row>
          <Col className="product-related">
            <h2>related products</h2>
          </Col>
        </Row>

        {!data || !data.relatedProducts || data.relatedProducts.length === 0 || loading ? (
          <Skeleton />
        ) : (
          <Row>
            <Col className="product">
              <Slider {...settings}>
                {data &&
                  data.relatedProducts.map((item: any, i: any) => (
                    <div key={i}>
                      <ProductBox newLabel={item.new} {...item} item={item} addCart={() => addToCart(item)} addCompare={() => addToCompare(item)} addWish={() => addToWish(item)} />
                    </div>
                  ))}
              </Slider>
            </Col>
          </Row>
        )}
      </div>
    </section>
  );
};

export default RelatedProducts;
