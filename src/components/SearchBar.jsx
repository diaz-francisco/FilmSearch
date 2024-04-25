import { useState } from "react";
import { movieFetch } from "../api/movieFetch";
import ErrAlert from "./ErrAlert";
import MoviePanel from "./MoviePanel";

export default function SearchBar() {
  const [searchedFor, setSearchedFor] = useState("");
  const [submitedText, setSubmitedText] = useState("");
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState(null);

  const [desMovies] = movies;

  function onSubmited(e) {
    e.preventDefault();
    setErr(null);
    movieFetch(searchedFor, setMovies, setErr);
    setSubmitedText(searchedFor);
  }

  return (
    <>
      <form onSubmit={onSubmited}>
        <input
          className="form"
          type="text"
          placeholder="   Search here..."
          value={searchedFor}
          onChange={(e) => setSearchedFor(e.target.value)}
        />
      </form>
      <div className="reults-container">
        {movies.length > 0 && (
          <p className="result-amount">
            Showing {movies.length} results for {submitedText}
          </p>
        )}
      </div>
      <div className="info">
        {err && (
          <div>
            <ErrAlert err={err} submitedText={submitedText} setErr={setErr} />
          </div>
        )}

        {/* {movies.map((movie) => console.log(movie.Plot))}
        {JSON.stringify(movies[0])} */}
        <div>
          <MoviePanel movies={movies} />
        </div>
      </div>
    </>
  );
}
