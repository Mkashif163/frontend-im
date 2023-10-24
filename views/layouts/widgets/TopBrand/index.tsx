import Link from "next/link";
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
            <Link href="collections/leftsidebar">
              <a>aerie</a>
            </Link>
          </li>
          <li>
            <Link href="collections/leftsidebar">
              <a>baci lingrie</a>
            </Link>
          </li>
          <li>
            <Link href="collections/leftsidebar">
              <a>gerbe</a>
            </Link>
          </li>
          <li>
            <Link href="collections/leftsidebar">
              <a>jolidon</a>
            </Link>
          </li>
          <li>
            <Link href="collections/leftsidebar">
              <a>Wonderbra</a>
            </Link>
          </li>
          <li>
            <Link href="collections/leftsidebar">
              <a>Ultimo</a>
            </Link>
          </li>
          <li>
            <Link href="collections/leftsidebar">
              <a>Vassarette </a>
            </Link>
          </li>
          <li>
            <Link href="collections/leftsidebar">
              <a>Oysho</a>
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
export default TopBrand;
