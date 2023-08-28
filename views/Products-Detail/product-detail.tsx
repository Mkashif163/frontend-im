import React, { useContext, useState } from "react";
import { Modal, ModalHeader, ModalBody, Input, Form } from "reactstrap";
import ImageGroup from "./common/ImageGroup";
import CountDownComponent from "views/layouts/widgets/CountDownComponent";
import { CartContext } from "helpers/cart/cart.context";
import { CurrencyContext } from "helpers/currency/CurrencyContext";
import { WishlistContext } from "helpers/wishlist/wish.context";
import ImageSwatch from "./common/ImageSwatch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faCircleCheck, faMedal, faTags, faTruckField } from '@fortawesome/free-solid-svg-icons'

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
  const [modal, setModal] = useState(false);
  const [qty, setQty] = useState(1);
  const [stock, setStock] = useState("InStock");
  const [activesize, setSize] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [condition, setCondition] = useState("");

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  console.log(item)
  console.log(qty)

  const visibleOffers = showAll ? dummyOffers : dummyOffers.slice(0, 1);
  const { addToWish } = React.useContext(WishlistContext);

  const { addToCart } = useContext(CartContext);

  totalReview = 28;
  const model = '1756-A7-1756-A7';

  const { selectedCurr } = React.useContext(CurrencyContext);
  const { symbol, value } = selectedCurr;

  const onOpenModal = () => {
    setModal(true);
  };

  const onCloseModal = () => {
    setModal(false);
  };

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
  const title = "Rockwell CompactLogix";


  const uniqueColor = [];
  const uniqueSize = [];
  return (
    <div className="product-right">
      <div className="title">
        <h2>{title}</h2>
        <h5>Model: {model}</h5>
      </div>

      <div className="price-box">
        <h3>
          {symbol}
          {((item.price - item.price * (item.discount / 100)) * value).toFixed(2)}
        </h3>{" "}
        <h4>
          <del>
            {symbol}
            {item.price * value}
          </del>
          <span>{item.discount}% off</span>
        </h4>

      </div>
      <div className="reviews">
        <div className="rating three-star mb-2">
          <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
        </div>
        <div className="review">
          <a href="#">({totalReview} Reviews)</a>
        </div>
        <div className={item.stock > 0 ? "stock" : "out-stock"}>
          <a href="#">{stock}</a>
        </div>
      </div>

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

      <div className="product-description border-product">
        <div className="condition-box">
          <div>
            <input
              type="checkbox"
              checked={condition === 'New'}
              onChange={() => setCondition('New')}
            />
            <span className="condition-text">New</span>
          </div>
          <div>
            <input
              type="checkbox"
              checked={condition === 'Used'}
              onChange={() => setCondition('Used')}
            />
            <span className="condition-text">Used</span>
          </div>
        </div>
        <div className="supplier-brand">
          <div className="brnd-div">
            <p><span><FontAwesomeIcon icon={faAward}  size="lg" /></span> Brand:</p>
            <img src="/images/layout-2/rounded-cat/7.png" className="img-fluid" alt="brand" />
          </div>
          <div className="suplier-div">
            <p><span><FontAwesomeIcon icon={faTruckField}  size="lg" /></span> Suplier:</p>
            <img src="/images/layout-2/rounded-cat/1.png" className="img-fluid" alt="brand" />
          </div>
        </div>
      </div>

      {item.variants &&
        item.variants.map((vari) => {
          var findItem = uniqueColor.find((x) => x.color === vari.color);
          if (!findItem && vari.color) uniqueColor.push(vari);
          var findItemSize = uniqueSize.find((x) => x === vari.size);
          if (!findItemSize && vari.size) uniqueSize.push(vari.size);
        })}
      {swatch ? <ImageSwatch item={item} changeColorVar={changeColorVar} /> : ""}

      <div className="product-description border-product">
        <h6 className="product-title">select color</h6>
        {changeColorVar === undefined
          ? !!uniqueColor.length && (
            <ul className="color-variant">
              {uniqueColor.map((vari, i) => {
                return <li className={vari.color} key={i} title={vari.color}></li>;
              })}
            </ul>
          )
          : !!uniqueColor.length && (
            <ul className="color-variant">
              {uniqueColor.map((vari, i) => {
                return <li className={vari.color} key={i} title={vari.color} onClick={() => changeColorVar(i)}></li>;
              })}
            </ul>
          )}
        {!!uniqueSize.length && (
          <>
            <h6 className="product-title size-text">
              select size{" "}
              <span>
                <a data-toggle="modal" data-target="#sizemodal" onClick={onOpenModal}>
                  size chart
                </a>
              </span>
            </h6>
            <Modal isOpen={modal} centered={true} toggle={onCloseModal}>
              <ModalHeader>
                Sheer Straight Kurta <i className="fa fa-close modal-close" onClick={onCloseModal}></i>
              </ModalHeader>
              <ModalBody>
                <div className="modal-body">
                  <img src="/images/size-chart.jpg" alt="" className="img-fluid " />
                </div>
              </ModalBody>
            </Modal>

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
            addToCart(item);
          }}>
          add to cart
        </a>
        <a href="/pages/account/checkout" className="btn btn-normal">
          buy now
        </a>
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
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,
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


      {bundle && <ImageGroup />}
    </div>


  );
};

export default ProductDetail;
