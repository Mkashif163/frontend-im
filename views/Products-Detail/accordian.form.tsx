/* eslint-disable array-callback-return */

import React, { useContext, useState } from "react";
import { Input } from "reactstrap";
import CountDownComponent from "../layouts/widgets/CountDownComponent";
import { CartContext } from "helpers/cart/cart.context";
import { CurrencyContext } from "helpers/currency/CurrencyContext";

interface ProductRightProps {
  item: any;
  changeColorVar: Function;
}

const AccordianForm: React.FC<ProductRightProps> = ({ item, changeColorVar }) => {
  const [qty, setQty] = useState(1);
  const [stock, setStock] = useState("InStock");

  const { addToCart } = useContext(CartContext);

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

  const uniqueColor = [];
  return (
    <>
      <div className="product-right product-form-box">
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
        </h3>

        {item.variants &&
          item.variants.map((vari) => {
            var findItem = uniqueColor.find((x) => x.color === vari.color);
            if (!findItem) uniqueColor.push(vari);
          })}
        {uniqueColor.length > 0 ? (
          <ul className="color-variant">
            {uniqueColor.map((vari, i) => {
              return <li className={vari.color} key={i} title={vari.color} onClick={() => changeColorVar(i)}></li>;
            })}
          </ul>
        ) : (
          ""
        )}

        <div className="product-description border-product">
          <h6 className="product-title">Time Reminder</h6>
          <CountDownComponent />
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
          <a href="#" data-toggle="modal" data-target="#addtocart" className="btn btn-normal" onClick={() => addToCart(item)}>
            add to cart
          </a>{" "}
          <a href="/pages/account/checkout" className="btn btn-normal">
            buy now
          </a>
        </div>
      </div>
    </>
  );
};

export default AccordianForm;
