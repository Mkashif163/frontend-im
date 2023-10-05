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
  cat: any;
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
        id: number;
        sub_categories: {
          id: number;
          products: any[];
        }[];
      }[];
    };
  };
  brands?: any[];
}

const findMinPrice = (products) => {
  return Math.min(...products.map(product => parseFloat(product.new_sale_price)));
};

const findMaxPrice = (products) => {
  return Math.max(...products.map(product => parseFloat(product.new_sale_price)));
};

const LeftSidebarCollection: NextPage<LeftSidebarCollectionProps> = ({ sub_cat, cat}) => {
  const { leftSidebarOpen } = useContext(FilterContext);
  const [subCategoryProducts, setSubCategoryProducts] = useState([]);
  const [subCatName , setSubCatName] = useState('');
  const [category, setCategory] = useState({});
  const [brands, setBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [sliderImages, setSliderImages] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);


  const apiData = useApiData() as ApiData;

  
  useEffect(() => {
    if (apiData && apiData.menus) {
      const allProducts = [];

      if (cat) {
        for (const menuName in apiData.menus) {
          const menu = apiData.menus[menuName];
          for (const category of menu.categories) {
            if (category.id === +cat) {
              setCategory(category); // Assuming categories have a "name" field to compare with "cat"
              for (const subCategory of category.sub_categories) {
                // Loop through each product in the current sub_category and add it to allProducts
                for (const product of subCategory.products) {
                    allProducts.push(product);
                }
            }           
            }
          }
        }
        setCategoryProducts(allProducts)
      }
    

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
              setSubCatName(subCat.name);
                setCategory(category);
              break;
            }
          }
        }
      }

      setBrands(apiData.brands);
      const categoryWithSideSliders = category as unknown as { side_sliders: string };
      const bannerUrls = JSON.parse(categoryWithSideSliders.side_sliders || "[]");
      setSliderImages(bannerUrls);
    }
  }, [apiData, sub_cat]);

  useEffect(() => {
    if (categoryProducts.length > 0) {
      const minPrice = findMinPrice(categoryProducts);
      const maxPrice = findMaxPrice(categoryProducts);
      setPriceRange({ min: minPrice, max: maxPrice });
    }
    
    if (subCategoryProducts.length > 0) {
      const minPrice = findMinPrice(subCategoryProducts);
      const maxPrice = findMaxPrice(subCategoryProducts);
      setPriceRange({ min: minPrice, max: maxPrice });
    }
  }, [subCategoryProducts , categoryProducts]);

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
       {cat ? (
        <Collection products={categoryProducts} cat={category} sub_cat={''} cols="col-xl-3 col-md-4 col-6 col-grid-box" layoutList="" />
      ) : (
        <Collection products={subCategoryProducts} cat={category} sub_cat={subCatName} cols="col-xl-3 col-md-4 col-6 col-grid-box" layoutList="" />
      )}
    </Row>
  );
};

export default LeftSidebarCollection;
