import "./card.css";
import { useState } from "react";

// props = {
//     image: imageURL,
//     hero: headerText,
//     subs: subtitles,
//     buttonText: buttonText,
// }

const defaultProps = {
    image: "/src/Components/Card/testImage.jpg",
    hero: "TEST HERO",
    subs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente.",
    buttonText: "Button",
}

const Button = ({text = "Default Button"}) => {
    return(
        <button className="card-button">{text}</button>
    )
}


const Card = (props = {}) => {
    props.hero ? "" : props = defaultProps;

    const maxWidth = 240;
    const [dimension, setDimension] = useState([0, 0])

    const handleImageLoad = (event) => {
        const { naturalWidth, naturalHeight } = event.target;
        let aspectRatio = naturalHeight / naturalWidth;
        setDimension([ maxWidth * aspectRatio, maxWidth ]);
    }

    return (
        <div className="card-component" style = {{width: dimension[1]}}>
            <div className="card-image">
                <img src={props.image}
                    alt="Image"
                    onLoad={handleImageLoad}
                    height = {dimension[0]}
                    width = {dimension[1]}
                />
            </div>
            <div className="card-hero">
                {props.hero}
            </div>
            <div className="card-subs">
                {props.subs}
            </div>
            <Button text = {props.buttonText} />
        </div>
    )
}

export default Card
