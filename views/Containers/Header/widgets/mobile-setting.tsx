import React, { useContext, useState } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { CurrencyContext } from "../../../../helpers/currency/CurrencyContext";
import { useTranslation } from "react-i18next";
import dataa from "../../../../data/langConfig.json";

const GET_CURRENCY = gql`
  query getCurrency {
    currency {
      currency
      symbol
      value
    }
  }
`;

const MobileSetting: React.FC = () => {
  const { i18n } = useTranslation();
  const { data = { currency: [] } } = useQuery(GET_CURRENCY);
  const currencyContext = useContext(CurrencyContext);
  const { selectedCurrency } = currencyContext;
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.val);
    setOpen(false);
  };

  return (
    // <!-- add to  setting bar  start-->
    <>
      <li
        className="mobile-setting"
        onClick={() => {
          setOpen(true);
        }}>
        <i className="icon-settings"></i>
      </li>
      <div id="mySetting" className={`add_to_cart right ${open ? "open-side" : ""}`}>
        <a
          href="#"
          className="overlay"
          onClick={() => {
            setOpen(false);
          }}></a>
        <div className="cart-inner">
          <div className="cart_top">
            <h3>my setting</h3>
            <div className="close-cart">
              <a
                href="#"
                onClick={() => {
                  setOpen(false);
                }}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="setting-block">
            <div>
              <h5>language</h5>
              <ul>
                {dataa.map((lang: any, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      onClick={() => {
                        changeLanguage(lang);
                      }}>
                      {lang.lang}
                    </a>
                  </li>
                ))}
              </ul>
              <h5>currency</h5>
              <ul>
                {data.currency.map((cur, i) => (
                  <li key={i}>
                    <div
                      onClick={() => {
                        selectedCurrency(cur);
                        setOpen(false);
                      }}>
                      {cur.symbol} {cur.currency}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSetting;
