import React, { useEffect } from "react";

import Layout5Section from "../../views/layouts/layout5";
import SliderBanner from "../../views/layouts/layout5/slider";
import SpecialProduct from "../../views/layouts/widgets/slider-product/slider-product2";
import CollectionBanner from "../../views/layouts/layout5/collectionBanner";
import Brand from "../../views/layouts/widgets/TopBrand";
import Services from "../../views/layouts/widgets/services";
import RatioSquare from "../../views/layouts/widgets/ratio-square";
import DealBanner from "../../views/layouts/widgets/dealBanner";
import Category from "../../views/layouts/widgets/roundedCategory";
import TabProduct from "../../views/layouts/widgets/Tab-Product/Tab-Product2";
import Testimonial from "../../views/layouts/widgets/testimonial";
import HotDeal from "../../views/layouts/layout1/hot-deal";
import Blogs from "../../views/layouts/layout5/blog";
import InstagramSection from "../../views/layouts/widgets/instagram/Instagram2";
import Contact from "../../views/layouts/widgets/contact-us";
import NewsLatter from "views/Containers/news-letter";

const Layout5 = () => {
  useEffect(() => {
    document.documentElement.classList.remove(localStorage.getItem("color"));
    localStorage.setItem("color", "color-5");
    document.documentElement.classList.add(localStorage.getItem("color"));
  }, []);
  return (
    <>
      <NewsLatter />
      <Layout5Section>
        <SliderBanner />
        <div className="ratio_asos">
          <SpecialProduct type="electronics" />
        </div>
        <CollectionBanner />
        <section className="brand-panel">
          <div className="brand-panel-box bg-silver">
            <Brand />
          </div>
        </section>
        <section className="services services-inverse section-big-mb-space">
          <Services />
        </section>
        <div className="pt-3">
          <RatioSquare />
        </div>
        <section className="deal-banner deal-banner-inverse section-big-mt-space">
          <DealBanner />
        </section>
        <section className="rounded-category rounded-category-inverse">
          <Category />
        </section>
        <div className="section-pb-space">
          <TabProduct type={["electronics"]} />
        </div>
        <section className="testimonial testimonial-inverse section-mb-space">
          <Testimonial />
        </section>
        <HotDeal />
        <div className="tab-slider-sec">
          <Blogs />
        </div>
        <section className="instagram section-big-mt-space  section-big-py-space b-g-white">
          <InstagramSection />
        </section>
        <Contact />
      </Layout5Section>
    </>
  );
};

export default Layout5;
