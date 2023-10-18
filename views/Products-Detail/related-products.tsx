import React, { useEffect, useState } from "react";
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

const RelatedProducts: NextPage = () => {
  const { addToWish } = React.useContext(WishlistContext);
  const { addToCart } = React.useContext(CartContext);
  const { addToCompare } = React.useContext(CompareContext);
  const [loading, setLoading] = useState(true); // Track loading state
  const [productsData, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`)
      .then(response => response.json())
      .then(data => {
        setProducts(data[0]);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false); // Set loading to false on error
      });
  }, []);
  return (
    <section className="section-big-py-space  ratio_asos bg-light">
      <div className="custom-container">
        <Row>
          <Col className="product-related">
            <h2>related products</h2>
          </Col>
        </Row>
        {
          loading ? (
            <Skeleton />
          ) : (
            <Row>
              <Col className="product">
                <Slider {...settings}>
                  {productsData.map((product, i) => (
                    <div>
                      <ProductBox
                        hoverEffect={true}
                        product={product} // Example: pass the product and quantity
                        addCompare={(product) => addToCompare(product)}
                        addWish={(product) => addToWish(product)} />
                    </div>
                  ))}
                </Slider>
              </Col>
            </Row>
          )
        }


      </div>
    </section>
  );
};

export default RelatedProducts;
