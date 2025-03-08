"use client";
import React, { useState } from "react";

function Search_bar({ create_cards }) {
    const [inputSearch, setInputSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1); // Current page track karo

    const fetchSearchData = async (value, page = 2) => {
        try {
            // const response = await fetch(`https://www.omdbapi.com/?apikey=7956112a&s=${value}`);
            const response = await fetch(`https://www.omdbapi.com/?apikey=7956112a&s=${value}&page=${page}`);
            const data = await response.json();
            create_cards((data.Search || []), value);
        } catch (error) {
            alert("Error fetching data. Please try again later.");
        }
    };

    const handleInputSearchChange = (e) => {
        const value = e.target.value;
        fetchSearchData(value, currentPage);
        setInputSearch(value);
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













