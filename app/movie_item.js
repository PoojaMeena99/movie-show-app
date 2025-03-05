import React from "react";

function MovieItem({ singleData, handleDataClick }) {
  return (
    <div onClick={() => handleDataClick(singleData.imdbID)}>
      <div className="display-data">
        <img className="data-image" src={singleData.Poster} alt={singleData.Title} />
        <h3 className="data-title">{singleData.Title}</h3>
        <p>Released: {singleData.Released}</p>
        <p>Genre: {singleData.Genre}</p>
      </div>
    </div>
  );
}

export default MovieItem;
