import React, { useEffect } from "react";

import Layout6Section from "../../views/layouts/layout6";
import SliderBanner from "../../views/layouts/layout6/slider";
import CollectionBanner from "../../views/layouts/layout6/collectionBanner";
import Category from "../../views/layouts/layout6/roundedCategory";
import Services from "../../views/layouts/widgets/services";
import PaymentOffer from "../../views/layouts/layout6/paymentOffer";
import TrendingOffer from "../../views/layouts/widgets/slider-product/slider-product2";
import Masonary from "../../views/layouts/layout6/masonaryBanner";
import TabProduct from "../../views/layouts/widgets/Tab-Product/Tab-Product2";
import ParallaxBanner from "../../views/layouts/layout6/parallaxBanner";
import Blog from "../../views/layouts/layout6/blog";
import Contact from "../../views/layouts/widgets/contact-us";
import NewsLatter from "views/Containers/news-letter";

const Layout6 = () => {
  useEffect(() => {
    document.documentElement.classList.remove(localStorage.getItem("color"));
    localStorage.setItem("color", "color-6");
    document.documentElement.classList.add(localStorage.getItem("color"));
  }, []);
  return (
    <>
      <NewsLatter />
      <Layout6Section>
        <SliderBanner />
        <CollectionBanner />
        <Category />
        <section className="services services-inverse">
          <Services />
        </section>
        <PaymentOffer />
        <div className="ratio_square">
          <TrendingOffer type="vegetables" />
        </div>
        <Masonary />
        <TabProduct type={["vegetables"]} />
        <ParallaxBanner />
        <Blog />
        <Contact />
      </Layout6Section>
    </>
  );
};

export default Layout6;
