"use client";
import React, { useState, useEffect } from "react";

function MovieItem({ singleData }) {
  const [displayAverageRating, setDisplayAverageRating] = useState({
    totalRating: 0,
    ratingCount: 0,
  });

  useEffect(() => {
    const storedData = localStorage.getItem(`rating-${singleData.imdbID}`);
    if (storedData) {
      setDisplayAverageRating(JSON.parse(storedData));
    }
  }, [singleData.imdbID]);

  const calculateAverageRating = () => {
    return displayAverageRating.ratingCount > 0
      ? (displayAverageRating.totalRating / displayAverageRating.ratingCount).toFixed(1)
      : 0;
  };

  return (
    <div>
      <div className="display-data">
        <img
          className="data-image"
          src={singleData.Poster}
        />
      </div>
      <div className="interaction-summary">
        <h1>{singleData.Title}</h1>
        <p>{singleData.Year} || {singleData.Type} </p>
        <p>imdbID: {singleData.imdbID}</p>
        <p className="rating_div">{calculateAverageRating()} &#9733;</p>
      </div>
    </div>
  );
}

export default MovieItem;




























