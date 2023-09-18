import React, { Fragment } from "react";
import SliderBanner from "views/layouts/layout1/slider";
import SilderSection from "views/layouts/layout2/Silder";

const HomeSliderPage: React.FC = () => {
  return (
    <Fragment>
      {/* Slider-1 */}
      <div className="title6">
        <h4>slider with text center</h4>
      </div>
      <SliderBanner />

      {/* Slider-4 */}
      <div className="title6">
        <h4>slider with position left</h4>
      </div>
      <SilderSection />
    </Fragment>
  );
};

export default HomeSliderPage;
