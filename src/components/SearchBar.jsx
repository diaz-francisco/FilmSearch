import { useState } from "react";
import { movieFetch } from "../api/movieFetch";
import ErrAlert from "./ErrAlert";

export default function SearchBar() {
  const [searchedFor, setSearchedFor] = useState("");
  const [submitedText, setSubmitedText] = useState("");
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState(null);

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
      <div className="info">
        {err && (
          <div>
            <ErrAlert err={err} submitedText={submitedText} setErr={setErr} />
          </div>
        )}
        {movies.length > 0 && (
          <p>
            Showing {movies.length} results for {submitedText}
          </p>
        )}
        {JSON.stringify(movies)}
      </div>
    </>
  );
}
