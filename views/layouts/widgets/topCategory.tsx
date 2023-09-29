import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Slider from "react-slick";
import { useApiData } from "helpers/data/DataContext";


interface ApiData {
  menus: {
    [menuName: string]: {
      categories: {
        id: number;
        name: string;
        sub_categories: {
          id: number;
          name: string;
          products: any[]; // Define the type for products
        }[];
      }[];
    };
  };
  // Add other properties if needed
}


const TopCategory: NextPage = () => {
  const apiData = useApiData() as ApiData;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (apiData && apiData.menus) {
      const allCategories = [];
      for (const menuName in apiData.menus) {
        const menu = apiData.menus[menuName];
        for (const category of menu.categories) {
          allCategories.push(category);
        }
      }
      setCategories(allCategories);
    }
  }, [apiData]);

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3500,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 12,
    slidesToScroll: 1,
  };
  const transformImageUrl = (apiImageUrl) => {
    const transformedUrl = `http://18.235.14.45/${apiImageUrl.replace(/ /g, '%20')}`;
    return transformedUrl;
  };


  const imageStyles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "2px 2px 4px",
    transition: "box-shadow 0.3 ease, filter 0.3s ease",
  };



  return (
    <div className="custom-container">
      <Slider {...sliderSettings}>
        {categories.length > 0 ? (
          categories.map((category, i) => (
            <div
              key={i}
            >
              <img
                src={transformImageUrl(category.imageforapp)}
                alt={category.name}
                className="img-fluid"
                style={{...imageStyles, objectFit: "cover"}}
              />

              <h5
                className="name"
                style={{ fontSize: "14px", display: "flex", justifyContent: "center", paddingTop: "6px" }}
              >
                {category.name.substring(0, 18)}{" "}
                {category.name.length > 18}
              </h5>
            </div>
          ))
        ) : (
          <div>No categories available</div>
        )}
      </Slider>
    </div>
  );
};

export default TopCategory;