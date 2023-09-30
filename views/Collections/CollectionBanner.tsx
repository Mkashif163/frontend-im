import { NextPage } from "next";
import { Media } from "reactstrap";


type CollectionBannerProps = {
  cat: any;
};


function transformImageUrl(apiImageUrl) {
  if (!apiImageUrl) {
    return ""; // or some default URL or error handling
  }

  const baseUrl = 'http://18.235.14.45/';
  return `${baseUrl}${apiImageUrl.replace(/ /g, '%20')}`;
}


const CollectionBanner: NextPage<CollectionBannerProps> = ({cat}) => 
(
  <div className="top-banner-wrapper">
    <a href="#">
      <Media src={transformImageUrl(cat.img)} className="img-fluid " alt="" />
    </a>
    <div className="top-banner-content small-section">
      <h1>{cat.name}</h1>
      {/* <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p> */}
    </div>
  </div>
);

export default CollectionBanner;
