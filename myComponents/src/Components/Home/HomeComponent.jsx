import {NavLink} from 'react-router-dom';
import "./homeComponent.css";


const HomeComponent = () => {
    return (
    <div className="flex-container" style={{flexDirection: "column", gap: "20px"}}>

        <div className="myComponentsHeader">My Components</div>

        
        <NavLink to="primaryButton" style = {{width: "100%"}}>
            <button className="regular-button">Primary Button</button>
        </NavLink>

        <NavLink to="card" style = {{width: "100%"}}>
            <button className="regular-button">Card Component</button>
        </NavLink>

        <NavLink to="follower" style = {{width: "100%"}}>
            <button className="regular-button">Mouse Follower</button>
        </NavLink>

        <NavLink to="vercelCard" style = {{width: "100%"}}>
            <button className="regular-button">Vercel Card</button>
        </NavLink>
        
    </div>
    )
}

export default HomeComponent
