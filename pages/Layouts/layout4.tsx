import React, { useEffect } from "react";
import Layout4Section from "../../views/layouts/layout4";

import SliderSection from "../../views/layouts/layout4/slider";
import CollectionBannerSection from "../../views/layouts/layout4/collectionBanner";
import TopBrand from "../../views/layouts/widgets/TopBrand";
import HotDeal from "../../views/layouts/layout4/hotDeal";
import TabProduct from "../../views/layouts/widgets/Tab-Product/TabProduct";
import Services from "../../views/layouts/widgets/services";
import CollectionBanner from "../../views/layouts/layout4/CollectionBanner2";
import RatioSquare from "../../views/layouts/widgets/ratio-square";
import DiscountCoupon from "../../views/layouts/widgets/discountCoupon";
import DealBanner from "../../views/layouts/widgets/dealBanner";
import Category from "../../views/layouts/widgets/roundedCategory";
import SpecialProduct from "../../views/layouts/widgets/title-section";
import Testimonial from "../../views/layouts/widgets/testimonial";
import Instagram from "../../views/layouts/widgets/instagram/instagram3";
import Contact from "../../views/layouts/widgets/contact-us";
import NewsLatter from "views/Containers/news-letter";

const Layout4 = () => {
  useEffect(() => {
    document.documentElement.classList.remove(localStorage.getItem("color"));
    localStorage.setItem("color", "color-4");
    document.documentElement.classList.add(localStorage.getItem("color"));
  }, []);
  return (
    <>
      <NewsLatter />
      <Layout4Section>
        <SliderSection />
        <CollectionBannerSection />
        <section className="brand-panel section-py-space">
          <div className="brand-panel-box">
            <TopBrand />
          </div>
        </section>
        <HotDeal />
        <TabProduct effect="icon-center" />
        <section className="services">
          <Services />
        </section>
        <CollectionBanner />
        <RatioSquare />
        <section className="box-category section-pt-space section-pb-space">
          <DiscountCoupon />
        </section>
        <section className="deal-banner deal-banner-inverse">
          <DealBanner />
        </section>
        <section className="rounded-category rounded-category-inverse">
          <Category />
        </section>
        <SpecialProduct hoverEffect="icon-center" />
        <section className="testimonial">
          <Testimonial />
        </section>
        <Instagram />
        <Contact />
      </Layout4Section>
    </>
  );
};

export default Layout4;
