import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Layouts from "../views/layouts/layout1";
import SliderBanner from "../views/layouts/layout1/slider";
import CollectionBanner from "../views/layouts/layout1/collection-banner";
import TabProduct from "../views/layouts/widgets/Tab-Product/TabProduct";
import CollectionBannerTwo from "../views/layouts/layout1/collection-banner-two";
import RatioSquare from "../views/layouts/widgets/ratio-square";
import CollectionBannerThree from "../views/layouts/layout1/collection-banner-three";
import ContactBanner from "../views/layouts/widgets/contact-us";
import Brands  from "../views/layouts/widgets/roundedCategory";
import Suplier from "views/layouts/layout2/suplierCategory";
import ShortDisplay from "views/layouts/layout2/ShortDisplay";


const Home: NextPage = () => {

  const [menuData, setMenuData] = useState([]);


  useEffect(() => {
    fetch("http://18.234.66.77/api/menus")
      .then((res) => res.json())
      .then((data) => {
        setMenuData(data);
      });
  }, []);
  console.log(menuData[0].id);
  return (
    <>
      <Layouts>
        <div className="bg-light">
          <SliderBanner />
          <CollectionBanner />
          <TabProduct menuId={menuData[0].id} menuName={menuData[0].name} effect="icon-inline" />
          <TabProduct menuId={menuData[1].id} menuName={menuData[1].name} effect="icon-inline" />
          <CollectionBannerTwo />
          <TabProduct menuId={menuData[2].id} menuName={menuData[2].name} effect="icon-inline" />
          <ShortDisplay />
          <section className="rounded-category">
            <Brands />
          </section>
          <TabProduct menuId={menuData[3].id} menuName={menuData[3].name} effect="icon-inline" />
          <RatioSquare />
          <CollectionBannerThree />
          <section className="rounded-category">
            <Suplier />
          </section>
          <ContactBanner />
        </div>
      </Layouts>
    </>
  );
};

export default Home;
