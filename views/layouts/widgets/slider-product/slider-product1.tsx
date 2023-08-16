import React from "react";
import { CartContext } from "../../../../helpers/cart/cart.context";
import { WishlistContext } from "../../../../helpers/wishlist/wish.context";
import { CompareContext } from "../../../../helpers/compare/compare.context";
import { useQuery } from "@apollo/client";
import ProductBox from "../Product-Box/productbox";
import { gql } from "@apollo/client";
import Slider from "react-slick";
import { Skeleton } from "../../../../common/skeleton";

var settings = {
  arrows: true,
  dots: false,
  infinite: true,
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

type ProductBox1Props = {
  hoverEffect: any;
};

const ProductBox1: React.FC<ProductBox1Props> = ({ hoverEffect }) => {
  const { addToWish } = React.useContext(WishlistContext);
  const { addToCart } = React.useContext(CartContext);
  const { addToCompare } = React.useContext(CompareContext);

  var { loading: specialLoading, data: dataR } = useQuery(GET_COLLECTION, {
    variables: {
      collection: "special products",
    },
  });
  return (
    <div className="product product-slide-6 product-m no-arrow ratio_asos">
      <div>
        {!dataR || !dataR.collection || dataR.collection.length === 0 || specialLoading ? (
          <Skeleton />
        ) : (
          <Slider {...settings}>
            {dataR &&
              dataR.collection.map((itm: any, i: any) => (
                <div key={i}>
                  <ProductBox hoverEffect={hoverEffect} newLabel={itm.new} {...itm} item={itm} addCart={() => addToCart(itm)} addCompare={() => addToCompare(itm)} addWish={() => addToWish(itm)} />
                </div>
              ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default ProductBox1;
