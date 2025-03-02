import React from 'react';

function movie_item({ singleData, handleDataClick }) {
  return (
    <div className="col-4" onClick={() => handleDataClick(singleData.imdbID)} >
      <div className="display-data">
        <div className=''>
          <img className="data-image" src={singleData.image} alt="" />
        </div>
        <div className="data-title">{singleData.title}</div>
        <span>{singleData.released}</span>
        <span>{singleData.imdbID}</span>
      </div>
    </div>
  );
}
export default movie_item;
