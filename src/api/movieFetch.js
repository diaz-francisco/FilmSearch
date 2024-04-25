export const movieFetch = async (searchText, moviesCallback, errCallback) => {
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?s=${searchText}}&apikey=bb60c74c&type=movie`
    );
    const parsed = await res.json();

    if (parsed.Response === "True") {
      const plotPromise = parsed.Search.map((movie) =>
        movieFetchPlot(movie.imdbID, errCallback)
      );
      const plot = await Promise.all(plotPromise);
      const [firstMovie] = plot;
      const allMovies = plot.reduce((acc, curr) => ({ ...acc, ...curr }), {});

      moviesCallback(plot);
      errCallback(errCallback);
    } else {
      moviesCallback([]);
      errCallback(` ${parsed.Error}`);
    }
  } catch (err) {
    setError(err.message);
  }
};

const movieFetchPlot = async (id, errCallback) => {
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?i=${id}&plot=full&apikey=bb60c74c`
    );
    const parse = await res.json();

    if (parse.Response === "True") {
      return parse;
    } else {
      throw new Error(parse.Error);
    }
  } catch (err) {
    errCallback("Error occured while fetching details");
  }
};
