import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout1 from "../../views/layouts/layout1";
import RelatedProducts from "../../views/Products-Detail/related-products";
import LeftSidebarPage from "../../views/Products-Detail/leftSidebarPage";
import { useApiData } from "helpers/data/DataContext"; // Adjust the path as necessary

const LeftSidebar: NextPage = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string); // Convert id from string to number
  const apiData = useApiData();
  const [pro, setProduct] = useState(null);

  interface ApiData {
    menus: {
      [key: string]: {
        categories: {
          sub_categories: {
            products: {
              id: number;
              name: string;
              price: number;
              image: string;
            }[];
          }[];
        }[];
      };
    };
  }

  useEffect(() => {
    if (id && apiData) {
      const data = apiData as ApiData;
      for (const menuName in data.menus) {
        for (const category of data.menus[menuName].categories) {
          for (const subCategory of category.sub_categories) {
            const foundProduct = subCategory.products.find((prod: { id: number }) => prod.id === id);
            if (foundProduct) {
              setProduct(foundProduct);
              break;
            }
          }
        }
      }
    }
  }, [id, apiData]);
  return (
    <Layout1>
      <section className="section-big-pt-space bg-light">
        <LeftSidebarPage product={pro} />
      </section>
      <RelatedProducts />
    </Layout1>
  );
};

export default LeftSidebar;
