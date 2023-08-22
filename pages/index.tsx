import React from "react";
import { NextPage } from "next";
import Layouts from "../views/layouts/layout1";
import SliderBanner from "../views/layouts/layout1/slider";
import CollectionBanner from "../views/layouts/layout1/collection-banner";
// import DiscountBanner from "../views/layouts/widgets/discount-banner";
import TabProduct from "../views/layouts/widgets/Tab-Product/TabProduct";
import CollectionBannerTwo from "../views/layouts/layout1/collection-banner-two";
// import DealBanner from "../views/layouts/widgets/dealBanner";
import RatioSquare from "../views/layouts/widgets/ratio-square";
import CollectionBannerThree from "../views/layouts/layout1/collection-banner-three";
// import HotDeal from "../views/layouts/layout1/hot-deal";
// import Testimonial from "../views/layouts/widgets/testimonial";
// import SpecialProduct from "../views/layouts/widgets/title-section";
// import InstagramSection from "../views/layouts/widgets/instagram/instagram1";
import ContactBanner from "../views/layouts/widgets/contact-us";
import Category from "../views/layouts/widgets/roundedCategory";
// import DiscountCoupon from "../views/layouts/widgets/discountCoupon";
// import NewsLatter from "views/Containers/news-letter";
// import Loader from "common/Loader";

const Home: NextPage = () => {
  return (
    // <Loader>
    <>
      {/* <NewsLatter /> */}
      <Layouts>
        <div className="bg-light">
          <SliderBanner />
          <CollectionBanner />
          {/* <DiscountBanner /> */}
          <TabProduct effect="icon-inline" />
          <TabProduct effect="icon-inline" />
          <CollectionBannerTwo />
          {/* <section className="deal-banner">
            <DealBanner />
          </section> */}
          <TabProduct effect="icon-inline" />
          <section className="rounded-category">
            <Category />
          </section>
          <TabProduct effect="icon-inline" />
          {/* <section className="box-category section-py-space">
            <DiscountCoupon />
          </section> */}
          <RatioSquare />
          <CollectionBannerThree />
          {/* <HotDeal /> */}
          {/* <section className="testimonial testimonial-inverse">
            <Testimonial />
          </section> */}
          {/* <SpecialProduct hoverEffect="icon-inline" /> */}
          {/* <section className="instagram">
            <InstagramSection />
          </section> */}
          <ContactBanner />
        </div>
      </Layouts>
      {/* </Loader> */}
    </>
  );
};

export default Home;
