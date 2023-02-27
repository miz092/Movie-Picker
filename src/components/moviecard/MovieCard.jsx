import "./MovieCard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StyledButton from "../styledButton/StyledButton.jsx";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const id = movie.id.substring(7, movie.id.length - 1);
  const [image, setImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"
  );
  const handleCardClick = () => {
    navigate(`/movie/${id}`);
    window.location.reload();
  };
  useEffect(() => {
    movie?.image?.url ? setImage(movie.image.url) : (prevState) => prevState;
  }, []);

  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-content">
        <h2>{movie?.title}</h2>
        <StyledButton onClick={handleCardClick} text={"More"} />
      </div>
    </div>
  );
}

export default MovieCard;
