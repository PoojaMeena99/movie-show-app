"use client";
import { useState } from "react";

function Search_bar({ createCard }) {
    const [inputSearch, setInputSearch] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleDropdownChange = (e) => {
        setSelectedType(e.target.value);
    };

    const handleInputSearchChange = (e) => {
        setInputSearch(e.target.value);
    };

    const handleSearchButtonClick = () => {
        if (inputSearch.trim() === "") {
            alert("Please enter a search term.");
            return;
        }
        setIsButtonClicked(true);
        setTimeout(() => {
            setIsButtonClicked(false);
        }, 2000);

        fetchDataForSearch(inputSearch, selectedType);
    };

    async function fetchDataForSearch(value, type) {
        let temporaryData = [];
        let page = 1;
        let maxPages = 5;

        while (page <= maxPages) {
            try {
                const response = await fetch(
                    `https://www.omdbapi.com/?apikey=7956112a&s=${value}&page=${page}&type=${type}`
                );
                if (!response.ok) {
                    console.log("Failed to fetch data. Please check your internet connection or try again later.");
                    break;
                }
                const data = await response.json();

                if (data.Response === "True" && data.Search && data.Search.length > 0) {
                    temporaryData = temporaryData.concat(data.Search);
                    page++;
                } else if (data.Response === "False") {
                    console.log(data.Error || "No results found.");
                    page++;
                } else {
                    page++;
                }
            } catch (error) {
                console.log("An unexpected error occurred. Please try again.");
                break;
            }
        }

        createCard(temporaryData, value);
    }

    const buttonClass = isButtonClicked ? "search-button clicked" : "search-button";
    return (
        <div className="row search-dropdown-div ">
            <div className="col search-box ">
                <img
                    className="search-img"
                    src="./searchimage.png"
                    alt="search icon"
                />
                <input
                    className="input-box"
                    placeholder="Search movie..."
                    type="text"
                    value={inputSearch}
                    onChange={handleInputSearchChange}
                />

                <button
                    className={buttonClass}
                    onClick={handleSearchButtonClick}
                >
                    Search
                </button>

            </div>
            <div className="col dropdown_box">
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