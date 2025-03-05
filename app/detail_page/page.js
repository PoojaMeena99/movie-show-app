'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function Detail_page() {
    const [detailsData, setDetailsData] = useState(null);
    const [error, setError] = useState(null);

    const searchParams = useSearchParams();
    const imdbID = searchParams.get('imdbID');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=7956112a`)
                const data = await response.json();
                setDetailsData(data);
            } catch (error) {
                setError(error.message);
            }
        };

        if (imdbID) fetchData();
    }, [imdbID]);

    if (error) {
        return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    if (!detailsData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container detailspage">
            <div className="row">
                <div className="col-4 detailspage-image">
                    <img
                        src={detailsData.Poster}
                        alt={detailsData.Title}
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                </div>
                <div className="col-8 detailspage-details">
                    <h1>{detailsData.Title}</h1>
                    <p><strong>Year:</strong> {detailsData.Year}</p>
                    <p><strong>Rated:</strong> {detailsData.Rated}</p>
                    <p><strong>Released:</strong> {detailsData.Released}</p>
                    <p><strong>Runtime:</strong> {detailsData.Runtime}</p>
                    <p><strong>Genre:</strong> {detailsData.Genre}</p>
                    <p><strong>Director:</strong> {detailsData.Director}</p>
                    <p><strong>Writer:</strong> {detailsData.Writer}</p>
                    <p><strong>Actors:</strong> {detailsData.Actors}</p>
                    <p><strong>Plot:</strong> {detailsData.Plot}</p>
                    <p><strong>Language:</strong> {detailsData.Language}</p>
                    <p><strong>Country:</strong> {detailsData.Country}</p>
                    <p><strong>Awards:</strong> {detailsData.Awards}</p>
                    <p><strong>IMDB Rating:</strong> {detailsData.imdbRating}</p>
                    <p><strong>Box Office:</strong> {detailsData.BoxOffice}</p>
                </div>
            </div>
        </div>
    );
}

export default Detail_page;
