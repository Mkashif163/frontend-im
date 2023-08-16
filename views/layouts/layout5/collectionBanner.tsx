import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const Collectionbanner = [
  { img: "/images/layout-5/collection-banner/1.jpg", title: "Laptop", subtitle: "Trending", btn: "Shop now", category: "ELECTRONICS" },
  { img: "/images/layout-5/collection-banner/2.jpg", title: "Refrigrator", subtitle: "Special", btn: "Shop now", category: "ELECTRONICS" },
  { img: "/images/layout-5/collection-banner/3.jpg", title: "Tablet", subtitle: "New Generation", btn: "Shop now", category: "ELECTRONICS" },
];

const CollectionBanner: NextPage = () => {
  return (
    <>
      <section className="collection-banner section-py-space bg-white">
        <div className="container-fluid">
          <div className="row collection2">
            {Collectionbanner.map((data, i) => (
              <div className="col-md-4" key={i}>
                <div className="collection-banner-main p-right banner-9">
                  <div className="collection-img">
                    <img src={data.img} className="img-fluid bg-img  " alt="banner" />
                  </div>
                  <div className="collection-banner-contain">
                    <div>
                      <h3>{data.title}</h3>
                      <h4>{data.subtitle}</h4>
                      <div className="shop">
                        <Link
                          href={{
                            pathname: "/collections/leftsidebar/",
                            query: {
                              category: data.category,
                            },
                          }}>
                          <a>
                            {data.btn}
                            <i className="fa fa-arrow-circle-right"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionBanner;
