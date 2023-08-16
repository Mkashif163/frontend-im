import React, { useState } from "react";
import { gql } from "@apollo/client";
import { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import ProductBox from "../Product-Box/productbox";
import Slider from "react-slick";
import { CartContext } from "../../../../helpers/cart/cart.context";
import { WishlistContext } from "../../../../helpers/wishlist/wish.context";
import { CompareContext } from "../../../../helpers/compare/compare.context";
import { Skeleton } from "../../../../common/skeleton";

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
  query getProducts($type: CategoryType, $limit: Int!) {
    products(type: $type, limit: $limit) {
      items {
        id
        title
        type
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

type TabProductProps = {
  effect?: any;
};

const TabProduct: NextPage<TabProductProps> = ({ effect }) => {
  const { addToWish } = React.useContext(WishlistContext);
  const { addToCart } = React.useContext(CartContext);
  const { addToCompare } = React.useContext(CompareContext);
  const [activeTab, setActiveTab] = useState("new products");
  const collection = [];

  var { loading, data } = useQuery(GET_PRODUCTS, {
    variables: {
      limit: 235,
    },
  });

  var { data: dataR } = useQuery(GET_COLLECTION, {
    variables: {
      collection: activeTab,
    },
  });

  return (
    <>
      {data &&
        data.products.items.map((item: any) => {
          item.collection.map((i) => {
            const index = collection.indexOf(i.collectionName);
            if (index === -1 && i.collectionName !== "" && i.collectionName !== "special products") collection.push(i.collectionName);
          });
        })}
      <section className="section-pt-space">
        <div className="tab-product-main">
          <div className="tab-prodcut-contain">
            <Nav tabs>
              {collection.map((c, i) => (
                <NavItem key={i}>
                  <NavLink className={activeTab === c ? "active" : ""} onClick={() => setActiveTab(c)}>
                    {c}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
        </div>
      </section>
      <section className="section-py-space ratio_asos product">
        <div className="custom-container">
          <Row>
            <Col className="pe-0">
              <TabContent activeTab={activeTab}>
                <TabPane tabId={activeTab}>
                  <div className="product product-slide-6 product-m no-arrow">
                    <div>
                      {!dataR || !dataR.collection.length || loading ? (
                        <Skeleton />
                      ) : (
                        <Slider {...settings}>
                          {dataR &&
                            dataR.collection.map((itm: any, i: any) => (
                              <div key={i}>
                                <ProductBox
                                  hoverEffect={effect}
                                  newLabel={itm.new}
                                  {...itm}
                                  item={itm}
                                  addCart={() => addToCart(itm)}
                                  addCompare={() => addToCompare(itm)}
                                  addWish={() => addToWish(itm)}
                                />
                              </div>
                            ))}
                        </Slider>
                      )}
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default TabProduct;
