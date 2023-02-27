import "./ActorCard.css";

function ActorCard({ actor }) {
  const { name, image, roles, category } = actor || {};
  return (
    <div
      className="actorCard"
      style={{ backgroundImage: `url(${image?.url})` }}
    >
      <div className="actorCard-content">
        <h2>{name}</h2>
        <div>
          Role(s):
          {roles?.map((role, index) => (
            <p key={index}>{role.character}</p>
          ))}
        </div>
        <p>Category: {category}</p>
      </div>
    </div>
  );
}

export default ActorCard;
