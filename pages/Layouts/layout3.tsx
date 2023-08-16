import React, { useEffect } from "react";
import Layout3Section from "../../views/layouts/layout3";
import SliderSection from "../../views/layouts/layout3/Slider";
import BigBanner from "../../views/layouts/layout3/BigBanner";
import DiscountBanner from "../../views/layouts/widgets/discount-banner";
import TabProduct from "../../views/layouts/widgets/Tab-Product/TabProduct";
import HotDeal from "../../views/layouts/layout3/HotDeal";
import CollectionBanner from "../../views/layouts/layout3/CollectionBanner";
import DealBanner from "../../views/layouts/widgets/dealBanner";
import Category from "../../views/layouts/widgets/roundedCategory";
import ProductBox1 from "../../views/layouts/widgets/slider-product/slider-product1";
import Testimonial from "../../views/layouts/widgets/testimonial";
import InstagramSection from "../../views/layouts/widgets/instagram/instagram1";
import BannerSection from "../../views/layouts/layout3/Banner";
import Contact from "../../views/layouts/widgets/contact-us";
import Services from "../../views/layouts/widgets/services";
import DiscountCoupon from "../../views/layouts/widgets/discountCoupon";
import NewsLatter from "views/Containers/news-letter";

const Layout3 = () => {
  useEffect(() => {
    document.documentElement.classList.remove(localStorage.getItem("color"));
    localStorage.setItem("color", "color-3");
    document.documentElement.classList.add(localStorage.getItem("color"));
  }, []);
  return (
    <>
      <NewsLatter />
      <Layout3Section>
        <SliderSection />
        <BigBanner />
        <section className="services">
          <Services />
        </section>
        <DiscountBanner />
        <TabProduct effect="icon-center" />
        <HotDeal />
        <CollectionBanner />
        <section className="deal-banner">
          <DealBanner />
        </section>
        <section className="rounded-category">
          <Category />
        </section>
        <div className="title1 section-mb-space">
          <h4>Special Products</h4>
        </div>
        <div className="section-pb-space">
          <ProductBox1 hoverEffect="icon-center" />
        </div>
        <BannerSection />
        <section className="testimonial testimonial-inverse">
          <Testimonial />
        </section>
        <section className="instagram">
          <InstagramSection />
        </section>
        <section className="box-category section-py-space">
          <DiscountCoupon />
        </section>
        <Contact />
      </Layout3Section>
    </>
  );
};

export default Layout3;
