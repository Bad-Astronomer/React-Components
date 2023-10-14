import "./card.css";

const Card = (props) => {
    return (
        <div className="card-component">
            <div className="card-image">
                <img src={props.image} alt="" />
            </div>
            <div className="card-hero">
                {props.hero}
            </div>
            <div className="card-subs">
                {props.subs}
            </div>
            <div className="card-button">
                {props.buttonText}
            </div>
        </div>
    )
}

export default Card
