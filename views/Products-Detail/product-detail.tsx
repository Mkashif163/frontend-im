import React, { useContext, useState } from "react";
import { Modal, ModalHeader, ModalBody, Input } from "reactstrap";
import ImageGroup from "./common/ImageGroup";
import CountDownComponent from "views/layouts/widgets/CountDownComponent";
import { CartContext } from "helpers/cart/cart.context";
import { CurrencyContext } from "helpers/currency/CurrencyContext";
import { WishlistContext } from "helpers/wishlist/wish.context";
import ImageSwatch from "./common/ImageSwatch";

interface ProductRightProps {
  item: any;
  changeColorVar: Function;
  bundle: boolean;
  swatch: boolean;
}

const ProductDetail: React.FC<ProductRightProps> = ({ item, changeColorVar, bundle, swatch }) => {
  const [modal, setModal] = useState(false);
  const [qty, setQty] = useState(1);
  const [stock, setStock] = useState("InStock");
  const [activesize, setSize] = useState("");
  const { addToWish } = React.useContext(WishlistContext);

  const { addToCart } = useContext(CartContext);

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

  const uniqueColor = [];
  const uniqueSize = [];
  return (
    <div className="product-right">
      <h2>{item.title}</h2>
      <h4>
        <del>
          {symbol}
          {item.price * value}
        </del>
        <span>{item.discount}% off</span>
      </h4>
      <h3>
        {symbol}
        {((item.price - item.price * (item.discount / 100)) * value).toFixed(2)}
      </h3>{" "}
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
      <div className="border-product pb-0">
        <h6 className="product-title">Time Reminder</h6>
        <CountDownComponent />
      </div>
    </div>
  );
};

export default ProductDetail;
