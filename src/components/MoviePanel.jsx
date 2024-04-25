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
              <h2 className="title">{movie.Title}</h2>
              <br />
              <p className="description">
                Description
                <br />
              </p>
              <p className="plot">
                {movie.Plot !== "N/A" ? <p>{movie.Plot}</p> : "No Plot Found"}
              </p>
              <br />
              <div className="rrr">
                <p>Rated: {movie.Rated}</p>
                <p>Released {movie.Released}</p>
                <p>Runtime: {movie.Runtime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
