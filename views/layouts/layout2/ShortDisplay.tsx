import React, { useState, useContext, useEffect } from "react";
import { Col, Row, Media, Input } from "reactstrap";
import { CurrencyContext } from "helpers/currency/CurrencyContext";
import { CartContext } from "helpers/cart/cart.context";
import Slider from "react-slick";
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

const dummyOffers = [
  {
    id: 1,
    offerCode: "OFF01",
    title: "Get extra $35 off on first Orders",
    description: 'Use code "OFF01" Min. Cart Value $75 | Max. Discount $35',
  },
  {
    id: 2,
    offerCode: "OFF02",
    title: "Flat 20% off on selected items",
    description: 'Use code "OFF02" Valid on items marked with 20% discount tag',
  },
  {
    id: 3,
    offerCode: "OFF03",
    title: "Summer Sale: Enjoy 25% off on clothing",
    description: 'Use code "OFF03" Applicable on all clothing products',
  },
  {
    id: 4,
    offerCode: "OFF04",
    title: "Flash Sale: Additional 10% off on electronics",
    description: 'Use code "OFF04" Valid only for today on electronics items',
  },
  {
    id: 5,
    offerCode: "OFF05",
    title: "Free Shipping on all orders above $50",
    description:
      'Use code "OFF05" Applicable on orders with cart value over $50',
  },
  {
    id: 6,
    offerCode: "OFF06",
    title: "Big Savings: $50 off on orders over $150",
    description: 'Use code "OFF06" Minimum cart value $150 required',
  },
  {
    id: 7,
    offerCode: "OFF07",
    title: "Weekend Special: 15% off on all categories",
    description: 'Use code "OFF07" Valid only on weekends',
  },
  {
    id: 8,
    offerCode: "OFF08",
    title: "Clearance Sale: Up to 30% off on clearance items",
    description: 'Use code "OFF08" Limited stock available',
  },
  {
    id: 9,
    offerCode: "OFF09",
    title: "Back to School: 10% off on stationery",
    description: 'Use code "OFF09" Applicable on stationery items',
  },
  {
    id: 10,
    offerCode: "OFF10",
    title: "Repeat Customer: $5 off on every repeat order",
    description: 'Use code "OFF10" Valid for repeat customers only',
  },
  {
    id: 11,
    offerCode: "OFF02",
    title: "Flat 20% off on selected items",
    description: 'Use code "OFF02" Valid on items marked with 20% discount tag',
  },
  {
    id: 12,
    offerCode: "OFF02",
    title: "Flat 20% off on selected items",
    description: 'Use code "OFF02" Valid on items marked with 20% discount tag',
  },
  {
    id: 13,
    offerCode: "OFF02",
    title: "Flat 20% off on selected items",
    description: 'Use code "OFF02" Valid on items marked with 20% discount tag',
  },
];

interface ShortDisplayProps {
  data: any;
  effect?: any;
}

const ShortDisplay: React.FC<ShortDisplayProps> = ({ effect, data }) => {
  const [products, setProducts] = useState([]);

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
                      {dummyOffers.length} Offers availble
                    </h6>
                  </div>

                  <div className="offers">
                    <ul className="Offers-list">
                      {dummyOffers.map((offer, index) => (
                        <li key={index}>
                          <span className="offer">{offer.offerCode}</span>
                          <div className="offer-details">
                            <h5>{offer.title}</h5>
                            <p>{offer.description}</p>
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
