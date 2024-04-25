export default function MoviePanel({ movies }) {
  return (
    <>
      <div>
        {movies.map((movie, index) => (
          <div className="panel" key={index}>
            <img className="poster" src={movie.Poster}></img>
            <div className="movie-details">
              <h2>{movie.Title}</h2>
              <p>{movie.Plot}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
