"use client";
import { useState } from "react";

function Search_bar({ createCard }) {
    const [inputSearch, setInputSearch] = useState("");

    async function fetchDataForSearch(value) {
        let temporaryData = [];
        let page = 1;
        let maxPages = 3;

        while (page <= maxPages) {
            try {
                const response = await fetch(
                    `https://www.omdbapi.com/?apikey=fd94b288&s=${value}&page=${page}`
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
    };

    const handleInputSearchChange = (e) => {
        const value = e.target.value;
        setInputSearch(value);
        fetchDataForSearch(value);
    };

    return (
        <div className="search">
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
        </div>
    );
}

export default Search_bar;




