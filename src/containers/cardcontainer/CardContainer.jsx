import MovieCard from "../../components/moviecard/MovieCard.jsx";
import ErrorPage from "../../components/errorpage/ErrorPage.jsx";
import "./CardContainer.css";

export default function CardContainer({ movies }) {
  const error = "No movies found :(";
  return (
    <div>
      {movies ? (
        <div className="cardContainer">
          {movies.map((movie, index) => (
            <MovieCard key={movie.id + index} movie={movie} />
          ))}
        </div>
      ) : (
        <ErrorPage message={error} />
      )}
    </div>
  );
}
