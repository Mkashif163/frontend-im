import React, { Fragment, useContext, useState } from "react";
import { Media, Modal, ModalBody, Badge } from "reactstrap";
import { CurrencyContext } from "../../../../helpers/currency/CurrencyContext";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Slider from "react-slick";
import Link from "next/link";

interface productType {
  product: any;
  addCart: Function;
  addWish: Function;
  addCompare: Function;
  hoverEffect: any;
}

const ProductBox: NextPage<productType> = ({ product, addCart, addCompare, addWish, hoverEffect }) => {
  const currencyContext = useContext(CurrencyContext);
  const { selectedCurr } = currencyContext;
  const slider2 = React.useRef<Slider>();
  const stock = 29;

  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [stockState, setStockState] = useState("InStock");
  const [selectedCondition, setSelectedCondition] = useState("New");
  const uniqueSize = [];
  const uniqueColor = [];
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

  const pathId = product && product.id;

  return (
    <>
      {product && <Fragment>
        <div className="product-box" >
          <div className="product-imgbox bg-white">
            <Link href={`/product-details/${pathId}`}>
              <div className="product-front ">
                <Media src={product.url} className="img-fluid" alt="product" />
              </div>
            </Link>

            <div className={`product-icon `}>
              <button onClick={() => addCart(product, quantity)}>
                <i className="ti-bag"></i>
              </button>
              <a onClick={() => addWish(product)}>
                <i className="ti-heart" aria-hidden="true"></i>
              </a>
              <a href="#" title="Quick View" onClick={() => QuickView()}>
                <i className="ti-search" aria-hidden="true"></i>
              </a>
              <a href="#" title="Compare" onClick={() => addCompare(product)}>
                <i className="ti-reload" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="product-detail detail-inline">
            <div className="detail-title">

              <h6 className="price-title">{product.name.substring(0, 25)}{product.name.length > 25 ? " ..." : ""}</h6>

              <div className="detail-left">
                {product.model && <h6 className="model-number">{product.model_no.substring(0, 12)}{product.model_no.length > 8 ? "..." : ""}</h6>}
                <ul className="rating-star">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </ul>
                <div className="condition-box d-flex mt-3">
                  <div>
                    <span
                      className={`condition-text rounded ${selectedCondition === "New" ? "active bg-black" : ""
                        }`}
                      onClick={() => setSelectedCondition("New")}
                    >
                      New
                    </span>
                  </div>
                  <div>
                    <span
                      className={`condition-text rounded ${selectedCondition === "Used" ? "active bg-black" : ""
                        }`}
                      onClick={() => setSelectedCondition("Used")}
                    >
                      Used
                    </span>
                  </div>
                </div>
              </div>
              <div className="detail-right">
                <div className="check-price">
                  {selectedCurr.symbol}
                  {selectedCondition === "New" ? product.new_sale_price : product.refurnished_sale_price}{" "}
                </div>
                <div className="price">
                  <div className="price">
                    {selectedCurr.symbol}
                    {selectedCondition === "New" ? product.new_sale_price : product.refurnished_sale_price}
                  </div>
                </div>
                <div className={stock > 0 ? "stock" : "out-stock"}>
                  {stock > 0 ? "In Stock" : "Out of Stock"}
                </div>
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

                  <div key={product.id}>
                    <Media src={product.url} alt="" className="img-fluid image_zoom_cls-0" />
                  </div>
                </Slider>
              </div>
              <div className="col-lg-6 rtl-text">
                <div className="product-right">
                  <h2>{product.name}</h2>
                  <h3>${product.new_price}</h3>
                  <ul className="color-variant">
                    {product.colors.map((vari, i) => {
                      return (
                        <li
                          key={i}
                          className={vari.color.name}
                          title={vari.color.name}
                          onClick={() => changeColorVar(i)}
                        ></li>
                      );
                    })}
                  </ul>
                  <div className="border-product">
                    <h6 className="product-title">product details</h6>
                    <p>{product.description}</p>
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
                        <input
                          type="text"
                          name="quantity"
                          className="form-control input-number"
                          value={quantity}
                          onChange={changeQty}
                        />
                        <span className="input-group-prepend">
                          <button type="button" className="btn quantity-right-plus" onClick={plusQty}>
                            <i className="ti-angle-right"></i>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-buttons">
                    <a href="#" className="btn btn-normal" onClick={() => addCart(product, quantity)}>
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
      </Fragment>}
    </>
  );
};
export default ProductBox;
