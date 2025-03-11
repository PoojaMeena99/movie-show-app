import Link from 'next/link';
import MovieItem from "./movie_item";

function MoviePanel({ data }) {
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
          <Link href={`/detail_page?imdbID=${dataItem.imdbID}`}>
            <MovieItem singleData={dataItem} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MoviePanel;
























