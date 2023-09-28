import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Slider from "react-slick";
import { useApiData } from "helpers/data/DataContext";
import { TabContent, TabPane, Row, Col, Carousel, CarouselItem } from "reactstrap";

const TopCategory: NextPage = () => {
  const apiData = useApiData();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (apiData && apiData.menus) {
      // Iterate through each menu
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

  console.log(categories);

  const imageStyles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "2px 2px 4px",
    transition: "box-shadow 0.3 ease, filter 0.3s ease",
  };

  const grayscaleStyles = {
    filter: "grayscale(100%)",
  };

  const applyShadow = (category) => {
    setSelectedCategory(category);
  };

  const removeShadow = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="custom-container">
      <Slider {...sliderSettings}>
        {categories.length > 0 ? (
          categories.map((category, i) => (
            <div
              key={i}
              onClick={() => applyShadow(category)}
              onMouseEnter={() => applyShadow(category)}
              onMouseLeave={() => removeShadow()}
            // style={{
            //   ...imageStyles,
            //   ...(selectedCategory === category ? grayscaleStyles : {}),
            // }}
            >
              <img
                src={transformImageUrl(category.img)}
                alt={category.name}
                className="img-fluid"
                style={imageStyles}
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