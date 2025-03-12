import MovieItem from "./movie_item";

function Movie_panel({ data, handleClickGetId }) {
  if (data.length === 1 && data[0].message) {
    return (
      <div className="no-results">
        <p>{data[0].message}</p>
      </div>
    );
  }

  return (
    <div className="row movie-penal-row">
      {data.map((dataItem) => (
        <div className="col-4 movie-item-div" key={dataItem.imdbID}>
          <div onClick={() => handleClickGetId(dataItem.imdbID)}>
            <MovieItem singleData={dataItem} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movie_panel;























