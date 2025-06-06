"use client";
import React, { useEffect, useState } from "react";
import RatingCard from "./ratingCard";

function DetailPage({ checkMovieSerialId, setCheckMovieSerialId }) {
    const [detailsData, setDetailsData] = useState();
    const [error, setError] = useState(null);
    const [storedUpdatedRating, setStoredUpdatedRating] = useState({
        totalRating: 0,
        ratingCount: 0,
    });

    async function fetchDetailData() {
        try {
            const response = await fetch(
                `https://www.omdbapi.com/?i=${checkMovieSerialId}&apikey=7956112a`
            );
            const data = await response.json();
            console.log(data,"data");
            if (response.ok && data) {
                setDetailsData(data);
                localStorage.setItem(`details-${checkMovieSerialId}`, JSON.stringify(data));
            } else {
                throw new Error("Unable to fetch movie details.");
            }
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        if (checkMovieSerialId) {
           const storedDetails = localStorage.getItem(`details-${checkMovieSerialId}`);
            const storedRating = localStorage.getItem(`rating-${checkMovieSerialId}`);

            if (storedDetails) {
                setDetailsData(JSON.parse(storedDetails));
            } else {
                fetchDetailData();
            }

            if (storedRating) {
                setStoredUpdatedRating(JSON.parse(storedRating));
            } else {
                localStorage.setItem(
                    `rating-${checkMovieSerialId}`,
                    JSON.stringify(storedUpdatedRating)
                );
            }
        }
    }, [checkMovieSerialId]);

    function handleRatingChange(rating) {
        const updatedData = {
            totalRating: storedUpdatedRating.totalRating + rating,
            ratingCount: storedUpdatedRating.ratingCount + 1,
        };

        setStoredUpdatedRating(updatedData);
        localStorage.setItem(`rating-${checkMovieSerialId}`, JSON.stringify(updatedData));
    }

    function calculateAverageRating() {
        if (storedUpdatedRating.ratingCount > 0) {
            return (storedUpdatedRating.totalRating / storedUpdatedRating.ratingCount).toFixed(1);
        }
        return 0;
    }

    if (error) {
        return <p className="error-message">An error occurred: {error}</p>;
    }

    if (!detailsData) {
        return <p className="loading-message">Data is still loading. Please wait...</p>;
    }

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
                        <strong>Average Rating:</strong>{" "}
                        <span className="rating_div">{calculateAverageRating()}&#9733;</span>
                    </p>
                    <RatingCard handleRatingChange={handleRatingChange} />
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
                    <button
                        className="home-button"
                        onClick={() => setCheckMovieSerialId(null)}
                    >
                        Go Back →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;












































// "use client";
// import React, { useEffect, useState } from "react";
// import RatingCard from "./ratingCard";

// function DetailPage({ checkMovieSerialId, setCheckMovieSerialId }) {
//     const [detailsData, setDetailsData] = useState();
//     const [error, setError] = useState(null);
//     const [storedUpdatedRating, setStoredUpdatedRating] = useState({
//         totalRating: 0,
//         ratingCount: 0,
//     });
 
//     async function fetchDetailData() {
//         try {
//             const response = await fetch(
//                 `https://www.omdbapi.com/?i=${checkMovieSerialId}&apikey=7956112a`
//             );
//             const data = await response.json();
//             setDetailsData(data);

//             const storedDataForRating = localStorage.getItem(`rating-${checkMovieSerialId}`);
//             if (storedDataForRating) {
//                 const parsedData = JSON.parse(storedDataForRating);
//                 setStoredUpdatedRating(parsedData);
//             }
//         } catch (error) {
//             setError(error.message);
//         }
//     }

//     useEffect(() => {
//         if (checkMovieSerialId) {
//             fetchDetailData();
//         }
//     }, [checkMovieSerialId]);

//     function handleRatingChange(rating) {
//         const updatedData = {
//             totalRating: storedUpdatedRating.totalRating + rating,
//             ratingCount: storedUpdatedRating.ratingCount + 1,
//         };

//         setStoredUpdatedRating(updatedData);
//         localStorage.setItem(`rating-${checkMovieSerialId}`, JSON.stringify(updatedData));
//     };

//     if (error) {
//         return <p className="error-message">An error occurred: {error}</p>;
//     }
//     if (!detailsData) {
//         return <p className="loading-message">Data is still loading. Please wait...</p>;
//     }

//     function calculateAverageRating() {
//         if (storedUpdatedRating.ratingCount > 0) {
//             return (storedUpdatedRating.totalRating / storedUpdatedRating.ratingCount).toFixed(1);
//         } else {
//             return 0;
//         }
//     }

//     return (
//         <div className="container detailspage">
//             <div className="row detailspage-row">
//                 <div className="col-3 detailspage-image">
//                     <img
//                         className="data-image"
//                         src={detailsData.Poster}
//                         alt={detailsData.Title}
//                     />
//                     <p>
//                         <strong>Average Rating:</strong> <span className="rating_div">{calculateAverageRating()}&#9733;</span>
//                     </p>
//                     <RatingCard handleRatingChange={handleRatingChange} />
//                 </div>

//                 <div className="col-7 detailspage-details">
//                     <h1 className="movie-title">{detailsData.Title}</h1>
//                     <p>
//                         <strong>Year:</strong> {detailsData.Year}
//                     </p>
//                     <p>
//                         <strong>Genre:</strong> {detailsData.Genre}
//                     </p>
//                     <p>
//                         <strong>Director:</strong> {detailsData.Director}
//                     </p>
//                     <p>
//                         <strong>Plot:</strong> {detailsData.Plot}
//                     </p>
//                     <p>
//                         <strong>Language:</strong> {detailsData.Language}
//                     </p>
//                     <p>
//                         <strong>Awards:</strong> {detailsData.Awards}
//                     </p>
//                     <p>
//                         <strong>Released:</strong> {detailsData.Released}
//                     </p>
//                     <p>
//                         <strong>Runtime:</strong> {detailsData.Runtime}
//                     </p>
//                     <p>
//                         <strong>Type:</strong> {detailsData.Type}
//                     </p>
//                     <p>
//                         <strong>imdb Rating:</strong> {detailsData.imdbRating}
//                     </p>
//                     <button className="home-button" onClick={() => setCheckMovieSerialId(null)}>
//                         Go Back →
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default DetailPage;






















// "use client";
// import React, { useEffect, useState } from "react";
// import RatingCard from "./ratingCard";

// function DetailPage({ checkMovieSerialId, setCheckMovieSerialId }) {
//     const [detailsData, setDetailsData] = useState();
//     const [error, setError] = useState(null);
//     const [storedUpdatedRating, setStoredUpdatedRating] = useState({
//         totalRating: 0,
//         ratingCount: 0,
//     });

//     async function fetchDetailData() {
//         try {
//             const response = await fetch(
//                 `https://www.omdbapi.com/?i=${checkMovieSerialId}&apikey=7956112a`
//             );
//             const data = await response.json();
//             console.log(data,"data");
//             if (response.ok && data) {
//                 setDetailsData(data);
//                 localStorage.setItem(`details-${checkMovieSerialId}`, JSON.stringify(data));
//             } else {
//                 throw new Error("Unable to fetch movie details.");
//             }
//         } catch (err) {
//             setError(err.message);
//         }
//     }

//     useEffect(() => {
//         if (checkMovieSerialId) {
//            const storedDetails = localStorage.getItem(`details-${checkMovieSerialId}`);
//             const storedRating = localStorage.getItem(`rating-${checkMovieSerialId}`);

//             if (storedDetails) {
//                 setDetailsData(JSON.parse(storedDetails));
//             } else {
//                 fetchDetailData();
//             }

//             if (storedRating) {
//                 setStoredUpdatedRating(JSON.parse(storedRating));
//             } else {
//                 localStorage.setItem(
//                     `rating-${checkMovieSerialId}`,
//                     JSON.stringify(storedUpdatedRating)
//                 );
//             }
//         }
//     }, [checkMovieSerialId]);

//     function handleRatingChange(rating) {
//         const updatedData = {
//             totalRating: storedUpdatedRating.totalRating + rating,
//             ratingCount: storedUpdatedRating.ratingCount + 1,
//         };

//         setStoredUpdatedRating(updatedData);
//         localStorage.setItem(`rating-${checkMovieSerialId}`, JSON.stringify(updatedData));
//     }

//     function calculateAverageRating() {
//         if (storedUpdatedRating.ratingCount > 0) {
//             return (storedUpdatedRating.totalRating / storedUpdatedRating.ratingCount).toFixed(1);
//         }
//         return 0;
//     }

//     if (error) {
//         return <p className="error-message">An error occurred: {error}</p>;
//     }

//     if (!detailsData) {
//         return <p className="loading-message">Data is still loading. Please wait...</p>;
//     }

//     return (
//         <div className="container detailspage">
//             <div className="row detailspage-row">
//                 <div className="col-3 detailspage-image">
//                     <img
//                         className="data-image"
//                         src={detailsData.Poster}
//                         alt={detailsData.Title}
//                     />
//                     <p>
//                         <strong>Average Rating:</strong>{" "}
//                         <span className="rating_div">{calculateAverageRating()}&#9733;</span>
//                     </p>
//                     <RatingCard handleRatingChange={handleRatingChange} />
//                 </div>

//                 <div className="col-7 detailspage-details">
//                     <h1 className="movie-title">{detailsData.Title}</h1>
//                     <p>
//                         <strong>Year:</strong> {detailsData.Year}
//                     </p>
//                     <p>
//                         <strong>Genre:</strong> {detailsData.Genre}
//                     </p>
//                     <p>
//                         <strong>Director:</strong> {detailsData.Director}
//                     </p>
//                     <p>
//                         <strong>Plot:</strong> {detailsData.Plot}
//                     </p>
//                     <p>
//                         <strong>Language:</strong> {detailsData.Language}
//                     </p>
//                     <p>
//                         <strong>Awards:</strong> {detailsData.Awards}
//                     </p>
//                     <p>
//                         <strong>Released:</strong> {detailsData.Released}
//                     </p>
//                     <p>
//                         <strong>Runtime:</strong> {detailsData.Runtime}
//                     </p>
//                     <p>
//                         <strong>Type:</strong> {detailsData.Type}
//                     </p>
//                     <p>
//                         <strong>imdb Rating:</strong> {detailsData.imdbRating}
//                     </p>
//                     <button
//                         className="home-button"
//                         onClick={() => setCheckMovieSerialId(null)}
//                     >
//                         Go Back →
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default DetailPage;












































// // "use client";
// // import React, { useEffect, useState } from "react";
// // import RatingCard from "./ratingCard";

// // function DetailPage({ checkMovieSerialId, setCheckMovieSerialId }) {
// //     const [detailsData, setDetailsData] = useState();
// //     const [error, setError] = useState(null);
// //     const [storedUpdatedRating, setStoredUpdatedRating] = useState({
// //         totalRating: 0,
// //         ratingCount: 0,
// //     });
 
// //     async function fetchDetailData() {
// //         try {
// //             const response = await fetch(
// //                 `https://www.omdbapi.com/?i=${checkMovieSerialId}&apikey=7956112a`
// //             );
// //             const data = await response.json();
// //             setDetailsData(data);

// //             const storedDataForRating = localStorage.getItem(`rating-${checkMovieSerialId}`);
// //             if (storedDataForRating) {
// //                 const parsedData = JSON.parse(storedDataForRating);
// //                 setStoredUpdatedRating(parsedData);
// //             }
// //         } catch (error) {
// //             setError(error.message);
// //         }
// //     }

// //     useEffect(() => {
// //         if (checkMovieSerialId) {
// //             fetchDetailData();
// //         }
// //     }, [checkMovieSerialId]);

// //     function handleRatingChange(rating) {
// //         const updatedData = {
// //             totalRating: storedUpdatedRating.totalRating + rating,
// //             ratingCount: storedUpdatedRating.ratingCount + 1,
// //         };

// //         setStoredUpdatedRating(updatedData);
// //         localStorage.setItem(`rating-${checkMovieSerialId}`, JSON.stringify(updatedData));
// //     };

// //     if (error) {
// //         return <p className="error-message">An error occurred: {error}</p>;
// //     }
// //     if (!detailsData) {
// //         return <p className="loading-message">Data is still loading. Please wait...</p>;
// //     }

// //     function calculateAverageRating() {
// //         if (storedUpdatedRating.ratingCount > 0) {
// //             return (storedUpdatedRating.totalRating / storedUpdatedRating.ratingCount).toFixed(1);
// //         } else {
// //             return 0;
// //         }
// //     }

// //     return (
// //         <div className="container detailspage">
// //             <div className="row detailspage-row">
// //                 <div className="col-3 detailspage-image">
// //                     <img
// //                         className="data-image"
// //                         src={detailsData.Poster}
// //                         alt={detailsData.Title}
// //                     />
// //                     <p>
// //                         <strong>Average Rating:</strong> <span className="rating_div">{calculateAverageRating()}&#9733;</span>
// //                     </p>
// //                     <RatingCard handleRatingChange={handleRatingChange} />
// //                 </div>

// //                 <div className="col-7 detailspage-details">
// //                     <h1 className="movie-title">{detailsData.Title}</h1>
// //                     <p>
// //                         <strong>Year:</strong> {detailsData.Year}
// //                     </p>
// //                     <p>
// //                         <strong>Genre:</strong> {detailsData.Genre}
// //                     </p>
// //                     <p>
// //                         <strong>Director:</strong> {detailsData.Director}
// //                     </p>
// //                     <p>
// //                         <strong>Plot:</strong> {detailsData.Plot}
// //                     </p>
// //                     <p>
// //                         <strong>Language:</strong> {detailsData.Language}
// //                     </p>
// //                     <p>
// //                         <strong>Awards:</strong> {detailsData.Awards}
// //                     </p>
// //                     <p>
// //                         <strong>Released:</strong> {detailsData.Released}
// //                     </p>
// //                     <p>
// //                         <strong>Runtime:</strong> {detailsData.Runtime}
// //                     </p>
// //                     <p>
// //                         <strong>Type:</strong> {detailsData.Type}
// //                     </p>
// //                     <p>
// //                         <strong>imdb Rating:</strong> {detailsData.imdbRating}
// //                     </p>
// //                     <button className="home-button" onClick={() => setCheckMovieSerialId(null)}>
// //                         Go Back →
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default DetailPage;








