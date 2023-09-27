import React from "react";

const DisplayStars = ({ stars }) => {
  // Calculate the number of full stars and half stars
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;

  // Create an array of star elements
  const starElements = [];
  for (let i = 0; i < fullStars; i++) {
    starElements.push(<i key={i} className="fa fa-star"></i>);
  }
  if (hasHalfStar) {
    starElements.push(<i key="half" className="fa fa-star-half"></i>);
  }

  // Fill the remaining stars to make a total of 5 stars
  while (starElements.length < 5) {
    starElements.push(
      <i key={starElements.length} className="fa fa-star-o"></i>
    );
  }

  return <div className="rating">{starElements}</div>;
};

export default DisplayStars;
