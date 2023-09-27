import React, { useState, useContext } from "react";
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
  effect?: any;
}

const productImages = [
  { img: "/images/layout-2/product/1.jpg", category: "Flower" },
  { img: "/images/layout-2/product/2.jpg", category: "Furniture" },
  { img: "/images/layout-2/product/3.jpg", category: "Bag" },
  { img: "/images/layout-2/product/4.jpg", category: "Tools" },
  { img: "/images/layout-2/product/5.jpg", category: "Grocery" },
  { img: "/images/layout-2/product/6.jpg", category: "Camera" },
  { img: "/images/layout-2/product/7.jpg", category: "cardigans" },
  { img: "/images/layout-2/product/8.jpg", category: "cardigans" },
  { img: "/images/layout-2/product/9.jpg", category: "cardigans" },
];

const ShortDisplay: React.FC<ShortDisplayProps> = ({ effect }) => {
  const [state, setState] = useState({ nav1: null, nav2: null });
  const [qty, setQty] = useState(1);
  const { selectedCurr } = React.useContext(CurrencyContext);
  const [stock, setStock] = useState("InStock");
  const { symbol, value } = selectedCurr;
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const quantitiy = 28;
  const { addToCart } = useContext(CartContext);
  const minusQty = () => {
    if (qty > 1) {
      setStock("InStock");
      setQty(qty - 1);
    }
  };

  const plusQty = () => {
    if (quantitiy >= qty) {
      setQty(qty + 1);
    } else {
      setStock("Out of Stock !");
    }
  };
  const changeQty = (e: any) => {
    setQty(parseInt(e.target.value));
  };
  const discount = 15;
  const price = 779;
  const totalReview = 28;

  const model = "1756-A7X-Plus-Enhanced-2023-NextGen-XYZ";

  const slider1 = React.useRef<Slider>();
  const slider2 = React.useRef<Slider>();
  const { nav1, nav2 } = state;
  React.useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const nextProduct = () => {
    const nextIndex = (currentProductIndex + 1) % productImages.length;
    setCurrentProductIndex(nextIndex);
  };

  const prevProduct = () => {
    const prevIndex =
      (currentProductIndex - 1 + productImages.length) % productImages.length;
    setCurrentProductIndex(prevIndex);
  };

  const currentProduct = productImages[currentProductIndex];

  return (
    <>
      <section className="short-disply section-py-space ratio_asos product">
        <div className="custom-container bg-white">
          <div className="row">
            <div className="col-lg-6 mb-4 pb-3">
              <DisplayItem />
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
