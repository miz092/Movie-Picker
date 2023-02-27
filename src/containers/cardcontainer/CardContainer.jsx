import MovieCard from "../../components/moviecard/MovieCard.jsx";
import ErrorPage from "../../components/errorpage/ErrorPage.jsx";
import "./CardContainer.css";

export default function CardContainer({ movies }) {
  return (
    <div className="cardContainer">
      {movies.map((movie, index) => (
        <MovieCard key={movie.id + index} movie={movie}></MovieCard>
      ))}
    </div>
  );
}
