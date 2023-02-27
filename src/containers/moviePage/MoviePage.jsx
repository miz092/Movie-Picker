import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchCast, fetchMoreLikeThis } from "../../api";
import ActorCardContainer from "../actorcardcontainer/ActorCardContainer.jsx";
import DetailedCard from "../../components/detailedcard/DetailedCard.jsx";
import CardContainer from "../CardContainer/CardContainer";
import Loading from "../../components/loading/Loading";
import "./MoviePage.css";
import StyledButton from "../../components/styledButton/StyledButton";

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubLoading, setIsSubLoading] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [isCastVisible, setIsCastVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const movieResponse = await fetchMovieDetails(id);
        setMovie(movieResponse);
        setIsLoading(false);

        setIsSubLoading(true);
        const castResponse = await fetchCast(id);
        const castArray = castResponse?.cast?.slice(0, 10);
        setCast(castArray);
        setIsSubLoading(false);

        setIsMoreLoading(true);
        const similarMoviesResponse = await fetchMoreLikeThis(id);
        const uniqueMovies = Array.from(
          new Set([...similarMovies, ...similarMoviesResponse])
        );
        setSimilarMovies(uniqueMovies);
        setIsMoreLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleCastVisibilityToggle = () => {
    setIsCastVisible((prevState) => !prevState);
  };

  return (
    <div className="page">
      {isLoading ? (
        <Loading />
      ) : (
        movie && (
          <div className="movieContainer">
            <h1>{movie?.title.title}</h1>
            <DetailedCard movie={movie} />
            <div id="buttonContainer">
              <StyledButton
                onClick={handleCastVisibilityToggle}
                text={isCastVisible ? "Hide Cast" : "Show Cast"}
              ></StyledButton>
            </div>
          </div>
        )
      )}
      {isCastVisible && (
        <div className="actorCardContainer">
          <ActorCardContainer cast={cast} />
          {isSubLoading && <Loading />}
        </div>
      )}
      <div>
        {similarMovies.length > 0 ? (
          <CardContainer movies={similarMovies} />
        ) : (
          isMoreLoading && <Loading />
        )}
      </div>
    </div>
  );
}
