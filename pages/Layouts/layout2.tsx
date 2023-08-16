import React, { useEffect } from "react";
import Layout2Section from "../../views/layouts/layout2";
import SilderSection from "../../views/layouts/layout2/Silder";
import BannerSection from "../../views/layouts/layout2/Banner";
import TopBrand from "../../views/layouts/widgets/TopBrand";
import MediaSection from "../../views/layouts/layout2/Media";
import DiscountBanner from "../../views/layouts/widgets/discount-banner";
import CollectionBanner from "../../views/layouts/layout2/CollectionBanner";
import TabProduct from "../../views/layouts/widgets/Tab-Product/TabProduct";
import DealBanner from "../../views/layouts/widgets/dealBanner";
import Category from "../../views/layouts/widgets/roundedCategory";
import MediaBanner from "../../views/layouts/layout2/Media-Banner";
import BlogSection from "../../views/layouts/layout2/Blog";
import Testimonial from "../../views/layouts/widgets/testimonial";
import InstagramSection from "../../views/layouts/widgets/instagram/Instagram2";
import ContactBanner from "../../views/layouts/widgets/contact-us";
import ProductBox1 from "../../views/layouts/widgets/slider-product/slider-product1";
import Services from "../../views/layouts/widgets/services";
import DiscountCoupon from "../../views/layouts/widgets/discountCoupon";
import NewsLatter from "views/Containers/news-letter";

const Layout2 = () => {
  useEffect(() => {
    document.documentElement.classList.remove(localStorage.getItem("color"));
    localStorage.setItem("color", "color-2");
    document.documentElement.classList.add(localStorage.getItem("color"));
  }, []);
  return (
    <>
      <NewsLatter />
      <Layout2Section>
        <SilderSection />
        <BannerSection />
        <section className="brand-panel section-pt-space">
          <div className="brand-panel-box">
            <TopBrand />
          </div>
        </section>
        <section className="services">
          <Services />
        </section>
        <MediaSection />
        <DiscountBanner />
        <CollectionBanner />
        <TabProduct effect="icon-inline" />
        <section className="deal-banner">
          <DealBanner />
        </section>
        <section className="rounded-category">
          <Category />
        </section>
        <MediaBanner />
        <BlogSection />
        <section className="box-category section-py-space">
          <DiscountCoupon />
        </section>
        <div className="title1 section-my-space">
          <h4>Special Products</h4>
        </div>
        <ProductBox1 hoverEffect="icon-inline" />
        <section className="testimonial testimonial-inverse">
          <Testimonial />
        </section>
        <section className="instagram">
          <InstagramSection />
        </section>
        <ContactBanner />
      </Layout2Section>
    </>
  );
};

export default Layout2;
