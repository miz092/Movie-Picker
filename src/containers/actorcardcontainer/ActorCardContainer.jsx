import ActorCard from "../../components/actorcard/ActorCard.jsx";

import "./ActorCardContainer.css";

export default function CardContainer({ cast }) {
  return (
    <div className="actorCardContainer">
      {cast.map((actor, index) => (
        <ActorCard key={actor.name + index} actor={actor}></ActorCard>
      ))}
    </div>
  );
}
