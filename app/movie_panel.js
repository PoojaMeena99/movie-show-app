import React, { useState } from 'react';
import Movie_item from './movie_item';

function Movie_panel({ data }) {
    const [selectedImdbID, setSelectedImdbID] = useState(null);

    const handleDataClick = (imdbID) => {
        console.log('Clicked Data ID:', imdbID);
        setSelectedImdbID(imdbID);
        <a href={`/detail_page/${imdbID}`}></a>
        // window.location.href = `/detail_page/${imdbID}`;
        // <a id={`image_${index}`} href={`/product_details/${product.id}`}></a>
    };

    return (
        <div className='row'>
            <div className='row data-row'>
                {data.map((dataItem, index) => {
                    //   console.log(dataItem, 'data');
                    //   console.log(dataItem.Poster, 'Title');
                    let singleData = {
                        image: dataItem.Poster,
                        title: dataItem.Title,
                        released: dataItem.Released,
                        Genre: dataItem.Genre,
                        imdbID: dataItem.imdbID,
                    };

                    return (
                        <Movie_item
                            key={dataItem.imdbID || index}
                            singleData={singleData}
                            handleDataClick={handleDataClick}
                        // onClick={() => handleDataClick(dataItem.imdbID)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Movie_panel;

























// import React from 'react';
// import Movie_item from './movie_item';

// function Movie_panel({ data }) {
//     return (
//         <div className='row'>
//             <div className='row data-row'>
//                 {data.map((data, index) => {
//                     console.log(data, "data");
//                     console.log(data.Poster,"Title")
//                     let singleData = {
//                         image: data.Poster,
//                         title: data.Title,
//                         released: data.Released,
//                         Genre: data.Genre,
//                         imdbID:data.imdbID
//                     };
//                     return (
//                         <Movie_item key={data.Title || index} singleData={singleData} />
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default Movie_panel;
