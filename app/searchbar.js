"use client";
import { useState } from "react";

function Search_bar({ create_cards }) {
    const [inputSearch, setInputSearch] = useState("");
    const [allSearchResults, setAllSearchResults] = useState([]);

    const fetchAllData = async (value) => {
        let temporaryData = [];
        let page = 1;
        let maxPages = 3;

        while (page <= maxPages) {
            try {
                const response = await fetch(
                    `https://www.omdbapi.com/?apikey=fd94b288&s=${value}&page=${page}`
                );
                const data = await response.json();

                if (data.Response === "True" && data.Search && data.Search.length > 0) {
                    temporaryData = temporaryData.concat(data.Search);
                    page++;
                } else {
                    console.log("Loop has ended");
                    break;
                }
            } catch (error) {
                alert("Error fetching data. Please try again later.");
                break;
            }
        }

        setAllSearchResults(temporaryData);
        create_cards(temporaryData, value);
    };

    const handleInputSearchChange = (e) => {
        const value = e.target.value;
        setInputSearch(value);
        setAllSearchResults([]);
        fetchAllData(value);
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
