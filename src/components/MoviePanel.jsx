export default function MoviePanel({ movies }) {
  return (
    <>
      <div>
        {movies.map((movie, index) => (
          <div className="panel" key={index}>
            <img
              className="poster"
              src={movie.Poster !== "N/A" ? movie.Poster : "image-missing.svg"}
            ></img>
            <div className="movie-details">
              <h2>{movie.Title}</h2>
              {movie.Plot !== "N/A" ? <p>{movie.Plot}</p> : "No Plot Found"}
              <p>Rated: {movie.Rated}</p>
              <p>Released {movie.Released}</p>
              <p>Runtime: {movie.Runtime}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
