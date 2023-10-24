import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import DisplayItem from "./DisplayItem";

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



interface ShortDisplayProps {
  data: any;
  effect?: any;
}

const ShortDisplay: React.FC<ShortDisplayProps> = ({ effect, data }) => {
  const [products, setProducts] = useState([]);
  const coupens = data.coupons;

  useEffect(() => {
    if (data?.menus) {
      // Use optional chaining to check if data and data.menus exist
      const allProducts = [];
      

      // Loop through each menu
      for (const menuName in data.menus) {
        // Loop through each category in the current menu
        for (const category of data.menus[menuName].categories) {
          // Loop through each sub_category in the current category
          for (const subCategory of category.sub_categories) {
            // Loop through each product in the current sub_category and add it to allProducts
            for (const product of subCategory.products) {
              allProducts.push(product);
            }
          }
        }
      }

      // Set the productsData state with all fetched products
      setProducts(allProducts);
    }
  }, [data]);

  const getRandomProducts = (products, count) => {
    const availableProducts = products.filter((product) => product.stock > 0);

    const shuffled = availableProducts.slice(); // Create a copy of the availableProducts array
    let i = availableProducts.length;
    const selectedProducts = [];

    while (i-- && selectedProducts.length < count) {
      const randomIndex = Math.floor((i + 1) * Math.random());
      const temp = shuffled[i];
      shuffled[i] = shuffled[randomIndex];
      shuffled[randomIndex] = temp;
      selectedProducts.push(shuffled[i]);
    }

    return selectedProducts;
  };

  const randomProducts = getRandomProducts(products, 5);

  console.log("coupens",coupens[0])

  return (
    <>
      <section className="short-disply section-py-space ratio_asos product">
        <div className="custom-container bg-white">
          <div className="row">
            <div className="col-lg-6 mb-4 pb-3">
              <DisplayItem products={randomProducts} />
            </div>
            <div className="col-lg-6 mb-4 pb-3">
              <div className="single-producty ">
                <div className="coupens">
                  <div className="coupens-title">
                    <FontAwesomeIcon className="tag" icon={faTags} size="xl" />
                    <h6 className="product-title">
                      {coupens.length} Offers availble
                    </h6>
                  </div>

                  <div className="offers">
                    <ul className="Offers-list">
                      {coupens.map((offer, index) => (
                        <li key={index}>
                          <span className="offer">{offer.coupon_code}</span>
                          <div className="offer-details">
                            <h5>{offer.coupon_title}</h5>
                            <p>{offer.discount_type}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShortDisplay;
