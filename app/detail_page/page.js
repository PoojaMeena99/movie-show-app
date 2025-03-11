"use client";
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import RatingCard from "../ratingCard";

function DetailPage() {
    const [detailsData, setDetailsData] = useState();
    const [error, setError] = useState(null);
    const [storedUpdatedRating, setStoredUpdatedRating] = useState({
        totalRating: 0,
        ratingCount: 0,
    });

    const searchParams = useSearchParams();
    const imdbID = searchParams.get("imdbID");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.omdbapi.com/?i=${imdbID}&apikey=7956112a`
                );
                const data = await response.json();
                setDetailsData(data);

                const storedData = localStorage.getItem(`rating-${imdbID}`);
                if (storedData) {
                    const parsedData = JSON.parse(storedData);

                    setStoredUpdatedRating(parsedData);
                }
            } catch (error) {
                setError(error.message);
            }
        };
        if (imdbID) {
            fetchData();
        }

    }, [imdbID]);

    const handleRatingChange = (rating) => {
        const updatedData = {
            totalRating: storedUpdatedRating.totalRating + rating,
            ratingCount: storedUpdatedRating.ratingCount + 1,
        };
        setStoredUpdatedRating(updatedData);
        localStorage.setItem(`rating-${imdbID}`, JSON.stringify(updatedData));
    };

    if (error) {
        return <p className="error-message">An error occurred: {error}</p>;
    }
    if (!detailsData) {
        return <p className="loading-message">Data is still loading. Please wait...</p>;
    }

    const calculateAverageRating = () => {
        return storedUpdatedRating.ratingCount > 0
            ? (storedUpdatedRating.totalRating / storedUpdatedRating.ratingCount).toFixed(1)
            : 0;
    };

    return (
        <div className="container detailspage">
            <div className="row detailspage-row">
                <div className="col-3 detailspage-image">
                    <img
                        className="data-image"
                        src={detailsData.Poster}
                        alt={detailsData.Title}
                    />
                    <p>
                        <strong>Average Rating:</strong> <span className="rating_div">{calculateAverageRating()}&#9733;</span>
                    </p>
                    <RatingCard setSelectedRating={handleRatingChange} />
                </div>

                <div className="col-7 detailspage-details">
                    <h1 className="movie-title">{detailsData.Title}</h1>
                    <p>
                        <strong>Year:</strong> {detailsData.Year}
                    </p>
                    <p>
                        <strong>Genre:</strong> {detailsData.Genre}
                    </p>
                    <p>
                        <strong>Director:</strong> {detailsData.Director}
                    </p>
                    <p>
                        <strong>Plot:</strong> {detailsData.Plot}
                    </p>
                    <p>
                        <strong>Language:</strong> {detailsData.Language}
                    </p>
                    <p>
                        <strong>Awards:</strong> {detailsData.Awards}
                    </p>
                    <p>
                        <strong>Released:</strong> {detailsData.Released}
                    </p>
                    <p>
                        <strong>Runtime:</strong> {detailsData.Runtime}
                    </p>
                    <p>
                        <strong>Type:</strong> {detailsData.Type}
                    </p>
                    <p>
                        <strong>imdb Rating:</strong> {detailsData.imdbRating}
                    </p>

                    <Link href="/" className="home-button">
                        <button>Go Back →</button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default DetailPage;
