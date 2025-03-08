"use client";
import { React, useState } from "react";
import HardCodeData from "./movies_data";
import Header from "./header.js";
import Movie_panel from "./movie_panel";

function Page() {
  const [data, setData] = useState(HardCodeData);

  const create_cards = (searchedFetchedData, inputSearch) => {
    if (inputSearch.trim().length > 2) {
      if (searchedFetchedData.length === 0) {
        setData([{ message: "Movie is not found" }]); 
      } else {
        setData(searchedFetchedData);
      }
    } else {
      setData(HardCodeData); 
    }
  };

  return (
    <div className="container">
      <Header create_cards={create_cards} />
      <Movie_panel data={data} />
    </div>
  );
}

export default Page;
