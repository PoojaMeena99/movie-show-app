"use client";
import React, { useState } from "react";
import HardCodeData from "./movies_data";
import Header from "./header.js";
import Movie_panel from "./movie_panel";

function Page() {
  const [data, setData] = useState(HardCodeData);

  const create_cards = (searchedFetchedData) => {
    console.log(searchedFetchedData, "Received search data");
    setData(searchedFetchedData);
  };

  return (
    <div className="container">
      <Header create_cards={create_cards} />
      <Movie_panel data={data} />
    </div>
  );
}

export default Page;



