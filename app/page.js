"use client";
import { React, useState } from "react";
import HardCodeData from "./movies_data";
import Header from "./header.js";
import Movie_panel from "./movie_panel";
import Pagination from './pagination';
import DetailPage from './details_page';

function Page() {
  const [data, setData] = useState(HardCodeData);
  const [currentPage, setCurrentPage] = useState(1);
  const [checkMovieSerialId, setCheckMovieSerialId] = useState(null);

  
  function createCard(searchedFetchedData, inputSearch) {
    if (inputSearch.trim().length >= 2) {
      if (searchedFetchedData.length === 0) {
        setData([{ message: "Movie/Serial is not found" }]);
      } else {
        setData(searchedFetchedData);
      }
    } else {
      setData(HardCodeData);
    }
  }

  const handleClickGetId = (movieSerialId) => {
    setCheckMovieSerialId(movieSerialId);
  };

  let perPageData = 9;
  const currentPageDisplay = data.slice((currentPage - 1) * perPageData, currentPage * perPageData);
  const totalPages = Math.ceil(data.length / perPageData);

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

  let componentRender;
  if (checkMovieSerialId) {
    componentRender = <DetailPage checkMovieSerialId={checkMovieSerialId} setCheckMovieSerialId={setCheckMovieSerialId} />;
  } else {
    componentRender = (
      <>
        <Movie_panel data={currentPageDisplay} handleClickGetId={handleClickGetId} />
        <Pagination
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </>
    );
  }

  return (
    <div className="container">
      <Header createCard={createCard} />
      {componentRender}
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
// import DetailPage from './details_page';
// import { useSearchParams } from 'next/navigation';

// function Page() {
//   const [data, setData] = useState(HardCodeData);
//   const [currentPage, setCurrentPage] = useState(1);
  
//   const searchParams = useSearchParams();
//   const imdbID = searchParams.get("imdbID");

//   const create_cards = (searchedFetchedData, inputSearch) => {

//     if (inputSearch.trim().length >= 2) {
//       if (searchedFetchedData.length === 0) {
//         setData([{ message: "Movie is not found" }]);
//       } else {
//         setData(searchedFetchedData);
//       }
//     } else {
//       setData(HardCodeData);
//     }
//   };

//   let perPageData = 9

//   const current_page_movies = data.slice((currentPage - 1) * perPageData, currentPage * perPageData);
//   const totalPages = Math.ceil(data.length / perPageData);

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
//   let componentRender;
//   if (imdbID) {
//     componentRender = <DetailPage />;
//   } else {
//     componentRender = (
//       <>
//         <Movie_panel data={current_page_movies} />
//         <Pagination
//           handlePrevious={handlePrevious}
//           handleNext={handleNext}
//           currentPage={currentPage}
//           totalPages={totalPages}
//         />
//       </>
//     );
//   }

//   return (
//     <div className="container">
//       <Header create_cards={create_cards} />
//       {componentRender}
//     </div>
//   );
// }

// export default Page;















