import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Slider from "react-slick";
import { useApiData } from "helpers/data/DataContext";
import Link from "next/link";

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
    slidesToShow: 12, // Default to 12 for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Screen width up to 1200px (you can adjust as needed)
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992, // Screen width up to 992px
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Screen width up to 768px
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // Screen width up to 576px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const transformImageUrl = (apiImageUrl) => {
    const transformedUrl = `${
      process.env.NEXT_PUBLIC_BACKEND_URL
    }/${apiImageUrl.replace(/ /g, "%20")}`;
    return transformedUrl;
  };

  const imageStyles: React.CSSProperties = {
    objectFit: "cover",
    cursor: "pointer",
  };

  return (
    <div className="custom-container">
      <Slider {...sliderSettings}>
        {categories.length > 0 ? (
          categories.map((category, i) => (
            <Link
              href={`/collections/leftsidebar?category=${category.id}`}
              style={{}}
            >
              <div
                key={i}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <img
                  src={transformImageUrl(category.imageforapp)}
                  alt={category.name}
                  className="img-fluid mb-2 rounded-circle shadow"
                  style={imageStyles}
                  width="100"
                  height="100"
                />
                <p className="name text-center ">
                  {category.name.substring(0, 12)}{" "}
                  {category.name.length > 12 && "..."}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center">No categories available</div>
        )}
      </Slider>
    </div>
  );
};

export default TopCategory;
