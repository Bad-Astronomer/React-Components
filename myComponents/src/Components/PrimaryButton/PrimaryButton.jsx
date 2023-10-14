import "./primaryButton.css";

const PrimaryButton = ({text = "Primary Button", onClickFunction}) => {
    return (
        <div>
            <button className="primary-button" onClick={() => {onClickFunction()}}>{text}</button>
        </div>
    )
}

export default PrimaryButton
