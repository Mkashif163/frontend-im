import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import ProductBox from "../layouts/widgets/Product-Box/productbox";
import { Row, Col } from "reactstrap";
import { WishlistContext } from "helpers/wishlist/wish.context";
import { CartContext } from "helpers/cart/cart.context";
import { CompareContext } from "helpers/compare/compare.context";

const GET_PRODUCTS = gql`
  query getProducts($type: CategoryType, $limit: Int!) {
    products(type: $type, limit: $limit) {
      items {
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
  }
`;

const NoSliderProducts: React.FC = () => {
  var { data } = useQuery(GET_PRODUCTS, {
    variables: {
      type: "FASHION",
      limit: 125,
    },
  });

  const { addToWish } = React.useContext(WishlistContext);
  const { addToCart } = React.useContext(CartContext);
  const { addToCompare } = React.useContext(CompareContext);
  return (
    <section className="section-big-py-space ratio_asos bg-light">
      <div className="custom-container">
        <Row>
          <Col>
            <div className="no-slider row product">
              {data &&
                data.products.items
                  .slice(0, 8)
                  .map((item: any, i: any) => (
                    <ProductBox key={i} newLabel={item.new} {...item} item={item} addCart={() => addToCart(item)} addCompare={() => addToCompare(item)} addWish={() => addToWish(item)} />
                  ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default NoSliderProducts;
