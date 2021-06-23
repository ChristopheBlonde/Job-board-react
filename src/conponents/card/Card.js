import "../card/Card.css";
const Card = (props) => {
  return (
    <div className={props.className}>
      <h1 className="h1">{props.title}</h1>
      <p className="p">
        <span>{props.contractType} </span>-<span> {props.country} </span>-
        <span> {props.city} </span>
      </p>
    </div>
  );
};

export default Card;
