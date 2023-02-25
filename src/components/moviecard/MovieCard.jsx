import "./MovieCard.css";

function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${movie.image.url})` }}
    >
      <div className="card-content">
        <h2>{movie.title}</h2>
        <button className="btn">
          <svg
            width="180px"
            height="60px"
            viewBox="0 0 180 60"
            className="border"
          >
            <polyline
              points="179,1 179,59 1,59 1,1 179,1"
              className="bg-line"
            />
            <polyline
              points="179,1 179,59 1,59 1,1 179,1"
              className="hl-line"
            />
          </svg>
          <span>Choose movie</span>
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
