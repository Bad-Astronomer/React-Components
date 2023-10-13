import {NavLink} from 'react-router-dom';
import "./homeComponent.css"

const HomeComponent = ({text, onClickFunction}) => {
    return (
    <div className="flex-container">
        <NavLink to="customButton">
            <button className="primary-button" onClick={() => {onClickFunction()}}>{text}</button>
        </NavLink>
    </div>
    )
}

export default HomeComponent
