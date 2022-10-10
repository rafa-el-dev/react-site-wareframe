const Card = ({ light, title, text, imageUrl }) => {
  let classeTheme = light === true ? "card--light" : "card--dark";

  return (
    <div className={`card ${classeTheme}`}>
      <img className="card__image" src={imageUrl} alt="" />
      <div className="card__info">
        <h3 className="card__title title">{title}</h3>
        <p className="card__paragraph">{text}</p>
      </div>
    </div>
  )
}

export default Card