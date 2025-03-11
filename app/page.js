"use client";
import { React, useState } from "react";
import HardCodeData from "./movies_data";
import Header from "./header.js";
import Movie_panel from "./movie_panel";
import Pagination from './pagination';

function Page() {
  const [data, setData] = useState(HardCodeData);
  const [currentPage, setCurrentPage] = useState(1);

  const create_cards = (searchedFetchedData, inputSearch) => {
    console.log("create_cards", searchedFetchedData, inputSearch);
    if (inputSearch.trim().length >=3) {
      if (searchedFetchedData.length === 0) {
        setData([{ message: "Movie is not found" }]);
        console.log(inputSearch,"if daata is more then 2")
      } else {
        setData(searchedFetchedData);
        console.log(inputSearch,"show search data")
      }
    } else {
      setData([{ message: "Please enter a search term" }])
      console.log(inputSearch,"show emplty Array")
    }
    console.log("create_cards")
  };

  const current_page_movies = data.slice((currentPage - 1) * 9, currentPage * 9);
  const totalPages = Math.ceil(data.length / 9);

  const handlePrevious = function () {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = function () {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <Header create_cards={create_cards} />
      <Movie_panel data={current_page_movies} />
      <Pagination
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Page;

















// "use client";
// import { React, useState } from "react";
// import HardCodeData from "./movies_data";
// import Header from "./header.js";
// import Movie_panel from "./movie_panel";
// import Pagination from './pagination';

// function Page() {
//   const [data, setData] = useState(HardCodeData);
//   const [currentPage, setCurrentPage] = useState(1);

//   const create_cards = (searchedFetchedData, inputSearch) => {
//     if (inputSearch.trim().length > 2) {
//       if (searchedFetchedData.length === 0) {
//         setData([{ message: "Movie is not found" }]);
//       } else {
//         setData(searchedFetchedData);
//       }
//     } else {
//       setData(HardCodeData);
//     }
//   };
//   const current_page_movies = data.slice((currentPage - 1) * 9, currentPage * 9);
//   const totalPages = Math.ceil(data.length / 9);

//   const handlePrevious = function () {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNext = function () {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };


//   return (
//     <div className="container">
//       <Header create_cards={create_cards} />
//       <Movie_panel data={ current_page_movies } />
//       <Pagination
//           handlePrevious={handlePrevious}
//           handleNext={handleNext}
//           currentPage={currentPage}
//           totalPages={totalPages}
//         />
//     </div>
//   );
// }

// export default Page;
