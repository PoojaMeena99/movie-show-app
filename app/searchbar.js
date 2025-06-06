
"use client";
import { useState } from "react";
import HardCodeData from './movies_data.json';

function Search_bar({ createCard }) {
  const [inputSearch, setInputSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleDropdownChange = (e) => setSelectedType(e.target.value);
  const handleInputSearchChange = (e) => setInputSearch(e.target.value);

  const handleSearchButtonClick = function () {
    if (inputSearch.trim().length < 2) {
      alert("Please enter at least 2 characters to search.");
      return;
    }
    setIsButtonClicked(true);
    checkLocalData(inputSearch, selectedType);
    setTimeout(() => setIsButtonClicked(false), 2000);
  };

  const checkLocalData = function (inputValue, type) {
    const storageKey = `movieData_${inputValue}`;
    const storedData = localStorage.getItem(storageKey);

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        console.log("Data found in local storage:", parsedData);
        createCard(parsedData, inputValue);
        return;
      } catch (error) {
        console.error("Error parsing local storage data:", error);
      }
    }

    let filteredData;
    if (type) {
      filteredData = HardCodeData.filter((movie) => {
        return movie.Title.toLowerCase().includes(inputValue.toLowerCase()) 
      });
    } else {
      filteredData = HardCodeData.filter((movie) => {
        return movie.Title.toLowerCase().includes(inputValue.toLowerCase());
      });
    }

    if (filteredData.length > 0) {
      console.log("Data found in HardCodeData.");
      createCard(filteredData, inputValue);
      return;
    }

    console.log("Fetching data from API...");
    fetchDataForSearch(inputValue, type);
  };

  const fetchDataForSearch = async (inputValue, type) => {
    const apiKey = "7956112a";
    let apiResults = [];
    let page = 1;
    const maxPages = 5;

    try {
      while (page <= maxPages) {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${inputValue}&page=${page}&type=${type}`
        );

        if (!response.ok) {
          console.error(`API fetch failed with status ${response.status}`);
          createCard([{ message: "API Error. Try again later." }], inputValue);
          return;
        }

        const data = await response.json();

        if (data.Response === "True" && data.Search) {
          apiResults = apiResults.concat(data.Search);
          page++;
        } else {
          console.log(data.Error || "No more results.");
          break;
        }
      }

      if (apiResults.length > 0) {
        localStorage.setItem(`movieData_${inputValue}`, JSON.stringify(apiResults));
        createCard(apiResults, inputValue);
      } else {
        createCard([{ message: "No results found." }], inputValue);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      createCard([{ message: "An error occurred. Please try again." }], inputValue);
    }
  };

  const buttonClass = isButtonClicked ? "search-button clicked" : "search-button";

  return (
    <div className="row search-dropdown-div">
      <div className="col search-box">
        <img className="search-img" src="./searchimage.png" alt="Search icon" />
        <input
          className="input-box"
          placeholder="Search movie..."
          type="text"
          value={inputSearch}
          onChange={handleInputSearchChange}
        />
        <button className={buttonClass} onClick={handleSearchButtonClick}>
          Search
        </button>
      </div>
      <div className="col dropdown-box">
        <select value={selectedType} onChange={handleDropdownChange}>
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </div>
    </div>
  );
}

export default Search_bar;
