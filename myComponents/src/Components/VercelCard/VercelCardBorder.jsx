import { useRef, useEffect } from 'react';
import './vercelCard.css';

const VercelCardBorder = () => {
    const cardBorderRef = useRef();

    useEffect(() => {
        const cardBorder = cardBorderRef.current;

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
        <div className="card-border" ref={cardBorderRef}></div>
    )
}

export default VercelCardBorder
