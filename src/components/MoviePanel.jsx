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

              <div className="plot">
                {movie.Plot !== "N/A" ? (
                  <p>{movie.Plot}</p>
                ) : (
                  "No description Found 😶‍🌫️"
                )}
                <br />
                Actors: {movie.Actors}
                <br />
                <br />
                <p>
                  {movie.Director.split(", ").length > 1
                    ? "Directors"
                    : "Director"}
                  {" : "}
                  {movie.Director}
                </p>
              </div>
              <br />
              <br />

              <div className="rrr">
                <p>Rated: {movie.Rated}</p>
                <p>Released: {movie.Year}</p>
                <p>Runtime: {movie.Runtime}</p>
                <br />
                <a
                  style={{ fontSize: "25px" }}
                  target="_blank"
                  href={`https://imdb.com/title/${movie.imdbID}`}
                >
                  IMDB
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
