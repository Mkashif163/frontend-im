import React, { useState } from "react";
import { NextPage } from "next";
import { WishlistContext } from "../../../../helpers/wishlist/wish.context";
import { Media } from "reactstrap";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Wishlist: NextPage = () => {
  const [openWishlist, setOpenWishlist] = useState(false);
  const { wishlistItems, removeFromWish } = React.useContext(WishlistContext);
  const totalItem = wishlistItems.length;
  const { t } = useTranslation();
  return (
    <>
      <li className="mobile-wishlist " onClick={() => setOpenWishlist(!openWishlist)}>
        <a>
          <i className="icon-heart"></i>
          <div className="cart-item">
            <div>
              {totalItem} {t("item")} <span>{t("wishlist")}</span>
            </div>
          </div>
        </a>
      </li>

      <div id="wishlist_side" className={`add_to_cart right ${openWishlist ? "open-side" : ""}`}>
        <a href="#" className="overlay" onClick={() => setOpenWishlist(!openWishlist)}></a>
        <div className="cart-inner">
          <div className="cart_top">
            <h3>my wishlist</h3>
            <div className="close-cart" onClick={() => setOpenWishlist(!openWishlist)}>
              <a href="#">
                <i className="fa fa-times" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          {wishlistItems && wishlistItems.length > 0 ? (
            <>
              <div className="cart_media">
                <ul className="cart_product">
                  {wishlistItems &&
                    wishlistItems.map((item, index) => {
                      return (
                        <li key={index}>
                          <div className="media">
                            <a href="#">
                              <Media alt="" className="me-3" src={item.url} />
                            </a>
                            <div className="media-body">
                              <a href="#">
                                <h4>{item.name}</h4>
                              </a>
                              {/* <h4 className="theme-color">
                                <span>{item.type}</span>
                              </h4> */}
                              <h5>
                                <span> ${item.new_sale_price}</span>
                              </h5>
                            </div>
                          </div>
                          <div className="close-circle">
                            <a href="#" onClick={() => removeFromWish(item)}>
                              <i className="ti-trash" aria-hidden="true"></i>
                            </a>
                          </div>
                        </li>
                      );
                    })}
                </ul>
                <ul className="cart_total">
                  <li>
                    <div className="buttons">
                      <Link href="/pages/account/wishlist">
                        <a className="btn btn-normal btn-block  view-cart">view wislist</a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="empty-cart-cls text-center">
              <img src="/images/empty-wishlist.png" className="img-fluid mb-4" alt="" />
              <h3>
                <strong>Your wishlist is Empty</strong>
              </h3>
              <h4>Explore more shortlist some items.</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
