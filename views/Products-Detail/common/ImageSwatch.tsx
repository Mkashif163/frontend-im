import React from "react";
import { Media } from "reactstrap";

interface ImageSwatchProps {
  item: any;
  changeColorVar: Function;
}

const ImageSwatch: React.FC<ImageSwatchProps> = ({ item, changeColorVar }) => {
  return (
    <ul className="image-swatch color-variant">
      {item &&
        item.images.map((vari: any, i: any) => {
          return (
            <li
              key={i}
              onClick={() => {
                changeColorVar(i);
              }}>
              <a>
                <Media className="img-fluid" src={`/images/${vari.src}`} />
              </a>
            </li>
          );
        })}
    </ul>
  );
};

export default ImageSwatch;
