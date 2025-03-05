"use client";
import React, { useState } from "react";

function Search_bar({ create_cards }) {
    const [inputSearch, setInputSearch] = useState("");

    const fetchSearchData = async (value) => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=7956112a&s=${value}`);
            const data = await response.json();
            create_cards(data.Search || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleInputSearchChange = (e) => {
        const value = e.target.value;
        setInputSearch(value);
        fetchSearchData(value);
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
                placeholder="search movie..."
                type="text"
                value={inputSearch}
                onChange={handleInputSearchChange}
            />
        </div>
    );
}

export default Search_bar;







