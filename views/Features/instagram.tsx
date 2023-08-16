import React from "react";
import { NextPage } from "next";
import InstagramL1 from "../layouts/widgets/instagram/instagram1";
import InstagramL2 from "../layouts/widgets/instagram/Instagram2";
import InstagramL3 from "../layouts/widgets/instagram/instagram3";

const Instagram: NextPage = () => {
  return (
    <div className="bg-light">
      {/* <!--title start--> */}
      <div className="title6 pb-0">
        <h4>instagram type 1</h4>
      </div>
      {/* <!--title end--> */}
      <section className="instagram section-big-pt-space">
        <InstagramL2 />
      </section>

      {/* <!--title start--> */}
      <div className="title6">
        <h4>instagram type 2</h4>
      </div>
      {/* <!--title end--> */}
      <section className="instagram">
        <InstagramL1 />
      </section>

      {/* <!--title start--> */}
      <div className="title6 pb-0">
        <h4>instagram type 3</h4>
      </div>
      {/* <!--title end--> */}
      <InstagramL3 />
    </div>
  );
};

export default Instagram;
