import { Col, Row } from "reactstrap";
import { NextPage } from "next";
import Sidebar from "./Sidebar";
import NewProduct from "./NewProduct";
import Collection from "./Collection";
import { FilterContext } from "helpers/filter/filter.context";
import { useContext, useEffect, useState } from "react";
import { useApiData } from "helpers/data/DataContext";
import Slider from "react-slick";

type LeftSidebarCollectionProps = {
  sub_cat: any;
};

const sliderSettings = {
  dots: false,
  infinite: true, 
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

interface ApiData {
  menus?: {
    [menuName: string]: {
      categories: {
        sub_categories: {
          id: number;
          products: any[];
        }[];
      }[];
    };
  };
  brands?: any[];
}


const LeftSidebarCollection: NextPage<LeftSidebarCollectionProps> = ({ sub_cat}) => {
  const { leftSidebarOpen } = useContext(FilterContext);
  const [subCategoryProducts, setSubCategoryProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [brands, setBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [sliderImages, setSliderImages] = useState([]);

  const apiData = useApiData() as ApiData;

  useEffect(() => {
    if (apiData && apiData.menus) {
      let minPrice = Infinity;
      let maxPrice = 0;

      // Iterate through each menu
      for (const menuName in apiData.menus) {
        const menu = apiData.menus[menuName];
        // Iterate through each category in the menu
        for (const category of menu.categories) {
          // Iterate through each sub-category in the category
          for (const subCat of category.sub_categories) {
            // Check if sub-category ID matches
            if (subCat.id === +sub_cat) {
              setSubCategoryProducts(subCat.products);
                setCategory(JSON.stringify(category));

              // Calculate min and max prices
              for (const product of subCat.products) {
                const productPrice = parseFloat(product.price);
                if (productPrice < minPrice) {
                  minPrice = productPrice;
                }
                if (productPrice > maxPrice) {
                  maxPrice = productPrice;
                }
              }

              break;
            }
          }
        }
      }

      setBrands(apiData.brands);
      setPriceRange({ min: minPrice, max: maxPrice });
      const categoryWithSideSliders = category as unknown as { side_sliders: string };
      const bannerUrls = JSON.parse(categoryWithSideSliders.side_sliders || "[]");
      setSliderImages(bannerUrls);
    }
  }, [apiData, sub_cat]);

  function transformImageUrl(apiImageUrl) {
    if (!apiImageUrl) {
      return ""; // or some default URL or error handling
    }
  
    const baseUrl = 'http://18.235.14.45/';
    return `${baseUrl}${apiImageUrl.replace(/ /g, '%20')}`;
  }
  

  return (
    <Row>
      <Col
        sm="3"
        style={{
          left: leftSidebarOpen ? "-15px" : "",
        }}
        id="filter"
        className="collection-filter category-page-side"
      >
        <div className="sticky-sidebar">
          <Sidebar sub_cat={sub_cat} brand={brands} priceRange={priceRange} />
          <NewProduct item={undefined} />
          <div className="collection-sidebar-banner">
            <Slider {...sliderSettings}> {/* Use the slider component */}
              {sliderImages.map((imageUrl, index) => (
                <div key={index}>
                  <img src={transformImageUrl(imageUrl)} className="img-fluid" alt={`Banner ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Col>
      {/* Collection */}
      <Collection products={subCategoryProducts} cat={category} cols="col-xl-3 col-md-4 col-6 col-grid-box" layoutList="" />
    </Row>
  );
};

export default LeftSidebarCollection;
