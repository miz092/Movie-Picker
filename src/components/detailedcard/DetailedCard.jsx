import "./DetailedCard.css";

export default function DetailedCard({ movie }) {
  return (
    <div
      className="detailedCard"
      style={{ backgroundImage: `url(${movie.title.image?.url})` }}
    >
      <div className="detailedCard__card-content">
        <h2>{movie?.title.title}</h2>
        <div id="movieDetails">
          <p id="rating">IMDB rating: {movie.ratings.rating}</p>{" "}
          <p>Ratings: {movie.ratings.ratingCount} </p>
          <p>Runtime: {movie.title.runningTimeInMinutes} minutes</p>
          <p>Genres: {movie.genres.join(", ")}</p>
          <p>Release date: {movie.releaseDate}</p>
          {movie.plotSummary ? (
            <p>Plot summary: {movie?.plotSummary?.text}</p>
          ) : (
            <p>There is no summary provided</p>
          )}
        </div>
      </div>
    </div>
  );
}
