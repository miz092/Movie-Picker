const BASE_URL = "imdb8.p.rapidapi.com";
const API_KEY = "3fcfa83f8emsh7d26c984b7cebedp104718jsnb872077ff045";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": BASE_URL,
  },
};

async function fetchBySearch(query) {
  const response = await fetch(
    `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`,
    options
  );
  return await response.json();
}

async function fetchGenres() {
  try {
    const response = await fetch(
      "https://imdb8.p.rapidapi.com/title/list-popular-genres",
      options
    );
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

async function fetchMovieDetails(id) {
  try {
    const response = await fetch(
      `https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${id}&currentCountry=US`,
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function fetchMoreLikeThis(id, limit = 6) {
  const response = await fetch(
    `https://imdb8.p.rapidapi.com/title/get-more-like-this?tconst=${id}`,
    options
  );
  const data = await response.json();
  const newData = data.map((dat) => {
    return dat.split("/")[2];
  });

  const movies = [];
  const numMovies = Math.min(newData.length, limit);
  const fetchedMovies = [];

  return new Promise((resolve, reject) => {
    const fetchInterval = setInterval(() => {
      if (movies.length >= numMovies) {
        clearInterval(fetchInterval);
        resolve(movies);
      }

      const id = newData[movies.length];
      if (fetchedMovies.includes(id)) {
        return;
      }

      fetchedMovies.push(id);

      fetch(`https://imdb8.p.rapidapi.com/title/get-base?tconst=${id}`, options)
          .then((response) => response.json())
          .then((response) => {
            movies.push(response);
          })
          .catch((err) => console.error(err));
    }, 500);
  });
}

async function fetchCast(id) {
  try {
    const response = await fetch(
      `https://imdb8.p.rapidapi.com/title/get-full-credits?tconst=${id}`,
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
async function fetchMoviesByFilter(
  title,
  genre,
  releaseDateMin,
  releaseDateMax,
  limit,
  runtimeMin,
  runtimeMax,
  userRatingMin,
  numVotesMin
) {
  const newDateStringMin = releaseDateMin.replace(/\-/g, "-");
  const newDateStringMax = releaseDateMax.replace(/\-/g, "-");

  const fetchString = `https://imdb8.p.rapidapi.com/title/v2/find?title=${title}&userRatingMin=${userRatingMin}&limit=${limit}&sortArg=moviemeter%2Casc&genre=${genre}&releaseDateMin=${newDateStringMin}&releaseDateMax=${newDateStringMax}&runtimeMin=${runtimeMin}&runtimeMax=${runtimeMax}&numVotesMin=${numVotesMin}`;

  try {
    const response = await fetch(fetchString, options);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error(err);
  }
}

export {
  fetchMoreLikeThis,
  fetchGenres,
  fetchBySearch,
  fetchMoviesByFilter,
  fetchMovieDetails,
  fetchCast,
};
