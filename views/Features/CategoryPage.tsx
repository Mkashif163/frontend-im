import React, { Fragment } from "react";
import DiscountCoupon from "views/layouts/widgets/discountCoupon";
import RoundedCategory from "../layouts/widgets/roundedCategory";

const CategoryPage: React.FC = () => {
  return (
    <Fragment>
      {/* <!--title start--> */}
      <div className="title6 ">
        <h4>category with images</h4>
      </div>
      {/* <!--title end--> */}
      <section className="rounded-category rounded-category-inverse">
        <RoundedCategory />
      </section>
      <div className="title6">
        <h4>category with text</h4>
      </div>
      <section className="box-category section-py-space">
        <DiscountCoupon />
      </section>
      {/* <!--title start--> */}
      <div className="title6">
        <h4>inverse category with img</h4>
      </div>
      {/* <!--title end--> */}

      {/* <!--rounded category start--> */}
      <section className="rounded-category">
        <RoundedCategory />
      </section>
      {/* <!--rounded category end--> */}
    </Fragment>
  );
};

export default CategoryPage;
