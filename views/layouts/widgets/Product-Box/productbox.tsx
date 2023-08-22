import React, { Fragment, useContext, useState } from "react";
import { Media, Modal, ModalBody } from "reactstrap";
import { CurrencyContext } from "../../../../helpers/currency/CurrencyContext";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Slider from "react-slick";
import Link from "next/link";
import Img from "utils/BgImgRatio";

interface productType {
  id: Number;
  title: string;
  model: string;
  newLabel: boolean;
  sale: Boolean;
  price: number;
  discount: number;
  stock: number;
  images: any;
  layout: string;
  suplier: any;
  brand: string;
  condition: string;
  addCart: Function;
  addWish: Function;
  addCompare: Function;
  hoverEffect: any;
  item: any;
  type: Array<string>;
}

const ProductBox: NextPage<productType> = ({ layout, id, item, title, brand, newLabel, sale, suplier, condition, model, price, discount, stock, images, addCart, addCompare, addWish, hoverEffect }) => {
  const currencyContext = useContext(CurrencyContext);
  const para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled it to make a type specimen book"
  const { selectedCurr } = currencyContext;
  const [imgsrc, setImgsrc] = useState("");
  const imgChange = (src) => {
    setImgsrc(src);
  };
  const slider2 = React.useRef<Slider>();

  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [stockState, setStockState] = useState("InStock");
  condition = "New";
  const uniqueSize = [];
  const uniqueColor = [];
  const titleProps = title.split(" ").join("");
  const changeColorVar = (img_id) => {
    slider2.current.slickGoTo(img_id);
  };

  const minusQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setStockState("InStock");
    }
  };

  const plusQty = () => {
    if (stock > quantity) setQuantity(quantity + 1);
    else setStockState("Out of Stock !");
  };

  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const QuickView = () => {
    setModal(!modal);
  };

  const clickProductDetail = () => {
    router.push(`/product-details/${id}` + "-" + `${titleProps}`);
  };
  // title = "Rockwell ControlLogix 5570 PLC kashif aasbda";
  const shortTitle = title.substring(0, 30);
  model = '1756-A7-1756-A7-1756-A7'
  const shortModel = model.substring(0, 30);

  // const trimedPara = para.substring(0, 10);
  return (
    <Fragment>
      <div className="product-box">

        <div className="product-imgbox">
          <div className="product-front" onClick={clickProductDetail}>
            <Img src={`/images/${imgsrc || images[0].src}`} className="img-fluid" alt="product" />
          </div>
          <ul className="product-thumb-list">
            {images.map((pic, i) => (
              <li className={`grid_thumb_img ${pic.src === imgsrc ? "active" : ""}`} key={i}>
                <a>
                  <Img
                    src={`/images/${pic.src}`}
                    className="img-fluid"
                    onMouseEnter={() => imgChange(pic.src)}
                    alt={pic.src}
                    onClick={() => {
                      imgChange(pic.src);
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className={`product-icon ${hoverEffect}`}>
            <button onClick={() => addCart()}>
              <i className="ti-bag"></i>
            </button>
            <a onClick={() => addWish()}>
              <i className="ti-heart" aria-hidden="true"></i>
            </a>
            <a href="#" title="Quick View" onClick={() => QuickView()}>
              <i className="ti-search" aria-hidden="true"></i>
            </a>
            <a href="#" title="Compare" onClick={() => addCompare()}>
              <i className="ti-reload" aria-hidden="true"></i>
            </a>
          </div>
          {newLabel && (
            <div className="new-label1">
              <div>new</div>
            </div>
          )}
          {sale && <div className="on-sale1">on sale</div>}
        </div>

        {/* prouct box footer */}

        <div className="product-detail detail-inline ">
          <div className="detail-title">
            <Link href={`/product-details/${id}` + "-" + `${titleProps}`}>
              <h6 className="price-title">{shortTitle}...</h6>
            </Link>
            <div className="detail-left">
              <Link href={`/product-details/${id}`}>
                <h6 className="model-number">{shortModel}...</h6>
              </Link>

              {/* <p>
                {trimedPara}<Link href={`/product-details/${id}` + "-" + `${titleProps}`}>...read more</Link>
              </p> */}
              <ul className="rating-star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </ul>
              <div className="condition-box">
                <span className="condition-text">New</span>
                <span className="condition-text">Used</span>
              </div>
              {/* <div className="brand-div">
                  <img src="https://industrymall.net/root/upload/brands/small/631994900cb6crockwell-logo.png" className="img-fluid" alt="brand" width="80px"/>
              </div> */}
            </div>
            <div className="detail-right">

              <div className="check-price">
                {selectedCurr.symbol}
                {(price * selectedCurr.value).toFixed(2)}{" "}
              </div>

              <div className="price">
                <div className="price">
                  {selectedCurr.symbol}
                  {((price - price * (discount / 100)) * selectedCurr.value).toFixed(2)}
                </div>
              </div>
              <div className={stock > 0 ? "stock" : "out-stock"}>
                {stock > 0 ? "In Stock" : "Out of Stock"}
              </div>
              {/* <div>
                  <select name="location" id="location">
                    <option value="paksitan">Paksitan</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                  </select>
                </div>
                <div className="suplier-div">
                  <img src="https://industrymall.net/root/upload/users/im.png" className="img-fluid" alt="suplier" width="70px"/>
                </div> */}
            </div>
          </div>
        </div>
      </div>
      <Modal className="fade bd-example-modal-lg theme-modal show quick-view-modal" isOpen={modal} toggle={() => setModal(!modal)} centered size="lg">
        <ModalBody>
          <button type="button" className="close" onClick={() => setModal(!modal)}>
            <span>&times;</span>
          </button>
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              <Slider ref={(slider) => (slider2.current = slider)}>
                {item &&
                  item.images.map((img: any, i: any) => {
                    return (
                      <div key={i}>
                        <Media src={`/images/${img.src}`} alt="" className="img-fluid  image_zoom_cls-0" />
                      </div>
                    );
                  })}
              </Slider>
            </div>
            <div className="col-lg-6 rtl-text">
              <div className="product-right">
                <h2>{item?.title}</h2>
                <h3>${item?.price}</h3>
                <ul className="color-variant">
                  {uniqueColor.map((vari, i) => {
                    return <li className={vari.color} key={i} title={vari.color} onClick={() => changeColorVar(i)}></li>;
                  })}
                </ul>
                <div className="border-product">
                  <h6 className="product-title">product details</h6>
                  <p>{item?.description}</p>
                </div>
                <div className="product-description border-product">
                  <div className="size-box">
                    <ul>
                      {uniqueSize.map((size, i) => (
                        <li key={i}>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            {size}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {stockState !== "InStock" ? <span className="instock-cls">{stockState}</span> : ""}
                  <h6 className="product-title">quantity</h6>
                  <div className="qty-box">
                    <div className="input-group">
                      <span className="input-group-prepend">
                        <button type="button" className="btn quantity-left-minus" onClick={minusQty}>
                          <i className="ti-angle-left"></i>
                        </button>
                      </span>
                      <input type="text" name="quantity" className="form-control input-number" value={quantity} onChange={changeQty} />
                      <span className="input-group-prepend">
                        <button type="button" className="btn quantity-right-plus" onClick={plusQty}>
                          <i className="ti-angle-right"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-buttons">
                  <a href="#" className="btn btn-normal" onClick={() => addCart(item, quantity)}>
                    add to cart
                  </a>
                  <a href="#" className="btn btn-normal" onClick={() => clickProductDetail()}>
                    view detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default ProductBox;
