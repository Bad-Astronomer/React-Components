import { useEffect, useRef } from "react";
import "./vercelCard.css";

const VercelCard = () => {
    const cardBorderRef = useRef();

    const cap = (value, min, max) => {
        value = Math.min(value, max);
        value = Math.max(value, min);
        return value;
    }
    
    const normalize = (value ,oldMin, oldMax, newMin, newMax, capToggle = false) => {
        value = (value - oldMin)/(oldMax - oldMin);
        value = (value * (newMax - newMin)) + newMin;
        if(capToggle){
            value = cap(value, newMin, newMax);
        }
        return value;
    }
    
    
    useEffect(() => {
        const cardBorder = cardBorderRef.current;
    
        document.body.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
        
            let cords = cardBorder.getBoundingClientRect();
            let center = [
                (cords.x),
                (cords.y)
            ];
            
            let offset = [
                normalize(clientX - center[0], 0, window.innerWidth/2, -1, 1, true),
                normalize(clientY - center[1], 0, window.innerHeight/2, -1, 1, true)
            ];
            cardBorder.animate(
                {
                    translate: `${offset[0]}px ${offset[1]}px`,
                },
                {duration: 1000, fill: "forwards"})
        })
    }, []);

    return (
        <div className="card">
            <div className="card-border" ref={cardBorderRef}></div>
            <div className="card-bg"></div>
            <div className="card-content">
                <h2>Card Heading</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nobis, sed atque fuga inventore accusamus porro adipisci est placeat expedita laudantium, maiores vitae deserunt blanditiis. Voluptate illo unde, praesentium totam, quia sit quae, tempora distinctio labore adipisci dolorum maiores aspernatur similique vero. Fuga illo consectetur molestias voluptatem a dolores alias!</p>
            </div>
        </div>
    )
}

export default VercelCard;
