  import React, { useEffect, useState } from "react";
  import { NextPage } from "next";
  import Layouts from "../views/layouts/layout1";
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
  import Menu from "views/layouts/layout1/menu";
  import TopCategory from "views/layouts/widgets/topCategory";
  import { useApiData } from "helpers/data/DataContext";

  interface CategoriesData {
    category1: string;
    category2: string;
    category3: string;
    category4: string;
    f_s_banner_1: string;
    f_s_banner_2: string;
    f_s_banner_3: string;
    e_s_banner_1: string;
    e_s_banner_2: string;
    e_s_banner_3: string;
    center_image1: string;
  }

  const Home: NextPage = () => {
    const [error, setError] = useState<string | null>(null);
    const [categoriesData, setCategoriesData] = useState<CategoriesData>({
      category1: "",
      category2: "",
      category3: "",
      category4: "",
      f_s_banner_1: "",
      f_s_banner_2: "",
      f_s_banner_3: "",
      e_s_banner_1: "",
      e_s_banner_2: "",
      e_s_banner_3: "",
      center_image1: "",
    });
    const apiData = useApiData();

    interface ApiData {
      Homesetting: CategoriesData[];
    }

    useEffect(() => {
      try {
        if (
          apiData &&
          Array.isArray((apiData as ApiData).Homesetting) &&
          (apiData as ApiData).Homesetting.length > 0
        ) {
          setCategoriesData((apiData as ApiData).Homesetting[0]);
        }
      } catch (err) {
        console.error("Failed to fetch API data:", err);
        setError("Failed to fetch data. Please try again later.");
      }
    }, [apiData]);

    return (
      <>
        <Layouts>
          {/* Only show the error if it exists */}
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
        {apiData ? (
          <div className="bg-light">
            <Menu meneData={apiData} />
            <div className="my-4">
              <TopCategory />
            </div>
            <CollectionBanner
              banner1={categoriesData.f_s_banner_1}
              banner2={categoriesData.f_s_banner_2}
              banner3={categoriesData.f_s_banner_3}
            />
            <TabProduct catId={parseInt(categoriesData.category1)} effect="icon-inline" />
            <TabProduct catId={parseInt(categoriesData.category2)} effect="icon-inline" />
            <CollectionBannerTwo banner={categoriesData.center_image1} />
            <TabProduct catId={parseInt(categoriesData.category3)} effect="icon-inline" />
            <ShortDisplay data={apiData} />
            <section className="rounded-category">
              <Brands />
            </section>
            <TabProduct catId={parseInt(categoriesData.category4)} effect="icon-inline" />
            <RatioSquare />
            <CollectionBannerThree
              ban1={categoriesData.e_s_banner_1}
              ban2={categoriesData.e_s_banner_2}
              ban3={categoriesData.e_s_banner_3}
            />
            <section className="rounded-category">
              <Suplier />
            </section>
            <AllProducts />
            <ContactBanner />
          </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center vh-100">
              <div className="text-center">
                <h1>Slow Internet 😟</h1>
                <p>Please check your internet connection 🚧 and try reloading.</p>
                <button className="btn btn-rounded m-3" onClick={() => window.location.reload()}>Reload</button>
              </div>
            </div>
          )}
        </Layouts>
      </>
    );
  };

  export default Home;
