import React, { Fragment } from "react";
import SliderBanner from "views/layouts/layout1/slider";
import SliderBannerFour from "views/layouts/layout4/slider";
import SliderSection from "views/layouts/layout3/Slider";
import SilderSection from "views/layouts/layout2/Silder";

const HomeSliderPage: React.FC = () => {
  return (
    <Fragment>
      {/* Slider-1 */}
      <div className="title6">
        <h4>slider with text center</h4>
      </div>
      <SliderBanner />

      {/* Slider-2 */}
      <div className="title6">
        <h4>slider with content center</h4>
      </div>
      <SliderSection />

      {/* Slider-3 */}
      <div className="title6">
        <h4>slider with text left</h4>
      </div>
      <SliderBannerFour />

      {/* Slider-4 */}
      <div className="title6">
        <h4>slider with position left</h4>
      </div>
      <SilderSection />
    </Fragment>
  );
};

export default HomeSliderPage;
