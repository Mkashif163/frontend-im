import React, { Fragment } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Slider from "react-slick";
import { Row, Col } from "reactstrap";
import ProductBox from "../layouts/widgets/Product-Box/productbox";
import { Skeleton } from "../../common/skeleton";
import { CartContext } from "helpers/cart/cart.context";
import { WishlistContext } from "helpers/wishlist/wish.context";
import { CompareContext } from "helpers/compare/compare.context";

var settings = {
  arrows: true,
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
  query getProducts($limit: Int) {
    products(limit: $limit) {
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

const ProductsBoxPage: React.FC = () => {
  var { loading, data } = useQuery(GET_PRODUCTS, {
    variables: {
      limit: 100,
    },
  });

  const { addToWish } = React.useContext(WishlistContext);
  const { addToCart } = React.useContext(CartContext);
  const { addToCompare } = React.useContext(CompareContext);

  return (
    <Fragment>
      <div className="title6 ">
        <h4>product style 1</h4>
      </div>

      <section className="ratio_asos product bg-light section-big-py-space">
        <div className="custom-container">
          {!data || !data.products || data.products.items.length === 0 || loading ? (
            <Skeleton />
          ) : (
            <Row>
              <Col className="product">
                <Slider {...settings}>
                  {data &&
                    data.products &&
                    data.products.items.map((item: any, i: any) =>
                      item.type === "fashion" ? (
                        <div key={i}>
                          <ProductBox newLabel={item.new} {...item} item={item} addCart={() => addToCart(item)} addCompare={() => addToCompare(item)} addWish={() => addToWish(item)} />
                        </div>
                      ) : (
                        ""
                      ),
                    )}
                </Slider>
              </Col>
            </Row>
          )}
        </div>
      </section>

      <div className="title6 ">
        <h4>product style 2</h4>
      </div>

      <section className="ratio_asos product bg-light section-big-py-space">
        <div className="custom-container">
          {!data || !data.products || data.products.items.length === 0 || loading ? (
            <Skeleton />
          ) : (
            <Row>
              <Col className="product">
                <Slider {...settings}>
                  {data &&
                    data.products &&
                    data.products.items.map((item: any, i: any) =>
                      item.type === "kids" ? (
                        <div key={i}>
                          <ProductBox newLabel={item.new} {...item} />
                        </div>
                      ) : (
                        ""
                      ),
                    )}
                </Slider>
              </Col>
            </Row>
          )}
        </div>
      </section>

      <div className="title6 ">
        <h4>product style 3</h4>
      </div>

      <section className="ratio_asos product bg-light section-big-py-space">
        <div className="custom-container">
          {!data || !data.products || data.products.items.length === 0 || loading ? (
            <Skeleton />
          ) : (
            <Row>
              <Col className="product">
                <Slider {...settings}>
                  {data &&
                    data.products &&
                    data.products.items.map((item: any, i: any) =>
                      item.type === "shoes" ? (
                        <div key={i}>
                          <ProductBox newLabel={item.new} {...item} item={item} addCart={() => addToCart(item)} addCompare={() => addToCompare(item)} addWish={() => addToWish(item)} />
                        </div>
                      ) : (
                        ""
                      ),
                    )}
                </Slider>
              </Col>
            </Row>
          )}
        </div>
      </section>

      <div className="title6 ">
        <h4>product style 4</h4>
      </div>

      <section className="ratio_asos product bg-light section-big-py-space">
        <div className="custom-container">
          {!data || !data.products || data.products.items.length === 0 || loading ? (
            <Skeleton />
          ) : (
            <Row>
              <Col className="product">
                <Slider {...settings}>
                  {data &&
                    data.products &&
                    data.products.items.map((item: any, i: any) =>
                      item.type === "watch" ? (
                        <div key={i}>
                          <ProductBox newLabel={item.new} {...item} item={item} addCart={() => addToCart(item)} addCompare={() => addToCompare(item)} addWish={() => addToWish(item)} />
                        </div>
                      ) : (
                        ""
                      ),
                    )}
                </Slider>
              </Col>
            </Row>
          )}
        </div>
      </section>

      <div className="title6 ">
        <h4>product style 5</h4>
      </div>

      <section className="ratio_asos product bg-light section-big-py-space">
        <div className="custom-container">
          {!data || !data.products || data.products.items.length === 0 || loading ? (
            <Skeleton />
          ) : (
            <Row>
              <Col className="product">
                <Slider {...settings}>
                  {data &&
                    data.products &&
                    data.products.items.map((item: any, i: any) =>
                      item.type === "bags" ? (
                        <div key={i}>
                          <ProductBox newLabel={item.new} {...item} item={item} addCart={() => addToCart(item)} addCompare={() => addToCompare(item)} addWish={() => addToWish(item)} />
                        </div>
                      ) : (
                        ""
                      ),
                    )}
                </Slider>
              </Col>
            </Row>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default ProductsBoxPage;
