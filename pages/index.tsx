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
import Brands from "../views/layouts/widgets/roundedCategory";
import Suplier from "views/layouts/layout2/suplierCategory";
import ShortDisplay from "views/layouts/layout2/ShortDisplay";
import AllProducts from "../views/layouts/widgets/AllProducts/allProducts";




const Home: NextPage = () => {

  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const apiUrl = `http://18.235.14.45/api/categories/13`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Handle the data from the API here
        setCategoriesData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <>
      <Layouts>
        <div className="bg-light">
          <SliderBanner />
          <CollectionBanner />

          {/* Check if categoriesData has elements before rendering */}
          {categoriesData.length > 0 && (
            <>
              <TabProduct menuId={categoriesData[0].id} menuName={categoriesData[0].name} effect="icon-inline" />
              <TabProduct menuId={categoriesData[1].id} menuName={categoriesData[1].name} effect="icon-inline" />
              <CollectionBannerTwo />
              <TabProduct menuId={categoriesData[2].id} menuName={categoriesData[2].name} effect="icon-inline" />
            </>
          )}

          <ShortDisplay />
          <section className="rounded-category">
            <Brands />
          </section>

          {/* Check if categoriesData has enough elements before rendering */}
          {categoriesData.length > 3 && (
            <>
              <TabProduct menuId={categoriesData[3].id} menuName={categoriesData[3].name} effect="icon-inline" />
            </>
          )}
          <RatioSquare />
          <CollectionBannerThree />
          <section className="rounded-category">
            <Suplier />
          </section>
          <AllProducts />
          <ContactBanner />
        </div>
      </Layouts>
    </>

  );
};

export default Home;
