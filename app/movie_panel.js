"use client";
import React from "react";
import MovieItem from "./movie_item";

function MoviePanel({ data }) {
  const handleDataClick = (imdbID) => {
    console.log(`clicked This IMDb ID: ${imdbID}`);
  };

  return (
    <div className="row">
      {data.map((dataItem) => (
        <div className="col-4" key={dataItem.imdbID}>
          <a href={`/detail_page?imdbID=${dataItem.imdbID}`}>
            <MovieItem singleData={dataItem} handleDataClick={handleDataClick} />
          </a>
        </div>
      ))}
    </div>
  );
}

export default MoviePanel;





















