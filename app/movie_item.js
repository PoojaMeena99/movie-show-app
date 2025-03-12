"use client";
import React, { useState, useEffect } from "react";

function MovieItem({ singleData }) {
  const [displayAverageRating, setDisplayAverageRating] = useState({
    totalRating: 0,
    ratingCount: 0,
  });

  useEffect(() => {
    const storedDataForRating = localStorage.getItem(`rating-${singleData.imdbID}`);
    if (storedDataForRating) {
      setDisplayAverageRating(JSON.parse(storedDataForRating));
    }
  }, [singleData.imdbID]);

  function calculateAverageRating() {
    if (displayAverageRating.ratingCount > 0) {
      return (displayAverageRating.totalRating / displayAverageRating.ratingCount).toFixed(1);
    } else {
      return 0;
    }
  }

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











































