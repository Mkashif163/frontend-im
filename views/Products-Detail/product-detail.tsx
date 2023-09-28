import React, { useContext, useState } from "react";
import { Input, Form } from "reactstrap";
import ImageGroup from "./common/ImageGroup";
import { CartContext } from "helpers/cart/cart.context";
import { CurrencyContext } from "helpers/currency/CurrencyContext";
import { WishlistContext } from "helpers/wishlist/wish.context";
import ImageSwatch from "./common/ImageSwatch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faMedal, faTags } from '@fortawesome/free-solid-svg-icons'
import Loader from "common/Loader";

interface ProductRightProps {
  item: any;
  changeColorVar: Function;
  bundle: boolean;
  swatch: boolean;
  totalReview: number;
  offers: number;
}

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
    description: 'Use code "OFF05" Applicable on orders with cart value over $50',
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
];

const ProductDetail: React.FC<ProductRightProps> = ({ item, changeColorVar, bundle, swatch, totalReview, offers }) => {

  const [qty, setQty] = useState(1);
  const [stock, setStock] = useState("InStock");
  const [activesize, setSize] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState("New");

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };


  const visibleOffers = showAll ? dummyOffers : dummyOffers.slice(0, 1);
  const { addToWish } = React.useContext(WishlistContext);

  const { addToCart } = useContext(CartContext);

  totalReview = 28;

  const { selectedCurr } = React.useContext(CurrencyContext);
  const { symbol, value } = selectedCurr;


  const minusQty = () => {
    if (qty > 1) {
      setStock("InStock");
      setQty(qty - 1);
    }
  };

  const plusQty = () => {
    if (item.stock >= qty) {
      setQty(qty + 1);
    } else {
      setStock("Out of Stock !");
    }
  };
  const changeQty = (e: any) => {
    setQty(parseInt(e.target.value));
  };
  const productData = item;

  console.log("productData", productData);



  const calculateDiscountPercentage = (originalPrice, salePrice) => {
    const difference = originalPrice - salePrice;
    return ((difference / originalPrice) * 100).toFixed(0); // Rounded to nearest whole number
  }

  const originalPrice = selectedCondition === "New" ? parseFloat(productData.new_price) : parseFloat(productData.refurnished_price);
  const salePrice = selectedCondition === "New" ? parseFloat(productData.new_sale_price) : parseFloat(productData.refurnished_sale_price);
  const discountPercentage = calculateDiscountPercentage(originalPrice, salePrice);
  const uniqueSize = [];
  return (
    <>
      {productData && <div className="product-right">
        <div className="title">
          <h2>{productData.name}</h2>
          <h5>Model: {productData.model_no}</h5>
        </div>

        <div className="price-box">
          <h3>
            {symbol}
            {selectedCondition === "New" ? productData.new_sale_price : productData.refurnished_sale_price}
          </h3>{" "}
          <h4>
            <del>
              {symbol}
              {selectedCondition === "New" ? productData.new_price : productData.refurnished_price}
            </del>
            <span>{discountPercentage}% off</span>
          </h4>
        </div>

        <div className="condition-box">
          <div>
            <span
              className={`condition-text ${selectedCondition === "New" ? "active bg-black" : ""
                }`}
              onClick={() => setSelectedCondition("New")}
            >
              New
            </span>
          </div>
          <div>
            <span
              className={`condition-text ${selectedCondition === "Used" ? "active bg-black" : ""
                }`}
              onClick={() => setSelectedCondition("Used")}
            >
              Used
            </span>
          </div>
          <div className={item.stock > 0 ? "stock" : "out-stock"}>
            <a href="#">{stock}</a>
          </div>
        </div>

        <div className="reviews">
          <div className="rating three-star mb-2">
            <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
          </div>
          <div className="review">
            <a href="#">({totalReview} Reviews)</a>
          </div>

        </div>

        <div className="product-description border-product">


          <div className="best-seller">
            <div className="seller-container">
              <FontAwesomeIcon size="xl" className="seller-icon" icon={faMedal} />
              <p className="seller">Best Seller</p>
            </div>
            <div className="seller-container">
              <FontAwesomeIcon icon={faCircleCheck} size="lg" style={{ color: "#20cb53", }} />
              <p className="seller">Verified Seller</p>
            </div>
          </div>
          <div className="supplier-brand">
            <div className="brnd-div">
              <p>Brand:</p>
              <h4>{productData.brand.brand_name}</h4>
            </div>
            <div className="brnd-div">
              <p>Suplier:</p>
              <h4>{productData.make}</h4>
            </div>
          </div>
          {/* {item.variants &&
            item.variants.map((vari) => {
              var findItem = uniqueColor.find((x) => x.color === vari.color);
              if (!findItem && vari.color) uniqueColor.push(vari);
              var findItemSize = uniqueSize.find((x) => x === vari.size);
              if (!findItemSize && vari.size) uniqueSize.push(vari.size);
            })}
          {swatch ? <ImageSwatch item={item} changeColorVar={changeColorVar} /> : ""} */}

          <div className="product-description border-product row">
            <div className="colors col-3">
              <h6 className="product-title">Color</h6>
              {productData.colors && (
                <ul className="color-variant">
                  {productData.colors.map((vari, i) => {
                    return <li
                      key={vari.id}
                      className={`color-swatch ${vari.color.color_code}`}

                      style={{ backgroundColor: vari.color.color_code }}
                    ></li>
                  })}
                </ul>
              )}
            </div>
            <div className="product-size col-6">
              {!!uniqueSize.length && (
                <>
                  <h6 className="product-title size-text">
                    select size{" "}
                    {/* <span>
                <a data-toggle="modal" data-target="#sizemodal" onClick={onOpenModal}>
                  size chart
                </a>
              </span> */}
                  </h6>
                  {/* <Modal isOpen={modal} centered={true} toggle={onCloseModal}>
              <ModalHeader>
                Sheer Straight Kurta <i className="fa fa-close modal-close" onClick={onCloseModal}></i>
              </ModalHeader>
              <ModalBody>
                <div className="modal-body">
                  <img src="/images/size-chart.jpg" alt="" className="img-fluid " />
                </div>
              </ModalBody>
            </Modal> */}

                  <div className="size-box">
                    <ul>
                      {uniqueSize.map((size, i) => (
                        <li className={`${size === activesize ? "active" : ""}`} key={i}>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setSize(size);
                            }}>
                            {size}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>

          </div>
          <div className="product-description border-product">
            {stock !== "InStock" ? <span className="instock-cls">{stock}</span> : ""}
            <h6 className="product-title">quantity</h6>
            <div className="qty-box">
              <div className="input-group">
                <span className="input-group-prepend">
                  <button type="button" className="btn quantity-left-minus" data-type="minus" data-field="" onClick={minusQty}>
                    <i className="ti-angle-left"></i>
                  </button>
                </span>
                <Input type="text" name="quantity" className="form-control input-number" value={qty} onChange={changeQty} />
                <span className="input-group-prepend">
                  <button type="button" className="btn quantity-right-plus" data-type="plus" data-field="" onClick={plusQty}>
                    <i className="ti-angle-right"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div className="product-buttons">
            <a
              href="#"
              data-toggle="modal"
              data-target="#addtocart"
              className="btn btn-normal"
              onClick={(e) => {
                e.preventDefault();
                addToCart(item, qty, selectedCondition)
              }}>
              add to cart
            </a>
            <a
              href="/pages/account/checkout"
              onClick={(e) => {
                e.preventDefault();
                addToCart(item, qty, selectedCondition);
                document.body.style.overflow = "visible";
                window.location.href = "/pages/account/checkout"; // Navigate after addToCart
              }}
              className="btn btn-normal"
            >
              Buy Now
            </a>
          </div>
        </div>



        <div className="product-description border-product">
          <div className="coupens">

            <div className="coupens-title">
              <FontAwesomeIcon className="tag" icon={faTags} size="xl" />
              <h6 className="product-title">{dummyOffers.length} Offers availble</h6>
            </div>

            <div className="offers">
              <ul className="Offers-list">
                {visibleOffers.map((offer, index) => (
                  <li key={index}>
                    <span className="offer">{offer.offerCode}</span>
                    <div className="offer-details">
                      <h5>{offer.title}</h5>
                      <p>{offer.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <h5 className="show-offer" onClick={toggleShowAll}>
                {showAll ? 'Show Less' : 'Show More'}
              </h5>
            </div>

          </div>
        </div>

        <div className="border-product">
          <h6 className="product-title">product details</h6>
          <p>
            {productData.description}
          </p>
        </div>
        <div className="border-product">
          <div className="product-icon">
            <ul className="product-social">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-rss"></i>
                </a>
              </li>
            </ul>
            <div className="d-inline-block">
              <button
                className="wishlist-btn"
                onClick={() => {
                  addToWish(item);
                }}>
                <i className="fa fa-heart"></i>
                <span className="title-font">Add To WishList</span>
              </button>
            </div>
          </div>
        </div>
        <div className="product-description border-product">
          <div className="payment-methods d-flex gap-5">
            <div ><h6>Return</h6></div>
            <div>Return or Exchange this product within {selectedCondition === "New" ? productData.new_return_days : productData.refurnished_return_days}-Days | See details</div>
          </div>
          <div className="payment-methods d-flex gap-5">
            <div ><h6>Warranty</h6></div>
            <div>{selectedCondition === "New" ? productData.new_warranty_days : productData.refurnished_warranty_days} Days Manufacturer Warranty</div>
          </div>
          <div className="payment-methods d-flex gap-4  ">
            <div ><h6>Payment methods</h6></div>
            <div><img src="/images/layout-2/7-07.png" alt="" className="w-50" /></div>
          </div>
        </div>


        {bundle && <ImageGroup />}
      </div>}
    </>
  );
};

export default ProductDetail;
