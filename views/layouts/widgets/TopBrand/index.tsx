import React, { Fragment } from "react";

type TopBrandProps = {};

const TopBrand: React.FC<TopBrandProps> = () => {
  return (
    <Fragment>
      <div className="brand-panel-contain ">
        <ul>
          <li>
            <a href="#">top brand</a>
          </li>
          <li>
            <a>:</a>
          </li>
          <li>
            <a href="collections/leftsidebar">aerie</a>
          </li>
          <li>
            <a href="collections/leftsidebar">baci lingrie</a>
          </li>
          <li>
            <a href="collections/leftsidebar">gerbe</a>
          </li>
          <li>
            <a href="collections/leftsidebar">jolidon</a>
          </li>
          <li>
            <a href="collections/leftsidebar">Wonderbra</a>
          </li>
          <li>
            <a href="collections/leftsidebar">Ultimo</a>
          </li>
          <li>
            <a href="collections/leftsidebar">Vassarette </a>
          </li>
          <li>
            <a href="collections/leftsidebar">Oysho</a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
export default TopBrand;
