import "./App.css";
import Header from "./components/header/Header.jsx";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import CardContainer from "./containers/cardcontainer/CardContainer";
import SearchBar from "./components/searchbar/Searchbar.jsx";
import { useState } from "react";
import { fetchMoviesByFilter } from "./api.js";
import MoviePage from "./containers/moviePage/MoviePage";

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleFetch = async (
    searchQuery,
    genre,
    startDate,
    endDate,
    limit,
    minLength,
    maxLength,
    minRating,
    minVotes
  ) => {
    setLoading(true);
    searchQuery === "" ? (searchQuery = "a") : searchQuery;
    const searchResponse = await fetchMoviesByFilter(
      searchQuery,
      genre,
      startDate,
      endDate,
      limit,
      minLength,
      maxLength,
      minRating,
      minVotes
    );
    console.log(searchResponse);
    setMovies(searchResponse);

    setLoading(false);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <SearchBar handleFetch={handleFetch} />
        <Routes>
          <Route
            path="/"
            element={<CardContainer {...{ movies, loading }} />}
          />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
